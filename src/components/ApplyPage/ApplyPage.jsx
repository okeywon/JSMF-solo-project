import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { Formik } from "formik";
import '../ApplyPage/ApplyPage.css'

function Application() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({name:'', email:'', phone: '', address: '', address2: '', about: '', whyYou: '', file: '', video: ''});

    const newApplication = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_APP',
            payload: {
                formData
            }
        });
        setFormData({name:'', email:'', phone: '', address: '', address2: '', about: '', whyYou: '', file: '', video: ''});
    }

    // const autoComplete = () => {
    //     setFormData({name:'David Tennent', email:'THEdoctor@gmail.com', phone: '213-645-7890', address: '123 Main St.', address2: 'Chisholm, MN 55123', about: "I'm the Doctor and I'm very good at traveling through time and space!", whyYou: "I'm clearly the only Doctor worthy of a scholarship as I am clearly THE Doctor. Also, I have the best companions - proven as they stayed on long after I was gone.", file: '', video: ''});
    // }

    return (
        <div className="application">

            <p>Applications will be accepted in the spring of 2023. Please keep an eye open for updates on the main page!</p>
            {/* <h3 onClick={autoComplete}>Apply Here:</h3>
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
                    <label for="name">Name</label>
                    <input 
                        className="input"
                        type="name"
                        name="name"
                        placeholder="Full Name"
                        onChange={(evt) => setFormData({...formData, name: evt.target.value})}
                        value={formData.name}
                    />
                    {errors.name && touched.name && errors.name}
                    <label for="email">Email</label>
                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(evt) => setFormData({...formData, email: evt.target.value})}
                        value={formData.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <label for="phone">Phone</label>
                    <input
                        className="input"
                        type="phone"
                        name="phone"
                        placeholder="Phone"
                        onChange={(evt) => setFormData({...formData, phone: evt.target.value})}
                        value={formData.phone}
                    />
                    {errors.phone && touched.phone && errors.phone}
                    <label for="address">Street Address</label>
                    <input
                        className="input"
                        type="address"
                        name="address"
                        placeholder="Street Address"
                        onChange={(evt) => setFormData({...formData, address: evt.target.value})}
                        value={formData.address}
                    />
                    {errors.address && touched.address && errors.address}
                    <label for="address2">City, State, Zip</label>
                    <input
                        className="input"
                        type="address2"
                        name="address2"
                        placeholder="City, State, Zip"
                        onChange={(evt) => setFormData({...formData, address2: evt.target.value})}
                        value={formData.address2}
                    />
                    {errors.address2 && touched.address2 && errors.address2}
                    <label for="about">About You</label>
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
                    <label for="whyYou">Why are you the best candidate?</label>
                    <TextareaAutosize
                        className="input text-area"
                        type="whyYou"
                        name="whyYou"
                        maxRows={8}
                        aria-label="maximum height"
                        placeholder="Your answer."
                        style={{ width: 200 }}
                        onChange={(evt) => setFormData({...formData, whyYou: evt.target.value})}
                        value={formData.whyYou}
                    />
                    {errors.whyYou && touched.whyYou && errors.whyYou}
                    <label for="file">Upload File</label>
                    <input
                        className="input"
                        action="/upload"
                        type="file"
                        name="essay"
                        onChange={(evt) => setFormData({...formData, file: evt.target.value})}
                        value={formData.file}
                    />
                    <label for="video">Upload Video</label>
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
            </Formik> */}
        </div>
    );
}

export default Application;