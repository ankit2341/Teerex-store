import * as types from "./actionTypes";

export const Addtocart=(data)=>{
    return{
        type:types.ADD_TO_CART,
        payload:data
    }
}

export const Removefromcart=(data)=>{
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