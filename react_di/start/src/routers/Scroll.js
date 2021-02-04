import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Scroll = () => {
    // document.getElementId랑 비슷함, react에서는 많이 안쓰이는편..
    const section = useRef();
    const file = useRef();
    const [active, setActive] = useState(false);

    const [top, setTop] = useState(0);

    const onScroll = () => {

        console.log(section.current.offsetTop);
        if (window.scrollY + 200 > section.current.offsetTop) {
            setActive(true);
        } else {
            setActive(false);
        }

        // scroll top의 위치 알려줌.
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () =>
            window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Container active={active}>
            <header></header>
            <section ref={section}></section>

            {/* 파일 같은거 입력하고 없애줄때 useRef 유용함. */}
            <input type="file" ref={file} />
            <button onClick={() => file.current.value = null}>Reset</button>
        </Container>
    )
}

export default Scroll;

const Container = styled.div`
    min-height: 200vh;


    header {
        width: 100%;
        height: 200px;
        background: ${props => props.active ? 'red' : 'black'};
        position: fixed;
        top: 0;
        left: 0;
    }
    section {
        width: 100%;
        height: 300px;
        background:yellowgreen;
        margin-top: 100vh;
        
    }
`;
