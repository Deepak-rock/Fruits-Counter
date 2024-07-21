// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    bananas: 0,
    mango: 0,
  }

  eatMango = () => {
    this.setState(prevState => {
      console.log(`Previous State Count = ${prevState.mango}`)
      return {
        mango: prevState.mango + 1,
      }
    })
  }

  eatBanana = () => {
    this.setState(prevState => {
      console.log(`Previous State Count = ${prevState.bananas}`)
      return {
        bananas: prevState.bananas + 1,
      }
    })
  }

  render() {
    const {bananas, mango} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            Bob ate <span className="span">{mango}</span> mangoes{' '}
            <span className="span">{bananas}</span> bananas
          </h1>
          <div className="images-container">
            <div className="inner-image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button
                  className="button"
                  onClick={this.eatMango}
                  type="submit"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="inner-image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button
                  className="button"
                  onClick={this.eatBanana}
                  type="submit"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
