import React from 'react';

const Comment = (props) => {
    const {comment: {id, postId, name, email, body}} = props
    return (
        <div>
            <div>
                <ul>
                    <li><b>id:</b> {id}</li>
                    <li><b>postId:</b> {postId}</li>
                    <li><b>name: </b> {name}</li>
                    <li><b>email:</b> {email}</li>
                    <li><b>body:</b> {body}</li>
                </ul>
            </div>
            <hr/>
        </div>
    );
};

export default Comment;