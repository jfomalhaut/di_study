import styled from 'styled-components';



export const Container = styled.div`
width: 100%;
height: auto;
display: flex;

*{
    margin: 0;
padding: 0;
}


`;

export const Cart = styled.div`
width: 300px;
border: 1px solid black;
justify-content: center;


`;

export const CartHeader = styled.div`
text-align: center;
font-size: 1.3rem;
margin-bottom: 50px;
padding: 50px;

h1{
    border-bottom: 5px solid gray;
}




`;

export const CartList = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;




`;

export const CartItem = styled.li`
display: flex;
flex-direction: column;
margin-bottom: 30px;
text-align: center;
justify-content: center;
text-align: center;

.inputBox {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

}

input {
    width: 30px;
    text-align: center;

}

.buttonBox {
    display: flex;
    justify-content: center;
}

button {

    width: 150px;
}

h2 {
    font-size: 3rem;
}

h3 {
    margin-bottom: 5px;
}

p {
    margin-bottom: 5px;
}

`;

export const ItemTotal = styled.div`
width: 100%;
height: auto;
border-top: 1px solid black;
top: 70%;
display: flex;
flex-direction: column;
justify-content: center;

.totalBox {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}


button {
    width: 100px;
}

`;


export const Products = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr

`;


export const Product = styled.div`
padding: 50px;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
