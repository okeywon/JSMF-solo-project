import React from 'react';
import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import './AdminDetailView.css'

function adminDetailView() {
    const dispatch = useDispatch();
    const params = useParams();
    const application = useSelector(store => store.detail);
    console.log('in admin detail view', application);

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAIL',
            payload: Number(params.id)
        });
    }, [params.id]);

    return (

        <div className="float-Container">
            <h3>Application</h3>
            <div className="float-infoLeft">
                <h4>Name: {application.name}</h4>
                <h4>Email: {application.email}</h4>
                <h4>Phone: {application.phone}</h4>
                <h4>Address: {application.address}{application.address2}</h4>
                <h4>Email: {application.email}</h4>
                <h4>File Uploaded: {application.file}</h4>
                <h4>Applicant Video: {application.video}</h4>
            </div>
            <div className="float-infoRight">
                <h4>About Applicant: {application.about}</h4>
                <h4>Why are you the best applicant? {application.whyYou}</h4>
            </div>
            <div>
            {/* <TextareaAutosize
                        className="input text-area"
                        type="comment"
                        name="comment"
                        maxRows={8}
                        aria-label="maximum height"
                        placeholder="Comment..."
                        style={{ width: 200 }}
                        onChange={(evt) => anything=evt.target.value}
                        value={comment.comment}
                    /> */}
            </div>
        </div>            

    )
}

export default adminDetailView;