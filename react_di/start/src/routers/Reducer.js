import React, { useReducer, useState } from 'react';

const REGEX_ONLY_NUMBER = /[0-9]$/;

//일의 정의
const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';
const INPUT = 'INPUT';


//Actions
const onIncreasement = () => ({ type: INCREASEMENT });
const onDecreasement = () => ({ type: DECREASEMENT });
const onInput = (add) => ({ type: INPUT, addNumber: add });


//하청 주는것.
const CounterReducer = (state, action) => {
    switch (action.type) {
        case INCREASEMENT: {
            return state + 1;
        }
        case DECREASEMENT: {
            return state - 1;
        }
        case INPUT: {
            return state + action.addNumber * 1;
        }

        default: {
            return state;
        }
    }
};

const Counter2 = () => {
    const [count, dispatch] = useReducer(Reducer, 0);
    const [add, setAdd] = useState('');

    const addInputNumber = () => {
        dispatch(onInput(add));
    }

    const increasement = () => {
        dispatch(onIncreasement());
    }

    const decreasement = () => {
        dispatch({ type: 'DECREASEMENT' });
    }

    const onChangeNumber = (ev) => {
        const { target: { value } } = ev;
        if (!REGEX_ONLY_NUMBER.test(value)) return;
        setAdd(value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <input value={add} onChange={onChangeNumber} />
            <button onClick={increasement}>increasement</button>
            <button onClick={decreasement}>decreasement</button>
            <button onClick={addInputNumber}>addInputNumber</button>
        </div>
    )
}

//카트 담기

export default Counter2
