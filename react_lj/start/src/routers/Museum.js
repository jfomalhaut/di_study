import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

function Museum() {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const objectIdsUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search';
	const objectUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

	const getMuseumIds = async () => {
		setIsLoading(true);
		const { data: { total, objectIDs } } = await Axios.get(`${objectIdsUrl}?q=sunflowers`);
		const result = await Promise.all(objectIDs.map(item => getMuseum(item)));
		setList(result);
		setIsLoading(false);
	};

	const getMuseum = async (id) => {
		const { data } = await Axios.get(`${objectUrl}/${id}`);
		return data;
	}

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
		</Container>
	)
}

export default Museum;

const Container = styled.div`
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