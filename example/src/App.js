import React, { Component } from 'react'

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
        <div style={{width: '30vw', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <EmojiProgressBar progress={this.state.progress} />
        </div>
      </div>
    )
  }
}
