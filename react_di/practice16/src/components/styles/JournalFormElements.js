import styled from 'styled-components';

export const Note = styled.div`
width: 350px;
border-right: 1px solid black;
height: 100vh;
padding: 30px;



h2{
    margin-bottom: 20px;
}



.text-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

input {
    height: 40px;
    padding: 20px;
    margin-bottom: 10px;
}

textarea {
    padding: 20px;
    resize:none;
    width: 100%;
    height: auto;
}

`;

export const Button = styled.div`
display: flex;
justify-items: right;

button {
    padding: 10px;
}

`;