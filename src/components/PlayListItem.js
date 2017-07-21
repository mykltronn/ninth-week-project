// current working problem is here. componentDidMount runs the code when it mounts. It mounts right away, first on page in fact, but for that reason it has no content to render. I can't change the hook to componentDidUpdate because that creates an infinite loop when I call this.setState({songCards: songCards}) (because it updates itself). But I need to store songCards in state. Why? Because they change in real time? Don't seem to, actually...so don't!! But! let songCards ...etc... needs to live in a method of some sort. Maybe it'll fit in render? It does!! And it works! Problem solved!
import React, { Component } from 'react';

export default class PlayListItem extends Component {
    constructor(props){
        super(props)
    }


    render() {
        let songCards = this.props.songs.map(song => {
            return (
                <ul className="card" key={song._id}>
                    <li>User: <span>{song.userName}</span></li>
                    <li>Artist/Band: <span>{song.songArtist}</span></li>
                    <li>Title: <span>{song.songTitle}</span></li>
                    <li>Notes: <span>{song.songNotes}</span></li>
                </ul>
            )
        })

        return (
            <div className="cards">{songCards}</div>
        )
    }
}
