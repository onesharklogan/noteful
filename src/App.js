import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NoteFolder from './Note/noteFolder';
import NoteNote from './Note/noteNote';
import dummyStore from './dummy-store';
import { getNotesForFolder, findNote, findFolder } from './utilities';
import NoteList from './Note/noteList';
import FolderList from './Folder/folderList';
import FolderNote from './Folder/folderNote';

class App extends Component {

  state = {
    notes: [],
    folders: [],
    selectedFolderId: null
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

      <Route
        path="/note/:noteId"
        render={routeProps => {
          const { noteId } = routeProps.match.params;

          const noteFound = findNote(
            notes,
            noteId
          );
          console.log("noteFound:");

          // console.log(this.state.notes);
          // console.log(notes);
          console.log(noteFound);
          return (
            <NoteNote
              {...routeProps}
              id={noteFound.id}
              name={noteFound.name}
              modified={noteFound.modified}
              content={noteFound.content}
            />
          );
        }}
      />


    </>)
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

      <Route
        path="/note/:noteId"
        render={routeProps => {
          const { noteId } = routeProps.match.params;

          const noteFound = findNote(
            notes,
            noteId
          );

          const folderFound = findFolder(
            this.state.folders,
            noteFound.folderId
          )

          // console.log(this.state.notes);
          // console.log(notes);
          console.log(noteFound);

          return (
            <FolderNote
              {...routeProps}
              folder={folderFound}
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