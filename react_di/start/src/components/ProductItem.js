import React from 'react';
import styled, { css } from 'styled-components';

const nf = new Intl.NumberFormat();

const ProductItem = ({ item, onCheck, onDelete }) => {

    const { id, type, name, price, check } = item;

    return (
        <Item key={`ITEM${id}`} color={type}>
            <figure />
            <Check active={check} onClick={() => onCheck(id)} />
            <h1>
                <span />
                {name}
            </h1>
            <div>{nf.format(price)}원</div>
            <button onClick={() => onDelete(id)}>삭제</button>
        </Item>

    );
};

export default ProductItem;

const activeCheck = css`
    &:after {
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        background: #444;
        transform: translate(3px, 3px);
    }
`;


const Check = styled.span`
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 10px;
    width:20px;
    height: 20px;
    background: #fff;

    ${props => props.active && activeCheck}
`;

const Item = styled.li`
	border: 1px solid #ddd;
    position: relative;
	padding-bottom: 10px;
	box-shadow: 0 0 15px rgba(0, 0, 0, .2);
	transition: .2s;

	&:hover {
		transform: scale(1.05);
	}

	figure {
		height: 120px;
		background-color: ${props => (
        props.color === 1 ? '#0071B3' :
            props.color === 2 ? '#C9242B' :
                props.color === 3 ? '#198942' : '#ddd'
    )};
	}
	h1, div {
		padding: 5px 10px;
	}

	h1 {
		display: flex;
		align-items: center;
		span {
			padding: 0 5px;
			margin-right: 5px;
			font-size: 18px;
			border-width: 1px;
			border-style: solid;
			border-color: ${props => (

        props.color === 1 ? '#0071B3' :
            props.color === 2 ? '#C9242B' :
                props.color === 3 ? '#198942' : '#ddd'
    )};
			color: ${props => (

        props.color === 1 ? '#0071B3' :
            props.color === 2 ? '#C9242B' :
                props.color === 3 ? '#198942' : '#ddd'
    )};
			&:before {
				content: '${props => (

        props.color === 1 ? '수산물' :
            props.color === 2 ? '청과' :
                props.color === 3 ? '야채' : 'none'
    )}';
			}
		}
	}
`;