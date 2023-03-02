import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteData } from '../Redux/action'
import { useDispatch } from "react-redux"

const initialState = {
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: ""
}

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data.user)
    const { isFilter } = useSelector(state => state.data)
    const { filterUser } = useSelector(state => state.data)
    // const filteredUsers = useSelector((state) => state.data.filteredUsers);
    // console.log("filterdata",filteredUsers)

    return (
        <div className='d-flex justify-content-center'>
            <div className='col-md-6 mt-4'>
                <table class="table  table-dark table-striped">
                    <thead>
                        <tr>
                            <th >#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col" colspan="4">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isFilter ? 
                            data.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row" >{index + 1}</th>
                                    <td >{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.mobileNo}</td>
                                    <td>{user.email}</td>
                                    <td><Link class="nav-link p-0 " to={`/EditUser/${user.id}`} ><button class="btn btn-outline-success py-0" type="button">Edit</button></Link></td>
                                    <td><button class="btn btn-outline-danger py-0" onClick={() => dispatch(deleteData(user.id))} type="button">Delete</button></td>
                                </tr>

                            )): (
                            filterUser.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row" >{index + 1}</th>
                                    <td >{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.mobileNo}</td>
                                    <td>{user.email}</td>
                                    <td><Link class="nav-link p-0 " to={`/EditUser/${user.id}`} ><button class="btn btn-outline-success py-0" type="button">Edit</button></Link></td>
                                    <td><button class="btn btn-outline-danger py-0" onClick={() => dispatch(deleteData(user.id))} type="button">Delete</button></td>
                                </tr>

                            ))

                        )
                            

                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home