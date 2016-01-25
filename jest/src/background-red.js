import React, {Component} from 'react'

export default WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <div style={{backgroundColor: 'red'}}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
