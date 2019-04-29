import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <p>
        <em>{this.props.content}</em>
      </p>
    )
  }
}

export default Comment
