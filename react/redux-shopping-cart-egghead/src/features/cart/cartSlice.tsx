import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'
export interface CartState {
    items: { [productID: string]: number }
}

const initialState: CartState = {
    items: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<string>) {
            const id = action.payload
            if (state.items[id]) {
                state.items[id]++
            } else {
                state.items[id]=1 
            }
            
        }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer
export function getNumItems(state: RootState) {
    console.log('calling numItems')
    let numItems = 0
    for (let id in state.cart.items) {
        numItems+=state.cart.items[id]
    }
    return numItems
}