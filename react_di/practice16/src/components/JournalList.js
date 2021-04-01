import React, { useState, useEffect } from 'react'
import Journal from './Journal'
import JournalForm from './JournalForm'
import { Container } from './styles/JournalListElements'

const _info = {
    id: 0,
    title: '',
    main: '',
};

const JournalList = () => {

    const initialState = JSON.parse(localStorage.getItem('journals')) || []
    const [updateInfo, setUpdateInfo] = useState(_info)

    const [journals, setJournals] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('journals', JSON.stringify(journals))
    }, [journals])

    const addJournal = journal => {
        const newJournals = [...journals, journal];
        setJournals(newJournals);
        console.log(...journals)
    }

    const removeJournal = id => {
        const removedArr = [...journals].filter(journal => journal.id !== id);
        setJournals(removedArr);
    };

    const updateJournal = (journalId, newValue) => {
        setJournals(prev => prev.map(item => (item.id === journalId ? newValue : item)));
    };

    const tempUpdate = (data) => {
        setUpdateInfo(data);
    };

    useEffect(() => {
        console.log("updateInfo", updateInfo);
    }, [updateInfo]);



    return (
        <>
            <Container>
                <JournalForm info={updateInfo} onSubmit={addJournal} />
                <Journal
                    journals={journals}
                    removeJournal={removeJournal}
                    updateJournal={updateJournal}
                    tempUpdate={tempUpdate}
                />
            </Container>
        </>

    )
}

export default JournalList
