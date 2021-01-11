import React from 'react';


const AddressList = ({ item: { roadAddr } }) => {
    return (
        <div>
            <h1>{roadAddr}</h1>
        </div>
    );
};

export default AddressList;