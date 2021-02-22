import React from 'react'
import {
    Container,
    Header,
    Body
} from './AppElements';

import JournalList from './components/JournalList';

const App = () => {


    return (
        <>
            <Container>
                <Header>
                    <h1>My Journal</h1>
                </Header>
                <Body>
                    <JournalList />
                </Body>
            </Container>


        </>
    )
}

export default App
