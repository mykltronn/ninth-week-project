import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js'

export default class PlayList extends Component {
    constructor(props){
        super(props)

        this.fetchData = this.fetchData.bind(this)

        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
              return results.json();
            }).then(data => {
              this.setState({songs: data});
              console.log("and " + this.state.songs + " is this.state.songs");
            })
    }


    fetchData() {
     fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
           return results.json();
         }).then(data => {
           this.setState({songs: data});
           console.log("and " + this.state.songs + " is this.state.songs");
         })
    }

    render() {
        return (
            <div className="playlist col-6">
                <button type="submit" className="btn btn-primary" onClick={this.fetchData}>Update List</button>
                <PlayListItem songs={this.state.songs} />
            </div>
        )
    }
}
