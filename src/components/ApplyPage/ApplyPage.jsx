import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { Formik } from "formik";
import '../ApplyPage/ApplyPage.css'

function Application() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({name:'', email:'', phone: '', address: '', address2: '', about: '', whyYou: '', file: '', url: ''});

    const newApplication = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_APP',
            payload: {
                formData
            }
        });
        setFormData({name:'', email:'', phone: '', address: '', address2: '', about: '', whyYou: '', file: '', url: ''});
    }

    return (
        <div className="application">
            <h4>Apply Here:</h4>
            <Formik
                initialValues={{name: '', email: '', phone: '', address: '', address2: '', about: '', whyYou: '', file: '', video: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.email) {
                        errors.name = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
                    }
                    if (!values.address) {
                        errors.address = 'Required';
                    }
                    if (!values.address2) {
                        errors.address2 = 'Required';
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
                errors,
                touched,
                }) => (
                <form onSubmit={(newApplication)}>
                    <input 
                        className="input"
                        type="name"
                        name="name"
                        placeholder="Full Name"
                        onChange={(evt) => setFormData({...formData, name: evt.target.value})}
                        value={formData.name}
                    />
                    {errors.name && touched.name && errors.name}
                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(evt) => setFormData({...formData, email: evt.target.value})}
                        value={formData.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        className="input"
                        type="phone"
                        name="phone"
                        placeholder="Phone"
                        onChange={(evt) => setFormData({...formData, phone: evt.target.value})}
                        value={formData.phone}
                    />
                    {errors.phone && touched.phone && errors.phone}
                    <input
                        className="input"
                        type="address"
                        name="address"
                        placeholder="Street Address"
                        onChange={(evt) => setFormData({...formData, address: evt.target.value})}
                        value={formData.address}
                    />
                    {errors.address && touched.address && errors.address}
                    <input
                        className="input"
                        type="address2"
                        name="address2"
                        placeholder="City, State, Zip"
                        onChange={(evt) => setFormData({...formData, address2: evt.target.value})}
                        value={formData.address2}
                    />
                    {errors.address2 && touched.address2 && errors.address2}
                    <TextareaAutosize
                        className="input text-area"
                        type="about"
                        name="about"
                        maxRows={8}
                        aria-label="maximum height"
                        placeholder="Tell us about yourself."
                        style={{ width: 200 }}
                        onChange={(evt) => setFormData({...formData, about: evt.target.value})}
                        value={formData.about}
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
                        onChange={(evt) => setFormData({...formData, whyYou: evt.target.value})}
                        value={formData.whyYou}
                    />
                    {errors.whyYou && touched.whyYou && errors.whyYou}
                    <input
                        className="input"
                        action="/upload"
                        type="file"
                        name="essay"
                        onChange={(evt) => setFormData({...formData, file: evt.target.value})}
                        value={formData.file}
                    />
                    <input
                        className="input"
                        type="url"
                        placeholder="Video URL"
                        onChange={(evt) => setFormData({...formData, video: evt.target.value})}
                        value={formData.video}
                    />
                    <input className="submit-btn" type="submit"/>
                </form>
                )}
            </Formik>
        </div>
    );
}

export default Application;