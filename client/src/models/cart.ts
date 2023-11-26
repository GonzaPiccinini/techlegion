import { Product } from ".";

export interface Cart {
    products: Product[]
    userId: number
}