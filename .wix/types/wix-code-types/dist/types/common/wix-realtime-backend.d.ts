/**
 * The wix-realtime module contains functionality for publishing messages
 *  on channels that site visitors can subscribe to and for managing channel permissions.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.html#)
 */
declare module 'wix-realtime-backend' {
    /**
     * Returns the realtime permissions router.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.html#permissionsRouter)
     */
    const permissionsRouter: PermissionsRouter;
    /**
     * Publishes a message to a channel or channel resource.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.html#publish)
     */
    function publish(channel: Channel, payload: any, options?: PublishOptions): Promise<void> & void;
    /**
     * Checks permissions for a subscriber on a channel or channel resource.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.html#realtime_check_permission)
     */
    function realtime_check_permission(channel: Channel, subscriber: Subscriber): Promise<ChannelPermissions> & ChannelPermissions;
    /**
     * An object representing a channel or channel resource.
     *  Site visitors can subscribe to a channel or channel resource to receive the
     *  messages that are published on it. When site visitors subscribe to a channel, they do not
     *  receive messages published to a resource on that same channel. Similarly,
     *  when site visitors subscribe to a channel resource, they do not
     *  receive messages published to that same channel without a specified resource.
     *  Channel resources inherit their parent channel's permissions, unless specified
     *  otherwise.
     */
    type Channel = {
        /**
         * Channel name. Cannot exceed 140 characters. Cannot include spaces or special characters.
         */
        name: string;
        /**
         * ID of a specific channel resource.
         */
        resourceId?: string;
    };
    /**
     * An object containing permission settings for a channel.
     */
    type ChannelPermissions = {
        /**
         * Whether the subscriber has read permissions. Defaults to `true`.
         */
        read?: boolean;
    };
    /**
     * An object containing options for publishing.
     */
    type PublishOptions = {
        /**
         * User IDs of specific users to publish to.
         */
        users?: string[];
        /**
         * Whether to include information about the message publisher.
         *  Defaults to `false`.
         */
        includePublisher?: boolean;
    };
    /**
     * An object representing a channel subscriber.
     */
    type Subscriber = {
        /**
         * The subscriber's user ID.
         */
        id: string;
        /**
         * The type of subscriber.
         *
         *  One of:
         *
         *  + `"Admin"`: Subscriber is the site owner.
         *  + `"Member"`: Subscriber is a logged-in site member.
         *  + `"Visitor"`: Subscriber in not logged in.
         */
        type: string;
    };
    /**
     * A router for defining and checking permissions.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.PermissionsRouter.html#)
     */
    interface PermissionsRouter {
        /**
         * Sets a permissions handler for a specific channel or channel resource.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.PermissionsRouter.html#add)
         */
        add(channel: Channel, handler: PermissionsRouter.PermissionsHandler): Promise<void> & void;
        /**
         * Checks the permissions for a subscriber on a channel or channel resource.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.PermissionsRouter.html#check)
         */
        check(channel: Channel, subscriber: Subscriber): Promise<ChannelPermissions> & ChannelPermissions;
        /**
         * Sets a permissions handler for default permissions.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.PermissionsRouter.html#default)
         */
        default(handler: PermissionsRouter.PermissionsHandler): void;
    }
    /**
     * A router for defining and checking permissions.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-backend.PermissionsRouter.html#)
     */
    namespace PermissionsRouter {
        type PermissionsHandler = (channel: Channel, subscriber: Subscriber) => Promise<ChannelPermissions> | ChannelPermissions;
    }
}
