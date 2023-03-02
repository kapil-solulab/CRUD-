import React from 'react'
import { useNavigate } from "react-router-dom";
import { updateData } from "../Redux/action"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'

const initialState = {
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: ""
}

const AddEditUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { id } = useParams()
    const [formValue, setformValue] = useState(initialState)
    const { firstName, lastName, mobileNo, email } = formValue
    const users = useSelector(state => state.data.user)

    useEffect(() => {
        if (id) {
            const currentUser = users.find((item) => item.id === id)
            setformValue({ ...currentUser })
        } else {
            setformValue({ ...initialState })
        }
    }, [id])

    const onInputChange = (e) => {
        const { name, value } = e.target
        setformValue({ ...formValue, [name]: value })
        console.log(formValue)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (firstName && lastName && mobileNo && email) {
            dispatch(updateData(formValue))
            navigate("/");
        }
    }

    return (
        <div>
            <div className='container d-flex justify-content-center'>
                <div className='col-md-6 mt-5'>
                    <form class=" row g-3 needs-validation" novalidate onSubmit={handleUpdate} >
                        <div class="col-md-12 position-relative">
                            <label for="validationTooltip01" class="form-label">First name</label>
                            <input type="text" class="form-control" id="validationTooltip01" name="firstName" value={firstName} onChange={onInputChange} required />
                            <div class="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-12 position-relative">
                            <label for="validationTooltip02" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="validationTooltip02" name="lastName" value={lastName} onChange={onInputChange} required />
                            <div class="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-12 position-relative">
                            <label for="validationTooltip03" class="form-label">Mobile No</label>
                            <input type="" class="form-control" id="validationTooltip03" name="mobileNo" value={mobileNo} onChange={onInputChange} required />
                            <div class="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-12 position-relative">
                            <label for="validationTooltip04" class="form-label">Email</label>
                            <input type="email" class="form-control" id="validationTooltip04" name="email" value={email} onChange={onInputChange} required />
                            <div class="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type='submit'>Save</button>
                        </div>
                    </form>

                </div>
            </div>





        </div>
    )
}

export default AddEditUser