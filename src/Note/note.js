import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import '../App.css';

//need to map the notes to the notes list items
class Note extends Component {


    render(props) {
        const niceDate = this.props.modified;

        return (
            <div className="note">
                <NavLink to={`/note/${this.props.id}`}>{this.props.name}</NavLink>
                <button className="note-button">Delete Note</button>
                <p> {niceDate} </p>
            </div>
        )
    }
}

export default Note;