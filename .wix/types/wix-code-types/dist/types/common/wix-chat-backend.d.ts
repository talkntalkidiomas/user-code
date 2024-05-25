/**
 * The wix-chat-backend module contains functionality for working with the [Wix Chat](https://support.wix.com/en/article/about-wix-chat) application from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-chat-backend.html#)
 */
declare module 'wix-chat-backend' {
    /**
     * Sends a chat message from the backend.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-chat-backend.html#sendMessage)
     */
    function sendMessage(messageInfo: MessageInfo): Promise<void>;
    /**
     * An object representing a chat message to be sent.
     */
    type MessageInfo = {
        /**
         * The content of the message.
         */
        messageText: string;
        /**
         * The ID of the channel to send the message to. Currently only IDs of business channels are supported.
         */
        channelId: string;
        /**
         * An object representing additional contextual message information included in a chat message. The site visitor does not see the metadata.
         */
        metadata?: any;
        /**
         * Indicates whether the message is sent from the visitor to the business. If `sendAsVisitor` is `true`, the message is sent from the site visitor to the business. If `sendAsVisitor` is `undefined` or `false`, the message is sent from the business to the site visitor. The default is `undefined`.
         */
        sendAsVisitor?: boolean;
    };
    /**
     * Events that are fired by actions relating to chat messages.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-chat-backend.Events.html#)
     */
    interface Events {
        /**
         * An event that fires when a chat message is sent to or from the business.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-chat-backend.Events.html#onMessage)
         */
        onMessage(event: Events.SendMessageEvent): void;
    }
    /**
     * Events that are fired by actions relating to chat messages.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-chat-backend.Events.html#)
     */
    namespace Events {
        /**
         * The content of a chat message.
         */
        type MessagePayload = {
            /**
             * Text of the chat message.
             */
            text: string;
        };
        /**
         * An object representing a chat message that was sent.
         */
        type SendMessageEvent = {
            /**
             * ID of the channel on which the message was sent.
             */
            channelId: string;
            /**
             * Direction of the message.
             * One of the following:
             *
             *  + `"VisitorToBusiness"`: From a site visitor to the business.
             *  + `"BusinessToVisitor"`: From the business to a site visitor.
             */
            direction: string;
            /**
             * Type of message. Currently only `TEXT` is supported.
             */
            type: string;
            /**
             * First 250 characters of the chat message. Currently only text is included in the summary.
             */
            summary: string;
            /**
             * The sender's member ID. For a message sent from the site's business, the site owner's member ID.
             */
            participantId: string;
            /**
             * Date and time the message was sent.
             */
            createdAt: Date;
            /**
             * Content of the message.
             * Currently only content of type text is included in the `payload`.
             */
            payload: Events.MessagePayload;
            /**
             * An object representing additional contextual message information included in a chat message. The site visitor does not see the metadata.
             */
            metadata?: any;
        };
    }
}
