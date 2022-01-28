import React, {useReducer} from 'react';

const renders = (animals, action) => {
    switch (action.type) {
        case 'xxx':
            return {...animals, [action.field]: action.payload}

        default:
            return animals
    }
}
const catAndDog = {
    cat: '', dog: ''
}
const Animals = () => {

    const [animals, dispatch] = useReducer(renders, catAndDog)

    const save = (e) => {
        dispatch({
            type: 'xxx',
            field: e.target.name,
            payload: e.target.value
        })
    }
    const animalCat = (e) => {
        e.preventDefault()
        console.log(animals)
    }
    const animalDog = (e) => {
        e.preventDefault()
        console.log(animals)
    }
    return (
        <div>
            <form onSubmit={animalCat}>
                <label>Cat:<input type="text" value={animals.cat} name={'cat'} onChange={save}/></label>
                <button>Save</button>
            </form>2
            <form onSubmit={animalDog}>
                <label>Dog:<input type="text" value={animals.dog} name={'dog'} onChange={save}/></label>
                <button>Save</button>
            </form>
            <hr/>
            <p>{animals.cat}</p>
            <p>{animals.dog}</p>
        </div>
    );
};

export default Animals;

// import React, {useState} from 'react';
//
//
// const Animals = () => {
//     const [cats, setCats] = useState([])
//     const [a, setA] = useState({cat: ''})
//     const animal = (e) => {
//         setA({...a, [e.target.name]: e.target.value})
//     }
//
//     const submit = (e) => {
//         e.preventDefault()
//         setCats([...cats, a])
//
//     }
//     console.log(cats)
//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <label>Cat:<input type="text" name={'cat'} onChange={animal}/></label>
//                 <button>Save</button>
//             </form>
//             <hr/>
//             <p>{cats.cat}</p>
//         </div>
//     );
// };
//
// export default Animals;