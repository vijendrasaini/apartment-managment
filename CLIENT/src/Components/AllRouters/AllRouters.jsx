import { Route, Routes } from 'react-router-dom' 
import { Navbar} from '../Navbar/Navbar'
import { Main } from '../Main/Main'
import { Account } from '../Account/Account'


export const AllRouters = ()=>{

    return (
        <>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Account/>}/>
            </Routes>
        </>
    )
}