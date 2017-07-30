import React, { Component } from 'react';

export default class PlayListForm extends Component {
    constructor(props){
        super(props)

        this.handleUserName = this.handleUserName.bind(this);
        this.handleSongArtist = this.handleSongArtist.bind(this);
        this.handleSong = this.handleSong.bind(this);
        this.handleSongNotes = this.handleSongNotes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            userName: '',
            songArtist: '',
            songTitle: '',
            songNotes:'',
        }
    }

    handleUserName(event){
        this.setState({userName: event.target.value});
    }

    handleSongArtist(event){
        this.setState({songArtist: event.target.value})
    }

    handleSong(event){
        this.setState({songTitle: event.target.value})
    }

    handleSongNotes(event){
        this.setState({songNotes: event.target.value})
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({userName: event.target.value, songTitle: event.target.value, songArtist: event.target.value, songNotes: event.target.value});
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "Playlist item submitted");

      }).catch(err => {
        console.log(err, "There was a problem with playlist submit");
      });
      this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }

    render() {
        return (
            <form className="playlist-form col-6">
                <h1>{this.state.test}</h1>
                <div className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <input type="text" className="form-control" name="userName" onChange={this.handleUserName} value={this.state.userName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="songArtist">Artist/Band</label>
                    <input type="text" className="form-control" name="songArtist" onChange={this.handleSongArtist} value={this.state.songArtist}/>
                </div>
                <div className="form-group">
                    <label htmlFor="songTitle">Song Title</label>
                    <input type="text" className="form-control" name="songTitle" onChange={this.handleSong} value={this.state.songTitle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="songNotes">Notes about Song</label>
                    <textarea className="form-control" name="songNotes" rows="3" onChange={this.handleSongNotes} value={this.state.songNotes}></textarea>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>

        )
    }
}
