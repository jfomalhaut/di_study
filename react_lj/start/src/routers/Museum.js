import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const COUNT_PER_PAGE = 10;

function Museum() {
	const [list, setList] = useState([]);
	const [totalList, setTotalList] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(0);
	const objectIdsUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search';
	const objectUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

	[1, 2,3,2,3,4,5,6,7,8,9,0,22, 23, ]

	const getMuseumIds = async () => {
		// setIsLoading(true);
		const { data: { total, objectIDs } } = await Axios.get(`${objectIdsUrl}?departmentId=6&q=cat`);
		const result = objectIDs.reduce((acc, cur, idx) => {
			const number = idx + 1;
			// 1, 2, 3, 4,... ,9, 10 => 1
			// 11 ~~~ => 2
			const key = 'p' + Math.ceil(number / COUNT_PER_PAGE); // 처음에는 p1: []
			return {
				...acc,
				[key]: acc[key] ? [ ...acc[key], cur ] : [cur]
			};
		}, {});

		setTotalList(result);
		console.log(result);

		// setIsLoading(false);
	};
	
	const getPageData = async () => {
		const key = 'p' + page;
		const result = await Promise.all(totalList[key].map(item => getMuseum(item)));
		setList(result);
	};

	const getMuseum = async (id) => {
		const { data } = await Axios.get(`${objectUrl}/${id}`);
		return data;
	};

	useEffect(() => {
		if (page > 0) {
			console.log(page);
			getPageData();
		}
	}, [page]);

	useEffect(() => {
		getMuseumIds();
	}, []);

	return (
		<Container>
			{isLoading ? (
				<h5>...Loading</h5>
			) : (
				<ul>
					{list.map(item => (
						<li key={`MUSEUM${item.objectID}`}>
							<img src={item.primaryImage} />
							<h1>{item.objectName}</h1>
						</li>
					))}
				</ul>
			)}
			<div>
				{Object.keys(totalList).map((item, index) => (
					<span style={{ color: index + 1 === page ? 'dodgerblue' : 'black'}} onClick={() => setPage(item.substr(1) * 1)}>{item.substr(1)}</span>
				))}
			</div>
		</Container>
	)
}

export default Museum;

const Container = styled.div`
	div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 1000px;
		margin: 0 auto;
		span {
			font-size: 20px;
			margin: 10px;
		}
	}
 
	ul {
		width: 1000px;
		margin: 0 auto;
		li {
			display: flex;
			padding: 10px 0;
			img {
				width: 300px;
				flex-shrink: 0;
			}
			h1 {
				flex-grow: 1;
			}
		}
	}
`;