/**
 * The wix-realtime-frontend module contains functionality for publishing messages
 *  on channels that site visitors can subscribe to.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-frontend.html#)
 */
declare module 'wix-realtime-frontend' {
    /**
     * Adds an event handler that runs when a connection or reconnection
     *  occurs.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-frontend.html#onConnected)
     */
    function onConnected(handler: ConnectionHandler): void;
    /**
     * Adds an event handler that runs when a disconnection occurs.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-frontend.html#onDisconnected)
     */
    function onDisconnected(handler: DisconnectionHandler): void;
    /**
     * Adds an event handler that runs when an error occurs.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-frontend.html#onError)
     */
    function onError(handler: ErrorHandler): void;
    /**
     * Subscribes to a channel or channel resource.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-frontend.html#subscribe)
     */
    function subscribe(channel: Channel, handler: MessageHandler): Promise<string>;
    /**
     * Unsubscribes from a channel or channel resource.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-realtime-frontend.html#unsubscribe)
     */
    function unsubscribe(options: UnsubscribeOptions): Promise<void>;
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
         * Channel name. Cannot exceed 140 characters.
         */
        name: string;
        /**
         * ID of a specific channel resource.
         */
        resourceId?: string;
    };
    /**
     * An object representing an error.
     */
    type Error = {
        /**
         * Error code.
         *
         *  One of:
         *
         *  + `1`: Connection error
         *  + `2`: Subscription error (error will also include a channel value)
         *  + `3`: Bad input
         */
        errorCode: number;
        /**
         * Error message.
         */
        message: string;
        /**
         * Channel related to the error.
         */
        channel?: Channel;
    };
    /**
     * An object representing a published message.
     */
    type Message = {
        /**
         * Message payload.
         *  Max: 10kb
         */
        payload: any;
        /**
         * Message publisher, if sent.
         */
        publisher?: Publisher;
    };
    /**
     * An object representing a publisher.
     */
    type Publisher = {
        /**
         * ID of the publisher.
         */
        id: string;
    };
    /**
     * An object containing options to be used when unsubscribing from a
     *  channel or channel resource.
     */
    type UnsubscribeOptions = {
        /**
         * The channel, and optionally the resource, to
         *  unsubscribe from. Use this property when unsubscribing from all subscriptions to a channel
         *  or channel resource.
         */
        channel?: Channel;
        /**
         * ID of the subscription to unsubscribe from. Use this
         *  property when unsubscribing from one of multiple subscriptions to a channel or channel
         *  resource.
         */
        subscriptionId?: string;
    };
    type ConnectionHandler = () => void;
    type DisconnectionHandler = () => void;
    type ErrorHandler = (error: Error) => void;
    type MessageHandler = (message: Message, channel: Channel) => void;
}
