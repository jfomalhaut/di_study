import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Scroll = () => {
	const file = useRef();
	const section = useRef();
	const [active, setActive] = useState(false);

	const onScroll = () => {
		if (window.scrollY + 200 > section.current.offsetTop) {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	}, []);

	return (
		<Container active={active}>
			<header></header>
			<section ref={section}></section>
			<input type="file" ref={file} />
			<button onClick={() => file.current.value = null }>reset</button>
		</Container>
	);
};

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
		background: yellowgreen;
		margin-top: 100vh;
	}
`;
