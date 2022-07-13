import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import { blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './AdminDetailView.css'

function adminDetailView() {
    const dispatch = useDispatch();
    const params = useParams();
    const application = useSelector(store => store.detail);
    const comment = application.comments;
    const [disableYes, setDisableYes] = useState(false);
    const [disableNo, setDisableNo] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [vote, setVote] = useState(0);

    useEffect(() => {
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
        setVote(1);
        let appID = application.id;
        dispatch({
            type: 'ADD_VOTE',
            payload: {appID, vote}
        });
    }

    const downVote = () => {
        console.log('clicked no');
        if (confirm("Are you sure you want to vote 'no'? This will disable voting options for this applicant.") == true) {
            setDisableYes(true);
            setDisableNo(true);
            console.log(disableNo, disableYes);
        } else {
            return;
        }
    }

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
                <ol>
                {comment && comment.map((note) => (
                    <li>{note}</li>
                ))}
                </ol>
                <TextareaAutosize
                    className="input comment"
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
            <div>
                <p>Would you like to vote for this candidate?</p>
                <p>Current Votes: {vote}</p>
                <ThemeProvider theme={theme}>
                <p className="vote-btn yes" disabled={disableYes} onClick={(evt) => upVote(evt)}>Yes<ThumbUpAltRoundedIcon color="secondary"/></p>
                </ThemeProvider>
                <ThemeProvider theme={theme2}>
                <p className="vote-btn no" disabled={disableNo} onClick={(evt) => downVote(evt)}>No<ThumbDownRoundedIcon color="secondary"/></p>
                </ThemeProvider>
            </div>
        </div>            
    )
}

export default adminDetailView;