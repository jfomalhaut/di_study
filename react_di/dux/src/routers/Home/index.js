import React from 'react'
import { useSelector } from 'react-redux';


const Home = () => {
    const count = useSelector(({ counter }) => counter.count);
    return (
        <div>
            <h1>Home Component</h1>
            <h1>Count: {count}</h1>

        </div>
    )
}

export default Home
