import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import Note from './note';
//need to map the notes to the notes list items
class NoteNote extends Component {

    render(props) {
        console.log("THe props");
        console.log(this.props);
        return (
            <>
                <section className="notes-list">
                    <ul>
                        <li >

                            {<Note name={this.props.name} id={this.props.id} modified={this.props.modified} />}
                        </li>
                        <li>{this.props.content}</li>

                    </ul>
                </section>
            </>
        )
    }
}

export default NoteNote;