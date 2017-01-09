import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStream } from '../actions/index';
import '../assets/App.css';

class Score extends Component {

  componentWillMount(){
    this.state = {
      id: this.props.id,
    };
  }

  onClick(){
    this.props.fetchStream(this.state.id);
  }

  render() {

    return (
      <div className="score">
        <div className="team">
          <img height='50' width='50' src={`http://imgh.us/${this.props.HomeTeam}.svg`} />
          {this.props.HomeTeam}
        </div>
        <span className="result"> {this.props.FTHG} - {this.props.FTAG} </span>
        <div className="team">
          <img height='50' width='50' src={`http://imgh.us/${this.props.AwayTeam}.svg`} />
          {this.props.AwayTeam} {this.state.id}
        </div>
        <div className="rightpart">
            <a onClick={this.onClick.bind(this)}>live</a>
            <a href="/" >stats</a>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStream }, dispatch);
}


export default connect(null, mapDispatchToProps)(Score);
