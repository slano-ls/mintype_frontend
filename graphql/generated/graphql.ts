/* eslint-disable */
import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type FieldError = {
    __typename?: "FieldError";
    field?: Maybe<Scalars["String"]>;
    message?: Maybe<Scalars["String"]>;
};

export type LeaderBoard = {
    __typename?: "LeaderBoard";
    leaderBoard: Array<LeaderBoardStatFields>;
    user: LeaderBoardStatFields;
};

export type LeaderBoardStatFields = {
    __typename?: "LeaderBoardStatFields";
    accuracy: Scalars["Float"];
    rank: Scalars["Float"];
    rawWpm: Scalars["Float"];
    testTaken: Scalars["String"];
    time: Scalars["Float"];
    user: Scalars["String"];
    wpm: Scalars["Float"];
};

export type Mutation = {
    __typename?: "Mutation";
    createTest: Test;
    register: UserResponse;
    validate: FieldError;
};

export type MutationCreateTestArgs = {
    testOptions: TestOptions;
};

export type MutationRegisterArgs = {
    options: Options;
};

export type MutationValidateArgs = {
    email: Scalars["String"];
    password: Scalars["String"];
    username: Scalars["String"];
};

export type Options = {
    email: Scalars["String"];
    uid: Scalars["String"];
    username: Scalars["String"];
};

export type PageInfo = {
    __typename?: "PageInfo";
    endCursor: Scalars["String"];
    hasNextPage: Scalars["Boolean"];
};

export type PaginatedTests = {
    __typename?: "PaginatedTests";
    pageInfo: PageInfo;
    tests: Array<Test>;
};

export type Query = {
    __typename?: "Query";
    getStats: UserStats;
    leaderboard: LeaderBoard;
    paginatedTests: PaginatedTests;
    test: Test;
    tests: Tests;
};

export type QueryGetStatsArgs = {
    uid: Scalars["String"];
};

export type QueryLeaderboardArgs = {
    time: Scalars["Float"];
    uid: Scalars["String"];
};

export type QueryPaginatedTestsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    first: Scalars["Int"];
    uid: Scalars["String"];
};

export type QueryTestArgs = {
    id: Scalars["Float"];
    uid: Scalars["String"];
};

export type QueryTestsArgs = {
    uid: Scalars["String"];
};

export type Test = {
    __typename?: "Test";
    accuracy: Scalars["Float"];
    chars: Scalars["String"];
    createdAt: Scalars["String"];
    creatorId: Scalars["String"];
    id: Scalars["Float"];
    rawWpm: Scalars["Float"];
    testTaken: Scalars["String"];
    time: Scalars["Float"];
    wpm: Scalars["Float"];
};

export type TestOptions = {
    accuracy: Scalars["Float"];
    chars: Scalars["String"];
    rawWpm: Scalars["Float"];
    testTaken: Scalars["String"];
    time: Scalars["Float"];
    uid: Scalars["String"];
    wpm: Scalars["Float"];
};

export type Tests = {
    __typename?: "Tests";
    accuracyData: Array<Scalars["Float"]>;
    labels: Array<Scalars["Float"]>;
    testTaken: Array<Scalars["String"]>;
    wpmData: Array<Scalars["Float"]>;
};

export type User = {
    __typename?: "User";
    createdAt: Scalars["String"];
    email: Scalars["String"];
    id: Scalars["Float"];
    uid: Scalars["String"];
    updatedAt: Scalars["String"];
    username: Scalars["String"];
};

export type UserResponse = {
    __typename?: "UserResponse";
    error?: Maybe<Array<FieldError>>;
    user?: Maybe<User>;
};

export type UserStatFields = {
    __typename?: "UserStatFields";
    accuracy: Scalars["String"];
    pb: Scalars["Float"];
    recentAccuracy: Scalars["String"];
    recentWpm: Scalars["Float"];
    testsTaken: Scalars["Float"];
    time: Scalars["Float"];
    wpm: Scalars["Float"];
};

export type UserStats = {
    __typename?: "UserStats";
    userStats: Array<UserStatFields>;
};

export type CreateTestMutationVariables = Exact<{
    chars: Scalars["String"];
    wpm: Scalars["Float"];
    rawWpm: Scalars["Float"];
    accuracy: Scalars["Float"];
    time: Scalars["Float"];
    uid: Scalars["String"];
    testTaken: Scalars["String"];
}>;

export type CreateTestMutation = {
    __typename?: "Mutation";
    createTest: {
        __typename?: "Test";
        id: number;
        creatorId: string;
        time: number;
        accuracy: number;
        wpm: number;
        rawWpm: number;
        chars: string;
        testTaken: string;
        createdAt: string;
    };
};

export type RegisterMutationVariables = Exact<{
    username: Scalars["String"];
    email: Scalars["String"];
    uid: Scalars["String"];
}>;

export type RegisterMutation = {
    __typename?: "Mutation";
    register: {
        __typename?: "UserResponse";
        error?: Array<{
            __typename?: "FieldError";
            field?: string | null;
            message?: string | null;
        }> | null;
        user?: {
            __typename?: "User";
            username: string;
            email: string;
            createdAt: string;
        } | null;
    };
};

export type ValidateMutationVariables = Exact<{
    username: Scalars["String"];
    email: Scalars["String"];
    password: Scalars["String"];
}>;

export type ValidateMutation = {
    __typename?: "Mutation";
    validate: {
        __typename?: "FieldError";
        field?: string | null;
        message?: string | null;
    };
};

