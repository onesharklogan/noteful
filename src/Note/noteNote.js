import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import Note from './note';
//need to map the notes to the notes list items
class NoteNote extends Component {

    render(props) {
        return (

            <section className="notes-list">
                <ul>
                    <li><Note /></li>
                </ul>
            </section>
        )
    }
}

export default NoteNote;