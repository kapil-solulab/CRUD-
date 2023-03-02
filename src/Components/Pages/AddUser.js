import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { addData } from "../Redux/action"
import { useDispatch } from "react-redux"
import shortid from "shortid"


const initialState = {
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: ""
}

const AddUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [formValue, setformValue] = useState(initialState)
    const { firstName, lastName, mobileNo, email } = formValue

    const handleSubmit = (e) => {
        e.preventDefault();
        Object.assign(formValue, { id: shortid.generate() })
        if (firstName && lastName && mobileNo && email) {
            dispatch(addData(formValue))
            navigate("/")
        }
    }
    const onInputChange = (e) => {
        const { name, value } = e.target
        setformValue({ ...formValue, [name]: value })
        console.log(formValue)

    }

    return (
        <div className='container d-flex justify-content-center'>
            <div className='col-md-6 mt-5'>
                <form class=" row g-3 needs-validation" onSubmit={handleSubmit} novalidate >
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
                        <input type="number" class="form-control" id="validationTooltip03" min="1"
                            max="10" name="mobileNo" value={mobileNo} onChange={onInputChange} required />
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
                        <button class="btn btn-primary" type='submit'>Submit form</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddUser