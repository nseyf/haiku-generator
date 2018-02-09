import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  generateHaiku
} from '../actions/actions';

class HaikuGenerator extends Component {
  
  componentDidMount() {
    console.log(this.props.generateHaiku)
    this.props.generateHaiku(this.props.words)
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="haiku-generator">
      <h1>Haiku Generator </h1>
      <p className="haiku-line">{this.props.haiku.firstLine}</p>
      <p className="haiku-line">{this.props.haiku.secondLine}</p>
      <p className="haiku-line">{this.props.haiku.thirdLine}</p>
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