import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Comment from "../../components/comments/comment";
import {getComments} from "../../store/comments.slice/comments.slice";

const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state['commentsReducer'])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getComments())
    }, [])
    return (
        <div>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;