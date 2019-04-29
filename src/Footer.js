import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        Created by {this.props.name} in {this.props.year} ⭐️
      </footer>
    )
  }
}

export default Footer
