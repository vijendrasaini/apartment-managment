import { fetchData } from "./action";
import { FETCH_DATA } from "./actionTypes";

const initialState = {
    dataObj : { }
}
export const reducer = ( state = initialState, { type , payload})=>{
    switch(type){
        case FETCH_DATA:
            return { ...state, dataObj : payload}
        default : 
            return state
    }
}