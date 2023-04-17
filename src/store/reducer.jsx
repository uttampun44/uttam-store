const INIT_STATE = {
    carts: []
}

export const cart = (state = INIT_STATE, action) =>{
    console.log(action)
    switch (action.type){
         case 'Add_to_cart':
         return{
            ...state,
            carts:[...state.carts, action.payload]
         }
         case 'REMOVE_FROM_CART':
         const removesCart =  state.carts.filter((remove) => remove.id !== action.payload);

         return{
            ...state,
            carts:removesCart
       }
       default:
        return state
    }
}