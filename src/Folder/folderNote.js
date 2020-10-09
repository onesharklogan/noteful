import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import Folder from './folder';
//need to map the notes to the notes list items
class FolderNote extends Component {



    render(props) {
        console.log("folderNote:");
        console.log(this.props);
        return (
            <section className="folder-list">
                <ul>

                    {<Folder name={this.props.folder.name} id={this.props.folder.id} />}
                </ul>
            </section>
        )
    }
}

export default FolderNote;