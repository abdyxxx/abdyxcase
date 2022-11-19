import { createSlice, current } from '@reduxjs/toolkit'
import getItems from '../firebase'

const initialState = {
  cartAmounts: sessionStorage.cart ? JSON.parse(sessionStorage.cart) : null,
  price: 8900
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(state.cartItems)
      state.cartAmounts.find(i => i.id === action.payload.id).count++;
      sessionStorage.setItem('cart', JSON.stringify(state.cartAmounts))
    },
    removeToCart(state, action) {
      state.cartAmounts.find(i => i.id === action.payload.id).count--;
      sessionStorage.setItem('cart', JSON.stringify(state.cartAmounts))
    },
    setInitialCartState(state, action) {
      state.productsData = action.payload
      if (!state.cartAmounts) {
        state.cartAmounts = action.payload.map(i => { return { id: i.id, count: 0 } });
      }
    },
    setItemsToState(state, action) {
      state.productListItems = action.payload
    },
    setMadeCases(state, action) {
      state.madeCases = action.payload;
    },
  },
})

export const setItemsToDispatch = () => (dispatch) => {
  let responseData;
  getItems()
    .then(res => {
      responseData = res;
      dispatch(setItemsToState(res.products))
    })
    .then(() => dispatch(setInitialCartState([...responseData.products, ...responseData.madeCases])))
    .then(res => dispatch(setMadeCases(responseData.madeCases)))
}

export const { addToCart, removeToCart, setInitialCartState, setItemsToState, setMadeCases } = cartSlice.actions
export default cartSlice.reducer