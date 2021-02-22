import styled from 'styled-components';





export const JournalSection = styled.div`
width: 70%;
padding: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;


`;

export const JournalItem = styled.div`
width: 300px;
height: 400px;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 20px;
margin-left: 10px;
margin-bottom: 10px;







h2{
    margin-bottom: 10px;
    word-break:break-all;
    width: 100%;
}

h4 {
    margin-bottom: 10px;
    font-size: 0.7rem;
    color: lightgray;
}
p{
    width: 100%;
    height: auto;
    text-align: justify;
    margin-bottom: 30px;
    overflow: auto;
    word-break:break-all;
}

.journal-buttons{
    width: 150px;
    display: flex;
    justify-content: space-around;
}

button {
    padding: 8px;
}

`;
