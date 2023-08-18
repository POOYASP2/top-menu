import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
type cartType = {
  id: number
  price: number
  count: number
}

interface cartStoreProps {
  itemsOfCart: Array<cartType>
  count: number
}

const initialState: cartStoreProps = {
  itemsOfCart: [],
  count: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.itemsOfCart[action.payload].count++
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.itemsOfCart[action.payload].count--
      if (state.itemsOfCart[action.payload].count === 0) {
        state.itemsOfCart = state.itemsOfCart
          .slice(0, action.payload)
          .concat(state.itemsOfCart.slice(action.payload + 1))
      }
    },
    addToCart: (state, action: PayloadAction<cartType>) => {
      state.itemsOfCart.push(action.payload)
      state.count++
    },
  },
})

export const { increment, addToCart, decrement } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.itemsOfCart

export default cartSlice.reducer
