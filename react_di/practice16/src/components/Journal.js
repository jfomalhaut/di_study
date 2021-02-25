import React, { useState } from 'react'
import { JournalSection, JournalItem } from './styles/JournalElements'
import JournalForm from './JournalForm'


const Journal = (props) => {
    const { journals, removeJournal, updateJournal, tempUpdate } = props;


    const DateTime = () => {
        let showDate = new Date();
        let dt = showDate.toDateString();
        return (
            <h4>{dt}</h4>
        )
    }

    const [edit, setEdit] = useState({
        id: null,
        title: '',
        main: ''
    });




    const submitUpdate = value => {
        updateJournal(edit.id, value);
        setEdit({
            id: null,
            title: '',
            main: ''
        });
    };

    if (edit.id) {
        return <JournalForm edit={edit} onSubmit={submitUpdate} />;
    }



    return (
        <div>

            <JournalSection>
                {journals.map((journal, index) => (
                    <JournalItem key={journal.id}>
                        <h2>{journal.title}</h2>
                        <DateTime />
                        <p>{journal.main}</p>
                        <div className="journal-buttons">
                            <button onClick={() => removeJournal(journal.id)}>Delete</button>
                            {/* <button onClick={() => setEdit({ id: journal.id, title: journal.title, main: journal.main })} >update</button> */}
                            {/* <button onClick={() => setEdit(journals)} >update</button> */}
                            <button onClick={() => tempUpdate(journal)} >update</button>
                        </div>

                    </JournalItem>
                ))
                }
            </JournalSection>
        </div>
    )
}

export default Journal
