// see PlayListItem component for current problem...UPDATE: Working problem fixed, but notes kept in location cause they're interesting.
import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <NavBar />
                <div className="row">
                    <PlayListForm />
                    <PlayList />
                </div>
            </div>
        )
    }
}
