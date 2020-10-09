import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css';

//need to map the notes to the notes list items
class GeneralButton extends Component {

    render(props) {
        { console.log("HISTORY FROM GENERAL BUTTON:") }

        return (


            <button className='general-button'
                onClick={this.props.onClickBack}>{this.props.buttonTitle}</button>
        )
    }
}

export default GeneralButton;