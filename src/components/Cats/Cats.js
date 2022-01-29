import React from 'react';

const Cats = (props) => {
    const {cat: {id, cat}, getId} = props
    return (
        <div>
            <p>{cat}</p>
            <button onClick={() => getId(id)}>delete</button>
        </div>
    );
};

export default Cats;