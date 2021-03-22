import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;

img {
    width: 80px;
}


`;

export const ContainerBox = styled.div`
margin: 50px;
width: 90%;
height: auto;
border-radius: 25px;

box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
padding: 40px 20px;


`;

export const Chart = styled.div`

width: 100%;
height: auto;
display: flex;
justify-content: center;


`;

export const Articles = styled.div`


width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;

`;


export const Article = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 700px;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    text-align: right;
    justify-content: center;
    margin-bottom: 30px;



    
    h4 {
        margin-bottom: 10px;
    }

    h4 {
        font-style: italic;
    }

    img {
width: 100%;
        height: 300px;
        border-radius: 15px;
        
    }

    a {
        text-decoration: none;
        color: black;
    }

    .content{
        display: flex;
        justify-content: center;
        padding: 20px;
        text-align: justify;
        width: 100%;
        height: auto;
        text-overflow: hidden;
        overflow: hidden;
        margin-bottom: 20px;
    }

    b{
        padding: 10px 10px;
        border-radius: 25px;
        background-color: #5d5dfd;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        color: white;
        transition: all 0.2s ease-in-out;
    }

    b:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;
