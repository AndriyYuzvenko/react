import React, {useReducer} from 'react';

const renders = (count, action) => {
    switch (action.type) {
        case 'inc1':
            return {...count, count1: count.count1 + 1}
        case 'dec1':
            return {...count, count1: count.count1 - 1}
        case 'reset1':
            return {...count, count1: 0}
        case 'inc2':
            return {...count, count2: count.count2 + 1}
        case 'dec2':
            return {...count, count2: count.count2 - 1}
        case 'reset2':
            return {...count, count2: 0}
        case 'inc3':
            return {...count, count3: count.count3 + 1}
        case 'dec3':
            return {...count, count3: count.count3 - 1}
        case 'reset3':
            return {...count, count3: 0}
        default:
            throw new Error('Error')

    }

}
const Counters = () => {
    const [count, dispatch] = useReducer(renders, {count1: 0, count2: 0, count3: 0})

    const incCount1 = () => {
        dispatch({type: 'inc1'})
    }
    const decCount1 = () => {
        dispatch({type: 'dec1'})
    }
    const resetCount1 = () => {
        dispatch({type: 'reset1'})
    }
    const incCount2 = () => {
        dispatch({type: 'inc2'})
    }
    const decCount2 = () => {
        dispatch({type: 'dec2'})
    }
    const resetCount2 = () => {
        dispatch({type: 'reset2'})
    }
    const incCount3 = () => {
        dispatch({type: 'inc3'})
    }
    const decCount3 = () => {
        dispatch({type: 'dec3'})
    }
    const resetCount3 = () => {
        dispatch({type: 'reset3'})
    }
    return (
        <div>
            <h1>Count1</h1>
            <div>{count.count1}</div>
            <button onClick={incCount1}>incCount1</button>
            <button onClick={decCount1}>decCount1</button>
            <button onClick={resetCount1}>resetCount1</button>
            <hr/>
            <h1>Count2</h1>
            <div>{count.count2}</div>
            <button onClick={incCount2}>incCount2</button>
            <button onClick={decCount2}>decCount2</button>
            <button onClick={resetCount2}>resetCount2</button>
            <hr/>
            <h1>Count3</h1>
            <div>{count.count3}</div>
            <button onClick={incCount3}>incCount3</button>
            <button onClick={decCount3}>decCount3</button>
            <button onClick={resetCount3}>resetCount3</button>
        </div>
    );
};

export default Counters;