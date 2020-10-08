import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NoteFolder from './Note/noteFolder';
import NoteNote from './Note/noteNote';
import dummyStore from './dummy-store';
import { getNotesForFolder, findNote, findFolder } from './utilities';
import NoteList from './Note/noteList';
import FolderList from './Folder/folderList';


class App extends Component {

  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    //pulls from api IRL
    this.setState(dummyStore);
  }

  renderMain() {
    const { notes, folders } = this.state;

    return (<>
      <Route
        exact path='/'
        render={routeProps => {
          const { folderId } = routeProps.match.params;
          const notesForFolder = getNotesForFolder(
            notes,
            folderId
          );
          return (
            <NoteList
              {...routeProps}
              notes={notesForFolder}
            />
          );
        }}
      />


      <Route
        path="/folder/:folderId"
        render={routeProps => {
          const { folderId } = routeProps.match.params;
          const notesForFolder = getNotesForFolder(
            notes,
            folderId
          );

          console.log(notesForFolder);
          return (
            <NoteList
              {...routeProps}
              notes={notesForFolder}
            />
          );
        }}
      />

    </>)
  }

  handleFolderClick(folderId) {
    //console.log("clicked on folder:" + folderId);
  }

  renderMainFolders() {
    const { notes, folders } = this.state;

    return (<>
      <Route
        exact path='/'
        render={routeProps => {
          const { folderId } = routeProps.match.params;

          return (
            <FolderList
              {...routeProps}
              folders={folders}
              handleFolderClick={e => this.handleFolderClick(e)}
            />
          );
        }}
      />

      <Route
        path="/folder/:folderId"
        render={routeProps => {
          const { folderId } = routeProps.match.params;
          const notesForFolder = getNotesForFolder(
            notes,
            folderId
          );

          console.log(notesForFolder);
          return (
            <FolderList
              {...routeProps}
              folders={folders}
              handleFolderClick={e => this.handleFolderClick(e)}
            />
          );
        }}
      />

    </>)
  }

  render() {
    return (
      <div className="App">
        <nav><h1>Noteful</h1></nav>
        <div className="flex-grid">
          <div className="sidebar">{this.renderMainFolders()}</div>
          <main className="main">{this.renderMain()}</main>

        </div>



      </div >

    )
  }
}

export default App;