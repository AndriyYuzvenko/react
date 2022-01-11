import React, {useEffect, useState} from 'react';
import Coment from "../Coment/Coment";
import "./Coments.css"

const Coments = () => {
    let [coments, setComents] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(item => item.json())
            .then(item => setComents(item))
    }, [])
    return (
        <div className={'coments'}>
            {coments.map(item => <Coment key={item.id} id={item.id} name={item.name} postId={item.postId}
                                         title={item.title} body={item.body}/>)}

        </div>
    );
};

export default Coments;