import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled, { keyframes, css } from 'styled-components';
import { Home, List, Detail, Cart } from './routers';
import { Context } from './contexts';

const App = () => {
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);
	
	const enableLoading = () => {
		setIsLoading(true);
	};
	
	const disableLoading = () => {
		setIsLoading(false);
	};
	
	const killingtime = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	};

	useEffect(() => {
		console.log(location);
	}, [location]);

	return (
		<BrowserRouter>
			{/* <Link to="/home">Home</Link> */}
			<Link to="/list">List</Link>
			<Link to="/cart">Cart</Link>
			{/* <Link to="/detail">Detail</Link> */}
			{isLoading && (
				<LoadingWrapper>
					<figure onClick={() => setIsLoading(false)} />
					<article />
				</LoadingWrapper>
			)}
			<Switch>
				<Context.Provider value={{ enableLoading, disableLoading, killingtime, isLoading }}>
					<Route path="/list" component={List} />
					<Route path="/cart" component={Cart} />
				</Context.Provider>
				<Route path="/home" component={Home} />
				<Route path="/detail" component={Detail} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;

const rotate = keyframes`
	0% { transform: rotate(0); }
	100% { transform: rotate(360deg); }
`;

const animate = css`
	animation-name: ${rotate};
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

const LoadingWrapper = styled.div`
	display: flex;
	figure {
		position: fixed;
		left: 0;
		top: 0;
		margin: 0;
		width: 100vw;
		height: 100vh;
		z-index: 100;
		background: rgba(0, 0, 0, .5);
	}

	article {
		${animate}
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		margin: auto;
		z-index: 200;
		border: 7px solid #f0f0f0;
		border-right: 7px solid dodgerblue;
		border-top: 7px solid dodgerblue;
		border-radius: 50%;
		width: 40px;
		height: 40px;
	}
`;