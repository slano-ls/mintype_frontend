/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation createTest($chars: String!, $wpm: Float!, $rawWpm: Float!, $accuracy: Float!, $time: Float!, $uid: String!, $testTaken: String!) {\n  createTest(\n    testOptions: {chars: $chars, wpm: $wpm, rawWpm: $rawWpm, accuracy: $accuracy, time: $time, uid: $uid, testTaken: $testTaken}\n  ) {\n    id\n    creatorId\n    time\n    accuracy\n    wpm\n    rawWpm\n    chars\n    testTaken\n    createdAt\n  }\n}": types.CreateTestDocument,
    "mutation Register($username: String!, $email: String!, $uid: String!) {\n  register(options: {username: $username, email: $email, uid: $uid}) {\n    error {\n      field\n      message\n    }\n    user {\n      username\n      email\n      createdAt\n    }\n  }\n}": types.RegisterDocument,
    "mutation Validate($username: String!, $email: String!, $password: String!) {\n  validate(username: $username, email: $email, password: $password) {\n    field\n    message\n  }\n}": types.ValidateDocument,
    "query Leaderboard($uid: String!, $time: Float!) {\n  leaderboard(uid: $uid, time: $time) {\n    leaderBoard {\n      rank\n      user\n      wpm\n      rawWpm\n      time\n      accuracy\n      testTaken\n    }\n    user {\n      rank\n      user\n      wpm\n      rawWpm\n      time\n      accuracy\n      testTaken\n    }\n  }\n}": types.LeaderboardDocument,
    "query Test($id: Float!, $uid: String!) {\n  test(id: $id, uid: $uid) {\n    id\n    creatorId\n    time\n    accuracy\n    wpm\n    rawWpm\n    chars\n    createdAt\n    testTaken\n  }\n}": types.TestDocument,
    "query Tests($uid: String!) {\n  tests(uid: $uid) {\n    wpmData\n    accuracyData\n    labels\n    testTaken\n  }\n}": types.TestsDocument,
    "query GetStats($uid: String!) {\n  getStats(uid: $uid) {\n    userStats {\n      time\n      wpm\n      pb\n      accuracy\n      recentWpm\n      recentAccuracy\n      testsTaken\n    }\n  }\n}": types.GetStatsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createTest($chars: String!, $wpm: Float!, $rawWpm: Float!, $accuracy: Float!, $time: Float!, $uid: String!, $testTaken: String!) {\n  createTest(\n    testOptions: {chars: $chars, wpm: $wpm, rawWpm: $rawWpm, accuracy: $accuracy, time: $time, uid: $uid, testTaken: $testTaken}\n  ) {\n    id\n    creatorId\n    time\n    accuracy\n    wpm\n    rawWpm\n    chars\n    testTaken\n    createdAt\n  }\n}"): (typeof documents)["mutation createTest($chars: String!, $wpm: Float!, $rawWpm: Float!, $accuracy: Float!, $time: Float!, $uid: String!, $testTaken: String!) {\n  createTest(\n    testOptions: {chars: $chars, wpm: $wpm, rawWpm: $rawWpm, accuracy: $accuracy, time: $time, uid: $uid, testTaken: $testTaken}\n  ) {\n    id\n    creatorId\n    time\n    accuracy\n    wpm\n    rawWpm\n    chars\n    testTaken\n    createdAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($username: String!, $email: String!, $uid: String!) {\n  register(options: {username: $username, email: $email, uid: $uid}) {\n    error {\n      field\n      message\n    }\n    user {\n      username\n      email\n      createdAt\n    }\n  }\n}"): (typeof documents)["mutation Register($username: String!, $email: String!, $uid: String!) {\n  register(options: {username: $username, email: $email, uid: $uid}) {\n    error {\n      field\n      message\n    }\n    user {\n      username\n      email\n      createdAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Validate($username: String!, $email: String!, $password: String!) {\n  validate(username: $username, email: $email, password: $password) {\n    field\n    message\n  }\n}"): (typeof documents)["mutation Validate($username: String!, $email: String!, $password: String!) {\n  validate(username: $username, email: $email, password: $password) {\n    field\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Leaderboard($uid: String!, $time: Float!) {\n  leaderboard(uid: $uid, time: $time) {\n    leaderBoard {\n      rank\n      user\n      wpm\n      rawWpm\n      time\n      accuracy\n      testTaken\n    }\n    user {\n      rank\n      user\n      wpm\n      rawWpm\n      time\n      accuracy\n      testTaken\n    }\n  }\n}"): (typeof documents)["query Leaderboard($uid: String!, $time: Float!) {\n  leaderboard(uid: $uid, time: $time) {\n    leaderBoard {\n      rank\n      user\n      wpm\n      rawWpm\n      time\n      accuracy\n      testTaken\n    }\n    user {\n      rank\n      user\n      wpm\n      rawWpm\n      time\n      accuracy\n      testTaken\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Test($id: Float!, $uid: String!) {\n  test(id: $id, uid: $uid) {\n    id\n    creatorId\n    time\n    accuracy\n    wpm\n    rawWpm\n    chars\n    createdAt\n    testTaken\n  }\n}"): (typeof documents)["query Test($id: Float!, $uid: String!) {\n  test(id: $id, uid: $uid) {\n    id\n    creatorId\n    time\n    accuracy\n    wpm\n    rawWpm\n    chars\n    createdAt\n    testTaken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Tests($uid: String!) {\n  tests(uid: $uid) {\n    wpmData\n    accuracyData\n    labels\n    testTaken\n  }\n}"): (typeof documents)["query Tests($uid: String!) {\n  tests(uid: $uid) {\n    wpmData\n    accuracyData\n    labels\n    testTaken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetStats($uid: String!) {\n  getStats(uid: $uid) {\n    userStats {\n      time\n      wpm\n      pb\n      accuracy\n      recentWpm\n      recentAccuracy\n      testsTaken\n    }\n  }\n}"): (typeof documents)["query GetStats($uid: String!) {\n  getStats(uid: $uid) {\n    userStats {\n      time\n      wpm\n      pb\n      accuracy\n      recentWpm\n      recentAccuracy\n      testsTaken\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
