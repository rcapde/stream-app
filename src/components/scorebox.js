import React, { Component } from 'react';
import Score2 from './score2'
import '../assets/App.css';
import { connect } from 'react-redux';

class ScoreBox extends Component {

  render() {
    const Scores = this.props.scores.map((score)=>{
      return(
        <Score2 id={score.id} name={score.name} />
      );
    })
    return (
        <div className="scorebox">
          {Scores}
        </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    scores: state.scores.data,
  };
}

export default connect(mapStateToProps)(ScoreBox);
