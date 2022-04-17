import axios from "axios"
import { FETCH_DATA } from "./actionTypes"



export const setData = (payload)=>({ type : FETCH_DATA, payload})

export const fetchData = (url) => async (dispatch)=>{
    const res = await axios.get(url)
    const data = res.data
    dispatch(setData(data))
}
