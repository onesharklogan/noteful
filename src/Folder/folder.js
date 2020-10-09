import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import '../App.css';

//need to map the notes to the notes list items
class Folder extends Component {

    render(props) {
        { console.log(this.props.folderChosen) }
        let myClass = 'folder-button';
        {
            if (this.props.folderChosen == this.props.id) {
                console.log("Im the chosen folder");
                myClass = 'folder-button-selected';
            }
        }
        return (
            <NavLink
                className={myClass}
                to={`/folder/${this.props.id}`}
            >{this.props.name}</NavLink>
        )
    }
}

export default Folder;