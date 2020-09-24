/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateInputVideoInput = {
  id?: string | null;
  bucketname: string;
  objectkey: string;
  description?: string | null;
  url?: string | null;
  celebritydetection?: string | null;
};

export type ModelInputVideoConditionInput = {
  bucketname?: ModelStringInput | null;
  objectkey?: ModelStringInput | null;
  description?: ModelStringInput | null;
  url?: ModelStringInput | null;
  celebritydetection?: ModelStringInput | null;
  and?: Array<ModelInputVideoConditionInput | null> | null;
  or?: Array<ModelInputVideoConditionInput | null> | null;
  not?: ModelInputVideoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateInputVideoInput = {
  id: string;
  bucketname?: string | null;
  objectkey?: string | null;
  description?: string | null;
  url?: string | null;
  celebritydetection?: string | null;
};

export type DeleteInputVideoInput = {
  id?: string | null;
};

export type ModelInputVideoFilterInput = {
  id?: ModelIDInput | null;
  bucketname?: ModelStringInput | null;
  objectkey?: ModelStringInput | null;
  description?: ModelStringInput | null;
  url?: ModelStringInput | null;
  celebritydetection?: ModelStringInput | null;
  and?: Array<ModelInputVideoFilterInput | null> | null;
  or?: Array<ModelInputVideoFilterInput | null> | null;
  not?: ModelInputVideoFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateInputVideoMutation = {
  __typename: "InputVideo";
  id: string;
  bucketname: string;
  objectkey: string;
  description: string | null;
  url: string | null;
  celebritydetection: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateInputVideoMutation = {
  __typename: "InputVideo";
  id: string;
  bucketname: string;
  objectkey: string;
  description: string | null;
  url: string | null;
  celebritydetection: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteInputVideoMutation = {
  __typename: "InputVideo";
  id: string;
  bucketname: string;
  objectkey: string;
  description: string | null;
  url: string | null;
  celebritydetection: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetInputVideoQuery = {
  __typename: "InputVideo";
  id: string;
  bucketname: string;
  objectkey: string;
  description: string | null;
  url: string | null;
  celebritydetection: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListInputVideosQuery = {
  __typename: "ModelInputVideoConnection";
  items: Array<{
    __typename: "InputVideo";
    id: string;
    bucketname: string;
    objectkey: string;
    description: string | null;
    url: string | null;
    celebritydetection: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateInputVideoSubscription = {
  __typename: "InputVideo";
  id: string;
  bucketname: string;
  objectkey: string;
  description: string | null;
  url: string | null;
  celebritydetection: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateInputVideoSubscription = {
  __typename: "InputVideo";
  id: string;
  bucketname: string;
  objectkey: string;
  description: string | null;
  url: string | null;
  celebritydetection: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteInputVideoSubscription = {
  __typename: "InputVideo";
  id: string;
  bucketname: string;
  objectkey: string;
  description: string | null;
  url: string | null;
  celebritydetection: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateInputVideo(
    input: CreateInputVideoInput,
    condition?: ModelInputVideoConditionInput
  ): Promise<CreateInputVideoMutation> {
    const statement = `mutation CreateInputVideo($input: CreateInputVideoInput!, $condition: ModelInputVideoConditionInput) {
        createInputVideo(input: $input, condition: $condition) {
          __typename
          id
          bucketname
          objectkey
          description
          url
          celebritydetection
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInputVideoMutation>response.data.createInputVideo;
  }
  async UpdateInputVideo(
    input: UpdateInputVideoInput,
    condition?: ModelInputVideoConditionInput
  ): Promise<UpdateInputVideoMutation> {
    const statement = `mutation UpdateInputVideo($input: UpdateInputVideoInput!, $condition: ModelInputVideoConditionInput) {
        updateInputVideo(input: $input, condition: $condition) {
          __typename
          id
          bucketname
          objectkey
          description
          url
          celebritydetection
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInputVideoMutation>response.data.updateInputVideo;
  }
  async DeleteInputVideo(
    input: DeleteInputVideoInput,
    condition?: ModelInputVideoConditionInput
  ): Promise<DeleteInputVideoMutation> {
    const statement = `mutation DeleteInputVideo($input: DeleteInputVideoInput!, $condition: ModelInputVideoConditionInput) {
        deleteInputVideo(input: $input, condition: $condition) {
          __typename
          id
          bucketname
          objectkey
          description
          url
          celebritydetection
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInputVideoMutation>response.data.deleteInputVideo;
  }
  async GetInputVideo(id: string): Promise<GetInputVideoQuery> {
    const statement = `query GetInputVideo($id: ID!) {
        getInputVideo(id: $id) {
          __typename
          id
          bucketname
          objectkey
          description
          url
          celebritydetection
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInputVideoQuery>response.data.getInputVideo;
  }
  async ListInputVideos(
    filter?: ModelInputVideoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInputVideosQuery> {
    const statement = `query ListInputVideos($filter: ModelInputVideoFilterInput, $limit: Int, $nextToken: String) {
        listInputVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            bucketname
            objectkey
            description
            url
            celebritydetection
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInputVideosQuery>response.data.listInputVideos;
  }
  OnCreateInputVideoListener: Observable<
    OnCreateInputVideoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInputVideo {
        onCreateInputVideo {
          __typename
          id
          bucketname
          objectkey
          description
          url
          celebritydetection
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateInputVideoSubscription>;

  OnUpdateInputVideoListener: Observable<
    OnUpdateInputVideoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInputVideo {
        onUpdateInputVideo {
          __typename
          id
          bucketname
          objectkey
          description
          url
          celebritydetection
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateInputVideoSubscription>;

  OnDeleteInputVideoListener: Observable<
    OnDeleteInputVideoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInputVideo {
        onDeleteInputVideo {
          __typename
          id
          bucketname
          objectkey
          description
          url
          celebritydetection
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteInputVideoSubscription>;
}
