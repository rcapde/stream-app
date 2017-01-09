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

  handleClick(){
    this.props.fetchStream(this.state.id);
  }

  render() {

    return (
      <div onClick={this.handleClick.bind(this)} className="score">
        <p>{this.props.name} </p>
      </div>

)}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStream }, dispatch);
}


export default connect(null, mapDispatchToProps)(Score);
