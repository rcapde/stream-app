import React, { Component } from 'react';
import '../assets/App.css';

class StreamPlayer extends Component {
  render() {
    const CHANNEL = this.props.id
    const LINK=`http://player.twitch.tv/?channel=${CHANNEL}`;
    return (
      <div className="player">
      <iframe
        src={LINK}
        height="480"
        width="855"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true">
      </iframe>
      </div>
    );
  }
}

export default StreamPlayer;
