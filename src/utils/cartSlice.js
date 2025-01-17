import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload)
    },
    removeItem: (state, action) => {
      state.cartItems.pop()
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const { addItem, clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer
