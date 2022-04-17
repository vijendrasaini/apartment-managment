import { useParams } from "react-router-dom"



export const Flat = () => {

    const { id } = useParams()
    return (
        <>
            <h1>Information about All Residents</h1>
            <ol className="list-group list-group-numbered my-list">
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
                <li className="list-group-item">A list item</li>
            </ol>
        </>
    )
}