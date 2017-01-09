import React, { Component } from 'react';
import ScoreBox from '../components/scorebox';
import Table from '../components/table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchScores } from '../actions/index';
import StreamPlayer from '../components/stream-player';


import '../assets/App.css';

class App extends Component {

componentWillMount(){
  this.props.fetchScores()

  this.state = {
    page: 'scorebox',
    one: true,
    two: false,
  };

}
onClick(){
  this.setState({
    page: 'scorebox',
    one: true,
    two: false,
})
}
onClick2(){
  this.setState({
    page: 'table',
    one: false,
    two: true,
   })
}
  render() {
    let code = <ScoreBox />;

  if(this.state.page==='scorebox'){
      code = <ScoreBox />

    }
  if(this.state.page==='table'){
      code = <Table />

    }
    return (
      <div className="content">
        <div className="App">
          <div className="App-header">
            <a className={this.state.one ? 'selected' : 'unselected'} id="one" onClick={this.onClick.bind(this)} >Scores</a>
            <a className={this.state.two ? 'selected' : 'unselected'} id="two" onClick={this.onClick2.bind(this)} >Standings</a>
          </div>
          <div className='App-intro'>
          {code}
          </div>
        </div>
        <div className="player">
          <StreamPlayer id={this.props.stream}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stream: state.stream.data
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchScores }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
