import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import Folder from './folder';
import GeneralButton from '../GeneralButton'
//need to map the notes to the notes list items
class FolderList extends Component {



    render(props) {
        return (

            <section className="folder-list">
                <ul>

                    {this.props.folders.map(folder =>
                        <li key={folder.id}>
                            {<Folder name={folder.name} folderChosen={this.props.folderChosen} id={folder.id} handleFolderClick={e => this.props.handleFolderClick(e)} />}
                        </li>
                    )}
                    <li><GeneralButton
                        pathTo={() => '/'}
                        className='general-button'
                        buttonTitle="ADD FOLDER"
                    ></GeneralButton></li>
                </ul>
            </section>
        )
    }
}

export default FolderList;