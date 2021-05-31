import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  profile?: Maybe<Profile>;
  posts: Array<Post>;
  followers: Array<Follow>;
  following: Array<Follow>;
  postLikes: Array<PostLike>;
  comments: Array<Comment>;
  commentLikes: Array<CommentLike>;
  storyPosts: Array<StoryPost>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type UserFollowersArgs = {
  where?: Maybe<FollowWhereInput>;
  orderBy?: Maybe<Array<FollowOrderByInput>>;
  cursor?: Maybe<FollowWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<FollowScalarFieldEnum>>;
};


export type UserFollowingArgs = {
  where?: Maybe<FollowWhereInput>;
  orderBy?: Maybe<Array<FollowOrderByInput>>;
  cursor?: Maybe<FollowWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<FollowScalarFieldEnum>>;
};


export type UserPostLikesArgs = {
  where?: Maybe<PostLikeWhereInput>;
  orderBy?: Maybe<Array<PostLikeOrderByInput>>;
  cursor?: Maybe<PostLikeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostLikeScalarFieldEnum>>;
};


export type UserCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
};


export type UserCommentLikesArgs = {
  where?: Maybe<CommentLikeWhereInput>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CommentLikeScalarFieldEnum>>;
};


export type UserStoryPostsArgs = {
  where?: Maybe<StoryPostWhereInput>;
  orderBy?: Maybe<Array<StoryPostOrderByInput>>;
  cursor?: Maybe<StoryPostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<StoryPostScalarFieldEnum>>;
};

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Nonbinary = 'NONBINARY'
}

export type Profile = {
  __typename?: 'Profile';
  userId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  text: Scalars['String'];
  publishDate: Scalars['DateTime'];
  authorId: Scalars['Int'];
};


export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<IntFilter>;
  text?: Maybe<StringFilter>;
  publishDate?: Maybe<DateTimeFilter>;
  authorId?: Maybe<IntFilter>;
  author?: Maybe<UserRelationFilter>;
  pictures?: Maybe<PostPictureListRelationFilter>;
  likes?: Maybe<PostLikeListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  authUuid?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  hash?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  phone?: Maybe<StringNullableFilter>;
  gender?: Maybe<EnumGenderNullableFilter>;
  profile?: Maybe<ProfileRelationFilter>;
  passwordResetToken?: Maybe<PasswordResetTokenRelationFilter>;
  posts?: Maybe<PostListRelationFilter>;
  followers?: Maybe<FollowListRelationFilter>;
  following?: Maybe<FollowListRelationFilter>;
  postLikes?: Maybe<PostLikeListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  commentLikes?: Maybe<CommentLikeListRelationFilter>;
  storyPosts?: Maybe<StoryPostListRelationFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type EnumGenderNullableFilter = {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  notIn?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderNullableFilter>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  notIn?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderNullableFilter>;
};

export type ProfileRelationFilter = {
  is?: Maybe<ProfileWhereInput>;
  isNot?: Maybe<ProfileWhereInput>;
};

export type ProfileWhereInput = {
  AND?: Maybe<Array<ProfileWhereInput>>;
  OR?: Maybe<Array<ProfileWhereInput>>;
  NOT?: Maybe<Array<ProfileWhereInput>>;
  userId?: Maybe<IntFilter>;
  user?: Maybe<UserRelationFilter>;
  name?: Maybe<StringNullableFilter>;
  website?: Maybe<StringNullableFilter>;
  bio?: Maybe<StringNullableFilter>;
};

export type PasswordResetTokenRelationFilter = {
  is?: Maybe<PasswordResetTokenWhereInput>;
  isNot?: Maybe<PasswordResetTokenWhereInput>;
};

export type PasswordResetTokenWhereInput = {
  AND?: Maybe<Array<PasswordResetTokenWhereInput>>;
  OR?: Maybe<Array<PasswordResetTokenWhereInput>>;
  NOT?: Maybe<Array<PasswordResetTokenWhereInput>>;
  userId?: Maybe<IntFilter>;
  user?: Maybe<UserRelationFilter>;
  hash?: Maybe<BytesFilter>;
  requestedAt?: Maybe<DateTimeFilter>;
  requestCount?: Maybe<IntFilter>;
};

