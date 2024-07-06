import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../components/data/products";

interface initialStateProps {
    products:Product[]
}
const initialState:initialStateProps = {
    products: []
}

const cartSlice = createSlice({//substitui o reducer.js, actions e action-types.
    name: 'cart',
    initialState,
    reducers: {//os reducers serão as funções que estavam contidas dentro do reducer.js e actions.  O toolkit já irá usar o name do createSlice para criar as actions-types.
        addProduct: (state , {payload}:PayloadAction<Product>) => {
            const productIsAlreadyInCart = state.products.some(product => product.id === payload.id)

            if (productIsAlreadyInCart) {
                state.products = state.products.map((product) => product.id === payload.id ?
                { ...product, quantity: (product.quantity ?? 0) + 1 } : product)
                return;

            }

            state.products = [...state.products, { ...payload, quantity: 1 }]
        },
        removeProduct: (state, action:PayloadAction<Product>) => {
            state.products = state.products.filter(({id}) => id !== action.payload.id)
        },
        decreaseProductQuantity: (state, action:PayloadAction<Product>) => {
            const hasMoreOneInCart = (state.products.find(({id}) => id === action.payload.id)?.quantity ?? 0) > 1;
            if(hasMoreOneInCart) {
                state.products = state.products.map(product => {
                    if(product.id === action.payload.id) {
                        return {...product, quantity: (product.quantity ?? 1) - 1}
                    }
                    return product;
                })
                return;
            }
            state.products = state.products.filter(({id}) => id !== action.payload.id);
        }
    }
});

export const {addProduct, removeProduct, decreaseProductQuantity} = cartSlice.actions;
export default cartSlice.reducer;
export type CartReducerType = ReturnType<typeof cartSlice.reducer>;
