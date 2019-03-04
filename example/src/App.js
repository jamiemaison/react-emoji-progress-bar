import React, { Component } from 'react'
import styles from './styles.css'

import EmojiProgressBar from 'react-emoji-progress-bar'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.progress = 0;

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.progress = this.progress + 0.2;
      if (this.progress > 8) this.setState({ progress: this.progress })
      if (this.progress >= 120) this.progress = 0;
    }, 10);
  }

  render () {
    return (
      <div>
        <div className="heading-container">
          <div className="heading-emoji">Emoji</div>
          <div className="heading-progress-bar">Progress Bar</div>
          <div className="heading-author">by <a href="https://www.jamiemaison.com">Jamie Maison</a></div>
        </div>
        <div className="example-container">
          <EmojiProgressBar progress={this.state.progress} />
        </div>
        <div className="installation-container"><a href="https://github.com/jamiemaison/react-emoji-progress-bar">Installation instructions <span>></span></a></div>
      </div>
    )
  }
}
