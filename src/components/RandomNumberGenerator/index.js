// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickBtn = () => {
    this.setState({
      count: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading1">Random Number</h1>
          <p className="paragraph1">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.onClickBtn}>
            Generate
          </button>
          <p className="paragraph2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
