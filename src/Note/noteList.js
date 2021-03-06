import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import Note from './note';
import GeneralButton from '../GeneralButton'
//need to map the notes to the notes list items
class NoteList extends Component {

    render(props) {
        return (

            <section className="notes-list">
                <ul>
                    {this.props.notes.map(note =>
                        <li key={note.id}>
                            {<Note name={note.name} id={note.id} modified={note.modified} />}
                        </li>
                    )}
                    <li>
                        <GeneralButton
                            pathTo={() => '/'}
                            className='general-button'
                            buttonTitle="ADD NOTE"
                        ></GeneralButton>
                    </li>
                </ul>
            </section>
        )
    }
}

export default NoteList;