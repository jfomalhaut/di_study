import React from 'react'
import { useDispatch } from 'react-redux'



const List = () => {
    const dispatch = useDispatch();
    const increasement = () => {
        dispatch({ type: 'INCREASEMENT' });
    }
    return (
        <div>
            <h1>List component</h1>
            <button onClick={increasement}>increasement</button>

        </div>
    )
}

export default List
