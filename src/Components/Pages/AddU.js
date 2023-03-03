import React from 'react'
import { useFormik } from "formik";
import {signUpSchema} from "../Schemas/index"
import { useDispatch } from "react-redux"
import {addData} from "../Redux/action"
import shortid from "shortid"

const initialValues= {
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: ""
}

const AddU = () => {
    const dispatch = useDispatch()
    const { values,  touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        Object.assign(values, { id: shortid.generate() })
        dispatch(addData(values))
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
  return (
    <div className='container d-flex justify-content-center'>
            <div className='col-md-6 mt-5'>
                <form class=" row g-3" onSubmit={handleSubmit} >
                    <div class="col-md-12 position-relative">
                        <label for="validationTooltip01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationTooltip01" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur}  />
                        
                    </div>
                        {
            errors.firstName && touched.firstName ? (
                      <p className="text-danger">{errors.firstName}</p>
                    ) : null}
                    <div class="col-md-12 position-relative">
                        <label for="validationTooltip02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationTooltip02" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur}  />
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                        {errors.lastName && touched.lastName ? (
                      <p className="">{errors.lastName}</p>
                    ) : null}
                    </div>
                    <div class="col-md-12 position-relative">
                        <label for="validationTooltip03" class="form-label">Mobile No</label>
                        <input type="number" class="form-control" id="validationTooltip03" 
                            name="mobileNo" value={values.mobileNo} onChange={handleChange} onBlur={handleBlur}  />
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                        {errors.mobileNo && touched.mobileNo ? (
                      <p className="">{errors.mobileNo}</p>
                    ) : null}
                    </div>
                    <div class="col-md-12 position-relative">
                        <label for="validationTooltip04" class="form-label">Email</label>
                        <input type="email" class="form-control" id="validationTooltip04" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}  />
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                        {errors.email && touched.email ? (
                      <p className="">{errors.email}</p>
                    ) : null}
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type='submit'>Submit form</button>
                    </div>
                </form>

            </div>
        </div>
  )
}

export default AddU