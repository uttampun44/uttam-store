const INIT_STATE = {
    carts: []
}

export const cart = (state = INIT_STATE, action) =>{
    switch (action.type){
         case 'Add_to_cart':
         return{
            ...state,
            carts:[...state.carts, action.payload]
         }
         case 'Remove_item_cart':
         const removesCart =  state.carts.filter((remove) => remove.id !== action.payload);

         return{
            ...state,
            carts:removesCart
       }
       default:
        return state
    }
}