import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  generateHaiku
} from '../actions/actions';

class HaikuGenerator extends Component {

  render() {

    const { haiku, generateHaiku, words } = this.props;

    const { firstLine, secondLine, thirdLine } = haiku;

    const haikuString = `${firstLine}%20%0A%20${secondLine}%20%0A%20${thirdLine}`;

    const tweetUrl = `https://twitter.com/intent/tweet?text=${haikuString}`;

    return (
      <div className="haiku-generator">
      <p className={this.props.haikuDisplay}>{firstLine}</p>
      <br />
      <p className={this.props.haikuDisplay}>{secondLine}</p>
      <br />
      <p className={this.props.haikuDisplay}>{thirdLine}</p>


      <div className="haiku-buttons">
      <button className="haiku-button"
      onClick={() => {generateHaiku(words)}}>
      New Haiku
      </button>
      <a className={this.props.tweetDisplay}
      data-size="large"
      href={tweetUrl}>
      Tweet Haiku</a>
      </div>


      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    haiku: state.haiku,
    words: state.words,
    haikuDisplay: state.haikuDisplay,
    tweetDisplay: state.tweetDisplay
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
