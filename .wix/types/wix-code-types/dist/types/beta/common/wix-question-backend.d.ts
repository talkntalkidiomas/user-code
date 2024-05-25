declare module "wix-question-backend" {
  interface Question {
      _id?: string | null;
      author?: string | null;
      content?: string;
      status?: Status;
      /** @readonly */
      upvotes?: string;
      spicyWords?: string[];
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
  }
  enum Status {
      SUBMITTED = "SUBMITTED",
      ACCEPTED = "ACCEPTED",
      REJECTED = "REJECTED",
      ANSWERED = "ANSWERED"
  }
  interface CreateQuestionResponse {
      question?: Question;
  }
  interface GetQuestionResponse {
      question?: Question;
  }
  interface UpdateQuestionResponse {
      question?: Question;
  }
  interface DeleteQuestionResponse {
  }
  interface QueryV2 {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /**
       * Sort order.
       *
       * Defaults to `ASC`.
       */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging {
      /**
       * The number of items to load.
       * Cursor token returned in the query response. To be used on the next query request, but not the first query request.
       */
      limit?: number | null;
      /** Cursor returned in last query response. Should not be provided on first page request */
      cursor?: string | null;
  }
  interface QueryQuestionResponse {
      questions?: Question[];
  }
  interface QuestionsFeedResponse {
      questions?: FeedQuestion[];
  }
  interface FeedQuestion {
      _id?: string | null;
      /** @readonly */
      author?: string | null;
      /** @readonly */
      content?: string;
      /** @readonly */
      upvotes?: string;
      upvotedByMe?: boolean;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
  }
  interface UpvoteResponse {
  }
  interface UpdateQuestionQuestion {
      author?: string | null;
      content?: string;
      status?: Status;
      /** @readonly */
      upvotes?: string;
      spicyWords?: string[];
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
  }
  interface UpdateQuestionOptions {
      mask?: string[];
  }
  interface UpvoteOptions {
      redeemVote?: boolean;
  }
  
  function createQuestion(question: Question): Promise<CreateQuestionResponse>;
  function getQuestion(questionId: string): Promise<GetQuestionResponse>;
  function updateQuestion(_id: string | null, question: UpdateQuestionQuestion, options: UpdateQuestionOptions): Promise<UpdateQuestionResponse>;
  function deleteQuestion(questionId: string, revision: string): Promise<DeleteQuestionResponse>;
  function queryQuestion(query: QueryV2): Promise<QueryQuestionResponse>;
  function questionsFeed(): Promise<QuestionsFeedResponse>;
  function upvote(questionId: string, options: UpvoteOptions): Promise<UpvoteResponse>;
  
  const keynoteQuestionsV1Question_backend_d_createQuestion: typeof createQuestion;
  const keynoteQuestionsV1Question_backend_d_getQuestion: typeof getQuestion;
  const keynoteQuestionsV1Question_backend_d_updateQuestion: typeof updateQuestion;
  const keynoteQuestionsV1Question_backend_d_deleteQuestion: typeof deleteQuestion;
  const keynoteQuestionsV1Question_backend_d_queryQuestion: typeof queryQuestion;
  const keynoteQuestionsV1Question_backend_d_questionsFeed: typeof questionsFeed;
  const keynoteQuestionsV1Question_backend_d_upvote: typeof upvote;
  namespace keynoteQuestionsV1Question_backend_d {
    export {
      keynoteQuestionsV1Question_backend_d_createQuestion as createQuestion,
      keynoteQuestionsV1Question_backend_d_getQuestion as getQuestion,
      keynoteQuestionsV1Question_backend_d_updateQuestion as updateQuestion,
      keynoteQuestionsV1Question_backend_d_deleteQuestion as deleteQuestion,
      keynoteQuestionsV1Question_backend_d_queryQuestion as queryQuestion,
      keynoteQuestionsV1Question_backend_d_questionsFeed as questionsFeed,
      keynoteQuestionsV1Question_backend_d_upvote as upvote,
    };
  }
  
  export { keynoteQuestionsV1Question_backend_d as wixKeynoteQuestionsV1Question };
}
