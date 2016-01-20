import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link} from 'react-router'
import {createHistory} from 'history'

class App extends Component {
  render() {
    return (
      <div>
        <div>App</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/detail">Detail</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>Home</div>
    )
  }
}

class Detail extends Component {
  render() {
    return (
      <div>Detail</div>
    )
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/detail" component={Detail} />
  </Route>
)

ReactDOM.render((
  <Router history={createHistory()}>
    {routes}
  </Router>
), document.querySelector('#app'))
