import * as types from "./actionTypes";

export const Addtocart=()=>{
    return{
        type:types.ADD_TO_CART,
        payload:data
    }
}

export const Removefromcart=()=>{
    return{
        type:types.REMOVE_FROM_CART,
        payload:data
    }
}

export const emptycart=()=>{
    return{
        type:types.EMPTY_CART
    }
}