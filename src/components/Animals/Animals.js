import React, {useReducer} from 'react';
import {useForm} from 'react-hook-form'

import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";

const render = (animal, action) => {
    switch (action.type) {
        case 'allAnimal':
            return [...animal, action.objAnimals]
        case 'getId':
            return animal.filter(animal => animal.id !== action.getById)
    }

}
const Animals = () => {
    const {handleSubmit, register, reset} = useForm()
    const [animal, dispatch] = useReducer(render, [])
    const allAnimal = (e) => {
        dispatch({
            type: 'allAnimal',
            objAnimals: {id: Date.now(), ...e}
        })
        reset()
    }
    const getId = (id) => {
        dispatch({
            type: 'getId',
            getById: id
        })
    }
    return (
        <div>
            <div className={'forms'}>
                <form onSubmit={handleSubmit(allAnimal)}>
                    <label>Cat:<input type="text" {...register('cat')}/></label>
                    <button>Save</button>
                </form>
                <form onSubmit={handleSubmit(allAnimal)}>
                    <label>Dog:<input type="text" {...register('dog')}/></label>
                    <button>Save</button>
                </form>
            </div>
            <hr/>
            <div className={'animals'}>
                <div>
                    {
                        animal.filter(item => item.cat !== '').map(cat =>
                            <Cats key={cat.id} cat={cat} getId={getId}/>
                        )
                    }
                </div>
                <div>
                    {
                        animal.filter(item => item.dog !== '').map(dog =>
                            <Dogs key={dog.id} dog={dog} getId={getId}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Animals;
