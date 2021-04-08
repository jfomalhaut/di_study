import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
padding: 1rem;

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
    grid-gap: 10px;
    padding: 2rem;

`;


export const Article = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    text-align: right;
    justify-content: center;
    margin-bottom: 30px;





    img {
width: 100%;    
        height: 200px;
        object-fit: fill;
        object-position: top;
        margin-top: 1rem;
        
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


`;
