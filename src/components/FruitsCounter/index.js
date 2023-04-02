import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onMangoesIncrement = () => {
    this.setState(prevMangoesCount => ({
      mangoesCount: prevMangoesCount.mangoesCount + 1,
    }))
  }

  onBananasIncrement = () => {
    this.setState(prevBananasCount => ({
      bananasCount: prevBananasCount.bananasCount + 1,
    }))
  }
  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count-color">{mangoesCount}</span> mangoes
            <span className="count-color">{bananasCount}</span> bananas
          </h1>
          <div className="img-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
                alt="mango"
              />
              <button
                className="fruit-button"
                type="button"
                onClick={this.onMangoesIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image"
                alt="banana"
              />

              <button
                className="fruit-button"
                type="button"
                onClick={this.onBananasIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
