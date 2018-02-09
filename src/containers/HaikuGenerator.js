import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  generateHaiku
} from '../actions/actions';

class HaikuGenerator extends Component {
  
  componentDidMount() {
    this.props.generateHaiku(this.props.words)
  }
  
  render() {
    return (
      <div className="haiku-generator">
      <h1>Haiku Generator </h1>
      <p className="haiku-line">{this.props.haiku.firstLine}</p>
      <p className="haiku-line">{this.props.haiku.secondLine}</p>
      <p className="haiku-line">{this.props.haiku.thirdLine}</p>
      
      <button className="haiku-button" onClick={() => {this.props.generateHaiku(this.props.words)}}>
      New Haiku
      </button>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    haiku: state.haiku,
    words: state.words
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    generateHaiku
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HaikuGenerator)