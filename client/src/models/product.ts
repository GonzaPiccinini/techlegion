import { UserJWT } from "./user"

export interface Product {
    description: string
    image: string
    name: string
    user: UserJWT
}

