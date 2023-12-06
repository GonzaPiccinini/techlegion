export interface User {
    email: string
    firstName: string
    lastName: string
    createdAt: number
    updatedAt: number
}

export interface UserWithPassword extends User {
    password: string
}

export interface UserAuth {
    email: string
    password: string
}

export interface UserRegister {
    firstName: string
    lastName: string
    email: string
    password: string
}