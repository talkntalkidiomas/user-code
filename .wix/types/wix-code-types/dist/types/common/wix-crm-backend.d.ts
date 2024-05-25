/**
 * The wix-crm-backend module contains functionality for working with
 *  [your site's contacts](https://support.wix.com/en/article/about-your-contact-list)
 *  from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#)
 */
declare module 'wix-crm-backend' {
    /**
     * The Contacts API is used to manage a site's contacts.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#contacts)
     */
    const contacts: Contacts;
    /**
     * The Notifications API is used to send notifications to the site owner and contributors.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#notifications)
     */
    const notifications: Notifications;
    /**
     * **Deprecated.**
     *  This submodule will continue to work, but a newer version is
     * available at [wix-crm.v2.Tasks](https://www.wix.com/velo/reference/wix-crm-v2/tasks/introduction).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#tasks)
     */
    const tasks: Tasks;
    /**
     * The Triggered Emails API is used to send triggered emails to your site's contacts and members.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#triggeredEmails)
     */
    const triggeredEmails: TriggeredEmails;
    /**
     * * **Deprecated.**
     * The Workflows API will be discontinued in the upcoming months. Our team is
     * working to provide alternatives, and we'll provide timely updates before
     * implementing any changes. We understand that this transition might present challenges,
     * and we appreciate your patience and understanding.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#workflows)
     */
    const workflows: Workflows;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-crm-backend.contacts.createContact()](https://www.wix.com/velo/reference/wix-crm-backend/contacts/createcontact).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#createContact)
     */
    function createContact(contactInfo: ContactInfo): Promise<string>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-crm-backend.contacts.deleteContact()](https://www.wix.com/velo/reference/wix-crm-backend/contacts/deletecontact).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#deleteContact)
     */
    function deleteContact(contactId: string, options: DeleteOptions): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-crm-backend.triggeredEmails.emailContact()](https://www.wix.com/velo/reference/wix-crm-backend/triggeredemails/emailcontact).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#emailContact)
     */
    function emailContact(emailId: string, toContact: string, options?: TriggeredEmails.TriggeredEmailOptions): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-crm-backend.contacts.getContact()](https://www.wix.com/velo/reference/wix-crm-backend/contacts/getcontact).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#getContactById)
     */
    function getContactById(contactId: string): Promise<ContactInfo>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-crm-backend.contacts.updateContact()](https://www.wix.com/velo/reference/wix-crm-backend/contacts/updatecontact).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.html#updateContact)
     */
    function updateContact(contactId: string, contactInfo: ContactInfo): Promise<void>;
    /**
     * An object that contains information about a site contact.
     */
    type ContactInfo = {
        /**
         * Contact's first name.
         */
        firstName?: string;
        /**
         * Contact's last name.
         */
        lastName?: string;
        /**
         * Contact's image source.
         */
        picture?: string;
        /**
         * List of contact's email addresses. When
         *  creating a contact, if no phone number is
         *  provided, at least one email address must be provided.
         */
        emails?: string[];
        /**
         * Email address the contact who is also
         *  a member uses to log into the system.
         */
        loginEmail?: string;
        /**
         * List of contact's phone numbers. When
         *  creating a contact, if no email is
         *  provided, at least one phone number must be provided.
         */
        phones?: string[];
        /**
         * List of contact's labels. [Labels](https://support.wix.com/en/article/creating-contact-labels)
         *  are used to organize contacts. When setting the `labels` property, you can
         *  only list labels that already exist in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         */
        labels?: string[];
        /**
         * Any
         *  number of custom fields. [Custom fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
         *  are used to store additional information about your site's contacts. When
         *  setting a custom field, use key:value pairs, where the key matches the display names
         *  in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         *  You can only set values for custom fields that already exist in the Contacts
         *  application.
         */
        customFields?: string | number | Date;
    };
    /**
     * An object that contains contact deletion options.
     */
    type DeleteOptions = {
        /**
         * Whether to perform the deletion when the contact is also a member. Defaults to `false`.
         */
        deleteMembers: boolean;
    };
    /**
     * The Contacts API is used to manage a site's contacts.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#)
     */
    interface Contacts {
        /**
         * Appends `contactInfo` to an existing contact or creates a new contact if it doesn't already exist.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#appendOrCreateContact)
         */
        appendOrCreateContact(contactInfo: Contacts.ContactInfo): Promise<Contacts.ContactIdentification>;
        /**
         * Creates a new contact.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#createContact)
         */
        createContact(contactInfo: Contacts.ContactInfo, options?: Contacts.Options): Promise<Contacts.Contact>;
        /**
         * Deletes a contact who is not a site member or contributor.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#deleteContact)
         */
        deleteContact(contactId: string, options?: Contacts.AuthOptions): Promise<void>;
        /**
         * Deletes an extended field.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#deleteExtendedField)
         */
        deleteExtendedField(key: string, options?: Contacts.AuthOptions): Promise<void>;
        /**
         * Deletes a label from the site and removes it from contacts it applies to.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#deleteLabel)
         */
        deleteLabel(key: string, options?: Contacts.AuthOptions): Promise<void>;
        /**
         * Retrieves a custom field with a given name, or creates one if it doesn't exist.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#findOrCreateExtendedField)
         */
        findOrCreateExtendedField(extendedFieldInfo: Contacts.ExtendedFieldInfo, options?: Contacts.AuthOptions): Promise<Contacts.FoundOrCreatedExtendedField>;
        /**
         * Retrieves a label with a given name, or creates one if it doesn't exist.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#findOrCreateLabel)
         */
        findOrCreateLabel(displayName: string, options?: Contacts.AuthOptions): Promise<Contacts.FoundOrCreatedLabel>;
        /**
         * Retrieves a contact.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#getContact)
         */
        getContact(contactId: string, options?: Contacts.AuthOptions): Promise<Contacts.Contact>;
        /**
         * Retrieves an extended field.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#getExtendedField)
         */
        getExtendedField(key: string, options?: Contacts.AuthOptions): Promise<Contacts.ExtendedField>;
        /**
         * Retrieves a label.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#getLabel)
         */
        getLabel(key: string, options?: Contacts.AuthOptions): Promise<Contacts.Label>;
        /**
         * Adds labels to a contact.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#labelContact)
         */
        labelContact(contactId: string, labelKeys: string[], options?: Contacts.AuthOptions): Promise<Contacts.Contact>;
        /**
         * Creates a query to retrieve a list of contacts.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#queryContacts)
         */
        queryContacts(): Contacts.ContactsQueryBuilder;
        /**
         * Creates a query to retrieve a list of extended fields.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#queryExtendedFields)
         */
        queryExtendedFields(): Contacts.ExtendedFieldsQueryBuilder;
        /**
         * Creates a query to retrieve a list of labels.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#queryLabels)
         */
        queryLabels(): Contacts.LabelsQueryBuilder;
        /**
         *  Renames an extended field.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#renameExtendedField)
         */
        renameExtendedField(key: string, displayName: string, options?: Contacts.AuthOptions): Promise<Contacts.ExtendedField>;
        /**
         *  Renames a label.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#renameLabel)
         */
        renameLabel(key: string, displayName: string, options?: Contacts.AuthOptions): Promise<Contacts.Label>;
        /**
         * Removes labels from a contact.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#unlabelContact)
         */
        unlabelContact(contactId: string, labelKeys: string[], options?: Contacts.AuthOptions): Promise<Contacts.Contact>;
        /**
         * Updates a contact's properties.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#updateContact)
         */
        updateContact(identifiers: Contacts.Identifiers, contactInfo: Contacts.ContactInfo, options?: Contacts.Options): Promise<Contacts.Contact>;
    }
    /**
     * Events that are fired by actions relating to site contacts.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#)
     */
    interface Events {
        /**
         * **Deprecated.**
         * This event will continue to work until June 30, 2024.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#onCardCreated)
         */
        onCardCreated(event: Events.CardCreatedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until June 30, 2024.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#onCardMoved)
         */
        onCardMoved(event: Events.CardMovedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until June 30, 2024.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#onCardRestored)
         */
        onCardRestored(event: Events.CardRestoredEvent): void;
        /**
         * An event that triggers when a new contact is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#onContactCreated)
         */
        onContactCreated(event: Events.ContactCreatedEvent): void;
        /**
         * An event that triggers when a contact is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#onContactDeleted)
         */
        onContactDeleted(event: Events.ContactDeletedEvent): void;
        /**
         * An event that triggers when one or more source contacts are merged into a target contact.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#onContactMerged)
         */
        onContactMerged(event: Events.ContactMergedEvent): void;
        /**
         * An event that triggers when a contact is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#onContactUpdated)
         */
        onContactUpdated(event: Events.ContactUpdatedEvent): void;
        /**
         * An event that triggers when a site visitor submits a Wix Form.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#onFormSubmit)
         */
        onFormSubmit(event: Events.FormSubmitEvent): void;
    }
    /**
     * The Notifications API is used to send notifications to the site owner and contributors.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Notifications.html#)
     */
    interface Notifications {
        /**
         * Sends a notification.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Notifications.html#notify)
         */
        notify(body: string, channels: string[], options?: Notifications.NotificationOptions): Promise<void>;
    }
    /**
     * **Deprecated.**
     *  The Tasks submodule will continue to work, but a newer version is
     * available at [wix-crm.v2.Tasks](https://www.wix.com/velo/reference/wix-crm-v2/tasks/introduction).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Tasks.html#)
     */
    interface Tasks {
        /**
         * **Deprecated.**
         * This function is deprecated but will continue to work.
         * To set a task as completed, see the [wix-crm.v2.Tasks.updateTask()](https://www.wix.com/velo/reference/wix-crm-v2/tasks/updatetask) function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Tasks.html#completeTask)
         */
        completeTask(taskId: string): Promise<string>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is
         * available at [wix-crm.v2.Tasks.createTask()](https://www.wix.com/velo/reference/wix-crm-v2/tasks/createtask).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Tasks.html#createTask)
         */
        createTask(taskInfo: Tasks.TaskInfo): Promise<string>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is
         * available at [wix-crm.v2.Tasks.getTask()](https://www.wix.com/velo/reference/wix-crm-v2/tasks/gettask).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Tasks.html#getTask)
         */
        getTask(taskId: string): Promise<Tasks.Task>;
        /**
         * This function will continue to work, but a newer version is
         * available at [wix-crm.v2.Tasks.deleteTask()](https://www.wix.com/velo/reference/wix-crm-v2/tasks/deletetask).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Tasks.html#removeTask)
         */
        removeTask(taskId: string): Promise<string>;
        /**
         * **Deprecated.**
         * This function is deprecated but will continue to work.
         * To reset a task, see the [wix-crm.v2.Tasks.updateTask()](https://www.wix.com/velo/reference/wix-crm-v2/tasks/updatetask) function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Tasks.html#resetTask)
         */
        resetTask(taskId: string): Promise<string>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is
         * available at [wix-crm.v2.Tasks.updateTask()](https://www.wix.com/velo/reference/wix-crm-v2/tasks/updatetask).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Tasks.html#updateTaskFields)
         */
        updateTaskFields(taskId: string, taskInfo: Tasks.TaskInfo): Promise<string>;
    }
    /**
     * The Triggered Emails API is used to send triggered emails to your site's contacts and members.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.TriggeredEmails.html#)
     */
    interface TriggeredEmails {
        /**
         * Sends a triggered email to a contact, unless that contact is marked as unsubscribed..
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.TriggeredEmails.html#emailContact)
         */
        emailContact(emailId: string, contactId: string, options?: TriggeredEmails.TriggeredEmailOptions): Promise<void>;
        /**
         * Sends a triggered email to a site member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.TriggeredEmails.html#emailMember)
         */
        emailMember(emailId: string, memberId: string, options?: TriggeredEmails.TriggeredEmailOptions): Promise<void>;
    }
    /**
     * **Deprecated.**
     * The Workflows API will be discontinued in the upcoming months. Our team is
     * working to provide alternatives, and we'll provide timely updates before
     * implementing any changes. We understand that this transition might present challenges,
     * and we appreciate your patience and understanding.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#)
     */
    interface Workflows {
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#archiveCard)
         */
        archiveCard(cardId: string): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#createCard)
         */
        createCard(workflowId: string, phaseId: string, card: Workflows.CreateCardRequest, position?: number): Promise<string>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#createPhase)
         */
        createPhase(workflowId: string, phaseInfo: Workflows.CreatePhaseRequest, position?: number): Promise<string>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#createWorkflow)
         */
        createWorkflow(workflowInfo: Workflows.CreateWorkflowRequest): Promise<string>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#deleteCard)
         */
        deleteCard(cardId: string): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#deletePhase)
         */
        deletePhase(phaseId: string): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#deleteWorkflow)
         */
        deleteWorkflow(workflowId: string): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#getCard)
         */
        getCard(cardId: string): Promise<Workflows.Card>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#getPhaseInfo)
         */
        getPhaseInfo(phaseId: string): Promise<Workflows.Phase>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#getWorkflowInfo)
         */
        getWorkflowInfo(workflowId: string): Promise<Workflows.Workflow>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#listCards)
         */
        listCards(workflowId: string, options: Workflows.ListCardOptions): Promise<Workflows.CardList>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#listPhasesInfo)
         */
        listPhasesInfo(workflowId: string, options?: Workflows.ListOptions): Promise<Workflows.PhaseList>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#listWorkflowsInfo)
         */
        listWorkflowsInfo(options?: Workflows.ListOptions): Promise<Workflows.WorkflowList>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#moveCard)
         */
        moveCard(cardId: string, options: Workflows.MoveCardOptions): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#movePhase)
         */
        movePhase(phaseId: string, options: Workflows.MovePhaseOptions): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#restoreCard)
         */
        restoreCard(cardId: string, options: Workflows.MoveCardOptions): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#updateCardFields)
         */
        updateCardFields(cardId: string, cardInfo: Workflows.UpdateCardRequest): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#updatePhaseFields)
         */
        updatePhaseFields(phaseId: string, phaseInfo: Workflows.UpdatePhaseRequest): Promise<void>;
        /**
         * **Deprecated.**
         * This function is being discontinued in the upcoming months. We are working to provide alternatives,
         * and we'll provide timely updates before implementing any changes. We understand that this
         * transition might present challenges, and we appreciate your patience and understanding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#updateWorkflowFields)
         */
        updateWorkflowFields(workflowId: string, workflowInfo: Workflows.UpdateWorkflowRequest): Promise<void>;
    }
    /**
     * The Contacts API is used to manage a site's contacts.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.html#)
     */
    namespace Contacts {
        type Address = {
            /**
             * Street address ID.
             */
            _id: string;
            /**
             *
             *
             *
             * Address type.
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"HOME"`
             * - `"WORK"`
             * - `"BILLING"`
             * - `"SHIPPING"`
             *
             */
            tag: string;
            /**
             * Street address.
             */
            address: Contacts.AddressDetails;
        };
        /**
         * Street address.
         */
        type AddressDetails = {
            /**
             * Main address line, usually street and number, as free text.
             */
            addressLine1?: string;
            /**
             * Street address object, with number and name in separate fields.
             */
            streetAddress?: Contacts.StreetAddressInfo;
            /**
             * Human-readable address string.
             *  If not provided, the value is generated from the available address data.
             */
            formatted?: string;
            /**
             * Free text providing more detailed address information,
             *  such as apartment, suite, or floor.
             */
            addressLine2?: string;
            /**
             * Coordinates of the physical address.
             */
            location?: Contacts.AddressLocation;
            /**
             * City name.
             */
            city?: string;
            /**
             * Code for a subdivision (such as state, prefecture, or province) in an
             *  [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
             */
            subdivision?: string;
            /**
             * 2-letter country code in an
             *  [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
             */
            country?: string;
            /**
             * Postal or zip code.
             */
            postalCode?: string;
        };
        type AddressInfo = {
            /**
             *
             *
             *
             * Address type.
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"HOME"`
             * - `"WORK"`
             * - `"BILLING"`
             * - `"SHIPPING"`
             *
             */
            tag: string;
            /**
             * Street address.
             */
            address: Contacts.AddressDetails;
        };
        /**
         * Coordinates of the physical address.
         */
        type AddressLocation = {
            /**
             * Address's latitude.
             */
            latitude?: number;
            /**
             * Address's longitude.
             */
            longitude?: number;
        };
        /**
         * Authorization options.
         */
        type AuthOptions = {
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
        };
        /**
         * Contact.
         */
        type Contact = {
            /**
             * Contact ID.
             */
            _id: string;
            /**
             * Revision number, which increments by 1 each time the contact is updated.
             *  To prevent conflicting changes,
             *  the existing `revision` must be used when updating a contact.
             */
            revision: number;
            /**
             * Details about the contact's source.
             */
            source: Contacts.Source;
            /**
             * Date and time the contact was created.
             */
            _createdDate: Date;
            /**
             * Date and time the contact was last updated.
             */
            _updatedDate: Date;
            /**
             * Details about the contact's last action in the site.
             */
            lastActivity: Contacts.LastActivity;
            /**
             * Contact's primary phone and email.
             */
            primaryInfo?: Contacts.PrimaryInfo;
            /**
             * Contact's details.
             */
            info: Contacts.Info;
        };
        type ContactIdentification = {
            /**
             * ID of the contact that was found or created.
             */
            contactId: string;
            /**
             * Identity type of the returned contact.
             *
             *
             *
             *
             * One of:
             *
             * - `"CONTACT"`: The returned contact ID belongs to a new or existing contact.
             * - `"MEMBER"`: The returned contact ID belongs to the currently logged-in site member.
             * - `"NOT_AUTHENTICATED_MEMBER"`: The returned contact ID belongs to a site member who is not currently logged in.
             *
             */
            identityType: string;
        };
        /**
         * Contact's information.
         */
        type ContactInfo = {
            /**
             * Contact's first and last name.
             */
            name?: Contacts.Name;
            /**
             * Contact's company name.
             */
            company?: string;
            /**
             * Contact's job title.
             *  Corresponds to the **Position** field in the Dashboard.
             */
            jobTitle?: string;
            /**
             * Contact's locale, formatted as an
             *  [IETF BCP 47 language tag](https://tools.ietf.org/html/rfc5646).
             *  Typically, this is a lowercase 2-letter language code,
             *  followed by a hyphen,
             *  followed by an uppercase 2-letter country code.
             *
             *  For example, German from Germany is formatted as `de-DE`,
             *  and U.S. English is formatted as `en-US`.
             */
            locale?: string;
            /**
             * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
             *
             *  Example: `"2020-03-15"` for March 15, 2020.
             */
            birthdate?: string;
            /**
             * **Deprecated.** Use `profilePicture` instead.
             */
            picture?: Contacts.Picture;
            /**
             * List of up to 50 email addresses.
             */
            emails?: Contacts.EmailInfo[];
            /**
             * List of up to 50 phone numbers.
             */
            phones?: Contacts.PhoneInfo[];
            /**
             * List of up to 50 addresses.
             */
            addresses?: Contacts.AddressInfo[];
            /**
             * List of contact label keys.
             * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
             * help categorize contacts.
             *
             *
             *
             *
             * Label keys must exist to be added to the contact.
             * Contact labels can be created or retrieved with
             * [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
             * or
             * [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
             *
             */
            labelKeys?: string[];
            /**
             * Set of key-value pairs.
             *
             *
             *
             * Contact's
             * [extended fields](https://www.wix.com/velo/reference/wix-crm-v2/extendedfields/introduction),
             * which allow you to store additional information about your contacts.
             *
             * To view or create extended fields, use
             * [`findOrCreateExtendedField()`](wix-crm-backend/contacts/findorcreateextendedfield),
             * [`getExtendedField()`](wix-crm-backend/contacts/getextendedfield), or
             * [`queryExtendedFields()`](wix-crm-backend/contacts/queryextendedfields).
             *
             */
            extendedFields?: any;
            /**
             * Contact's profile picture URL.
             */
            profilePicture?: string;
        };
        /**
         * Contact's profile picture.
         */
        type ContactPicture = {
            /**
             * Image source. Can be either a Media Manager URL or external URL.
             */
            image: string;
            /**
             * Indicates whether the image is retrieved from Wix Media
             * or an external provider.
             *
             *
             *
             *
             * One of:
             *
             * - `"EXTERNAL"`: The image is retrieved from an external provider.
             * - `"WIX_MEDIA"`: The image is retrieved from Wix Media.
             *
             */
            imageProvider: string;
        };
        type Email = {
            /**
             * Email ID.
             */
            _id: string;
            /**
             * Email type.
             *
             *
             *
             *
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"MAIN"`
             * - `"HOME"`
             * - `"WORK"`
             *
             */
            tag: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Indicates whether this is the contact's primary email address.
             *  When changing `primary` to `true` for an email,
             *  the contact's other emails become `false`.
             */
            primary: boolean;
        };
        type EmailInfo = {
            /**
             * Email type.
             *
             *
             *
             *
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"MAIN"`
             * - `"HOME"`
             * - `"WORK"`
             *
             */
            tag?: string;
            /**
             * Email address.
             */
            email?: string;
            /**
             * Indicates whether this is the contact's primary email address.
             *  When changing `primary` to `true` for an email,
             *  the contact's other emails become `false`.
             */
            primary?: boolean;
        };
        /**
         * Extended field that was found or created.
         */
        type ExtendedField = {
            /**
             * Extended field ID.
             *
             * When accessing contact data,
             * extended field data is available at `extendedFields[key]`.
             * For example, if the key is "custom.notes",
             * the value can be accessed at `extendedFields["custom.notes"]`.
             *
             * `key` is generated when the extended field is created
             * and cannot be modified, even if `displayName` changes.
             */
            key: string;
            /**
             * Extended field display name shown in the Contact List.
             */
            displayName: string;
            /**
             * Type of data the field holds.
             *
             *
             *
             *
             * One of:
             *
             * - `"TEXT"`: Accepts strings.
             * - `"URL"`: Accepts web addresses. Prepends `https://` if no protocol is included.
             * - `"DATE"`: Accepts dates formatted as `"YYYY-MM-DD"`.
             * - `"NUMBER"`: Accepts floats.
             *
             */
            dataType: string;
            /**
             *
             *
             *
             * Indicates whether the extended field is a
             * [system field or custom field](wix-crm-backend/contacts/introduction#about-extended-fields).
             *
             * One of:
             *
             * - `"SYSTEM"`: The field is a system field managed by Wix. System fields cannot be modified by 3rd-party apps or site contributors.
             * - `"USER_DEFINED"`: The field is a custom field and can be modified by 3rd-party apps or site contributors.
             *
             */
            fieldType: string;
            /**
             * Date and time the field was created.
             */
            _createdDate: Date;
            /**
             * Date and time the field was last updated.
             */
            _updatedDate: Date;
            /**
             *
             *
             *
             * Extended field [namespace](wix-crm-backend/contacts/introduction#the-namespace-and-key-properties-in-labels-and-extended-fields).
             *
             *
             * Extended fields created by site contributors or 3rd-party apps
             * are automatically assigned to the `custom` namespace.
             */
            namespace: string;
            /**
             * Field description, if the field is a system field.
             */
            description: string;
        };
        /**
         * Custom field to find or create.
         */
        type ExtendedFieldInfo = {
            /**
             * Display name to find or create.
             *
             *  If an existing custom field is an exact match
             *  for the specified `displayName`,
             *  the existing field is returned.
             *  If not, a new field is created and returned.
             */
            displayName: string;
            /**
             * Type of data the field holds.
             * Ignored if an existing field is an exact match
             * for the specified display name.
             *
             *
             *
             *
             * One of:
             *
             * - `"TEXT"`: Accepts strings.
             * - `"URL"`: Accepts web addresses. Prepends `https://` if no protocol is included.
             * - `"DATE"`: Accepts dates formatted as `"YYYY-MM-DD"`.
             * - `"NUMBER"`: Accepts floats.
             *
             */
            dataType?: string;
        };
        /**
         * List of extended fields.
         */
        type ExtendedFieldList = {
            /**
             * List of extended fields.
             */
            items: Contacts.ExtendedField[];
            /**
             * Metadata for the page of results.
             */
            pagingMetadata: Contacts.PagingMetadata;
        };
        /**
         * Extended field that was found or created.
         */
        type FoundOrCreatedExtendedField = {
            /**
             * Extended field that was found or created.
             */
            extendedField: Contacts.ExtendedField;
            /**
             * Indicates whether the extended field was just created or already existed.
             *
             *  If the field was just created, returns `true`.
             *  If it already existed, returns `false`.
             */
            newExtendedField: boolean;
        };
        /**
         * Label that was found or created.
         */
        type FoundOrCreatedLabel = {
            /**
             * Label that was found or created.
             */
            label: Contacts.Label;
            /**
             * Indicates whether the label was just created or already existed.
             *
             *  If the label was just created, returns `true`.
             *  If it already existed, returns `false`.
             */
            newLabel: boolean;
        };
        type Identifiers = {
            /**
             * ID of the contact to update.
             */
            contactId: string;
            /**
             * Revision number.
             *  When updating, include the existing `revision`
             *  to prevent conflicting updates.
             */
            revision: number;
        };
        /**
         * Contact's details.
         */
        type Info = {
            /**
             * Contact's first and last name.
             */
            name?: Contacts.Name;
            /**
             * Contact's company name.
             */
            company?: string;
            /**
             * Contact's job title.
             *  Corresponds to the **Position** field in the Dashboard.
             */
            jobTitle?: string;
            /**
             * Contact's locale, formatted as an
             *  [IETF BCP 47 language tag](https://tools.ietf.org/html/rfc5646).
             *  Typically, this is a lowercase 2-letter language code,
             *  followed by a hyphen,
             *  followed by an uppercase 2-letter country code.
             *
             *  For example, German from Germany is formatted as `de-DE`,
             *  and U.S. English is formatted as `en-US`.
             */
            locale?: string;
            /**
             * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
             *
             *  Example: `"2020-03-15"` for March 15, 2020.
             */
            birthdate?: string;
            /**
             * **Deprecated.** Use `profilePicture` instead.
             */
            picture: Contacts.Picture;
            /**
             * List of up to 50 email addresses.
             */
            emails?: Contacts.Email[];
            /**
             * List of up to 50 phone numbers.
             */
            phones?: Contacts.Phone[];
            /**
             * List of up to 50 addresses.
             */
            addresses?: Contacts.Address[];
            /**
             * List of contact label keys.
             * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
             * help categorize contacts.
             *
             *
             *
             *
             * Label keys must exist to be added to the contact.
             * Contact labels can be created or retrieved with
             * [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
             * or
             * [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
             *
             */
            labelKeys?: string[];
            /**
             * Set of key-value pairs.
             *
             *
             *
             * Contact's
             * [extended fields](https://www.wix.com/velo/reference/wix-crm-v2/extendedfields/introduction),
             * which allow you to store additional information about your contacts.
             *
             * To view or create extended fields, use
             * [`findOrCreateExtendedField()`](wix-crm-backend/contacts/findorcreateextendedfield),
             * [`getExtendedField()`](wix-crm-backend/contacts/getextendedfield), or
             * [`queryExtendedFields()`](wix-crm-backend/contacts/queryextendedfields).
             *
             */
            extendedFields: any;
            /**
             * Contact's profile picture URL.
             */
            profilePicture?: string;
        };
        /**
         * Label that was found or created.
         */
        type Label = {
            /**
             * Label key.
             *
             * `key` is generated when the label is created
             * and cannot be modified, even if `displayName` changes.
             */
            key: string;
            /**
             * Label display name shown in the Dashboard.
             */
            displayName: string;
            /**
             * Label type.
             *
             *
             *
             *
             * One of:
             *
             * - `"SYSTEM"`: The label is a predefined system label for the Contact List.
             * - `"USER_DEFINED"`: The label was created by a site contributor or app.
             * - `"WIX_APP_DEFINED"`: The label was created by a Wix app.
             *
             */
            labelType: string;
            /**
             * Date and time the label was created.
             */
            _createdDate: Date;
            /**
             * Date and time the label was last updated.
             */
            _updatedDate: Date;
            /**
             *
             *
             *
             * Label [namespace](wix-crm-backend/contacts/introduction#the-namespace-and-key-properties-in-labels-and-extended-fields).
             *
             *
             * Labels created by site contributors or 3rd-party apps
             * are automatically assigned to the `custom` namespace.
             */
            namespace: string;
        };
        /**
         * List of labels.
         */
        type LabelList = {
            /**
             * List of labels.
             */
            items: Contacts.Label[];
            /**
             * Metadata for the page of results.
             */
            pagingMetadata: Contacts.PagingMetadata;
        };
        /**
         * Details about the contact's last action in the site.
         */
        type LastActivity = {
            /**
             * Date and time of the last action.
             */
            activityDate: Date;
            /**
             * Contact's last action in the site.
             *
             *
             *
             *
             * Some possible values:
             * `"GENERAL"`, `"CONTACT_CREATED"`, `"MEMBER_LOGIN"`, `"MEMBER_REGISTER"`,
             * `"MEMBER_STATUS_CHANGED"`, `"FORM_SUBMITTED"`, `"INBOX_FORM_SUBMITTED"`,
             * `"INBOX_PAYMENT_REQUEST_PAID"`, `"INBOX_MESSAGE_TO_CUSTOMER"`,
             * `"INBOX_MESSAGE_FROM_CUSTOMER"`, `"NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED"`,
             * `"NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE"`, `"ECOM_PURCHASE"`,
             * `"ECOM_CART_ABANDON"`, `"ECOM_CHECKOUT_BUYER"`, `"BOOKINGS_APPOINTMENT"`,
             * `"HOTELS_RESERVATION"`, `"HOTELS_PURCHASE"`, `"HOTELS_CONFIRMATION"`,
             * `"HOTELS_CANCEL"`, `"VIDEO_PURCHASE"`, `"VIDEO_RENT"`,
             * `"CASHIER_BUTTON_PURCHASE"`, `"ARENA_NEW_LEAD"`, `"EVENTS_RSVP"`,
             * `"INVOICE_PAY"`, `"INVOICE_OVERDUE"`, `"PRICE_QUOTE_ACCEPT"`,
             * `"PRICE_QUOTE_EXPIRE"`, `"RESTAURANTS_ORDER"`, `"RESTAURANTS_RESERVATION"`,
             * `"SHOUTOUT_OPEN"`, `"SHOUTOUT_CLICK"`, `"CONTACT_MERGED"`.
             *
             */
            activityType: string;
        };
        /**
         * Paging options.
         */
        type ListOptions = {
            /**
             * Number of items to return.
             *
             *  Defaults to `100`.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             *
             *  Defaults to `0`.
             */
            skip?: number;
            /**
             * Sorting options.
             */
            sort?: Contacts.SortingOptions;
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
        };
        /**
         * Contact's first and last name.
         */
        type Name = {
            /**
             * Contact's first name.
             */
            first?: string;
            /**
             * Contact's last name.
             */
            last?: string;
        };
        /**
         * Contact creation options.
         */
        type Options = {
            /**
             * Controls whether the call will succeed
             * if the new contact information contains an email already used by another contact.
             *
             * If set to `true`,
             * the call will succeed even if an email address is used by another contact.
             * If set to `false`,
             * the call will fail if an email address is used by another contact.
             *
             * Defaults to `false`.
             */
            allowDuplicates?: boolean;
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
        };
        /**
         * Metadata for the page of results.
         */
        type PagingMetadata = {
            /**
             * Number of items returned.
             */
            length: number;
            /**
             * Number of items that matched the query.
             */
            totalCount: number;
            /**
             * Indicates if `total` calculation timed out before the response was sent.
             *  Typically this happens if there is a large set of results.
             */
            tooManyToCount: boolean;
        };
        type Phone = {
            /**
             * Phone ID.
             */
            _id: string;
            /**
             * Phone type.
             *
             *
             *
             *
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"MAIN"`
             * - `"HOME"`
             * - `"MOBILE"`
             * - `"WORK"`
             * - `"FAX"`
             *
             */
            tag: string;
            /**
             * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
             */
            countryCode?: string;
            /**
             * Phone number.
             */
            phone: string;
            /**
             * [ITU E.164-formatted](https://www.itu.int/rec/T-REC-E.164/)
             *  phone number.
             *  Automatically generated using `phone` and `countryCode`,
             *  as long as both of those values are valid.
             */
            e164Phone?: string;
            /**
             * Whether this is the contact's primary phone number.
             *  When changing `primary` to `true` for a phone,
             *  the contact's other phones become `false`.
             */
            primary: boolean;
        };
        type PhoneInfo = {
            /**
             * Phone type.
             *
             *
             *
             *
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"MAIN"`
             * - `"HOME"`
             * - `"MOBILE"`
             * - `"WORK"`
             * - `"FAX"`
             *
             */
            tag?: string;
            /**
             * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
             */
            countryCode?: string;
            /**
             * Phone number.
             */
            phone?: string;
            /**
             * Whether this is the contact's primary phone number.
             *  When changing `primary` to `true` for a phone,
             *  the contact's other phones become `false`.
             */
            primary?: boolean;
        };
        /**
         * todo
         */
        type Picture = {
            /**
             * **Deprecated.** Use `profilePicture` instead.
             */
            image?: string;
            /**
             * **Deprecated.**
             */
            imageProvider?: string;
        };
        /**
         * Contact's primary phone and email.
         */
        type PrimaryInfo = {
            /**
             * Primary email address.
             *
             *
             *
             *
             * This property reflects the email address in `contactInfo.emails`
             * where `primary` is `true`.
             *
             */
            email?: string;
            /**
             * Primary phone number.
             *
             *
             *
             *
             * This property reflects the phone number in `contactInfo.phones`
             * where `primary` is `true`.
             *
             */
            phone?: string;
        };
        /**
         * Sorting options.
         */
        type SortingOptions = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             *
             *
             *
             * One of:
             *
             * - `"ASC"`: Ascending order
             * - `"DESC"`: Descending order
             *
             * Defaults to `"ASC"`.
             *
             */
            order?: string;
        };
        /**
         * Details about the contact's source.
         */
        type Source = {
            /**
             * Source type.
             *
             *
             * Some possible values:
             * `"OTHER"`, `"ADMIN"`, `"WIX_APP"`, `"IMPORT"`, `"THIRD_PARTY"`,
             * `"WIX_BOOKINGS"`, `"WIX_CHAT"`, `"WIX_EMAIL_MARKETING"`, `"WIX_EVENTS"`,
             * `"WIX_FORMS"`, `"WIX_GROUPS"`, `"WIX_HOTELS"`, `"WIX_MARKET_PLACE"`,
             * `"WIX_MUSIC"`, `"WIX_RESTAURANTS"`, `"WIX_SITE_MEMBERS"`, `"WIX_STORES"`.
             *
             */
            sourceType: string;
            /**
             * App ID, if the contact was created by an app.
             */
            appId: string;
        };
        /**
         * Street address object, with number and name in separate fields.
         */
        type StreetAddress = {
            /**
             * Street number.
             */
            number: string;
            /**
             * Street name.
             */
            name: string;
        };
        /**
         * Street address object, with number and name in separate fields.
         */
        type StreetAddressInfo = {
            /**
             * Street number.
             */
            number?: string;
            /**
             * Street name.
             */
            name?: string;
        };
        /**
         * Contains functionality for refining a contacts query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#)
         */
        interface ContactsQueryBuilder {
            /**
             * Adds an `and` condition to the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#and)
             */
            and(query: Contacts.ContactsQueryBuilder): Contacts.ContactsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#ascending)
             */
            ascending(...propertyName: string[]): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is within a specified range.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#between)
             */
            between(propertyName: string, rangeStart: Date, rangeEnd: Date): Contacts.ContactsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#descending)
             */
            descending(...propertyName: string[]): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): Contacts.ContactsQueryBuilder;
            /**
             * Returns the items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#find)
             */
            find(options?: Contacts.AuthOptions): Promise<Contacts.ContactsQueryResult>;
            /**
             * Refines a query to match items whose specified property value is greater than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#ge)
             */
            ge(propertyName: string, value: Date): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is greater than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#gt)
             */
            gt(propertyName: string, value: Date): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value contains all of the specified values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#hasAll)
             */
            hasAll(propertyName: string, values: string[]): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value contains any of the specified values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, values: string[]): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is less than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#le)
             */
            le(propertyName: string, value: Date): Contacts.ContactsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#limit)
             */
            limit(limit: string): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is less than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#lt)
             */
            lt(propertyName: string, value: Date): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value does not equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): Contacts.ContactsQueryBuilder;
            /**
             * Adds an `not` condition to the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#not)
             */
            not(query: Contacts.ContactsQueryBuilder): Contacts.ContactsQueryBuilder;
            /**
             * Adds an `or` condition to the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#or)
             */
            or(query: Contacts.ContactsQueryBuilder): Contacts.ContactsQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#skip)
             */
            skip(skip: string): Contacts.ContactsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value starts with a specified string.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#startsWith)
             */
            startsWith(propertyName: string, value: string): Contacts.ContactsQueryBuilder;
        }
        /**
         * The results of a contacts query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#)
         */
        interface ContactsQueryResult {
            /**
             * Returns the items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#items)
             */
            readonly items: Contacts.Contact[];
            /**
             * Returns the number of items in the current results page.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#length)
             */
            readonly length: number;
            /**
             * Returns the query page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#pageSize)
             */
            readonly pageSize: number;
            /**
             * Returns the `ContactsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#query)
             */
            readonly query: Contacts.ContactsQueryBuilder;
            /**
             * Indicates if the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates if the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#next)
             */
            next(): Promise<Contacts.ContactsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#prev)
             */
            prev(): Promise<Contacts.ContactsQueryResult>;
        }
        /**
         * Contains functionality for refining an extended fields query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryBuilder.html#)
         */
        interface ExtendedFieldsQueryBuilder {
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryBuilder.html#ascending)
             */
            ascending(...propertyName: string[]): Contacts.ExtendedFieldsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryBuilder.html#descending)
             */
            descending(...propertyName: string[]): Contacts.ExtendedFieldsQueryBuilder;
            /**
             * Returns the items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryBuilder.html#find)
             */
            find(options?: Contacts.AuthOptions): Promise<Contacts.ExtendedFieldsQueryResult>;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryBuilder.html#limit)
             */
            limit(limit: string): Contacts.ExtendedFieldsQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryBuilder.html#skip)
             */
            skip(skip: string): Contacts.ExtendedFieldsQueryBuilder;
        }
        /**
         * The results of a contacts query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#)
         */
        interface ExtendedFieldsQueryResult {
            /**
             * Returns the items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#items)
             */
            readonly items: Contacts.ExtendedField[];
            /**
             * Returns the number of items in the current results page.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#length)
             */
            readonly length: number;
            /**
             * Returns the query page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#pageSize)
             */
            readonly pageSize: number;
            /**
             * Returns the `ExtendedFieldsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#query)
             */
            readonly query: Contacts.ExtendedFieldsQueryBuilder;
            /**
             * Indicates if the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates if the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#next)
             */
            next(): Promise<Contacts.ExtendedFieldsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#prev)
             */
            prev(): Promise<Contacts.ExtendedFieldsQueryResult>;
        }
        /**
         * Contains functionality for refining a labels query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryBuilder.html#)
         */
        interface LabelsQueryBuilder {
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryBuilder.html#ascending)
             */
            ascending(...propertyName: string[]): Contacts.LabelsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryBuilder.html#descending)
             */
            descending(...propertyName: string[]): Contacts.LabelsQueryBuilder;
            /**
             * Returns the items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryBuilder.html#find)
             */
            find(options?: Contacts.AuthOptions): Promise<Contacts.LabelsQueryResult>;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryBuilder.html#limit)
             */
            limit(limit: string): Contacts.LabelsQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryBuilder.html#skip)
             */
            skip(skip: string): Contacts.LabelsQueryBuilder;
        }
        /**
         * The results of a contacts query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#)
         */
        interface LabelsQueryResult {
            /**
             * Returns the items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#items)
             */
            readonly items: Contacts.Label[];
            /**
             * Returns the number of items in the current results page.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#length)
             */
            readonly length: number;
            /**
             * Returns the query page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#pageSize)
             */
            readonly pageSize: number;
            /**
             * Returns the `LabelsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#query)
             */
            readonly query: Contacts.LabelsQueryBuilder;
            /**
             * Indicates if the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates if the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#next)
             */
            next(): Promise<Contacts.LabelsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#prev)
             */
            prev(): Promise<Contacts.LabelsQueryResult>;
        }
        /**
         * Contains functionality for refining a contacts query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryBuilder.html#)
         */
        namespace ContactsQueryBuilder {
        }
        /**
         * The results of a contacts query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ContactsQueryResult.html#)
         */
        namespace ContactsQueryResult {
        }
        /**
         * Contains functionality for refining an extended fields query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryBuilder.html#)
         */
        namespace ExtendedFieldsQueryBuilder {
        }
        /**
         * The results of a contacts query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.ExtendedFieldsQueryResult.html#)
         */
        namespace ExtendedFieldsQueryResult {
        }
        /**
         * Contains functionality for refining a labels query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryBuilder.html#)
         */
        namespace LabelsQueryBuilder {
        }
        /**
         * The results of a contacts query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Contacts.LabelsQueryResult.html#)
         */
        namespace LabelsQueryResult {
        }
    }
    /**
     * Events that are fired by actions relating to site contacts.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing a created card.
         */
        type CardCreatedEvent = {
            /**
             * ID of the card's workflow.
             */
            workflowId: string;
            /**
             * Name of the card's workflow.
             */
            workflowName: string;
            /**
             * ID of the card's phase.
             */
            phaseId: string;
            /**
             * Name of the card's phase.
             */
            phaseName: string;
            /**
             * The card that was created.
             */
            card: Workflows.Card;
        };
        /**
         * An object representing a moved card.
         */
        type CardMovedEvent = {
            /**
             * ID of the card's workflow.
             */
            workflowId: string;
            /**
             * Name of the card's workflow.
             */
            workflowName: string;
            /**
             * ID of the card's new phase.
             */
            newPhaseId: string;
            /**
             * Name of the card's new phase.
             */
            newPhaseName: string;
            /**
             * ID of the card's old phase.
             */
            previousPhaseId: string;
            /**
             * Name of the card's old phase.
             */
            previousPhaseName: string;
            /**
             * The card that was moved.
             */
            card: Workflows.Card;
        };
        /**
         * An object representing a moved card.
         */
        type CardRestoredEvent = {
            /**
             * ID of the workflow the card was restored to.
             */
            workflowId: string;
            /**
             * Name of the workflow the card was restored to.
             */
            workflowName: string;
            /**
             * ID of the phase the card was restored to.
             */
            phaseId: string;
            /**
             * Name of the phase the card was restored to.
             */
            phaseName: string;
            /**
             * The card that was restored.
             */
            card: Workflows.Card;
        };
        type ContactCreatedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.EventMetadata;
            /**
             * Created contact.
             */
            entity: Contacts.Contact;
        };
        type ContactDeletedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.UpdateAndDeleteMetadata;
        };
        type ContactMergedData = {
            /**
             * IDs of the source contacts.
             */
            sourceContactIds: string[];
            /**
             * ID of the target contact.
             */
            targetContactId: string;
            /**
             * Updated target contact.
             */
            targetContact: Contacts.Contact;
        };
        type ContactMergedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.EventMetadata;
            /**
             * Information about the source and target contacts.
             */
            data: Events.ContactMergedData;
        };
        type ContactUpdatedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.UpdateAndDeleteMetadata;
            /**
             * Updated contact.
             */
            entity: Contacts.Contact;
        };
        /**
         * Event metadata.
         */
        type EventMetadata = {
            /**
             * Event ID.
             */
            id: string;
            /**
             * Contact ID associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)).
             * For advanced users.
             */
            triggeredByAnonymizeRequest?: boolean;
        };
        /**
         * An object representing an attachment to a Wix Form.
         */
        type FormAttachment = {
            /**
             * Name of the attachment.
             */
            name: string;
            /**
             * Type of attachment.
             * One of:
             *
             * + `"UNDEFINED"`
             * + `"DOCUMENT"`
             * + `"IMAGE"`
             * + `"VIDEO"`
             */
            type: string;
            /**
             * URL of the attachment.
             */
            url: string;
        };
        /**
         * An object representing a Wix Form field.
         */
        type FormField = {
            /**
             * Name of the field.
             */
            fieldName: string;
            /**
             * Value of the field.
             */
            fieldValue: string;
        };
        /**
         * An object representing a Wix Form.
         */
        type FormSubmitEvent = {
            /**
             * Contact ID of the site visitor submitting the Wix Form.
             */
            contactId: string;
            /**
             * Name of the Wix Form.
             */
            formName: string;
            /**
             * Date and time that the Wix Form was submitted.
             */
            submissionTime: Date;
            /**
             * Data submitted in the Wix Form. The object contains key:value pairs where the key is the field name and the value is the contents of the field.
             */
            submissionData: Events.FormField[];
            /**
             * The Wix Form's attachments.
             */
            attachments: Events.FormAttachment[];
        };
        /**
         * Event metadata.
         */
        type UpdateAndDeleteMetadata = {
            /**
             * Event ID.
             */
            id: string;
            /**
             * Contact ID associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * If present and set to `"merge"`,
             * indicates the event was triggered by a merge.
             *
             * See [`onContactMerged()`](#onContactMerged) for information on handling
             * merge events.
             */
            originatedFrom?: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)).
             * For advanced users.
             */
            triggeredByAnonymizeRequest?: boolean;
        };
    }
    /**
     * The Notifications API is used to send notifications to the site owner and contributors.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Notifications.html#)
     */
    namespace Notifications {
        /**
         * An object containing information about where to navigate when a notification is clicked.
         */
        type ActionTarget = {
            /**
             * URL to navigate to when the `actionTitle` text is clicked.
             */
            url?: string;
        };
        /**
         * An object representing notification options.
         */
        type NotificationOptions = {
            /**
             * Notification title. Only displayed on mobile and browser notifications. Max length: 512 characters.
             */
            title?: string;
            /**
             * Call to action text to be clicked on. When clicked, navigates to the `actionTarget` URL. Max length: 512 characters.
             */
            actionTitle?: string;
            /**
             * Where to navigate to when the `actionTitle` text is clicked.
             */
            actionTarget?: Notifications.ActionTarget;
            /**
             * Contributor that will receive the notifications, based on their assigned roles.
             *  One of:
             *
             *  + `"All_Contributors"`: All site contributors, including the site owner.
             *  + `"Owner"`: Only the site owner.
             */
            recipients?: Notifications.SiteContributors;
        };
        /**
         * An object containing information about which contributors will receive a notification.
         */
        type SiteContributors = {
            /**
             * Roles to receive the notification.
             * One of:
             *
             * + `"All_Contributors"`: All site contributors (default).
             * + `"Owner"`: Only the site owner.
             */
            role?: string;
        };
    }
    /**
     * **Deprecated.**
     *  The Tasks submodule will continue to work, but a newer version is
     * available at [wix-crm.v2.Tasks](https://www.wix.com/velo/reference/wix-crm-v2/tasks/introduction).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Tasks.html#)
     */
    namespace Tasks {
        /**
         * An object representing a task.
         */
        type Task = {
            /**
             * Unique task identifier.
             */
            _id: string;
            /**
             * Task title.
             */
            title: string;
            /**
             * Date the task is due.
             */
            dueDate: Date;
            /**
             * Unique identifier of the site contact
             *  that this task is linked to.
             */
            contactId: string;
            /**
             * Indicates whether the task has been
             *  completed.
             */
            isCompleted: boolean;
            /**
             * Running task version number. Each time an
             *  action is performed on a task its version number is incremented.
             */
            version: number;
            /**
             * Type of the task's creator. `"USER"`
             *  if the task was created using the site's dashboard. `"APP"` if the task was
             *  created using the [`createTask()`](#createTask) function or if it was created
             *  by an app installed on the site.
             */
            creatorType: string;
            /**
             * When `creatorType` is `"USER"`, the unique
             *  identifier of the user that created the task in the dashboard. Otherwise, `userId` is not
             *  present.
             */
            userId?: string;
            /**
             * When `creatorType` is `"APP"`, the unique
             *  identifier of the application that created the task. Otherwise, `applicationId` is not
             *  present.
             */
            applicationId?: string;
        };
        /**
         * An object representing information for creating or updating a task.
         */
        type TaskInfo = {
            /**
             * Task title.
             */
            title?: string;
            /**
             * Date the task is due.
             */
            dueDate?: Date;
            /**
             * Unique identifier of the site contact
             *  that this task is linked to.
             */
            contactId?: string;
        };
    }
    /**
     * The Triggered Emails API is used to send triggered emails to your site's contacts and members.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.TriggeredEmails.html#)
     */
    namespace TriggeredEmails {
        type TriggeredEmailOptions = {
            /**
             * An object with `key:value` pairs. Each
             *  `key` is a variable in the email template created in Triggered Emails, and its
             *  corresponding `value` is the value to insert into the template in place of the
             *  variable. The values must be strings.
             *
             * Example: `{ firstName: 'John', lastName: 'Doe' }`
             */
            variables: any;
        };
    }
    /**
     * **Deprecated.**
     * The Workflows API will be discontinued in the upcoming months. Our team is
     * working to provide alternatives, and we'll provide timely updates before
     * implementing any changes. We understand that this transition might present challenges,
     * and we appreciate your patience and understanding.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-backend.Workflows.html#)
     */
    namespace Workflows {
        /**
         * An object containing card information.
         */
        type Card = {
            /**
             * Unique card identifier.
             */
            id: string;
            /**
             * Name of the card.
             */
            name?: string;
            /**
             * Source that created the card.
             *
             *  Some possible values:
             *
             *  + `"Contacts"`
             *  + `"Velo"`
             *  + `"Inbox"`
             *  + `"Invoices"`
             *  + `"Marketplace"`
             *  + `"Price Quotes"`
             *  + `"Wix Forms"`
             */
            source: string;
            /**
             * ID of the contact associated with the card.
             */
            contactId: string;
            /**
             * Date the card was created.
             */
            createdDate: Date;
            /**
             * Date the card was last updated.
             */
            updatedDate: Date;
            /**
             * ID of the phase which contains the card.
             */
            phaseId: string;
        };
        /**
         * An object containing a list of cards and pagination info.
         */
        type CardList = {
            /**
             * List of cards matching the list options.
             */
            items: Workflows.Card[];
            /**
             * Number of items in the current results page.
             */
            length: number;
            /**
             * Total number of cards in the specified workflow and phase.
             */
            totalCount: number;
            /**
             * Number of items returned per page with the current list options.
             */
            pageSize: number;
            /**
             * Total number of results pages.
             */
            totalPages: number;
            /**
             * Index of the current page. Indices are zero-based.
             */
            currentPage: number;
        };
        type CreateCardRequest = {
            /**
             * Name of the card.
             */
            name?: string;
            /**
             * ID of the contact associated with the card.
             */
            contactId: string;
        };
        type CreatePhaseRequest = {
            /**
             * Name of the phase.
             */
            name: string;
        };
        type CreateWorkflowRequest = {
            /**
             * Name of the workflow.
             */
            name: string;
            /**
             * Workflow description.
             */
            description?: string;
        };
        /**
         * An object contains ListCards request data.
         */
        type ListCardOptions = {
            /**
             * ID of phase to retrieve cards from. If omitted, will retrieve cards from all phases. Not to be used with `fetchOnlyArchived`.
             */
            phaseId?: string;
            /**
             * Whether to retrieve only archived cards. Not to be used with `phaseId`.
             */
            fetchOnlyArchived?: boolean;
            /**
             * Maximum number of cards to retrieve. Defaults to `50`.
             */
            limit?: number;
            /**
             * Number of cards to skip before the retrieved items. Defaults to `0`.
             */
            skip?: number;
            /**
             * Ordering options.
             */
            order?: Workflows.OrderOptions;
        };
        /**
         * An object containing options used when requesting a list of workflows or phases.
         */
        type ListOptions = {
            /**
             * Maximum number of items to retrieve. Defaults to `50` for phases and `100` for workflows.
             */
            limit?: number;
            /**
             * Number of items to skip before the retrieved items. Defaults to `0`.
             */
            skip?: number;
            /**
             * Ordering options.
             */
            order?: Workflows.OrderOptions;
        };
        /**
         * An object containing information used when moving a card.
         */
        type MoveCardOptions = {
            /**
             * ID of the phase to move the card to. If omitted, the card remains in the same phase.
             */
            newPhaseId?: string;
            /**
             * Position within the phase to move the card to. If omitted, the card is moved to the top of the phase.
             */
            newPosition?: number;
        };
        /**
         * An object containing information used when moving a phase.
         */
        type MovePhaseOptions = {
            /**
             * ID of the workflow to move the phase to.
             */
            workflowId: string;
            /**
             * Position within the workflow to move the phase to.
             */
            newPosition: number;
        };
        /**
         * An object containing sort order options.
         */
        type OrderOptions = {
            /**
             * Field to sort on.
             */
            field?: string;
            /**
             * Order of sort. Either `"asc"` or `"desc"` (defaults to `"asc"`).
             */
            sort?: string;
        };
        /**
         * An object containing phase information.
         */
        type Phase = {
            /**
             * Unique phase identifier.
             */
            id: string;
            /**
             * Name of the phase.
             */
            name: string;
        };
        /**
         * An object containing a list of phases and pagination info.
         */
        type PhaseList = {
            /**
             * List of phases matching the list options.
             */
            items: Workflows.Phase[];
            /**
             * Number of items in the current results page.
             */
            length: number;
            /**
             * Total number of phases in the specified workflow.
             */
            totalCount: number;
            /**
             * Number of items returned per page with the current list options.
             */
            pageSize: number;
            /**
             * Total number of results pages.
             */
            totalPages: number;
            /**
             * Index of the current page. Indices are zero-based.
             */
            currentPage: number;
        };
        type UpdateCardRequest = {
            /**
             * Name of the card.
             */
            name?: string;
            /**
             * Source that created the card.
             *
             *  Some possible values:
             *
             *  + `"Contacts"`
             *  + `"Velo"`
             *  + `"Inbox"`
             *  + `"Invoices"`
             *  + `"Marketplace"`
             *  + `"Price Quotes"`
             *  + `"Wix Forms"`
             */
            source: string;
            /**
             * ID of the contact associated with the card.
             */
            contactId: string;
            /**
             * ID of the phase which contains the card.
             */
            phaseId: string;
        };
        type UpdatePhaseRequest = {
            /**
             * Name of the phase.
             */
            name: string;
        };
        type UpdateWorkflowRequest = {
            /**
             * Name of the workflow.
             */
            name?: string;
            /**
             * Workflow description.
             */
            description?: string;
        };
        /**
         * An object representing a workflow.
         */
        type Workflow = {
            /**
             * Workflow information.
             */
            workflowInfo: Workflows.WorkflowInfo;
            /**
             * ID of the win phase.
             */
            winPhaseId: string;
        };
        /**
         * An object containing information about a workflow.
         */
        type WorkflowInfo = {
            /**
             * Unique workflow identifier.
             */
            id: string;
            /**
             * Name of the workflow.
             */
            name: string;
            /**
             * Workflow description.
             */
            description?: string;
            /**
             * Date the workflow was created.
             */
            createdDate?: Date;
        };
        /**
         * An object containing a list of workflows and pagination info.
         */
        type WorkflowList = {
            /**
             * List of workflows matching the list options.
             */
            items: Workflows.WorkflowInfo[];
            /**
             * Number of items in the current results page.
             */
            length: number;
            /**
             * Total number of workflows in the site.
             */
            totalCount: number;
            /**
             * Number of items returned per page with the current list options.
             */
            pageSize: number;
            /**
             * Total number of results pages.
             */
            totalPages: number;
            /**
             * Index of the current page. Indices are zero-based.
             */
            currentPage: number;
        };
    }
}
