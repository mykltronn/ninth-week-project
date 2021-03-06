// current working problem is here. componentDidMount runs the code when it mounts. It mounts right away, first on page in fact, but for that reason it has no content to render. I can't change the hook to componentDidUpdate because that creates an infinite loop when I call this.setState({songCards: songCards}) (because it updates itself). But I need to store songCards in state. Why? Because they change in real time? Don't seem to, actually...so don't!! But! let songCards ...etc... needs to live in a method of some sort. Maybe it'll fit in render? It does!! And it works! Problem solved!
import React, { Component } from 'react';

export default class PlayListItem extends Component {
    constructor(props){
        super(props)

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)

        this.state = {
            liClass: 'li-hide'
        }
    }

    handleMouseEnter(event){
        this.id
        event.target.children[1].className = "li-show"
        event.target.children[2].className = "li-show"
        event.target.children[3].className = "li-show"
        // holy hell, ^this^ is a fucking mess.
    }

    handleMouseLeave(event) {
        event.target.children[1].className = "li-hide"
        event.target.children[2].className = "li-hide"
        event.target.children[3].className = "li-hide"
    }



    render() {
        let slicedCards = this.props.songs.slice(0, 9)
        let songCards = slicedCards.map(song => {
            return (
                <ul className="card" key={song._id} id={song._id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
                    <li className="li-show" id="artist" >Artist/Band: <span>{song.songArtist}</span></li>
                    <li className={this.state.liClass} >Title: <span>{song.songTitle}</span></li>
                    <li className={this.state.liClass} >Notes: <span>{song.songNotes}</span></li>
                    <li className={this.state.liClass} >User:<span>{song.userName}</span></li>
                </ul>
            )
        })

        return (
            <div className="cards">{songCards}</div>
        )
    }
}
