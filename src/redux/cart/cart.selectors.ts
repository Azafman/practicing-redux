import { CartReducerType } from "./slice"

export const selectProductsCount = (cartReducer: CartReducerType) => {
    return cartReducer.products.reduce(
        (acc, current) => acc + (current?.quantity ?? 0), 0
    )
}
export const selectProductTotalPrice = (cartReducer: CartReducerType) => {
    return cartReducer.products.reduce(
        (acc, current) => acc + (current.price * (current?.quantity ?? 1)), 0
    )
}