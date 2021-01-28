import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: ${props => props.scrollTop > 0 ? 'none' : 'block'};
    position: relative;
    top: 10%;

`;


export const SearchBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;




`;

export const SearchIcon = styled.div`
    padding: 15px;
    border-radius: 50%;
    background-color: #FF385C;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;



`;

export const SearchContents = styled.div`
    width: 100%;
    max-width: 1000px;
    background-color: white;
    display: flex; 
    justify-content:space-between;
    border-radius: 35px;
    padding: 10px 20px;
    position: absolute;
    align-items: center;

    .searchInput {
        display: flex;
        flex-direction: column;
        padding: 5px;
    }

    input {
        border: none;
        cursor: pointer;
    }

    
 `;


