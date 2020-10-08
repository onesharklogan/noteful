import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import '../App.css';

//need to map the notes to the notes list items
class Folder extends Component {

    render(props) {
        { console.log(this.props) }

        return (
            <NavLink
                className='folder-button'
                to={`/folder/${this.props.id}`}
            >{this.props.name}</NavLink>
        )
    }
}

export default Folder;