export type LeaderboardQueryVariables = Exact<{
    uid: Scalars["String"];
    time: Scalars["Float"];
}>;

export type LeaderboardQuery = {
    __typename?: "Query";
    leaderboard: {
        __typename?: "LeaderBoard";
        leaderBoard: Array<{
            __typename?: "LeaderBoardStatFields";
            rank: number;
            user: string;
            wpm: number;
            rawWpm: number;
            time: number;
            accuracy: number;
            testTaken: string;
        }>;
        user: {
            __typename?: "LeaderBoardStatFields";
            rank: number;
            user: string;
            wpm: number;
            rawWpm: number;
            time: number;
            accuracy: number;
            testTaken: string;
        };
    };
};

export type TestQueryVariables = Exact<{
    id: Scalars["Float"];
    uid: Scalars["String"];
}>;

export type TestQuery = {
    __typename?: "Query";
    test: {
        __typename?: "Test";
        id: number;
        creatorId: string;
        time: number;
        accuracy: number;
        wpm: number;
        rawWpm: number;
        chars: string;
        createdAt: string;
        testTaken: string;
    };
};

export type TestsQueryVariables = Exact<{
    uid: Scalars["String"];
}>;

export type TestsQuery = {
    __typename?: "Query";
    tests: {
        __typename?: "Tests";
        wpmData: Array<number>;
        accuracyData: Array<number>;
        labels: Array<number>;
        testTaken: Array<string>;
    };
};

export type GetStatsQueryVariables = Exact<{
    uid: Scalars["String"];
}>;

export type GetStatsQuery = {
    __typename?: "Query";
    getStats: {
        __typename?: "UserStats";
        userStats: Array<{
            __typename?: "UserStatFields";
            time: number;
            wpm: number;
            pb: number;
            accuracy: string;
            recentWpm: number;
            recentAccuracy: string;
            testsTaken: number;
        }>;
    };
};

export const CreateTestDocument = gql`
    mutation createTest(
        $chars: String!
        $wpm: Float!
        $rawWpm: Float!
        $accuracy: Float!
        $time: Float!
        $uid: String!
        $testTaken: String!
    ) {
        createTest(
            testOptions: {
                chars: $chars
                wpm: $wpm
                rawWpm: $rawWpm
                accuracy: $accuracy
                time: $time
                uid: $uid
                testTaken: $testTaken
            }
        ) {
            id
            creatorId
            time
            accuracy
            wpm
            rawWpm
            chars
            testTaken
            createdAt
        }
    }
`;

export function useCreateTestMutation() {
    return Urql.useMutation<CreateTestMutation, CreateTestMutationVariables>(
        CreateTestDocument
    );
}
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $uid: String!) {
        register(options: { username: $username, email: $email, uid: $uid }) {
            error {
                field
                message
            }
            user {
                username
                email
                createdAt
            }
        }
    }
`;

export function useRegisterMutation() {
    return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
        RegisterDocument
    );
}
export const ValidateDocument = gql`
    mutation Validate($username: String!, $email: String!, $password: String!) {
        validate(username: $username, email: $email, password: $password) {
            field
            message
        }
    }
`;

export function useValidateMutation() {
    return Urql.useMutation<ValidateMutation, ValidateMutationVariables>(
        ValidateDocument
    );
}
export const LeaderboardDocument = gql`
    query Leaderboard($uid: String!, $time: Float!) {
        leaderboard(uid: $uid, time: $time) {
            leaderBoard {
                rank
                user
                wpm
                rawWpm
                time
                accuracy
                testTaken
            }
            user {
                rank
                user
                wpm
                rawWpm
                time
                accuracy
                testTaken
            }
        }
    }
`;

export function useLeaderboardQuery(
    options: Omit<Urql.UseQueryArgs<LeaderboardQueryVariables>, "query">
) {
    return Urql.useQuery<LeaderboardQuery, LeaderboardQueryVariables>({
        query: LeaderboardDocument,
        ...options,
    });
}
export const TestDocument = gql`
    query Test($id: Float!, $uid: String!) {
        test(id: $id, uid: $uid) {
            id
            creatorId
            time
            accuracy
            wpm
            rawWpm
            chars
            createdAt
            testTaken
        }
    }
`;

export function useTestQuery(
    options: Omit<Urql.UseQueryArgs<TestQueryVariables>, "query">
) {
    return Urql.useQuery<TestQuery, TestQueryVariables>({
        query: TestDocument,
        ...options,
    });
}
export const TestsDocument = gql`
    query Tests($uid: String!) {
        tests(uid: $uid) {
            wpmData
            accuracyData
            labels
            testTaken
        }
    }
`;

export function useTestsQuery(
    options: Omit<Urql.UseQueryArgs<TestsQueryVariables>, "query">
) {
    return Urql.useQuery<TestsQuery, TestsQueryVariables>({
        query: TestsDocument,
        ...options,
    });
}
export const GetStatsDocument = gql`
    query GetStats($uid: String!) {
        getStats(uid: $uid) {
            userStats {
                time
                wpm
                pb
                accuracy
                recentWpm
                recentAccuracy
                testsTaken
            }
        }
    }
`;

export function useGetStatsQuery(
    options: Omit<Urql.UseQueryArgs<GetStatsQueryVariables>, "query">
) {
    return Urql.useQuery<GetStatsQuery, GetStatsQueryVariables>({
        query: GetStatsDocument,
        ...options,
    });
}
