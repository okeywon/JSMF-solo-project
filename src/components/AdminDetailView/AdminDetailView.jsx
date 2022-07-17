import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import { blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Moment from 'react-moment';
import './AdminDetailView.css'

function adminDetailView() {
    const dispatch = useDispatch();
    const params = useParams();
    const application = useSelector(store => store.detail);
    const user = useSelector(store => store.user);
    const comment = application.comments;
    const [disable, setDisable] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [newVote, setNewVote] = useState(0);

    useEffect(() => {
        if(application.userVote === user.id){
            setDisable(true);
        }
        dispatch({
            type: 'FETCH_DETAIL',
            payload: Number(params.id)
        });
    }, [params.id]);

    const theme = createTheme({
        palette: {
            primary: {
                main: blue[500]
            },
            secondary: {
                main: '#0756b1',
                darker: '#4EC4DE'
            }
        }
    });

    const theme2 = createTheme({
        palette: {
            primary: {
                main: blue[500]
            },
            secondary: {
                main: '#d0271b',
                darker: '#a61f16'
            }
        }
    });

    const addComment = () => {
        let appID = application.id;
        dispatch({
            type: 'ADD_COMMENT',
            payload: {
                appID,
                newComment,
            }
        });
        setNewComment('');
    }

    const upVote = () => {
        console.log('clicked yes');
        setNewVote(1);
        let appID = application.id;
        dispatch({
            type: 'ADD_VOTE',
            payload: {appID, newVote: 1}
        });
        setDisable(true);
        setDisable(true);
    }

    const downVote = () => {
        console.log('clicked no');
        if (confirm("Are you sure you want to vote 'no'? This will disable voting options for this applicant.") == true) {
            setDisable(true);
            setDisable(true);
            console.log(disable);
        } else {
            return;
        }
    }

    return (
        <div className="float-Container">
            <h3>Application</h3>
            <div className="float-infoLeft">
                <p>Name: {application.name}</p>
                <p>Email: {application.email}</p>
                <p>Phone: {application.phone}</p>
                <p>Address: {application.address}{application.address2}</p>
                <p>File Uploaded: {application.file}</p>
                <p>Applicant Video: {application.video}</p>
            </div>
            <div className="float-infoRight">
                <p>About Applicant: {application.about}</p>
                <p>Why are you the best applicant? {application.whyYou}</p>
            </div>
            <div className="comments">
                {comment && comment.map((note) => (
                    <ul key={note.id}>
                        <li>Comment: {note.comment} by: {note.user_id} at: <Moment>{note.timeStamp}</Moment></li>
                    </ul>
                ))}
                <div className="input-ok">
                    <TextareaAutosize
                        className="input-comment"
                        type="comment"
                        name="comment"
                        value={newComment}
                        maxRows={8}
                        aria-label="maximum height"
                        placeholder="Comment..."
                        style={{ width: 200 }}
                        onChange={(evt) => setNewComment(evt.target.value)}
                    />
                    <button
                        className="ok-btn"
                        onClick={() => {
                            addComment(newComment)
                        }}
                    >
                    OK
                    </button>
                </div>
            </div>
            <div className="voteDiv">
                <p>Would you like to vote for this candidate?</p>
                <p>Current Votes: {application.voteCount}</p>
                <ThemeProvider theme={theme}>
                <button className="vote yes" disabled={disable} onClick={(evt) => upVote(evt)}>Yes<ThumbUpAltRoundedIcon color="secondary"/></button>
                </ThemeProvider>
                <ThemeProvider theme={theme2}>
                <button className="vote no" disabled={disable} onClick={(evt) => downVote(evt)}>No<ThumbDownRoundedIcon color="secondary"/></button>
                </ThemeProvider>
            </div>
        </div>            
    )
}

export default adminDetailView;