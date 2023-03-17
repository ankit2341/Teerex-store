import * as types from "./actionTypes";

const initstate={
    cart:[]
}

const reducer=(state=initstate,action)=>{
    const {type,payload}=action;

    switch (type) {
        case types.ADD_TO_CART:
            return{
                ...state,cart:payload
            }
        case types.REMOVE_FROM_CART:
            return{
                ...state,cart:payload
            }
        case types.EMPTY_CART:
            return{
                ...state,cart:[]
            }
        default: return initstate
    }
}

export {reducer}