import React, { useCallback, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { debounce } from 'lodash';

function Search() {
	const [searchResult, setSearchResult] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [text, setText] = useState('');

	const debounceText = useCallback(debounce((value) => init(value), 500), []);

	const onChangeHandler = (ev) => {
		const { target: { name, value } } = ev;
		setText(value);
		setIsLoading(true);
		debounceText(value);
	};

	const search = (value) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(value + 'done');
			}, 1000);
		});
	};

	const init = async (value) => {
		const result = await search(value);
		if (result) {
			setIsLoading(false);
			setSearchResult(result);
		}
	};

	useEffect(() => {
		// init();
	}, []);

	return (
		<Container>
			<form>
				<input value={text} name="text" onChange={onChangeHandler} />
				{isLoading && <Loading />}
				{searchResult}
			</form>
		</Container>
	);
}

export default Search;

const FadeInFrames = keyframes`
	0%{opacity: 0;}
	100%{opacity: 1;}
`;

const FadeIn = css`
	animation-name: ${FadeInFrames};
	animation-duration: 2s;
	animation-iteration-count: 1;
	animation-timing-function: linear;
`;

const Container = styled.section`
	min-height: 100vh;
	background: #f0f0f0;
	padding: 200px 0;
	box-sizing: border-box;
	form {
		${FadeIn}
		background: #fff;
		width: 300px;
		padding: 50px 30px;
		margin: 0 auto;
		input {
			width: 100%;
			padding: 10px;
			font-size: 30px;
		}
	}
`;

const rotate = keyframes`
	0% { transform: rotate(0deg); } 
	100% { transform: rotate(360deg); } 
`;

const rotateAnimation = css`
	animation-name: ${rotate};
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

const Loading = styled.figure`
	border: 4px solid transparent;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	box-sizing: border-box;
	border-top-color: #ddd;
	border-right-color: #ddd;
	${rotateAnimation}
`;
