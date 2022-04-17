import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import './flat.css'


export const Flat = () => {
    const [residents, setResidents] = useState([])
    const { id } = useParams()
    const baseUrl = `https://manageapartms.herokuapp.com`
    useEffect(()=>{
        let url = `${baseUrl}/flat/${id}`
        getData(url)
    },[])

    async function getData(url){
        const res = await axios.get(url)
        setResidents(res.data.residents)
    } 
    return (
        <>
            <h3 className="mt-5 mb-2 my-heading">Information about All Residents</h3>
            <table id="customers" className='container'>
                <thead>
                    <tr>
                        <th>S.N.</th> 
                        <th>Name</th>
                        <th>Gender</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {residents?.map((resident,index)=><tr key={resident._id}>
                                <td>{index + 1}</td> 
                                <td>{resident.name}</td>
                                <td>{resident.gender}</td>
                                <td>{resident.age}</td>
                            </tr>)}
                </tbody>
            </table>
            {/* <ol className="list-group list-group-numbered my-list mt-4">
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
            </ol> */}
        </>
    )
}