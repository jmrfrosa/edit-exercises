export type User = {
  id: string
  name: string
  picture: string
  bio: string
  isAdmin: boolean
}

export enum UserActionType {
  ADD = 'add',
  DELETE = 'delete',
  PROMOTE = 'promote',
  DEMOTE = 'demote',
}

type UserAddAction = {
  type: UserActionType.ADD
  payload: Omit<User, 'id'>
}

type UserDeleteAction = {
  type: UserActionType.DELETE
  payload: Pick<User, 'id'>
}

type UserPromoteAction = {
  type: UserActionType.PROMOTE
  payload: Pick<User, 'id'>
}

type UserDemoteAction = {
  type: UserActionType.DEMOTE
  payload: Pick<User, 'id'>
}

export type UserAction =
  | UserAddAction
  | UserDeleteAction
  | UserPromoteAction
  | UserDemoteAction
