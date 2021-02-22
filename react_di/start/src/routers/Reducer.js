import React, { useReducer, useState } from 'react';
import Grocery from '../jsons/items.json'
import styled from 'styled-components';

const REGEX_ONLY_NUMBER = /[0-9]$/;

// 일의 정의
const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';
const INPUT = 'INPUT';


// Actions 일을 시키는 행위
const onIncreasement = () => ({ type: INCREASEMENT });
const onDecreasement = () => ({ type: DECREASEMENT });
const onInput = (add) => ({ type: INPUT, addNumber: add });


// 하청, 일을 직접적으로 하는 주체
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
    const [count, dispatch] = useReducer(CounterReducer, 0);
    const [add, setAdd] = useState('');

    const addInputNumber = () => {
        dispatch(onInput(add));
    };

    const increasement = () => {
        dispatch({ type: 'INCREASEMENT' });
    };

    const decreasement = () => {
        dispatch({ type: 'DECREASEMENT' });
    }

    const onChangeNumber = (ev) => {
        const { target: { value } } = ev;
        if (!REGEX_ONLY_NUMBER.test(value)) return;
        setAdd(value);
    };



    return (
        <div>
            <CountContainer>
                <h1>{count}</h1>
                <input value={add} onChange={onChangeNumber} />
                <button onClick={increasement}>increasement</button>
                <button onClick={decreasement}>decreasement</button>
                <button onClick={addInputNumber}>addInputNumber</button>
            </CountContainer>
            <GroceryCart>
                <h1>Reducer 카트담기</h1>
                <div className="box">
                    <Cart>
                        <h3>카트</h3>
                    </Cart>
                    <GroceryContainer>
                        {Grocery.map(item => (
                            <GroceryItem key={item.id}>
                                <h1>{item.name}</h1>
                                <p>{item.price}원</p>
                                <button >1개 담기</button>
                            </GroceryItem>
                        ))}
                    </GroceryContainer>
                </div>
            </GroceryCart>
        </div>

    );
};

export default Counter2;





const CountContainer = styled.div`
border-bottom: 1px solid black;
padding: 20px;

`;



//카트 담기

const GroceryCart = styled.div`
display: flex;

flex-direction: column;

.box {
    display: flex;
}
`;



const GroceryContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

`;

const GroceryItem = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
background: lightgray;
width: 200px;
justify-content: center;
align-items: center;
margin-bottom: 10px;
margin-left: 10px;

`;


const Cart = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
width: 300px;
`;

