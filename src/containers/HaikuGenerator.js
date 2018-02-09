import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  generateHaiku
} from '../actions/actions';

class HaikuGenerator extends Component {
  
  componentDidMount() {
    this.props.generateHaiku()
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="haiku-generator">
      <p>{this.props.haiku.firstLine}</p>
      <p>{this.props.haiku.secondLine}</p>
      <p>{this.props.haiku.thirdLine}</p>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    haiku: state.haiku
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