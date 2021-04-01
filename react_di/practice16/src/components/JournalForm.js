import React, { useState, useEffect } from 'react'
import { Note, Button } from './styles/JournalFormElements'

const JournalForm = (props) => {
    const [title, setTitle] = useState('');
    const [main, setMain] = useState('');
    // const [title, setTitle] = useState(props.edit ? props.edit.value : '');
    // const [main, setMain] = useState(props.edit ? props.edit.value : '');

    useEffect(() => {
        setTitle(props.info.title);
        setMain(props.info.main);
    }, [props.info]);

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };
    const handleMainChange = e => {
        setMain(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (props.info.id > 0) { // ������ ��

        } else { // ���� �ۼ�

        }
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            title: title,
            main: main
        });
        setTitle('');
        setMain('');


    };



    return (
        <>
            <Note>
                <h2>Today's story</h2>
                <form onSubmit={handleSubmit}>
                    <div className="text-area">
                        <input
                            value={title}
                            name='title'
                            onChange={handleTitleChange}
                            type="text"
                            placeholder="Type title"
                            required
                        />
                        <textarea
                            value={main}
                            onChange={handleMainChange}
                            name='main'
                            rows="20"
                            cols="50"
                            placeholder="Type texts"
                            required
                        />
                    </div>
                    <Button>
                        <button onClick={handleSubmit}>
                            Submit
                        </button>
                    </Button>
                </form>

            </Note>
        </>
    )
}

export default JournalForm
