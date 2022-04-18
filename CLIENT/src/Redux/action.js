import axios from "axios"
import { FETCH_DATA } from "./actionTypes"



export const setData = (payload)=>({ type : FETCH_DATA, payload})

export const fetchData = (url) => async (dispatch)=>{
    const token = JSON.parse(localStorage.getItem('token'))
    const a = await fetch(url, {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const res = await a.json()
    console.log({res})
    const data = res
    dispatch(setData(data))
}
