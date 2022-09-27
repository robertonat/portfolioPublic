import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Users {
  readonly id: string;
  readonly email?: string | null;
  readonly encryptions?: (string | null)[] | null;
  readonly Quiz0?: number | null;
  readonly RC4Quiz?: number | null;
  readonly userName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}