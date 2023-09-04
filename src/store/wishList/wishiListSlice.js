import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     products: [],
     
}

const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const itemInCart = state.products.find((item) => item.id === action.payload.id)
            if(itemInCart) {
                itemInCart.quantity += 1;
                
            } else {
                state.products.push({... action.payload})
                
            }
       
        },
      
       
          removeItem: (state, action) => {
            const productId = action.payload;
            state.products = state.products.filter((item) => item.id !== productId);
              
            
          },
    }
})
export const {removeItem} = wishListSlice.actions
export const {addToWishList} = wishListSlice.actions
export default wishListSlice.reducer