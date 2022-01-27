import React, {useReducer} from 'react';

const renders = () => {

}
const cats=()=>{

}
const Animals = () => {
    const [animals, disetch] = useReducer(renders, [{cat: '', dog: ''}])
    return (
        <div>
            <form>
                <label>Cat:<input type="text"/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Animals;