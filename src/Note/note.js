import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

//need to map the notes to the notes list items
class Note extends Component {


    render(props) {
        const niceDate = this.props.modified;

        return (
            <div>
                <button className="note-button">Delete Note</button>

                <h2>{this.props.name}</h2>
                <p> {niceDate} </p>
            </div>
        )
    }
}

export default Note;