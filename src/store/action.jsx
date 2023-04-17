export const Add = (item) =>{
    return {
        type: 'Add_to_cart',
        payload: item
    }
}

export const Delete = (id) =>{
    return{
        type: 'Remove_item_cart',
        palyload: id
    }
}