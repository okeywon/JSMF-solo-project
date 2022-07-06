import React from 'react';
import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function adminDetailView() {
    const dispatch = useDispatch();
    const params = useParams();
    const application = useSelector(store => store.application);
    console.log('in admin detail view', application);

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAIL',
            payload: Number(params.id)
        });
    }, [params.id]);

    return (
        <div>
            <h3>Application</h3>
        </div>
    )
}

export default adminDetailView;