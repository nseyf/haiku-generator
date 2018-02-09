import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  generateHaiku
} from '../actions/actions';

class HaikuGenerator extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div className="haiku-generator">
      <p className={this.props.haikuDisplay}>{this.props.haiku.firstLine}</p>
      <br />
      <p className={this.props.haikuDisplay}>{this.props.haiku.secondLine}</p>
      <br />
      <p className={this.props.haikuDisplay}>{this.props.haiku.thirdLine}</p>
      
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
    words: state.words,
    haikuDisplay: state.haikuDisplay
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