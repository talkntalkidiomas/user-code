/**
 * [Read more](https://www.wix.com/corvid/reference/wix-groups.v2.html#)
 */
declare module 'wix-groups.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.html#createRequests)
     */
    const createRequests: CreateRequests;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.html#groups)
     */
    const groups: Groups;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.html#joinGroupRequests)
     */
    const joinGroupRequests: JoinGroupRequests;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.html#members)
     */
    const members: Members;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.html#roles)
     */
    const roles: Roles;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.html#)
     */
    interface CreateRequests {
        /**
         * Approves requests to create a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.html#approveGroupRequests)
         */
        approveGroupRequests(groupRequestIds: Array<string>): Promise<CreateRequests.ApproveGroupRequestsResponse>;
        /**
         * Lists requests to create a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.html#listGroupRequests)
         */
        listGroupRequests(options: CreateRequests.ListGroupRequestsOptions): Promise<CreateRequests.ListGroupRequestsResponse>;
        /**
         * Creates a query to retrieve a list of create requests.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.html#queryGroupRequests)
         */
        queryGroupRequests(): CreateRequests.GroupRequestsQueryBuilder;
        /**
         * Rejects a request to create a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.html#rejectGroupRequests)
         */
        rejectGroupRequests(rejections: Array<CreateRequests.Rejection>): Promise<CreateRequests.RejectGroupRequestsResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#)
     */
    interface Events {
        /**
         * Triggered when a group's logo is changed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#onGroupCoverChanged)
         */
        onGroupCoverChanged(event: Events.socialGroupsV2GroupGroupCoverChangedEvent): void;
        /**
         * Triggered when a group is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#onGroupCreated)
         */
        onGroupCreated(event: Events.socialGroupsV2GroupGroupCreated): void;
        /**
         * Triggered when a group is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#onGroupDeleted)
         */
        onGroupDeleted(event: Events.socialGroupsV2GroupGroupDeleted): void;
        /**
         * Triggered when a group's description is changed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#onGroupDescriptionChanged)
         */
        onGroupDescriptionChanged(event: Events.socialGroupsV2GroupGroupDescriptionChangedEvent): void;
        /**
         * Triggered when a new member is added to a group, either directly by an admin or when a Join Request is approved.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#onGroupMemberAdded)
         */
        onGroupMemberAdded(event: Events.socialGroupsV2GroupMemberGroupMemberAdded): void;
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#onGroupMemberRemoved)
         */
        onGroupMemberRemoved(event: Events.socialGroupsV2GroupMemberGroupMemberRemoved): void;
        /**
         * Triggered when a join group request is approved by a group admin or a groups manager.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#onJoinGroupRequestApproved)
         */
        onJoinGroupRequestApproved(event: Events.socialGroupsV2JoinGroupRequestJoinGroupRequestApprovedEvent): void;
        /**
         * Triggered when a join group request is rejected by a group admin or a groups manager.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#onJoinGroupRequestRejected)
         */
        onJoinGroupRequestRejected(event: Events.socialGroupsV2JoinGroupRequestJoinGroupRequestRejectedEvent): void;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#)
     */
    interface Groups {
        /**
         * Creates a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#createGroup)
         */
        createGroup(group: Groups.Group, options: Groups.CreateGroupOptions): Promise<Groups.CreateGroupResponse>;
        /**
         * Deletes a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#deleteGroup)
         */
        deleteGroup(groupId: string): Promise<Groups.DeleteGroupResponse>;
        /**
         * Gets a group by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#getGroup)
         */
        getGroup(groupId: string): Promise<Groups.GetGroupResponse>;
        /**
         * Gets a group by slug.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#getGroupBySlug)
         */
        getGroupBySlug(slug: string): Promise<Groups.GetGroupBySlugResponse>;
        /**
         * Lists groups.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#listGroups)
         */
        listGroups(options: Groups.ListGroupsOptions): Promise<Groups.ListGroupsResponse>;
        /**
         * Creates a query to retrieve a list of groups.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#queryGroups)
         */
        queryGroups(): Groups.GroupsQueryBuilder;
        /**
         * Updates a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#updateGroup)
         */
        updateGroup(_id: string, group: Groups.UpdateGroup): Promise<Groups.UpdateGroupResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.html#)
     */
    interface JoinGroupRequests {
        /**
         * Approves requests to join a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.html#approveJoinGroupRequests)
         */
        approveJoinGroupRequests(groupId: string, memberIds: Array<string>): Promise<JoinGroupRequests.ApproveJoinGroupRequestsResponse>;
        /**
         * Lists requests to join a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.html#listJoinGroupRequests)
         */
        listJoinGroupRequests(groupId: string, options: JoinGroupRequests.ListJoinGroupRequestsOptions): Promise<JoinGroupRequests.ListJoinGroupRequestsResponse>;
        /**
         * Creates a query to retrieve a list of join requests.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.html#queryJoinGroupRequests)
         */
        queryJoinGroupRequests(groupId: string): JoinGroupRequests.JoinGroupRequestsQueryBuilder;
        /**
         * Rejects requests to join a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.html#rejectJoinGroupRequests)
         */
        rejectJoinGroupRequests(groupId: string, rejections: Array<JoinGroupRequests.Rejection>): Promise<JoinGroupRequests.RejectJoinGroupRequestsResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.html#)
     */
    interface Members {
        /**
         * Adds site members to a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.html#addGroupMembers)
         */
        addGroupMembers(groupId: string, memberIds: Array<string>): Promise<Members.AddGroupMembersResponse>;
        /**
         * Lists all members of a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.html#listGroupMembers)
         */
        listGroupMembers(groupId: string, options: Members.ListGroupMembersOptions): Promise<Members.ListGroupMembersResponse>;
        /**
         * Lists all group memberships of a site member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.html#listMemberships)
         */
        listMemberships(memberId: string, options: Members.ListMembershipsOptions): Promise<Members.ListMembershipsResponse>;
        /**
         * Retrieves a list of up to 100 group members, given the provided paging, sorting and filtering.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.html#queryGroupMembers)
         */
        queryGroupMembers(groupId: string): Members.MembersQueryBuilder;
        /**
         * Retrieves a list of up to 100 members and their membership status, given the provided paging and filtering.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.html#queryMemberships)
         */
        queryMemberships(memberId: string, options: Members.QueryMembershipsOptions): Promise<Members.QueryMembershipsResponse>;
        /**
         * Removes members from a group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.html#removeGroupMembers)
         */
        removeGroupMembers(groupId: string, memberIds: Array<string>): Promise<void>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Roles.html#)
     */
    interface Roles {
        /**
         * Assigns a specific role to group members.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Roles.html#assignRole)
         */
        assignRole(groupId: string, memberIds: Array<string>, role: Roles.GroupRole): Promise<Roles.AssignRoleResponse>;
        /**
         * Unassigns a role from group members.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Roles.html#unassignRole)
         */
        unassignRole(groupId: string, memberIds: Array<string>, role: Roles.GroupRole): Promise<Roles.UnassignRoleResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.html#)
     */
    namespace CreateRequests {
        type AccessRestriction = {
            events?: CreateRequests.Events;
            /**
             * Supported values:
             * - `'ADMIN_APPROVAL'`
             * - `'EVENTS'`
             * - `'PAID_PLANS'`
             * - `'UNKNOWN'`
             */
            type?: string;
        };
        type AccessRestrictionDataOneOf = {
            events?: CreateRequests.Events;
        };
        type ApproveGroupRequestsOptions = {};
        type ApproveGroupRequestsRequest = {
            /**
             * IDs of the requests create groups to approve.
             *
             * Max: 100 create group request IDs
             */
            groupRequestIds?: Array<string>;
        };
        type ApproveGroupRequestsResponse = {
            /**
             * Approved request to create a group.
             */
            groupRequest?: Array<CreateRequests.GroupRequest>;
        };
        type CancelGroupRequestRequest = {
            /**
             * ID of the Group Request to cancel.
             */
            groupRequestId: string;
        };
        type CancelGroupRequestResponse = {
            /**
             * Canceled Group Request.
             */
            groupRequest?: CreateRequests.GroupRequest;
        };
        type CoverImage = {
            /**
             * Cover image.
             */
            image?: CreateRequests.Image;
            /**
             * Position of the corner of the cover image (or logo) for mobile browser.
             */
            mobilePosition?: CreateRequests.Position;
            /**
             * Position of the corner of the cover image (or logo).
             */
            position?: CreateRequests.Position;
        };
        type Events = {
            eventIds?: Array<string>;
        };
        type Group = {
            /**
             * Date and time the group was created.
             */
            _createdDate?: Date;
            /**
             * Group ID.
             */
            _id?: string;
            /**
             * Date and time the group was last updated.
             */
            _updatedDate?: Date;
            /**
             * Group cover image. You cannot upload your own cover image.
             */
            coverImage?: CreateRequests.CoverImage;
            /**
             * Group Description.
             */
            description?: string;
            /**
             * Date and time the group was last active.
             *
             * For example, a post or comment made in the group.
             */
            lastActivityDate?: Date;
            /**
             * What group members are called.
             *
             * For example, 'Coworkers', 'Friends', or 'Students'.
             */
            memberTitle?: string;
            /**
             * Total number of members in the group.
             */
            membersCount?: number;
            /**
             * Group name.
             */
            name?: string;
            /**
             * Member ID of the group creator.
             */
            ownerId?: string;
            /**
             * Group privacy status.
             * - `"PUBLIC"` - Site visitors can see the group and its content in the list of groups. Members can join the group.
             * - `"PRIVATE"` - Site visitors can see the group in the list of groups, but only site members can see its content. Members can request to join the group.
             * - `"SECRET"` - Only admins and group members can see the group and its content in the list of groups. Members can only join a group if invited by group admins, or other group members.
             */
            privacyStatus?: string;
            /**
             * Group settings.
             */
            settings?: CreateRequests.GroupSettings;
            /**
             * Part of a group's URL.
             *
             * For example, `'https:/example.com/groups/{my-group-slug}'`. Generally based on the group name, but for secret groups it is an autogenerated string of characters, for example, `'https:/example.com/groups/{5D3yTX}'`. It is case-sensitive.
             */
            slug?: string;
            /**
             * Group teaser.
             */
            teaser?: string;
            title?: string;
        };
        type GroupDetails = {
            /**
             * Group logo. You cannot upload your own logo.
             */
            logo?: CreateRequests.Logo;
            /**
             * What group members are called, for example `Coworkers`, `Friends`, or `Students`.
             */
            membersTitle?: string;
        };
        type GroupDetailsPosition = {
            /**
             * horizontal coordinate
             */
            x?: number;
            /**
             * vertical coordinate
             */
            y?: number;
        };
        type GroupRequest = {
            /**
             * ID of the request to create a group. Same as group ID.
             */
            _id?: string;
            /**
             * Group requested to create.
             */
            group?: CreateRequests.Group;
            /**
             * Details of request to create a group.
             */
            requestDetails?: CreateRequests.RequestDetails;
            /**
             * Status of the request to create a group. One of:
             * - `"PENDING"` - Pending group request.
             * - `"APPROVED"` - Approved group request.
             * - `"REJECTED"` - Rejected group request.
             * - `"CANCELED"` - Canceled group request.
             */
            status?: string;
        };
        type GroupRequestApproved = {
            /**
             * Approved group request.
             */
            groupRequest?: CreateRequests.GroupRequest;
        };
        type GroupRequestRejected = {
            /**
             * Rejected group request.
             */
            groupRequest?: CreateRequests.GroupRequest;
        };
        type GroupSettings = {
            /**
             * Whether to create an automatic group post when group details are changed.
             *
             * Default: `true`
             */
            groupDetailsChangedPostEnabled?: boolean;
            /**
             * Whether group members can approve or reject requests to join a group. When `false`, only site admins and group admins can approve or reject requests to join a group.
             *
             * Default: `false`
             */
            membersCanApprove?: boolean;
            /**
             * Whether group members can send an email inviting others to join the group. When `false`, only site admins and group admins can invite others to join the group.
             *
             * Default: `false`
             */
            membersCanInvite?: boolean;
            /**
             * Whether all group members can view the full list of group members.
             *
             * Default: `true`
             */
            showMemberList?: boolean;
            /**
             * Whether to create a daily group post welcoming new members.
             *
             * Default: `true`
             */
            welcomeMemberPostEnabled?: boolean;
        };
        type Identity = {
            /**
             * Member ID of the group creator.  See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            _id?: string;
            /**
             * Supported values:
             * - `'MEMBER'`
             * - `'USER'`
             */
            identityType?: string;
        };
        type Image = {
            /**
             * Image height.
             */
            height?: number;
            /**
             * Image ID (for internal use).
             */
            mediaId?: string;
            /**
             * Image width.
             */
            width?: number;
        };
        type ListGroupRequestsOptions = {
            /**
             * Number of items to load.
             *
             * Max: `100`
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type ListGroupRequestsRequest = {
            /**
             * Number of items to load. Maximum `100`.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type ListGroupRequestsResponse = {
            /**
             * List of requests to create a group.
             */
            groupRequests?: Array<CreateRequests.GroupRequest>;
            /**
             * Paging information.
             */
            metadata?: CreateRequests.PagingMetadata;
        };
        type Logo = {
            /**
             * Logo image height.
             */
            height?: number;
            /**
             * Logo image ID (for internal use).
             */
            mediaId?: string;
            /**
             * Logo image width.
             */
            width?: number;
        };
        type Paging = {
            /**
             * Number of items to load.
             *
             * Max: `100`
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type PagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query.
             */
            total?: number;
        };
        type Position = {
            /**
             * horizontal coordinate
             */
            x?: number;
            /**
             * vertical coordinate
             */
            y?: number;
        };
        type Query = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: CreateRequests.Paging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<CreateRequests.Sorting>;
        };
        type QueryGroupRequestsOptions = {};
        type QueryGroupRequestsRequest = {
            query?: CreateRequests.Query;
        };
        type QueryGroupRequestsResponse = {
            /**
             * Retrieved Group Requests.
             */
            groupRequests?: Array<CreateRequests.GroupRequest>;
            metadata?: CreateRequests.PagingMetadata;
        };
        type RejectGroupRequestsOptions = {};
        type RejectGroupRequestsRequest = {
            /**
             * Rejection data.
             */
            rejections?: Array<CreateRequests.Rejection>;
        };
        type RejectGroupRequestsResponse = {
            /**
             * Rejected Group Requests.
             */
            groupRequest?: Array<CreateRequests.GroupRequest>;
        };
        type Rejection = {
            /**
             * ID of the requests to create groups to reject.
             */
            groupRequestId?: string;
            /**
             * Reason the request to create a group is rejected. This text is displayed to the creator of the rejected request.
             *
             * Max: 1,000 characters.
             */
            reason?: string;
        };
        type RequestDetails = {
            /**
             * Reason the request to create a group is rejected.
             */
            rejectionReason?: string;
        };
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type SubmitGroupRequestOptions = {
            /**
             * Group submitted for creation.
             */
            group?: CreateRequests.Group;
        };
        type SubmitGroupRequestRequest = {
            /**
             * Group submitted for creation.
             */
            group?: CreateRequests.Group;
        };
        type SubmitGroupRequestResponse = {
            /**
             * Submitted Group Request.
             */
            groupRequest?: CreateRequests.GroupRequest;
        };
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#)
         */
        interface GroupRequestsQueryBuilder {
            /**
             * Refines a query to match items where the specified property equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): CreateRequests.GroupRequestsQueryBuilder;
            /**
             * Refines a query to match items where the specified property contains a value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#exists)
             */
            exists(propertyName: string, value: boolean): CreateRequests.GroupRequestsQueryBuilder;
            /**
             * Returns the query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#find)
             */
            find(): Promise<CreateRequests.GroupRequestsQueryResult>;
            /**
             * Refines a query to match items whose specified property contains any of the specified values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, value: Array<any>): CreateRequests.GroupRequestsQueryBuilder;
            /**
             * Refines a query to only match items where the specified property conatins any of the values in the provided array of values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#in)
             */
            in(propertyName: string, value: any): CreateRequests.GroupRequestsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#limit)
             */
            limit(limit: number): CreateRequests.GroupRequestsQueryBuilder;
            /**
             * Refines a query to match items where the specified property doesn't equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): CreateRequests.GroupRequestsQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#skip)
             */
            skip(skip: number): CreateRequests.GroupRequestsQueryBuilder;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#)
         */
        interface GroupRequestsQueryResult {
            /**
             * Returns the index of the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#currentPage)
             */
            currentPage: number;
            /**
             * Returns an array of `createRequests` items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#items)
             */
            items: Array<CreateRequests.GroupRequest>;
            /**
             * Returns the number of items in the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#length)
             */
            length: number;
            /**
             * Returns the requested page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#pageSize)
             */
            pageSize: number;
            /**
             * Returns the `GroupRequestsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#query)
             */
            query: CreateRequests.GroupRequestsQueryBuilder;
            /**
             * Returns the total number of items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#totalCount)
             */
            totalCount: number;
            /**
             * Returns the total number of pages the query produced.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#totalPages)
             */
            totalPages: number;
            /**
             * Indicates whether the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates whether the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#next)
             */
            next(): Promise<CreateRequests.GroupRequestsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#prev)
             */
            prev(): Promise<CreateRequests.GroupRequestsQueryResult>;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryBuilder.html#)
         */
        namespace GroupRequestsQueryBuilder {
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.CreateRequests.GroupRequestsQueryResult.html#)
         */
        namespace GroupRequestsQueryResult {
        }
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Events.html#)
     */
    namespace Events {
        type socialGroupsV2GroupAccessRestriction = {
            events?: Events.socialGroupsV2GroupEvents;
            /**
             * Supported values:
             * - `'ADMIN_APPROVAL'`
             * - `'EVENTS'`
             * - `'PAID_PLANS'`
             * - `'UNKNOWN'`
             */
            type?: string;
        };
        type socialGroupsV2GroupAccessRestrictionDataOneOf = {
            events?: Events.socialGroupsV2GroupEvents;
        };
        type socialGroupsV2GroupBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type socialGroupsV2GroupCoverImage = {
            /**
             * Cover image.
             */
            image?: Events.socialGroupsV2GroupImage;
            /**
             * Position of the corner of the cover image (or logo) for mobile browser.
             */
            mobilePosition?: Events.socialGroupsV2GroupPosition;
            /**
             * Position of the corner of the cover image (or logo).
             */
            position?: Events.socialGroupsV2GroupPosition;
        };
        type socialGroupsV2GroupCreateGroupRequest = {
            /**
             * ID of the member who created the group. This member will automatically become an admin. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            creatorId?: string;
            /**
             * Group to create.
             */
            group?: Events.socialGroupsV2GroupGroup;
        };
        type socialGroupsV2GroupCreateGroupResponse = {
            /**
             * Created group.
             */
            group?: Events.socialGroupsV2GroupGroup;
        };
        type socialGroupsV2GroupDeleteGroupRequest = {
            /**
             * ID of the group to delete.
             */
            groupId: string;
        };
        type socialGroupsV2GroupDeleteGroupResponse = {
            /**
             * Deleted group.
             */
            group?: Events.socialGroupsV2GroupGroup;
        };
        type socialGroupsV2GroupEvents = {
            eventIds?: Array<string>;
        };
        type socialGroupsV2GroupGetGroupBySlugRequest = {
            /**
             * Unique part of the group's URL, for example `group-1` in `https:/example.com/groups/group-1`. Pass only the slug. Case-sensitive.
             */
            slug: string;
        };
        type socialGroupsV2GroupGetGroupBySlugResponse = {
            /**
             * Retrieved group.
             */
            group?: Events.socialGroupsV2GroupGroup;
        };
        type socialGroupsV2GroupGetGroupRequest = {
            /**
             * ID of the group to retrieve.
             */
            groupId: string;
        };
        type socialGroupsV2GroupGetGroupResponse = {
            /**
             * Retrieved group.
             */
            group?: Events.socialGroupsV2GroupGroup;
        };
        type socialGroupsV2GroupGroup = {
            /**
             * Group creation date and time.
             */
            _createdDate?: Date;
            /**
             * Group ID.
             */
            _id?: string;
            /**
             * Date and time of the latest group update.
             */
            _updatedDate?: Date;
            /**
             * Cover image. You cannot upload your own cover image.
             */
            coverImage?: Events.socialGroupsV2GroupCoverImage;
            /**
             * __Deprecated.__ Use `ownerId` instead.
             * This property will be removed on June 30, 2022.
             */
            createdBy?: Events.socialGroupsV2GroupIdentity;
            /**
             * Group description in DraftJS format.
             */
            description?: string;
            /**
             * __Deprecated.__
             * For `details.logo`, use `coverImage` instead.
             * For `details.membersTitle`, `memberTitle` instead.
             * This property will be removed on June 30, 2022.
             */
            details?: Events.socialGroupsV2GroupGroupDetails;
            /**
             * Date and time of the most recent group activity, for example a post or comment.
             */
            lastActivityDate?: Date;
            /**
             * What group members are called, for example `Coworkers`, `Friends`, or `Students`.
             */
            memberTitle?: string;
            /**
             * Total count of current group members.
             */
            membersCount?: number;
            /**
             * Group name.
             */
            name?: string;
            /**
             * Group owner.
             */
            ownerId?: string;
            /**
             * __Deprecated.__ Use `privacyStatus` instead.
             * This property will be removed on June 30, 2022.
             */
            privacyLevel?: string;
            /**
             * Group privacy status.
             * - `PUBLIC` - Anyone can see the group and its content. Anyone can join the group.
             * - `PRIVATE` - Anyone can see the group, but only members can see its content. New member must submit a `Join Group Request`.
             * - `SECRET` - Only admins and members can see the group. New members can only be added by other members.
             */
            privacyStatus?: string;
            /**
             * __Deprecated.__ Use `lastActivityDate` instead.
             * This property will be removed on June 30, 2022.
             */
            recentActivityDate?: Date;
            /**
             * Group specific settings. Available to the site owners under `Admin Tools` in the Business Manager.
             */
            settings?: Events.socialGroupsV2GroupGroupSettings;
            /**
             * A unique part of a group's URL, for example `https:/example.com/groups/slug`.
             */
            slug?: string;
            /**
             * Group teaser.
             */
            teaser?: string;
            /**
             * __Deprecated.__ Use `name` instead.
             * This property will be removed on June 30, 2022.
             */
            title?: string;
        };
        type socialGroupsV2GroupGroupCoverChanged = {
            /**
             * New url of group cover.
             */
            newUrl?: string;
            /**
             * Old url of group cover.
             */
            oldUrl?: string;
        };
        type socialGroupsV2GroupGroupCoverChangedEvent = {
            /**
             * Data of group cover.
             */
            data: Events.socialGroupsV2GroupGroupCoverChanged;
            /**
             * Metadata of group cover.
             */
            metadata: Events.socialGroupsV2GroupBackendEventMetadata;
        };
        type socialGroupsV2GroupGroupCreated = {
            /**
             * Group data.
             */
            entity: Events.socialGroupsV2GroupGroup;
            /**
             * Group metadata.
             */
            metadata: Events.socialGroupsV2GroupBackendEventMetadata;
        };
        type socialGroupsV2GroupGroupDeleted = {
            /**
             * Metadata of deleted group.
             */
            metadata: Events.socialGroupsV2GroupBackendEventMetadata;
        };
        type socialGroupsV2GroupGroupDescriptionChanged = {
            /**
             * Group's new description.
             */
            newDescription?: string;
            /**
             * Group's old description.
             */
            oldDescription?: string;
        };
        type socialGroupsV2GroupGroupDescriptionChangedEvent = {
            /**
             * Data of of group description.
             */
            data: Events.socialGroupsV2GroupGroupDescriptionChanged;
            /**
             * Metadata of group description.
             */
            metadata: Events.socialGroupsV2GroupBackendEventMetadata;
        };
        type socialGroupsV2GroupGroupDetails = {
            /**
             * Group logo. You cannot upload your own logo.
             */
            logo?: Events.socialGroupsV2GroupLogo;
            /**
             * What group members are called, for example `Coworkers`, `Friends`, or `Students`.
             */
            membersTitle?: string;
        };
        type socialGroupsV2GroupGroupDetailsPosition = {
            /**
             * horizontal coordinate
             */
            x?: number;
            /**
             * vertical coordinate
             */
            y?: number;
        };
        type socialGroupsV2GroupGroupSettings = {
            /**
             * Whether an automatic post about changing the group details is enabled.
             */
            groupDetailsChangedPostEnabled?: boolean;
            /**
             * __Deprecated.__ Use `welcomeMemberPostEnabled` instead.
             * This property will be removed on June 30, 2022.
             */
            memberWelcomePostEnabled?: boolean;
            /**
             * Whether all group members are permitted to approve join group requests.
             * If `false`, member approval is limited to the admins.
             */
            membersCanApprove?: boolean;
            /**
             * Whether regular members are permitted to invite new members.
             * If `false`, only admins can invite members. Defaults to `true`.
             */
            membersCanInvite?: boolean;
            /**
             * Whether all members can see the full member list.
             */
            showMemberList?: boolean;
            /**
             * Whether a daily post about new members is enabled.
             */
            welcomeMemberPostEnabled?: boolean;
        };
        type socialGroupsV2GroupGroupUpdated = {
            /**
             * Data of updated group.
             */
            entity: Events.socialGroupsV2GroupGroup;
            /**
             * Metadata of updated group.
             */
            metadata: Events.socialGroupsV2GroupBackendEventMetadata;
        };
        type socialGroupsV2GroupGroupWithMsId = {
            groups?: Array<Events.socialGroupsV2GroupGroup>;
            metaSiteId?: string;
        };
        type socialGroupsV2GroupIdentity = {
            /**
             * Member ID of the group creator.  See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            _id?: string;
            /**
             * Supported values:
             * - `'MEMBER'`
             * - `'USER'`
             */
            identityType?: string;
        };
        type socialGroupsV2GroupImage = {
            /**
             * Image height.
             */
            height?: number;
            /**
             * Image ID (for internal use).
             */
            mediaId?: string;
            /**
             * Image width.
             */
            width?: number;
        };
        type socialGroupsV2GroupListGroupsByUserIdRequest = {};
        type socialGroupsV2GroupListGroupsByUserIdResponse = {
            groups?: Array<Events.socialGroupsV2GroupGroupWithMsId>;
        };
        type socialGroupsV2GroupListGroupsRequest = {
            /**
             * Number of items to load. Maximum `100`.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type socialGroupsV2GroupListGroupsResponse = {
            /**
             * Retrieved Groups.
             */
            groups?: Array<Events.socialGroupsV2GroupGroup>;
            metadata?: Events.socialGroupsV2GroupPagingMetadata;
        };
        type socialGroupsV2GroupLogo = {
            /**
             * Logo image height.
             */
            height?: number;
            /**
             * Logo image ID (for internal use).
             */
            mediaId?: string;
            /**
             * Logo image width.
             */
            width?: number;
        };
        type socialGroupsV2GroupMemberAddGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            memberIds?: Array<string>;
            /**
             * __Deprecated.__ Use `memberIds` instead.
             * This parameter will be removed on June 30, 2022.
             */
            siteMemberIds?: Array<string>;
        };
        type socialGroupsV2GroupMemberAddGroupMembersResponse = {
            /**
             * New members.
             */
            members?: Array<Events.socialGroupsV2GroupMemberGroupMember>;
        };
        type socialGroupsV2GroupMemberBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type socialGroupsV2GroupMemberGroupMember = {
            /**
             * Date and time the group Member joined the group.
             */
            joinedDate?: Date;
            /**
             * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            memberId?: string;
            /**
             * Group Member Role.
             */
            role?: Events.socialGroupsV2GroupMemberGroupRole;
            /**
             * __Deprecated.__ Use `memberId` instead.
             * This property will be removed on June 30, 2022.
             */
            siteMemberId?: string;
        };
        type socialGroupsV2GroupMemberGroupMemberAdded = {
            data: Events.socialGroupsV2GroupMemberMemberAdded;
            metadata: Events.socialGroupsV2GroupMemberBackendEventMetadata;
        };
        type socialGroupsV2GroupMemberGroupMemberRemoved = {
            data: Events.socialGroupsV2GroupMemberMemberRemoved;
            metadata: Events.socialGroupsV2GroupMemberBackendEventMetadata;
        };
        type socialGroupsV2GroupMemberGroupRole = {
            /**
             * Member's role.
             * - `MEMBER` - Regular group member.
             * - `ADMIN` - Group administrator.
             */
            value?: string;
        };
        type socialGroupsV2GroupMemberJoinRequest = {
            autoInviteId?: string;
            groupId: string;
            /**
             * Answers to membership questions. A Join Request will fail, if the answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<Events.socialGroupsV2GroupMemberMembershipQuestionAnswer>;
        };
        type socialGroupsV2GroupMemberJoinResponse = {
            /**
             * New member.
             */
            member?: Events.socialGroupsV2GroupMemberGroupMember;
        };
        type socialGroupsV2GroupMemberLeaveRequest = {
            /**
             * ID of the Group to leave.
             */
            groupId: string;
        };
        type socialGroupsV2GroupMemberLeaveResponse = {};
        type socialGroupsV2GroupMemberListGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Number of items to load. Maximum `100.`
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type socialGroupsV2GroupMemberListGroupMembersResponse = {
            /**
             * Retrieved members.
             */
            members?: Array<Events.socialGroupsV2GroupMemberGroupMember>;
            /**
             * Paging information.
             */
            metadata?: Events.socialGroupsV2GroupMemberPagingMetadata;
        };
        type socialGroupsV2GroupMemberListMembershipsRequest = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            memberId: string;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type socialGroupsV2GroupMemberListMembershipsResponse = {
            /**
             * Site member's memberships.
             */
            memberships?: Array<Events.socialGroupsV2GroupMemberMembership>;
            /**
             * Paging information.
             */
            metadata?: Events.socialGroupsV2GroupMemberPagingMetadata;
        };
        type socialGroupsV2GroupMemberMemberAdded = {
            /**
             * Group ID that member was added to.
             */
            groupId?: string;
            /**
             * Added group member.
             */
            groupMember?: Events.socialGroupsV2GroupMemberGroupMember;
        };
        type socialGroupsV2GroupMemberMemberJoined = {
            /**
             * Group ID that member has joined.
             */
            groupId?: string;
            /**
             * Joined group member.
             */
            groupMember?: Events.socialGroupsV2GroupMemberGroupMember;
        };
        type socialGroupsV2GroupMemberMemberLeft = {
            /**
             * Group ID that member has left.
             */
            groupId?: string;
            /**
             * Group member that left.
             */
            groupMember?: Events.socialGroupsV2GroupMemberGroupMember;
        };
        type socialGroupsV2GroupMemberMemberRemoved = {
            /**
             * Group ID that member was removed from.
             */
            groupId?: string;
            /**
             * Removed group member.
             */
            groupMember?: Events.socialGroupsV2GroupMemberGroupMember;
        };
        type socialGroupsV2GroupMemberMembership = {
            /**
             * Group ID.
             */
            groupId?: string;
            /**
             * Group member role. When membership status is not `JOINED`, this is empty.
             */
            role?: Events.socialGroupsV2GroupMemberGroupRole;
            /**
             * Membership status with Group
             * - `JOINED` - Site member is a group member.
             * - `PENDING` - Site member has submitted a Join Request for this group that is still `PENDING`.
             */
            status?: string;
        };
        type socialGroupsV2GroupMemberMembershipQuestionAnswer = {
            /**
             * Question ID.
             */
            _id?: string;
            /**
             * Answer text.
             */
            text?: string;
        };
        type socialGroupsV2GroupMemberPaging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type socialGroupsV2GroupMemberPagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query.
             */
            total?: number;
        };
        type socialGroupsV2GroupMemberQuery = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Events.socialGroupsV2GroupMemberPaging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Events.socialGroupsV2GroupMemberSorting>;
        };
        type socialGroupsV2GroupMemberQueryGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            query?: Events.socialGroupsV2GroupMemberQuery;
        };
        type socialGroupsV2GroupMemberQueryGroupMembersResponse = {
            /**
             * Group members.
             */
            members?: Array<Events.socialGroupsV2GroupMemberGroupMember>;
            /**
             * Paging information.
             */
            metadata?: Events.socialGroupsV2GroupMemberPagingMetadata;
        };
        type socialGroupsV2GroupMemberQueryMembershipsRequest = {
            /**
             * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            memberId: string;
            query?: Events.socialGroupsV2GroupMemberQuery;
            /**
             * __Deprecated.__ Use the `memberId` path parameter instead.
             * This parameter will be removed on June 30, 2022.
             */
            siteMemberId?: string;
        };
        type socialGroupsV2GroupMemberQueryMembershipsResponse = {
            /**
             * Site member's memberships.
             */
            memberships?: Array<Events.socialGroupsV2GroupMemberMembership>;
            /**
             * Paging information.
             */
            metadata?: Events.socialGroupsV2GroupMemberPagingMetadata;
        };
        type socialGroupsV2GroupMemberQueryNonGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            query?: Events.socialGroupsV2GroupMemberQuery;
        };
        type socialGroupsV2GroupMemberQueryNonGroupMembersResponse = {
            /**
             * Retrieved members.
             */
            members?: Array<Events.socialGroupsV2GroupMemberGroupMember>;
        };
        type socialGroupsV2GroupMemberRemoveGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            memberIds?: Array<string>;
            /**
             * __Deprecated.__ Use `memberIds` instead.
             * This parameter will be removed on June 30, 2022.
             */
            siteMemberIds?: Array<string>;
        };
        type socialGroupsV2GroupMemberRemoveGroupMembersResponse = {};
        type socialGroupsV2GroupMemberSorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type socialGroupsV2GroupPaging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type socialGroupsV2GroupPagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query.
             */
            total?: number;
        };
        type socialGroupsV2GroupPosition = {
            /**
             * horizontal coordinate
             */
            x?: number;
            /**
             * vertical coordinate
             */
            y?: number;
        };
        type socialGroupsV2GroupQuery = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Events.socialGroupsV2GroupPaging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Events.socialGroupsV2GroupSorting>;
        };
        type socialGroupsV2GroupQueryGroupsByMembershipRequest = {
            /**
             * Supported values:
             * - `'JOINED'`
             * - `'NONE'`
             * - `'PENDING'`
             */
            membershipStatus?: string;
            query?: Events.socialGroupsV2GroupQuery;
        };
        type socialGroupsV2GroupQueryGroupsByMembershipResponse = {
            /**
             * Retrieved groups.
             */
            groups?: Array<Events.socialGroupsV2GroupGroup>;
            metadata?: Events.socialGroupsV2GroupPagingMetadata;
        };
        type socialGroupsV2GroupQueryGroupsRequest = {
            query?: Events.socialGroupsV2GroupQuery;
        };
        type socialGroupsV2GroupQueryGroupsResponse = {
            /**
             * Retrieved groups.
             */
            groups?: Array<Events.socialGroupsV2GroupGroup>;
            metadata?: Events.socialGroupsV2GroupPagingMetadata;
        };
        type socialGroupsV2GroupQueryJoinedGroupsRequest = {
            query?: Events.socialGroupsV2GroupQuery;
        };
        type socialGroupsV2GroupQueryJoinedGroupsResponse = {
            /**
             * Retrieved groups.
             */
            groups?: Array<Events.socialGroupsV2GroupGroup>;
            metadata?: Events.socialGroupsV2GroupPagingMetadata;
        };
        type socialGroupsV2GroupRequestAccessRestriction = {
            events?: Events.socialGroupsV2GroupRequestEvents;
            /**
             * Supported values:
             * - `'ADMIN_APPROVAL'`
             * - `'EVENTS'`
             * - `'PAID_PLANS'`
             * - `'UNKNOWN'`
             */
            type?: string;
        };
        type socialGroupsV2GroupRequestAccessRestrictionDataOneOf = {
            events?: Events.socialGroupsV2GroupRequestEvents;
        };
        type socialGroupsV2GroupRequestApproveGroupRequestsRequest = {
            /**
             * Group Request IDs to approve. Limited to `100`.
             */
            groupRequestIds?: Array<string>;
        };
        type socialGroupsV2GroupRequestApproveGroupRequestsResponse = {
            /**
             * Approved Group Requests.
             */
            groupRequest?: Array<Events.socialGroupsV2GroupRequestGroupRequest>;
        };
        type socialGroupsV2GroupRequestBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type socialGroupsV2GroupRequestCancelGroupRequestRequest = {
            /**
             * ID of the Group Request to cancel.
             */
            groupRequestId: string;
        };
        type socialGroupsV2GroupRequestCancelGroupRequestResponse = {
            /**
             * Canceled Group Request.
             */
            groupRequest?: Events.socialGroupsV2GroupRequestGroupRequest;
        };
        type socialGroupsV2GroupRequestCoverImage = {
            /**
             * Cover image.
             */
            image?: Events.socialGroupsV2GroupRequestImage;
            /**
             * Position of the corner of the cover image (or logo) for mobile browser.
             */
            mobilePosition?: Events.socialGroupsV2GroupRequestPosition;
            /**
             * Position of the corner of the cover image (or logo).
             */
            position?: Events.socialGroupsV2GroupRequestPosition;
        };
        type socialGroupsV2GroupRequestEvents = {
            eventIds?: Array<string>;
        };
        type socialGroupsV2GroupRequestGroup = {
            /**
             * Group creation date and time.
             */
            _createdDate?: Date;
            /**
             * Group ID.
             */
            _id?: string;
            /**
             * Date and time of the latest group update.
             */
            _updatedDate?: Date;
            /**
             * Cover image. You cannot upload your own cover image.
             */
            coverImage?: Events.socialGroupsV2GroupRequestCoverImage;
            /**
             * __Deprecated.__ Use `ownerId` instead.
             * This property will be removed on June 30, 2022.
             */
            createdBy?: Events.socialGroupsV2GroupRequestIdentity;
            /**
             * Group description in DraftJS format.
             */
            description?: string;
            /**
             * __Deprecated.__
             * For `details.logo`, use `coverImage` instead.
             * For `details.membersTitle`, `memberTitle` instead.
             * This property will be removed on June 30, 2022.
             */
            details?: Events.socialGroupsV2GroupRequestGroupDetails;
            /**
             * Date and time of the most recent group activity, for example a post or comment.
             */
            lastActivityDate?: Date;
            /**
             * What group members are called, for example `Coworkers`, `Friends`, or `Students`.
             */
            memberTitle?: string;
            /**
             * Total count of current group members.
             */
            membersCount?: number;
            /**
             * Group name.
             */
            name?: string;
            /**
             * Group owner.
             */
            ownerId?: string;
            /**
             * __Deprecated.__ Use `privacyStatus` instead.
             * This property will be removed on June 30, 2022.
             */
            privacyLevel?: string;
            /**
             * Group privacy status.
             * - `PUBLIC` - Anyone can see the group and its content. Anyone can join the group.
             * - `PRIVATE` - Anyone can see the group, but only members can see its content. New member must submit a `Join Group Request`.
             * - `SECRET` - Only admins and members can see the group. New members can only be added by other members.
             */
            privacyStatus?: string;
            /**
             * __Deprecated.__ Use `lastActivityDate` instead.
             * This property will be removed on June 30, 2022.
             */
            recentActivityDate?: Date;
            /**
             * Group specific settings. Available to the site owners under `Admin Tools` in the Business Manager.
             */
            settings?: Events.socialGroupsV2GroupRequestGroupSettings;
            /**
             * A unique part of a group's URL, for example `https:/example.com/groups/slug`.
             */
            slug?: string;
            /**
             * Group teaser.
             */
            teaser?: string;
            /**
             * __Deprecated.__ Use `name` instead.
             * This property will be removed on June 30, 2022.
             */
            title?: string;
        };
        type socialGroupsV2GroupRequestGroupDetails = {
            /**
             * Group logo. You cannot upload your own logo.
             */
            logo?: Events.socialGroupsV2GroupRequestLogo;
            /**
             * What group members are called, for example `Coworkers`, `Friends`, or `Students`.
             */
            membersTitle?: string;
        };
        type socialGroupsV2GroupRequestGroupDetailsPosition = {
            /**
             * horizontal coordinate
             */
            x?: number;
            /**
             * vertical coordinate
             */
            y?: number;
        };
        type socialGroupsV2GroupRequestGroupRequest = {
            /**
             * Group request ID
             */
            _id?: string;
            /**
             * Group requested for creation.
             */
            group?: Events.socialGroupsV2GroupRequestGroup;
            /**
             * Group request details.
             */
            requestDetails?: Events.socialGroupsV2GroupRequestRequestDetails;
            /**
             * Status of group request.
             * - `PENDING` - Pending group request.
             * - `APPROVED` - Approved group request.
             * - `REJECTED` - Rejected group request.
             * - `CANCELED` - Canceled group request.
             */
            status?: string;
        };
        type socialGroupsV2GroupRequestGroupRequestApproved = {
            /**
             * Approved group request.
             */
            groupRequest?: Events.socialGroupsV2GroupRequestGroupRequest;
        };
        type socialGroupsV2GroupRequestGroupRequestApprovedEvent = {
            data: Events.socialGroupsV2GroupRequestGroupRequestApproved;
            metadata: Events.socialGroupsV2GroupRequestBackendEventMetadata;
        };
        type socialGroupsV2GroupRequestGroupRequestRejected = {
            /**
             * Rejected group request.
             */
            groupRequest?: Events.socialGroupsV2GroupRequestGroupRequest;
        };
        type socialGroupsV2GroupRequestGroupRequestRejectedEvent = {
            data: Events.socialGroupsV2GroupRequestGroupRequestRejected;
            metadata: Events.socialGroupsV2GroupRequestBackendEventMetadata;
        };
        type socialGroupsV2GroupRequestGroupSettings = {
            /**
             * Whether an automatic post about changing the group details is enabled.
             */
            groupDetailsChangedPostEnabled?: boolean;
            /**
             * __Deprecated.__ Use `welcomeMemberPostEnabled` instead.
             * This property will be removed on June 30, 2022.
             */
            memberWelcomePostEnabled?: boolean;
            /**
             * Whether all group members are permitted to approve join group requests.
             * If `false`, member approval is limited to the admins.
             */
            membersCanApprove?: boolean;
            /**
             * Whether regular members are permitted to invite new members.
             * If `false`, only admins can invite members. Defaults to `true`.
             */
            membersCanInvite?: boolean;
            /**
             * Whether all members can see the full member list.
             */
            showMemberList?: boolean;
            /**
             * Whether a daily post about new members is enabled.
             */
            welcomeMemberPostEnabled?: boolean;
        };
        type socialGroupsV2GroupRequestIdentity = {
            /**
             * Member ID of the group creator.  See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            _id?: string;
            /**
             * Supported values:
             * - `'MEMBER'`
             * - `'USER'`
             */
            identityType?: string;
        };
        type socialGroupsV2GroupRequestImage = {
            /**
             * Image height.
             */
            height?: number;
            /**
             * Image ID (for internal use).
             */
            mediaId?: string;
            /**
             * Image width.
             */
            width?: number;
        };
        type socialGroupsV2GroupRequestListGroupRequestsRequest = {
            /**
             * Number of items to load. Maximum `100`.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type socialGroupsV2GroupRequestListGroupRequestsResponse = {
            /**
             * Group Requests.
             */
            groupRequests?: Array<Events.socialGroupsV2GroupRequestGroupRequest>;
            metadata?: Events.socialGroupsV2GroupRequestPagingMetadata;
        };
        type socialGroupsV2GroupRequestLogo = {
            /**
             * Logo image height.
             */
            height?: number;
            /**
             * Logo image ID (for internal use).
             */
            mediaId?: string;
            /**
             * Logo image width.
             */
            width?: number;
        };
        type socialGroupsV2GroupRequestPaging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type socialGroupsV2GroupRequestPagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query.
             */
            total?: number;
        };
        type socialGroupsV2GroupRequestPosition = {
            /**
             * horizontal coordinate
             */
            x?: number;
            /**
             * vertical coordinate
             */
            y?: number;
        };
        type socialGroupsV2GroupRequestQuery = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Events.socialGroupsV2GroupRequestPaging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Events.socialGroupsV2GroupRequestSorting>;
        };
        type socialGroupsV2GroupRequestQueryGroupRequestsRequest = {
            query?: Events.socialGroupsV2GroupRequestQuery;
        };
        type socialGroupsV2GroupRequestQueryGroupRequestsResponse = {
            /**
             * Retrieved Group Requests.
             */
            groupRequests?: Array<Events.socialGroupsV2GroupRequestGroupRequest>;
            metadata?: Events.socialGroupsV2GroupRequestPagingMetadata;
        };
        type socialGroupsV2GroupRequestRejectGroupRequestsRequest = {
            /**
             * Rejection data.
             */
            rejections?: Array<Events.socialGroupsV2GroupRequestRejection>;
        };
        type socialGroupsV2GroupRequestRejectGroupRequestsResponse = {
            /**
             * Rejected Group Requests.
             */
            groupRequest?: Array<Events.socialGroupsV2GroupRequestGroupRequest>;
        };
        type socialGroupsV2GroupRequestRejection = {
            /**
             * ID of the Group Request to reject.
             */
            groupRequestId?: string;
            /**
             * Rejection reason. Free text displayed to the creator of the rejected Group Request. Limited to 1,000 characters.
             */
            reason?: string;
        };
        type socialGroupsV2GroupRequestRequestDetails = {
            /**
             * Reason the request has been rejected.
             */
            rejectionReason?: string;
        };
        type socialGroupsV2GroupRequestSorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type socialGroupsV2GroupRequestSubmitGroupRequestRequest = {
            /**
             * Group submitted for creation.
             */
            group?: Events.socialGroupsV2GroupRequestGroup;
        };
        type socialGroupsV2GroupRequestSubmitGroupRequestResponse = {
            /**
             * Submitted Group Request.
             */
            groupRequest?: Events.socialGroupsV2GroupRequestGroupRequest;
        };
        type socialGroupsV2GroupRoleAssignRoleRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            memberIds?: Array<string>;
            /**
             * Role to assign.
             */
            role?: Events.socialGroupsV2GroupRoleGroupRole;
            /**
             * __Deprecated.__ Use `memberIds` instead.
             * This parameter will be removed on June 30, 2022.
             */
            siteMemberIds?: Array<string>;
        };
        type socialGroupsV2GroupRoleAssignRoleResponse = {
            /**
             * Group ID.
             */
            groupId?: string;
            /**
             * Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            memberIds?: Array<string>;
            /**
             * Assigned role.
             */
            role?: Events.socialGroupsV2GroupRoleGroupRole;
            /**
             * __Deprecated.__ Use `memberIds` instead.
             * This parameter will be removed on June 30, 2022.
             */
            siteMemberIds?: Array<string>;
        };
        type socialGroupsV2GroupRoleBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type socialGroupsV2GroupRoleGroupMember = {
            /**
             * Date and time the group Member joined the group.
             */
            joinedDate?: Date;
            /**
             * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            memberId?: string;
            /**
             * Group Member Role.
             */
            role?: Events.socialGroupsV2GroupRoleGroupRole;
            /**
             * __Deprecated.__ Use `memberId` instead.
             * This property will be removed on June 30, 2022.
             */
            siteMemberId?: string;
        };
        type socialGroupsV2GroupRoleGroupRole = {
            /**
             * Member's role.
             * - `MEMBER` - Regular group member.
             * - `ADMIN` - Group administrator.
             */
            value?: string;
        };
        type socialGroupsV2GroupRoleGroupRoleAssigned = {
            data: Events.socialGroupsV2GroupRoleRoleAssignedToGroupMember;
            metadata: Events.socialGroupsV2GroupRoleBackendEventMetadata;
        };
        type socialGroupsV2GroupRoleGroupRoleUnassigned = {
            data: Events.socialGroupsV2GroupRoleRoleUnassignedFromGroupMember;
            metadata: Events.socialGroupsV2GroupRoleBackendEventMetadata;
        };
        type socialGroupsV2GroupRoleRoleAssignedToGroupMember = {
            /**
             * ID of site member who assigned the role. It can be empty if the role was assigned by a third-party application.
             */
            assignedById?: string;
            /**
             * Group ID in which role was assigned.
             */
            groupId?: string;
            /**
             * Group member to whom the role was assigned.
             */
            groupMember?: Events.socialGroupsV2GroupRoleGroupMember;
            /**
             * Assigned group role.
             */
            role?: Events.socialGroupsV2GroupRoleGroupRole;
        };
        type socialGroupsV2GroupRoleRoleUnassignedFromGroupMember = {
            /**
             * Group ID in which role was unassigned.
             */
            groupId?: string;
            /**
             * Group member from whom role was removed.
             */
            groupMember?: Events.socialGroupsV2GroupRoleGroupMember;
            /**
             * Unassigned group role.
             */
            role?: Events.socialGroupsV2GroupRoleGroupRole;
            /**
             * ID of site member who unassigned the role. It can be empty if the role was assigned by a third-party application.
             */
            unassignedById?: string;
        };
        type socialGroupsV2GroupRoleUnassignRoleRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            memberIds?: Array<string>;
            /**
             * Role to unassign.
             */
            role?: Events.socialGroupsV2GroupRoleGroupRole;
            /**
             * __Deprecated.__ Use `memberIds` instead.
             * This parameter will be removed on June 30, 2022.
             */
            siteMemberIds?: Array<string>;
        };
        type socialGroupsV2GroupRoleUnassignRoleResponse = {
            /**
             * Group ID.
             */
            groupId?: string;
            /**
             * Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            memberIds?: Array<string>;
            /**
             * Unassigned role.
             */
            role?: Events.socialGroupsV2GroupRoleGroupRole;
            /**
             * Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
             */
            siteMemberIds?: Array<string>;
        };
        type socialGroupsV2GroupRulesBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type socialGroupsV2GroupRulesCreateOrReplaceAllRulesRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * New rules.
             */
            rules?: Array<Events.socialGroupsV2GroupRulesGroupRule>;
        };
        type socialGroupsV2GroupRulesCreateOrReplaceAllRulesResponse = {
            /**
             * Group ID.
             */
            groupId?: string;
            /**
             * Rules.
             */
            rules?: Array<Events.socialGroupsV2GroupRulesGroupRule>;
        };
        type socialGroupsV2GroupRulesEmpty = {};
        type socialGroupsV2GroupRulesGroupRule = {
            /**
             * Rule description.
             */
            description?: string;
            /**
             * Rule title.
             */
            title?: string;
        };
        type socialGroupsV2GroupRulesGroupRules = {
            /**
             * Group rules.
             */
            rules?: Array<Events.socialGroupsV2GroupRulesGroupRule>;
        };
        type socialGroupsV2GroupRulesGroupRulesUpdated = {
            entity: Events.socialGroupsV2GroupRulesGroupRules;
            metadata: Events.socialGroupsV2GroupRulesBackendEventMetadata;
        };
        type socialGroupsV2GroupRulesListRulesRequest = {
            /**
             * Group ID.
             */
            groupId: string;
        };
        type socialGroupsV2GroupRulesListRulesResponse = {
            /**
             * Retrieved rules.
             */
            rules?: Array<Events.socialGroupsV2GroupRulesGroupRule>;
        };
        type socialGroupsV2GroupRulesListTemplatesResponse = {
            /**
             * Retrieved rule templates.
             */
            rules?: Array<Events.socialGroupsV2GroupRulesGroupRule>;
        };
        type socialGroupsV2GroupSorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type socialGroupsV2GroupUpdateGroupRequest = {
            /**
             * Group to update.
             */
            group?: Events.socialGroupsV2GroupGroup;
        };
        type socialGroupsV2GroupUpdateGroupResponse = {
            /**
             * Updated group.
             */
            group?: Events.socialGroupsV2GroupGroup;
        };
        type socialGroupsV2JoinGroupRequestApproveAllJoinGroupRequestsRequest = {};
        type socialGroupsV2JoinGroupRequestApproveAllJoinGroupRequestsResponse = {
            /**
             * Rejected join group requests.
             */
            joinGroupRequests?: Array<Events.socialGroupsV2JoinGroupRequestJoinGroupRequest>;
        };
        type socialGroupsV2JoinGroupRequestApproveJoinGroupRequestsRequest = {
            /**
             * Relevant group.
             */
            groupId: string;
            /**
             * Member IDs to approve.
             *
             *
             *
             * __Important:__
             * This parameter will be required after the deprecated `siteMemberIds` is removed
             * on June 30, 2022.
             *
             *
             */
            memberIds?: Array<string>;
            /**
             * __Deprecated.__ Use `memberIds` instead.
             * This parameter will be removed on June 30, 2022.
             *
             * Required if `memberIds` is not provided.
             */
            siteMemberIds?: Array<string>;
        };
        type socialGroupsV2JoinGroupRequestApproveJoinGroupRequestsResponse = {
            /**
             * Approved join group requests.
             */
            joinGroupRequests?: Array<Events.socialGroupsV2JoinGroupRequestJoinGroupRequest>;
        };
        type socialGroupsV2JoinGroupRequestBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type socialGroupsV2JoinGroupRequestCancelJoinGroupRequestRequest = {
            /**
             * Relevant group.
             */
            groupId: string;
        };
        type socialGroupsV2JoinGroupRequestCancelJoinGroupRequestResponse = {
            /**
             * Cancelled join group request.
             */
            joinGroupRequest?: Events.socialGroupsV2JoinGroupRequestJoinGroupRequest;
        };
        type socialGroupsV2JoinGroupRequestEventsViolationOptions = {
            /**
             * Events which allow user to join the group.
             */
            eventIds?: Array<string>;
        };
        type socialGroupsV2JoinGroupRequestGetJoinRequirementsRequest = {
            autoInviteId?: string;
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<Events.socialGroupsV2JoinGroupRequestMembershipQuestionAnswer>;
        };
        type socialGroupsV2JoinGroupRequestGetJoinRequirementsResponse = {
            violation?: Events.socialGroupsV2JoinGroupRequestViolation;
        };
        type socialGroupsV2JoinGroupRequestJoinGroupRequest = {
            /**
             * Join group request details.
             */
            requestDetails?: Events.socialGroupsV2JoinGroupRequestRequestDetails;
            /**
             * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            siteMemberId?: string;
            /**
             * Join group request status.
             * - `PENDING` - Pending join group request.
             * - `APPROVED` - Approved join group request.
             * - `REJECTED` - Rejected join group request.
             * - `CANCELED` - Canceled join group request.
             */
            status?: string;
        };
        type socialGroupsV2JoinGroupRequestJoinGroupRequestApproved = {
            /**
             * Group ID for which join request was approved.
             */
            groupId?: string;
            /**
             * Approved join group request.
             */
            joinGroupRequest?: Events.socialGroupsV2JoinGroupRequestJoinGroupRequest;
        };
        type socialGroupsV2JoinGroupRequestJoinGroupRequestApprovedEvent = {
            data: Events.socialGroupsV2JoinGroupRequestJoinGroupRequestApproved;
            metadata: Events.socialGroupsV2JoinGroupRequestBackendEventMetadata;
        };
        type socialGroupsV2JoinGroupRequestJoinGroupRequestCancelled = {
            /**
             * Group ID for which join request was cancelled.
             */
            groupId?: string;
            /**
             * Cancelled join group request.
             */
            joinGroupRequest?: Events.socialGroupsV2JoinGroupRequestJoinGroupRequest;
        };
        type socialGroupsV2JoinGroupRequestJoinGroupRequestRejected = {
            /**
             * Group ID for which join request was rejected.
             */
            groupId?: string;
            /**
             * Rejected join group request.
             */
            joinGroupRequest?: Events.socialGroupsV2JoinGroupRequestJoinGroupRequest;
        };
        type socialGroupsV2JoinGroupRequestJoinGroupRequestRejectedEvent = {
            data: Events.socialGroupsV2JoinGroupRequestJoinGroupRequestRejected;
            metadata: Events.socialGroupsV2JoinGroupRequestBackendEventMetadata;
        };
        type socialGroupsV2JoinGroupRequestListAllJoinGroupRequestsRequest = {};
        type socialGroupsV2JoinGroupRequestListAllJoinGroupRequestsResponse = {
            /**
             * Join group requests.
             */
            joinGroupRequests?: Array<Events.socialGroupsV2JoinGroupRequestJoinGroupRequest>;
        };
        type socialGroupsV2JoinGroupRequestListJoinGroupRequestsRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            limit?: number;
            offset?: number;
        };
        type socialGroupsV2JoinGroupRequestListJoinGroupRequestsResponse = {
            /**
             * Join group requests.
             */
            joinGroupRequests?: Array<Events.socialGroupsV2JoinGroupRequestJoinGroupRequest>;
            metadata?: Events.socialGroupsV2JoinGroupRequestPagingMetadata;
        };
        type socialGroupsV2JoinGroupRequestMembershipQuestionAnswer = {
            /**
             * Question ID.
             */
            _id?: string;
            /**
             * Answer text.
             */
            text?: string;
        };
        type socialGroupsV2JoinGroupRequestMembershipQuestionViolationOptions = {
            requiredQuestionIds?: Array<string>;
        };
        type socialGroupsV2JoinGroupRequestPaging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type socialGroupsV2JoinGroupRequestPagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query.
             */
            total?: number;
        };
        type socialGroupsV2JoinGroupRequestPaidPlan = {
            name?: string;
            planId?: string;
            startsAt?: Date;
        };
        type socialGroupsV2JoinGroupRequestPricingPlanViolationOptions = {
            /**
             * Plan ids which user have, but they don't allow to join group right now, because they start some time in the future.
             */
            futurePlans?: Array<Events.socialGroupsV2JoinGroupRequestPaidPlan>;
            installed?: boolean;
            /**
             * Plan ids which allow user to join the group.
             */
            requiredPlans?: Array<Events.socialGroupsV2JoinGroupRequestPaidPlan>;
        };
        type socialGroupsV2JoinGroupRequestQuery = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Events.socialGroupsV2JoinGroupRequestPaging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Events.socialGroupsV2JoinGroupRequestSorting>;
        };
        type socialGroupsV2JoinGroupRequestQueryJoinGroupRequestsRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            query?: Events.socialGroupsV2JoinGroupRequestQuery;
        };
        type socialGroupsV2JoinGroupRequestQueryJoinGroupRequestsResponse = {
            /**
             * Join group requests.
             */
            joinGroupRequests?: Array<Events.socialGroupsV2JoinGroupRequestJoinGroupRequest>;
            metadata?: Events.socialGroupsV2JoinGroupRequestPagingMetadata;
        };
        type socialGroupsV2JoinGroupRequestRejectAllJoinGroupRequestsRequest = {};
        type socialGroupsV2JoinGroupRequestRejectAllJoinGroupRequestsResponse = {
            /**
             * Rejected join group requests.
             */
            joinGroupRequests?: Array<Events.socialGroupsV2JoinGroupRequestJoinGroupRequest>;
        };
        type socialGroupsV2JoinGroupRequestRejectJoinGroupRequestsRequest = {
            /**
             * Relevant group.
             */
            groupId: string;
            /**
             * Rejection data.
             */
            rejections?: Array<Events.socialGroupsV2JoinGroupRequestRejection>;
        };
        type socialGroupsV2JoinGroupRequestRejectJoinGroupRequestsResponse = {
            /**
             * Rejected join group requests.
             */
            joinGroupRequests?: Array<Events.socialGroupsV2JoinGroupRequestJoinGroupRequest>;
        };
        type socialGroupsV2JoinGroupRequestRejection = {
            /**
             * Member ID to reject.
             */
            memberId?: string;
            /**
             * Rejection reason. Free text that will be displayed to the rejected site member (max 1,000 characters).
             */
            reason?: string;
        };
        type socialGroupsV2JoinGroupRequestRequestDetails = {
            /**
             * Reason the request has been rejected.
             */
            rejectionReason?: string;
        };
        type socialGroupsV2JoinGroupRequestSorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type socialGroupsV2JoinGroupRequestSubmitJoinGroupRequestRequest = {
            /**
             * Relevant group.
             */
            groupId: string;
            /**
             * Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<Events.socialGroupsV2JoinGroupRequestMembershipQuestionAnswer>;
        };
        type socialGroupsV2JoinGroupRequestSubmitJoinGroupRequestResponse = {
            /**
             * Submitted join group request.
             */
            joinGroupRequest?: Events.socialGroupsV2JoinGroupRequestJoinGroupRequest;
        };
        type socialGroupsV2JoinGroupRequestViolation = {
            eventsOptions?: Events.socialGroupsV2JoinGroupRequestEventsViolationOptions;
            membershipQuestionsOptions?: Events.socialGroupsV2JoinGroupRequestMembershipQuestionViolationOptions;
            pricingPlansOptions?: Events.socialGroupsV2JoinGroupRequestPricingPlanViolationOptions;
            /**
             * Supported values:
             * - `'ADMIN_APPROVAL'`
             * - `'ALREADY_JOINED'`
             * - `'EVENTS'`
             * - `'MEMBERSHIP_QUESTIONS'`
             * - `'NONE'`
             * - `'NOT_LOGGED_IN'`
             * - `'PRICING_PlANS'`
             * - `'SECRET_GROUP'`
             */
            violationType?: string;
        };
        type socialGroupsV2JoinGroupRequestViolationViolationOptionsOneOf = {
            eventsOptions?: Events.socialGroupsV2JoinGroupRequestEventsViolationOptions;
            membershipQuestionsOptions?: Events.socialGroupsV2JoinGroupRequestMembershipQuestionViolationOptions;
            pricingPlansOptions?: Events.socialGroupsV2JoinGroupRequestPricingPlanViolationOptions;
        };
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.html#)
     */
    namespace Groups {
        type AccessRestriction = {
            events?: Groups.Events;
            /**
             * Supported values:
             * - `'ADMIN_APPROVAL'`
             * - `'EVENTS'`
             * - `'PAID_PLANS'`
             * - `'UNKNOWN'`
             */
            type?: string;
        };
        type AccessRestrictionDataOneOf = {
            events?: Groups.Events;
        };
        type CoverImage = {
            /**
             * Cover image.
             */
            image?: Groups.Image;
            /**
             * Position of the corner of the cover image (or logo) for mobile browser.
             */
            mobilePosition?: Groups.Position;
            /**
             * Position of the corner of the cover image (or logo).
             */
            position?: Groups.Position;
        };
        type CreateGroupOptions = {
            /**
             * ID of the member who created the group. This member will automatically become an admin.
             */
            creatorId?: string;
        };
        type CreateGroupRequest = {
            /**
             * ID of the member who created the group. This member will automatically become an admin.
             */
            creatorId?: string;
            /**
             * Group to create.
             */
            group?: Groups.Group;
        };
        type CreateGroupResponse = {
            /**
             * Created group.
             */
            group?: Groups.Group;
        };
        type DeleteGroupRequest = {
            /**
             * ID of the group to delete.
             */
            groupId: string;
        };
        type DeleteGroupResponse = {
            /**
             * Deleted group.
             */
            group?: Groups.Group;
        };
        type Events = {
            eventIds?: Array<string>;
        };
        type GetGroupBySlugRequest = {
            /**
             * Unique part of the group's URL, for example `group-1` in `https:/example.com/groups/group-1`. Pass only the slug. Case-sensitive.
             */
            slug: string;
        };
        type GetGroupBySlugResponse = {
            /**
             * Retrieved group.
             */
            group?: Groups.Group;
        };
        type GetGroupOptions = {};
        type GetGroupRequest = {
            /**
             * ID of the group to retrieve.
             */
            groupId: string;
        };
        type GetGroupResponse = {
            /**
             * Retrieved group.
             */
            group?: Groups.Group;
        };
        type Group = {
            /**
             * Group creation date and time.
             */
            _createdDate?: Date;
            /**
             * Group ID.
             */
            _id?: string;
            /**
             * Date and time of the latest group update.
             */
            _updatedDate?: Date;
            /**
             * Cover image. You cannot upload your own cover image.
             */
            coverImage?: Groups.CoverImage;
            /**
             * Group description in DraftJS format.
             */
            description?: string;
            /**
             * Date and time of the most recent group activity, for example a post or comment.
             */
            lastActivityDate?: Date;
            /**
             * What group members are called, for example `Coworkers`, `Friends`, or `Students`.
             */
            memberTitle?: string;
            /**
             * Total count of current group members.
             */
            membersCount?: number;
            /**
             * Group name.
             */
            name?: string;
            /**
             * Group owner.
             */
            ownerId?: string;
            /**
             * Group privacy status.
             * - `PUBLIC` - Anyone can see the group and its content. Anyone can join the group.
             * - `PRIVATE` - Anyone can see the group, but only members can see its content. New member must submit a `Join Group Request`.
             * - `SECRET` - Only admins and members can see the group. New members can only be added by other members.
             */
            privacyStatus?: string;
            /**
             * Group specific settings. Available to the site owners under `Admin Tools` in the Business Manager.
             */
            settings?: Groups.GroupSettings;
            /**
             * A unique part of a group's URL, for example `https:/example.com/groups/slug`.
             */
            slug?: string;
            /**
             * Group teaser.
             */
            teaser?: string;
        };
        type GroupCoverChanged = {
            newUrl?: string;
            oldUrl?: string;
        };
        type GroupDescriptionChanged = {
            newDescription?: string;
            oldDescription?: string;
        };
        type GroupDetails = {
            /**
             * Group logo. You cannot upload your own logo.
             */
            logo?: Groups.Logo;
            /**
             * What group members are called, for example `Coworkers`, `Friends`, or `Students`.
             */
            membersTitle?: string;
        };
        type GroupDetailsPosition = {
            /**
             * horizontal coordinate
             */
            x?: number;
            /**
             * vertical coordinate
             */
            y?: number;
        };
        type GroupSettings = {
            /**
             * Whether an automatic post about changing the group details is enabled.
             */
            groupDetailsChangedPostEnabled?: boolean;
            /**
             * Whether all group members are permitted to approve join group requests.
             * If `false`, member approval is limited to the admins.
             */
            membersCanApprove?: boolean;
            /**
             * Whether regular members are permitted to invite new members.
             * If `false`, only admins can invite members. Defaults to `true`.
             */
            membersCanInvite?: boolean;
            /**
             * Whether all members can see the full member list.
             */
            showMemberList?: boolean;
            /**
             * Whether a daily post about new members is enabled.
             */
            welcomeMemberPostEnabled?: boolean;
        };
        type GroupWithMsId = {
            groups?: Array<Groups.Group>;
            metaSiteId?: string;
        };
        type Identity = {
            /**
             * Member ID of the group creator.  See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            _id?: string;
            /**
             * Supported values:
             * - `'MEMBER'`
             * - `'USER'`
             */
            identityType?: string;
        };
        type Image = {
            /**
             * Image height.
             */
            height?: number;
            /**
             * Image ID (for internal use).
             */
            mediaId?: string;
            /**
             * Image width.
             */
            width?: number;
        };
        type ListGroupsByUserIdRequest = {};
        type ListGroupsByUserIdResponse = {
            groups?: Array<Groups.GroupWithMsId>;
        };
        type ListGroupsOptions = {
            /**
             * Number of items to load. Maximum `100`.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type ListGroupsRequest = {
            /**
             * Number of items to load. Maximum `100`.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type ListGroupsResponse = {
            /**
             * Retrieved Groups.
             */
            groups?: Array<Groups.Group>;
            metadata?: Groups.PagingMetadata;
        };
        type Logo = {
            /**
             * Logo image height.
             */
            height?: number;
            /**
             * Logo image ID (for internal use).
             */
            mediaId?: string;
            /**
             * Logo image width.
             */
            width?: number;
        };
        type Paging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type PagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query.
             */
            total?: number;
        };
        type Position = {
            /**
             * horizontal coordinate
             */
            x?: number;
            /**
             * vertical coordinate
             */
            y?: number;
        };
        type Query = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Groups.Paging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Groups.Sorting>;
        };
        type QueryGroupsByMembershipOptions = {
            /**
             * Supported values:
             * - `'JOINED'`
             * - `'NONE'`
             * - `'PENDING'`
             */
            membershipStatus?: string;
            query?: Groups.Query;
        };
        type QueryGroupsByMembershipRequest = {
            /**
             * Supported values:
             * - `'JOINED'`
             * - `'NONE'`
             * - `'PENDING'`
             */
            membershipStatus?: string;
            query?: Groups.Query;
        };
        type QueryGroupsByMembershipResponse = {
            /**
             * Retrieved groups.
             */
            groups?: Array<Groups.Group>;
            metadata?: Groups.PagingMetadata;
        };
        type QueryGroupsRequest = {
            query?: Groups.Query;
        };
        type QueryGroupsResponse = {
            /**
             * Retrieved groups.
             */
            groups?: Array<Groups.Group>;
            metadata?: Groups.PagingMetadata;
        };
        type QueryJoinedGroupsOptions = {
            query?: Groups.Query;
        };
        type QueryJoinedGroupsRequest = {
            query?: Groups.Query;
        };
        type QueryJoinedGroupsResponse = {
            /**
             * Retrieved groups.
             */
            groups?: Array<Groups.Group>;
            metadata?: Groups.PagingMetadata;
        };
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type UpdateGroup = {
            /**
             * Group creation date and time.
             */
            _createdDate?: Date;
            /**
             * Group ID.
             */
            _id?: string;
            /**
             * Date and time of the latest group update.
             */
            _updatedDate?: Date;
            /**
             * Cover image. You cannot upload your own cover image.
             */
            coverImage?: Groups.CoverImage;
            /**
             * Group description in DraftJS format.
             */
            description?: string;
            /**
             * Date and time of the most recent group activity, for example a post or comment.
             */
            lastActivityDate?: Date;
            /**
             * What group members are called, for example `Coworkers`, `Friends`, or `Students`.
             */
            memberTitle?: string;
            /**
             * Total count of current group members.
             */
            membersCount?: number;
            /**
             * Group name.
             */
            name?: string;
            /**
             * Group owner.
             */
            ownerId?: string;
            /**
             * Group privacy status.
             * - `PUBLIC` - Anyone can see the group and its content. Anyone can join the group.
             * - `PRIVATE` - Anyone can see the group, but only members can see its content. New member must submit a `Join Group Request`.
             * - `SECRET` - Only admins and members can see the group. New members can only be added by other members.
             */
            privacyStatus?: string;
            /**
             * Group specific settings. Available to the site owners under `Admin Tools` in the Business Manager.
             */
            settings?: Groups.GroupSettings;
            /**
             * A unique part of a group's URL, for example `https:/example.com/groups/slug`.
             */
            slug?: string;
            /**
             * Group teaser.
             */
            teaser?: string;
        };
        type UpdateGroupRequest = {
            /**
             * Group to update.
             */
            group?: Groups.Group;
        };
        type UpdateGroupResponse = {
            /**
             * Updated group.
             */
            group?: Groups.Group;
        };
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#)
         */
        interface GroupsQueryBuilder {
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#ascending)
             */
            ascending(propertyNames: Array<string>): Groups.GroupsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#descending)
             */
            descending(propertyNames: Array<string>): Groups.GroupsQueryBuilder;
            /**
             * Refines a query to match items where the specified property equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): Groups.GroupsQueryBuilder;
            /**
             * Refines a query to match items where the specified property contains a value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#exists)
             */
            exists(propertyName: string, value: boolean): Groups.GroupsQueryBuilder;
            /**
             * Returns the query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#find)
             */
            find(): Promise<Groups.GroupsQueryResult>;
            /**
             * Refines a query to match items whose specified property contains any of the specified values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, value: Array<any>): Groups.GroupsQueryBuilder;
            /**
             * Refines a query to only match items where the specified property conatins any of the values in the provided array of values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#in)
             */
            in(propertyName: string, value: any): Groups.GroupsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#limit)
             */
            limit(limit: number): Groups.GroupsQueryBuilder;
            /**
             * Refines a query to match items where the specified property doesn't equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): Groups.GroupsQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#skip)
             */
            skip(skip: number): Groups.GroupsQueryBuilder;
            /**
             * Refines a query to match items where the specified property starts with the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#startsWith)
             */
            startsWith(propertyName: string, value: string): Groups.GroupsQueryBuilder;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#)
         */
        interface GroupsQueryResult {
            /**
             * Returns the index of the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#currentPage)
             */
            currentPage: number;
            /**
             * Returns an array of `groups` items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#items)
             */
            items: Array<Groups.Group>;
            /**
             * Returns the number of items in the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#length)
             */
            length: number;
            /**
             * Returns the requested page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#pageSize)
             */
            pageSize: number;
            /**
             * Returns the `GroupsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#query)
             */
            query: Groups.GroupsQueryBuilder;
            /**
             * Returns the total number of items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#totalCount)
             */
            totalCount: number;
            /**
             * Returns the total number of pages the query produced.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#totalPages)
             */
            totalPages: number;
            /**
             * Indicates whether the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates whether the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#next)
             */
            next(): Promise<Groups.GroupsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#prev)
             */
            prev(): Promise<Groups.GroupsQueryResult>;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryBuilder.html#)
         */
        namespace GroupsQueryBuilder {
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Groups.GroupsQueryResult.html#)
         */
        namespace GroupsQueryResult {
        }
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.html#)
     */
    namespace JoinGroupRequests {
        type ApproveAllJoinGroupRequestsRequest = {};
        type ApproveAllJoinGroupRequestsResponse = {
            /**
             * Rejected join group requests.
             */
            joinGroupRequests?: Array<JoinGroupRequests.JoinGroupRequest>;
        };
        type ApproveJoinGroupRequestsOptions = {};
        type ApproveJoinGroupRequestsRequest = {
            /**
             * ID of the group requested to join.
             */
            groupId: string;
            /**
             * IDs of the site members to approve.
             */
            memberIds?: Array<string>;
        };
        type ApproveJoinGroupRequestsResponse = {
            /**
             * Approved join group requests.
             */
            joinGroupRequests?: Array<JoinGroupRequests.JoinGroupRequest>;
        };
        type CancelJoinGroupRequestRequest = {
            /**
             * ID of the group requested to join.
             */
            groupId: string;
        };
        type CancelJoinGroupRequestResponse = {
            /**
             * Cancelled join group request.
             */
            joinGroupRequest?: JoinGroupRequests.JoinGroupRequest;
        };
        type EventsViolationOptions = {
            /**
             * Events which allow user to join the group.
             */
            eventIds?: Array<string>;
        };
        type GetJoinRequirementsOptions = {
            autoInviteId?: string;
            /**
             * Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<JoinGroupRequests.MembershipQuestionAnswer>;
        };
        type GetJoinRequirementsRequest = {
            autoInviteId?: string;
            /**
             * ID of the group requested to join.
             */
            groupId: string;
            /**
             * Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<JoinGroupRequests.MembershipQuestionAnswer>;
        };
        type GetJoinRequirementsResponse = {
            violation?: JoinGroupRequests.Violation;
        };
        type JoinGroupRequest = {
            /**
             * Join group request details.
             */
            requestDetails?: JoinGroupRequests.RequestDetails;
            /**
             * Site member ID of the requester.
             */
            siteMemberId?: string;
            /**
             * Status of the request to join a group.
             *
             * One of:
             * - `"PENDING"`
             * - `"APPROVED"`
             * - `"REJECTED"`
             */
            status?: string;
        };
        type JoinGroupRequestApproved = {
            /**
             * Group ID for which join request was approved.
             */
            groupId?: string;
            /**
             * Approved join group request.
             */
            joinGroupRequest?: JoinGroupRequests.JoinGroupRequest;
        };
        type JoinGroupRequestCancelled = {
            /**
             * Group ID for which join request was cancelled.
             */
            groupId?: string;
            /**
             * Cancelled join group request.
             */
            joinGroupRequest?: JoinGroupRequests.JoinGroupRequest;
        };
        type JoinGroupRequestRejected = {
            /**
             * Group ID for which join request was rejected.
             */
            groupId?: string;
            /**
             * Rejected join group request.
             */
            joinGroupRequest?: JoinGroupRequests.JoinGroupRequest;
        };
        type ListAllJoinGroupRequestsRequest = {};
        type ListAllJoinGroupRequestsResponse = {
            /**
             * Join group requests.
             */
            joinGroupRequests?: Array<JoinGroupRequests.JoinGroupRequest>;
        };
        type ListJoinGroupRequestsOptions = {
            limit?: number;
            offset?: number;
        };
        type ListJoinGroupRequestsRequest = {
            /**
             * ID of the group requested to join.
             */
            groupId: string;
            limit?: number;
            offset?: number;
        };
        type ListJoinGroupRequestsResponse = {
            /**
             * Join group requests.
             */
            joinGroupRequests?: Array<JoinGroupRequests.JoinGroupRequest>;
            metadata?: JoinGroupRequests.PagingMetadata;
        };
        type MembershipQuestionAnswer = {
            /**
             * Question ID.
             */
            _id?: string;
            /**
             * Answer text.
             */
            text?: string;
        };
        type MembershipQuestionViolationOptions = {
            requiredQuestionIds?: Array<string>;
        };
        type Paging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type PagingMetadata = {
            /**
             * Number of items in the current results page.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query.
             */
            total?: number;
        };
        type PaidPlan = {
            name?: string;
            planId?: string;
            startsAt?: Date;
        };
        type PricingPlanViolationOptions = {
            /**
             * Plan ids which user have, but they don't allow to join group right now, because they start some time in the future.
             */
            futurePlans?: Array<JoinGroupRequests.PaidPlan>;
            installed?: boolean;
            /**
             * Plan ids which allow user to join the group.
             */
            requiredPlans?: Array<JoinGroupRequests.PaidPlan>;
        };
        type Query = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: JoinGroupRequests.Paging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<JoinGroupRequests.Sorting>;
        };
        type QueryJoinGroupRequestsOptions = {};
        type QueryJoinGroupRequestsRequest = {
            /**
             * ID of the group requested to join.
             */
            groupId: string;
            query?: JoinGroupRequests.Query;
        };
        type QueryJoinGroupRequestsResponse = {
            /**
             * Requests to join a group.
             */
            joinGroupRequests?: Array<JoinGroupRequests.JoinGroupRequest>;
            metadata?: JoinGroupRequests.PagingMetadata;
        };
        type RejectAllJoinGroupRequestsRequest = {};
        type RejectAllJoinGroupRequestsResponse = {
            /**
             * Rejected join group requests.
             */
            joinGroupRequests?: Array<JoinGroupRequests.JoinGroupRequest>;
        };
        type RejectJoinGroupRequestsOptions = {};
        type RejectJoinGroupRequestsRequest = {
            /**
             * ID of the group requested to join.
             */
            groupId: string;
            /**
             * Rejection data.
             */
            rejections?: Array<JoinGroupRequests.Rejection>;
        };
        type RejectJoinGroupRequestsResponse = {
            /**
             * Rejected join group requests.
             */
            joinGroupRequests?: Array<JoinGroupRequests.JoinGroupRequest>;
        };
        type Rejection = {
            /**
             * Member ID to reject.
             */
            memberId?: string;
            /**
             * Reason the request to join a group was rejected. Text written by the request reviewer that is displayed when the group is rejected (max 1,000 characters).
             */
            reason?: string;
        };
        type RequestDetails = {
            /**
             * Reason the request to join a group was rejected.
             */
            rejectionReason?: string;
        };
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type SubmitJoinGroupRequestOptions = {
            /**
             * Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<JoinGroupRequests.MembershipQuestionAnswer>;
        };
        type SubmitJoinGroupRequestRequest = {
            /**
             * ID of the group requested to join.
             */
            groupId: string;
            /**
             * Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<JoinGroupRequests.MembershipQuestionAnswer>;
        };
        type SubmitJoinGroupRequestResponse = {
            /**
             * Submitted join group request.
             */
            joinGroupRequest?: JoinGroupRequests.JoinGroupRequest;
        };
        type Violation = {
            eventsOptions?: JoinGroupRequests.EventsViolationOptions;
            membershipQuestionsOptions?: JoinGroupRequests.MembershipQuestionViolationOptions;
            pricingPlansOptions?: JoinGroupRequests.PricingPlanViolationOptions;
            /**
             * Supported values:
             * - `'ADMIN_APPROVAL'`
             * - `'ALREADY_JOINED'`
             * - `'EVENTS'`
             * - `'MEMBERSHIP_QUESTIONS'`
             * - `'NONE'`
             * - `'NOT_LOGGED_IN'`
             * - `'PRICING_PlANS'`
             * - `'SECRET_GROUP'`
             */
            violationType?: string;
        };
        type ViolationViolationOptionsOneOf = {
            eventsOptions?: JoinGroupRequests.EventsViolationOptions;
            membershipQuestionsOptions?: JoinGroupRequests.MembershipQuestionViolationOptions;
            pricingPlansOptions?: JoinGroupRequests.PricingPlanViolationOptions;
        };
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#)
         */
        interface JoinGroupRequestsQueryBuilder {
            /**
             * Refines a query to match items where the specified property equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): JoinGroupRequests.JoinGroupRequestsQueryBuilder;
            /**
             * Refines a query to match items where the specified property contains a value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#exists)
             */
            exists(propertyName: string, value: boolean): JoinGroupRequests.JoinGroupRequestsQueryBuilder;
            /**
             * Returns the query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#find)
             */
            find(): Promise<JoinGroupRequests.JoinGroupRequestsQueryResult>;
            /**
             * Refines a query to match items whose specified property contains any of the specified values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, value: Array<any>): JoinGroupRequests.JoinGroupRequestsQueryBuilder;
            /**
             * Refines a query to only match items where the specified property conatins any of the values in the provided array of values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#in)
             */
            in(propertyName: string, value: any): JoinGroupRequests.JoinGroupRequestsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#limit)
             */
            limit(limit: number): JoinGroupRequests.JoinGroupRequestsQueryBuilder;
            /**
             * Refines a query to match items where the specified property doesn't equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): JoinGroupRequests.JoinGroupRequestsQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#skip)
             */
            skip(skip: number): JoinGroupRequests.JoinGroupRequestsQueryBuilder;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#)
         */
        interface JoinGroupRequestsQueryResult {
            /**
             * Returns the index of the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#currentPage)
             */
            currentPage: number;
            /**
             * Returns an array of `joinGroupRequests` items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#items)
             */
            items: Array<JoinGroupRequests.JoinGroupRequest>;
            /**
             * Returns the number of items in the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#length)
             */
            length: number;
            /**
             * Returns the requested page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#pageSize)
             */
            pageSize: number;
            /**
             * Returns the `JoinGroupRequestsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#query)
             */
            query: JoinGroupRequests.JoinGroupRequestsQueryBuilder;
            /**
             * Returns the total number of items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#totalCount)
             */
            totalCount: number;
            /**
             * Returns the total number of pages the query produced.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#totalPages)
             */
            totalPages: number;
            /**
             * Indicates whether the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates whether the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#next)
             */
            next(): Promise<JoinGroupRequests.JoinGroupRequestsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#prev)
             */
            prev(): Promise<JoinGroupRequests.JoinGroupRequestsQueryResult>;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryBuilder.html#)
         */
        namespace JoinGroupRequestsQueryBuilder {
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.JoinGroupRequests.JoinGroupRequestsQueryResult.html#)
         */
        namespace JoinGroupRequestsQueryResult {
        }
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.html#)
     */
    namespace Members {
        type AddGroupMembersOptions = {};
        type AddGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * IDs of the site members to add to the group.
             */
            memberIds?: Array<string>;
        };
        type AddGroupMembersResponse = {
            /**
             * New members.
             */
            members?: Array<Members.GroupMember>;
        };
        type GroupMember = {
            /**
             * Date and time the group Member joined the group.
             */
            joinedDate?: Date;
            /**
             * Site member ID.
             */
            memberId?: string;
            /**
             * Group Member Role.
             */
            role?: Members.GroupRole;
        };
        type GroupRole = {
            /**
             * Group member role. One of:
             * - `"MEMBER"` - Regular group member.
             * - `"ADMIN"` - Group administrator.
             */
            value?: string;
        };
        type JoinGroupOptions = {
            autoInviteId?: string;
            /**
             * Answers to membership questions. A Join Request will fail, if the answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<Members.MembershipQuestionAnswer>;
        };
        type JoinRequest = {
            autoInviteId?: string;
            groupId: string;
            /**
             * Answers to membership questions. A Join Request will fail, if the answer to a required question is omitted.
             */
            membershipQuestionAnswers?: Array<Members.MembershipQuestionAnswer>;
        };
        type JoinResponse = {
            /**
             * New member.
             */
            member?: Members.GroupMember;
        };
        type LeaveRequest = {
            /**
             * ID of the Group to leave.
             */
            groupId: string;
        };
        type LeaveResponse = {};
        type ListGroupMembersOptions = {
            /**
             * Maximum number of group members to retrieve. Defaults to 100.
             */
            limit?: number;
            /**
             * Number of group members to skip in the list.
             */
            offset?: number;
        };
        type ListGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Number of items to load. Maximum `100.`
             */
            limit?: number;
            /**
             * Number of group members to skip in the list.
             */
            offset?: number;
        };
        type ListGroupMembersResponse = {
            /**
             * Retrieved members.
             */
            members?: Array<Members.GroupMember>;
            /**
             * Paging information.
             */
            metadata?: Members.PagingMetadata;
        };
        type ListMembershipsOptions = {
            /**
             * Maximum number of memberships to retrieve. Defaults to 100.
             */
            limit?: number;
            /**
             * Number of memberships to skip in the list.
             */
            offset?: number;
        };
        type ListMembershipsRequest = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Site member ID.
             */
            memberId: string;
            /**
             * Number of memberships to skip in the list.
             */
            offset?: number;
        };
        type ListMembershipsResponse = {
            /**
             * Site member's memberships.
             */
            memberships?: Array<Members.Membership>;
            /**
             * Paging information.
             */
            metadata?: Members.PagingMetadata;
        };
        type MemberAdded = {
            /**
             * Group ID that member was added to.
             */
            groupId?: string;
            /**
             * Added group member.
             */
            groupMember?: Members.GroupMember;
        };
        type MemberJoined = {
            /**
             * Group ID that member has joined.
             */
            groupId?: string;
            /**
             * Joined group member.
             */
            groupMember?: Members.GroupMember;
        };
        type MemberLeft = {
            /**
             * Group ID that member has left.
             */
            groupId?: string;
            /**
             * Group member that left.
             */
            groupMember?: Members.GroupMember;
        };
        type MemberRemoved = {
            /**
             * Group ID that member was removed from.
             */
            groupId?: string;
            /**
             * Removed group member.
             */
            groupMember?: Members.GroupMember;
        };
        type Membership = {
            /**
             * Group ID.
             */
            groupId?: string;
            /**
             * Group member role. When membership status is not `JOINED`, this is empty.
             */
            role?: Members.GroupRole;
            /**
             * Membership status with Group
             * - `"JOINED"` - Site member is a group member.
             * - `"PENDING"` - Site member has submitted a Join Request for this group that is still `"PENDING"`.
             */
            status?: string;
        };
        type MembershipQuestionAnswer = {
            /**
             * Question ID.
             */
            _id?: string;
            /**
             * Answer text.
             */
            text?: string;
        };
        type Paging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type PagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query.
             */
            total?: number;
        };
        type Query = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Members.Paging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Members.Sorting>;
        };
        type QueryGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            query?: Members.Query;
        };
        type QueryGroupMembersResponse = {
            /**
             * Group members.
             */
            members?: Array<Members.GroupMember>;
            /**
             * Paging information.
             */
            metadata?: Members.PagingMetadata;
        };
        type QueryMembershipsOptions = {
            query?: Members.Query;
        };
        type QueryMembershipsRequest = {
            /**
             * Site member ID.
             */
            memberId: string;
            query?: Members.Query;
        };
        type QueryMembershipsResponse = {
            /**
             * Site member's memberships.
             */
            memberships?: Array<Members.Membership>;
            /**
             * Paging information.
             */
            metadata?: Members.PagingMetadata;
        };
        type QueryNonGroupMembersOptions = {
            query?: Members.Query;
        };
        type QueryNonGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            query?: Members.Query;
        };
        type QueryNonGroupMembersResponse = {
            /**
             * Retrieved members.
             */
            members?: Array<Members.GroupMember>;
        };
        type RemoveGroupMembersOptions = {};
        type RemoveGroupMembersRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * IDs of the site members to remove from the group.
             */
            memberIds?: Array<string>;
        };
        type RemoveGroupMembersResponse = {};
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#)
         */
        interface MembersQueryBuilder {
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#ascending)
             */
            ascending(propertyNames: Array<string>): Members.MembersQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#descending)
             */
            descending(propertyNames: Array<string>): Members.MembersQueryBuilder;
            /**
             * Refines a query to match items where the specified property equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): Members.MembersQueryBuilder;
            /**
             * Refines a query to match items where the specified property contains a value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#exists)
             */
            exists(propertyName: string, value: boolean): Members.MembersQueryBuilder;
            /**
             * Returns the query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#find)
             */
            find(): Promise<Members.MembersQueryResult>;
            /**
             * Refines a query to match items whose specified property contains any of the specified values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, value: Array<any>): Members.MembersQueryBuilder;
            /**
             * Refines a query to only match items where the specified property conatins any of the values in the provided array of values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#in)
             */
            in(propertyName: string, value: any): Members.MembersQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#limit)
             */
            limit(limit: number): Members.MembersQueryBuilder;
            /**
             * Refines a query to match items where the specified property doesn't equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): Members.MembersQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#skip)
             */
            skip(skip: number): Members.MembersQueryBuilder;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#)
         */
        interface MembersQueryResult {
            /**
             * Returns the index of the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#currentPage)
             */
            currentPage: number;
            /**
             * Returns an array of `members` items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#items)
             */
            items: Array<Members.GroupMember>;
            /**
             * Returns the number of items in the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#length)
             */
            length: number;
            /**
             * Returns the requested page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#pageSize)
             */
            pageSize: number;
            /**
             * Returns the `MembersQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#query)
             */
            query: Members.MembersQueryBuilder;
            /**
             * Returns the total number of items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#totalCount)
             */
            totalCount: number;
            /**
             * Returns the total number of pages the query produced.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#totalPages)
             */
            totalPages: number;
            /**
             * Indicates whether the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates whether the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#next)
             */
            next(): Promise<Members.MembersQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#prev)
             */
            prev(): Promise<Members.MembersQueryResult>;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryBuilder.html#)
         */
        namespace MembersQueryBuilder {
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Members.MembersQueryResult.html#)
         */
        namespace MembersQueryResult {
        }
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-groups-v2.Roles.html#)
     */
    namespace Roles {
        type AssignRoleOptions = {};
        type AssignRoleRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Member IDs.
             *
             * Max: 100 member IDs
             */
            memberIds?: Array<string>;
            /**
             * Role to assign.
             */
            role?: Roles.GroupRole;
        };
        type AssignRoleResponse = {
            /**
             * Group ID.
             */
            groupId?: string;
            /**
             * Member IDs
             */
            memberIds?: Array<string>;
            /**
             * Assigned role.
             */
            role?: Roles.GroupRole;
        };
        type GroupMember = {
            /**
             * Date and time the group Member joined the group.
             */
            joinedDate?: Date;
            /**
             * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
             */
            memberId?: string;
            /**
             * Group Member Role.
             */
            role?: Roles.GroupRole;
            /**
             * __Deprecated.__ Use `memberId` instead.
             * This property will be removed on June 30, 2022.
             */
            siteMemberId?: string;
        };
        type GroupRole = {
            /**
             * Member's role.
             * - `MEMBER` - Regular group member.
             * - `ADMIN` - Group administrator.
             */
            value?: string;
        };
        type RoleAssignedToGroupMember = {
            /**
             * ID of site member who assigned the role. It can be empty if the role was assigned by a third-party application.
             */
            assignedById?: string;
            /**
             * Group ID in which role was assigned.
             */
            groupId?: string;
            /**
             * Group member to whom the role was assigned.
             */
            groupMember?: Roles.GroupMember;
            /**
             * Assigned group role.
             */
            role?: Roles.GroupRole;
        };
        type RoleUnassignedFromGroupMember = {
            /**
             * Group ID in which role was unassigned.
             */
            groupId?: string;
            /**
             * Group member from whom role was removed.
             */
            groupMember?: Roles.GroupMember;
            /**
             * Unassigned group role.
             */
            role?: Roles.GroupRole;
            /**
             * ID of site member who unassigned the role. It can be empty if the role was assigned by a third-party application.
             */
            unassignedById?: string;
        };
        type UnassignRoleOptions = {};
        type UnassignRoleRequest = {
            /**
             * Group ID.
             */
            groupId: string;
            /**
             * Member IDs.
             *
             * Max: 100 member IDs
             */
            memberIds?: Array<string>;
            /**
             * Role to unassign.
             */
            role?: Roles.GroupRole;
        };
        type UnassignRoleResponse = {
            /**
             * Group ID.
             */
            groupId?: string;
            /**
             * Member IDs.
             */
            memberIds?: Array<string>;
            /**
             * Unassigned role.
             */
            role?: Roles.GroupRole;
        };
    }
}
