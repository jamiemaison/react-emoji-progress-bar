# react-emoji-progress-bar

<img src="https://github.com/jamiemaison/react-emoji-progress-bar/blob/master/assets/EmojiProgressBar_small.png" alt="Emoji Progress bar" width="270px">

Built by [Jamie Maison](https://www.jamiemaison.com/)  
Example: [https://jamiemaison.github.io/react-emoji-progress-bar/](https://jamiemaison.github.io/react-emoji-progress-bar/)

[![NPM](https://img.shields.io/npm/v/react-emoji-progress-bar.svg)](https://www.npmjs.com/package/react-emoji-progress-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-emoji-progress-bar
```

## Usage

```tsx
import * as React from 'react'

import EmojiProgressBar from 'react-emoji-progress-bar'

class Example extends React.Component {
  state = {
    progress: number
  }

  render () {
    return (
      <EmojiProgressBar progress={this.state.number}/>
    )
  }
}
```

## Props

| Property | Type | Default | Description |
|:---------|:-----|:--------|:------------|
| `progress` | `number` | `0` | `Progress percentage amount (e.g: for 70%: progress = 70)` |
| `color?` | `string` | `#eb4b8a` | `Progress bar color (defaults to pink if no color specified)` |
| `showPercentage?` | `boolean` | `false` | `Should the current progress percentage be displayed? (defaults to false)` |
| `onComplete?` | `() => void` | `void` | `Completion handler, fired when progress >= 100 (Not called if no handler specified)` |

## License

MIT © [jamiemaison](https://github.com/jamiemaison)
