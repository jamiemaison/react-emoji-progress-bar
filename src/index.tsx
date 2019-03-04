import * as React from 'react'
import styles from './styles.css'
const Twemoji = require('react-twemoji').default;
const Posed = require('react-pose').default;

interface Props {
  progress: number;
  color?: string;
  showPercentage?: boolean;
  onComplete?: () => void; 
}

const EmojiDiv = Posed.div({
  visible: { opacity: 1, position: 'relative', top: -10, transition: { type: 'spring', stiffness: 200 } },
  hidden: { opacity: 0, position: 'relative', top: 0, transition: { type: 'spring', stiffness: 100, duration: 10 } }
});

export default class EmojiProgressBar extends React.Component<Props> {
  private isComplete = false;

  public componentDidUpdate() {
    if (this.props.progress >= 100 && !this.isComplete && this.props.onComplete) {
      this.props.onComplete();
      this.isComplete = true;
    }

    if (this.isComplete && this.props.progress < 100) {
      this.isComplete = false;
    }
  }

  public render() {
    return (
      <div className={styles.container}>
        <Twemoji className={styles.emojiBar} options={{ className: 'twemoji' }}>
          <EmojiDiv pose={this.props.progress >= 10 && this.props.progress < 15 ? 'visible' : 'hidden'} style={{ left: '10%', display: this.props.progress >= 10 && this.props.progress < 20 ? 'block' : 'none' }}>😖</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 20 && this.props.progress < 25 ? 'visible' : 'hidden'} style={{ left: '20%', display: this.props.progress >= 20 && this.props.progress < 30 ? 'block' : 'none' }}>️☹️</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 30 && this.props.progress < 35 ? 'visible' : 'hidden'} style={{ left: '30%', display: this.props.progress >= 30 && this.props.progress < 40 ? 'block' : 'none' }}>😕</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 40 && this.props.progress < 45 ? 'visible' : 'hidden'} style={{ left: '40%', display: this.props.progress >= 40 && this.props.progress < 50 ? 'block' : 'none' }}>🤨</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 50 && this.props.progress < 55 ? 'visible' : 'hidden'} style={{ left: '50%', display: this.props.progress >= 50 && this.props.progress < 60 ? 'block' : 'none' }}>😐</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 60 && this.props.progress < 65 ? 'visible' : 'hidden'} style={{ left: '60%', display: this.props.progress >= 60 && this.props.progress < 70 ? 'block' : 'none' }}>🙂</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 70 && this.props.progress < 75 ? 'visible' : 'hidden'} style={{ left: '70%', display: this.props.progress >= 70 && this.props.progress < 80 ? 'block' : 'none' }}>😉</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 80 && this.props.progress < 85 ? 'visible' : 'hidden'} style={{ left: '80%', display: this.props.progress >= 80 && this.props.progress < 90 ? 'block' : 'none' }}>😘</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 90 && this.props.progress < 95 ? 'visible' : 'hidden'} style={{ left: '90%', display: this.props.progress >= 90 && this.props.progress < 100 ? 'block' : 'none' }}>😃</EmojiDiv>
          <EmojiDiv pose={this.props.progress >= 100 ? 'visible' : 'hidden'} style={{ left: '100%', display: this.props.progress >= 100 ? 'block' : 'none' }}>😁</EmojiDiv>
        </Twemoji>
        <div className={styles.outer} style={{ border: `solid ${this.props.color ? this.adjustBrightness(this.props.color, -30) : this.adjustBrightness('#eb4b8a', -30)} 4px` }}>
          <div className={styles.inner} style={{ width: `${this.props.progress.toString()}%`, backgroundColor: this.props.color ? this.props.color : '#eb4b8a' }} />
        </div>
        { this.props.showPercentage ? <div className={styles.percentage}>{this.props.progress <= 100 ? `${Math.round(this.props.progress)}%` : '100%'}</div> : null }
      </div>
    )
  }

  private adjustBrightness = (col: string, amt: number) => {

    var usePound = false;

    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }

    var R = parseInt(col.substring(0, 2), 16);
    var G = parseInt(col.substring(2, 4), 16);
    var B = parseInt(col.substring(4, 6), 16);

    R = R + amt;
    G = G + amt;
    B = B + amt;

    if (R > 255) R = 255;
    else if (R < 0) R = 0;

    if (G > 255) G = 255;
    else if (G < 0) G = 0;

    if (B > 255) B = 255;
    else if (B < 0) B = 0;

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return (usePound ? "#" : "") + RR + GG + BB;

  }
}
