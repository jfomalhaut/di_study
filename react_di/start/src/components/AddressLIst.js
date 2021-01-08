import React from 'react';
import Address from '../routers/Address';

const AddressList = ({ item: { roadAddr } }) => {
    return (
        <div>
            <h1>{roadAddr}</h1>
        </div>
    );
};

export default Address;