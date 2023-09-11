import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, type: 'Even'}

  increment = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({num: prevState.num + num}))
    this.setState(prevState => ({
      type: prevState.num % 2 === 0 ? 'Even' : 'Odd',
    }))
  }

  render() {
    const {num, type} = this.state
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="count-number">Count {num}</h1>
          <p className="count-type">Count is {type}</p>
          <button type="button" className="button" onClick={this.increment}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
