import React, {useReducer, useState} from 'react';



const renders = (animals,action) => {
    switch (action.type){
        case:

    }
}
const Animals = () => {

    const [animals, dispatch] = useReducer(renders,{cat: '', dog: ''})
    const save = (e) => {
        dispatch({...animals, [e.target.name]: e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault()
        console.log(animals)
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label>Cat:<input type="text" value={animals.cat} name={'cat'} onChange={save}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Animals;