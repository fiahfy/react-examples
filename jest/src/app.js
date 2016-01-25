import React, {Component, PropTypes} from 'react'
import backgroundRed from './background-red'

@backgroundRed
export default class App extends Component {
  static propTypes = {
    message: PropTypes.string
  };
  static defaultProps = {
    message: 'default message'
  };
  state = {
    count: 0
  };
  increment() {
    const count = this.state.count + 1
    this.setState({count})
  }
  render() {
    return (
      <div>
        <div>Message is {this.props.message}</div>
        <div>
          <button onClick={::this.increment}>count up</button>{this.state.count}
        </div>
      </div>
    )
  }
}
