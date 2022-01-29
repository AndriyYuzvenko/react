import React from 'react';

const Dogs = ({dog: {id, dog}, getId}) => {
    return (
        <div>
            <p>{dog}</p>
            <button onClick={() => getId(id)}>delete</button>
        </div>
    );
};

export default Dogs;