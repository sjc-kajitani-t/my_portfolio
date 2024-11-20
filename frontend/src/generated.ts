import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Career = {
  __typename?: 'Career';
  employee_id: Scalars['ID']['output'];
  end_date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  start_date: Scalars['String']['output'];
};

export type MyInfo = {
  __typename?: 'MyInfo';
  age: Scalars['Int']['output'];
  birthday: Scalars['String']['output'];
  career: Career;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  sex: Scalars['String']['output'];
  skills: Array<Skill>;
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String']['output'];
  employee_id: Scalars['ID']['output'];
  end_date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sort_order: Scalars['Int']['output'];
  start_date: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  myInfo: MyInfo;
};

export type Skill = {
  __typename?: 'Skill';
  employee_id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type GetMyInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyInfoQuery = { __typename?: 'Query', myInfo: { __typename?: 'MyInfo', id: string, name: string, birthday: string, sex: string, age: number, career: { __typename?: 'Career', id: string, start_date: string, end_date: string, employee_id: string }, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, start_date: string, end_date: string, sort_order: number }>, skills: Array<{ __typename?: 'Skill', name: string, version: string }> } };


export const GetMyInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"career"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"employee_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"sort_order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyInfoQuery, GetMyInfoQueryVariables>;