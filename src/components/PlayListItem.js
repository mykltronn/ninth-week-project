import React, { Component } from 'react';

export default class PlayListItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            songCards: []
        }

    }

    componentDidMount(){
        let songCards = this.props.songs.map(song => {
            return (
                <ul className="playlist-item" key={song.songTitle}>
                    <li>User: <span>{song.userName}</span></li>
                    <li>Artist/Band: <span>{song.songArtist}</span></li>
                    <li>Title: <span>{song.songTitle}</span></li>
                    <li>Notes: <span>{song.songNotes}</span></li>
                </ul>
            )
        })
        this.setState({songCards: songCards})
    }



    render() {
        return (
            <div className="card">
                {this.state.songCards}
            </div>
        )
    }
}
