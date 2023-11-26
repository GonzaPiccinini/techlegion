import { Token } from "./token"
import { User } from "./user"

export interface AuthSliceModel {
    logged: boolean
    token: string
    user: User
}

export interface AuthUserAndToken {
    user: User
    token: Token
}