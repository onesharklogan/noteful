import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import '../App.css';
import Folder from './folder';
import GeneralButton from '../GeneralButton'

import { withRouter } from 'react-router-dom';

//need to map the notes to the notes list items
class FolderNote extends Component {

    handleBack() {
        console.log("handleBack()");
    }

    render(props) {
        console.log("folderNote:");
        console.log(this.props.history);
        return (
            <section className="folder-list">


                <ul>
                    <GeneralButton

                        className='general-button'
                        buttonTitle="GO BACK"

                        onClickBack={() => this.props.history.goBack()}
                    ></GeneralButton>
                    {<Folder render={this.props.history} name={this.props.folder.name} id={this.props.folder.id} />}
                </ul>
            </section>
        )
    }
}

export default withRouter(FolderNote);