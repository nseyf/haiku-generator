import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayHaiku from '../components/DisplayHaiku';
import { bindActionCreators } from 'redux';
import {
  generateHaiku
} from '../actions/actions';

class HaikuGenerator extends Component {

  render() {


    // Grab what we need from props
    const { haiku, generateHaiku, words, haikuDisplay, tweetDisplay } = this.props;
    // Allow access to each line of the haiku
    const { firstLine, secondLine, thirdLine } = haiku;
    // Create a string to compose a tweet
    const haikuString = `${firstLine}%20%0A%20${secondLine}%20%0A%20${thirdLine}`;
    // Create a URL link to tweet the haiku
    const tweetUrl = `https://twitter.com/intent/tweet?text=${haikuString}`;

    return (
      <div className="haiku-generator">

      <DisplayHaiku haiku={haiku} haikuDisplay={haikuDisplay} />

      <div className="haiku-buttons">
      <button className="haiku-button"
      onClick={() => {generateHaiku(words)}}>
      New Haiku
      </button>
      <a className={tweetDisplay}
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
