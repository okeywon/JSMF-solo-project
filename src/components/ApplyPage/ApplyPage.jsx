import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Formik} from "formik";
import '../ApplyPage/ApplyPage.css'

function Application() {

    return (
        <div className="application">
            <h4>Apply Here:</h4>
            <Formik
                initialValues={{fullName: '', email: '', phone: '', streetAddress: '', cityStateZip: '', about: '', whyYou: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.fullName) {
                        errors.fullName = 'Required';
                    }
                    if (!values.email) {
                        errors.fullName = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
                    }
                    if (!values.streetAddress) {
                        errors.streetAddress = 'Required';
                    }
                    if (!values.cityStateZip) {
                        errors.cityStateZip = 'Required';
                    }
                    if (!values.about) {
                        errors.about = 'Required';
                    }
                    if (!values.whyYou) {
                        errors.whyYou = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
            >
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form>
                    <input 
                        className="input"
                        type="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        value={values.fullName}
                    />
                    {errors.fullName && touched.fullName && errors.fullName}
                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values.email}    
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        className="input"
                        type="phone"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={values.phone}
                    />
                    {errors.phone && touched.phone && errors.phone}
                    <input
                        className="input"
                        type="streetAddress"
                        name="streetAddress"
                        placeholder="Street Address"
                        onChange={handleChange}
                        value={values.streetAddress}
                    />
                    {errors.streetAddress && touched.streetAddress && errors.streetAddress}
                    <input
                        className="input"
                        type="cityStateZip"
                        name="cityStateZip"
                        placeholder="City, State, Zip"
                        onChange={handleChange}
                        value={values.cityStateZip}
                    />
                    {errors.cityStateZip && touched.cityStateZip && errors.cityStateZip}
                    <TextareaAutosize
                        className="input text-area"
                        type="about"
                        name="about"
                        maxRows={8}
                        aria-label="maximum height"
                        placeholder="Tell us about yourself."
                        style={{ width: 200 }}
                        onChange={handleChange}
                        value={values.about}
                    />
                    {errors.about && touched.about && errors.about}
                    <TextareaAutosize
                        className="input text-area"
                        type="whyYou"
                        name="whyYou"
                        maxRows={8}
                        aria-label="maximum height"
                        placeholder="Why are you the best candidate?"
                        style={{ width: 200 }}
                        onChange={handleChange}
                        value={values.whyYou}
                    />
                    {errors.whyYou && touched.whyYou && errors.whyYou}
                    <input className="input" type="file"/>
                    <input className="input" type="url" placeholder="Video URL"/>
                    <input className="submit-btn" type="submit"/>
                </form>
            )}
            </Formik>
        </div>
    );
}

export default Application;