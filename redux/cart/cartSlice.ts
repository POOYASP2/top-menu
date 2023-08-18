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
      state.itemsOfCart[
        state.itemsOfCart.findIndex((item) => item.id === action.payload)
      ]
    },
  },
})

export const { increment } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.itemsOfCart

export default cartSlice.reducer