export type BytesFilter = {
  equals?: Maybe<Scalars['Byte']>;
  not?: Maybe<NestedBytesFilter>;
};


export type NestedBytesFilter = {
  equals?: Maybe<Scalars['Byte']>;
  not?: Maybe<NestedBytesFilter>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type FollowListRelationFilter = {
  every?: Maybe<FollowWhereInput>;
  some?: Maybe<FollowWhereInput>;
  none?: Maybe<FollowWhereInput>;
};

export type FollowWhereInput = {
  AND?: Maybe<Array<FollowWhereInput>>;
  OR?: Maybe<Array<FollowWhereInput>>;
  NOT?: Maybe<Array<FollowWhereInput>>;
  targetId?: Maybe<IntFilter>;
  target?: Maybe<UserRelationFilter>;
  followerId?: Maybe<IntFilter>;
  follower?: Maybe<UserRelationFilter>;
  createDate?: Maybe<DateTimeFilter>;
};

export type PostLikeListRelationFilter = {
  every?: Maybe<PostLikeWhereInput>;
  some?: Maybe<PostLikeWhereInput>;
  none?: Maybe<PostLikeWhereInput>;
};

export type PostLikeWhereInput = {
  AND?: Maybe<Array<PostLikeWhereInput>>;
  OR?: Maybe<Array<PostLikeWhereInput>>;
  NOT?: Maybe<Array<PostLikeWhereInput>>;
  postId?: Maybe<IntFilter>;
  post?: Maybe<PostRelationFilter>;
  userId?: Maybe<IntFilter>;
  user?: Maybe<UserRelationFilter>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<IntFilter>;
  content?: Maybe<StringFilter>;
  postId?: Maybe<IntFilter>;
  post?: Maybe<PostRelationFilter>;
  authorId?: Maybe<IntFilter>;
  author?: Maybe<UserRelationFilter>;
  parentId?: Maybe<IntNullableFilter>;
  parent?: Maybe<CommentRelationFilter>;
  children?: Maybe<CommentListRelationFilter>;
  likes?: Maybe<CommentLikeListRelationFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type CommentRelationFilter = {
  is?: Maybe<CommentWhereInput>;
  isNot?: Maybe<CommentWhereInput>;
};

export type CommentLikeListRelationFilter = {
  every?: Maybe<CommentLikeWhereInput>;
  some?: Maybe<CommentLikeWhereInput>;
  none?: Maybe<CommentLikeWhereInput>;
};

export type CommentLikeWhereInput = {
  AND?: Maybe<Array<CommentLikeWhereInput>>;
  OR?: Maybe<Array<CommentLikeWhereInput>>;
  NOT?: Maybe<Array<CommentLikeWhereInput>>;
  commentId?: Maybe<IntFilter>;
  comment?: Maybe<CommentRelationFilter>;
  userId?: Maybe<IntFilter>;
  user?: Maybe<UserRelationFilter>;
};

export type StoryPostListRelationFilter = {
  every?: Maybe<StoryPostWhereInput>;
  some?: Maybe<StoryPostWhereInput>;
  none?: Maybe<StoryPostWhereInput>;
};

export type StoryPostWhereInput = {
  AND?: Maybe<Array<StoryPostWhereInput>>;
  OR?: Maybe<Array<StoryPostWhereInput>>;
  NOT?: Maybe<Array<StoryPostWhereInput>>;
  id?: Maybe<IntFilter>;
  pictureUrl?: Maybe<StringFilter>;
  publishDate?: Maybe<DateTimeFilter>;
  authorId?: Maybe<IntFilter>;
  author?: Maybe<UserRelationFilter>;
};

export type PostPictureListRelationFilter = {
  every?: Maybe<PostPictureWhereInput>;
  some?: Maybe<PostPictureWhereInput>;
  none?: Maybe<PostPictureWhereInput>;
};

export type PostPictureWhereInput = {
  AND?: Maybe<Array<PostPictureWhereInput>>;
  OR?: Maybe<Array<PostPictureWhereInput>>;
  NOT?: Maybe<Array<PostPictureWhereInput>>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  postId?: Maybe<IntFilter>;
  post?: Maybe<PostRelationFilter>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  publishDate?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  Text = 'text',
  PublishDate = 'publishDate',
  AuthorId = 'authorId'
}

export type Follow = {
  __typename?: 'Follow';
  targetId: Scalars['Int'];
  followerId: Scalars['Int'];
  createDate: Scalars['DateTime'];
};

export type FollowOrderByInput = {
  targetId?: Maybe<SortOrder>;
  followerId?: Maybe<SortOrder>;
  createDate?: Maybe<SortOrder>;
};

export type FollowWhereUniqueInput = {
  targetId_followerId?: Maybe<FollowTargetIdFollowerIdCompoundUniqueInput>;
};

export type FollowTargetIdFollowerIdCompoundUniqueInput = {
  targetId: Scalars['Int'];
  followerId: Scalars['Int'];
};

export enum FollowScalarFieldEnum {
  TargetId = 'targetId',
  FollowerId = 'followerId',
  CreateDate = 'createDate'
}

export type PostLike = {
  __typename?: 'PostLike';
  postId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PostLikeOrderByInput = {
  postId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type PostLikeWhereUniqueInput = {
  postId_userId?: Maybe<PostLikePostIdUserIdCompoundUniqueInput>;
};

export type PostLikePostIdUserIdCompoundUniqueInput = {
  postId: Scalars['Int'];
  userId: Scalars['Int'];
};

export enum PostLikeScalarFieldEnum {
  PostId = 'postId',
  UserId = 'userId'
}

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  content: Scalars['String'];
  postId: Scalars['Int'];
  authorId: Scalars['Int'];
  parentId?: Maybe<Scalars['Int']>;
};

export type CommentOrderByInput = {
  id?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
  parentId?: Maybe<SortOrder>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum CommentScalarFieldEnum {
  Id = 'id',
  Content = 'content',
  PostId = 'postId',
  AuthorId = 'authorId',
  ParentId = 'parentId'
}

export type CommentLike = {
  __typename?: 'CommentLike';
  commentId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentLikeOrderByInput = {
  commentId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentLikeWhereUniqueInput = {
  commentId_userId?: Maybe<CommentLikeCommentIdUserIdCompoundUniqueInput>;
};

export type CommentLikeCommentIdUserIdCompoundUniqueInput = {
  commentId: Scalars['Int'];
  userId: Scalars['Int'];
};

export enum CommentLikeScalarFieldEnum {
  CommentId = 'commentId',
  UserId = 'userId'
}

export type StoryPost = {
  __typename?: 'StoryPost';
  id: Scalars['Int'];
  pictureUrl: Scalars['String'];
  publishDate: Scalars['DateTime'];
  authorId: Scalars['Int'];
};

export type StoryPostOrderByInput = {
  id?: Maybe<SortOrder>;
  pictureUrl?: Maybe<SortOrder>;
  publishDate?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
};

export type StoryPostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum StoryPostScalarFieldEnum {
  Id = 'id',
  PictureUrl = 'pictureUrl',
  PublishDate = 'publishDate',
  AuthorId = 'authorId'
}

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResult;
  register: User;
  requestPasswordReset: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  identifier: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['EmailAddress'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type LoginMutationVariables = Exact<{
  identifier: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResult' }
    & Pick<LoginResult, 'token'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'name' | 'website' | 'bio'>
    )> }
  )> }
);

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username'>
  ) }
);

export type RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;


export type RequestPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'requestPasswordReset'>
);

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);


export const LoginDocument = gql`
    mutation Login($identifier: String!, $password: String!) {
  login(identifier: $identifier, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    profile {
      name
      website
      bio
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    id
    email
    username
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RequestPasswordResetDocument = gql`
    mutation RequestPasswordReset($email: EmailAddress!) {
  requestPasswordReset(email: $email)
}
    `;
export type RequestPasswordResetMutationFn = Apollo.MutationFunction<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;

/**
 * __useRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasswordResetMutation, { data, loading, error }] = useRequestPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, options);
      }
export type RequestPasswordResetMutationHookResult = ReturnType<typeof useRequestPasswordResetMutation>;
export type RequestPasswordResetMutationResult = Apollo.MutationResult<RequestPasswordResetMutation>;
export type RequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;