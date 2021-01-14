import React from 'react';

const PhonebookItem = ({ item: { name, job, phonenumber} }) => {
	return (
		<div>
			<h1>{name}</h1>
			<h1>{job}</h1>
			<h1>{phonenumber}</h1>
		</div>
	);
};

export default PhonebookItem;