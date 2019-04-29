import React, { Component } from 'react'
import Comment from './Comment'

class Content extends Component {
  render() {
    let comments = this.props.post.comments.map((c, i) => {
      return <Comment content={c} key={i} />
    })
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>
          {this.props.post.content}
        </p>
        <h3>Comments</h3>
        {comments}
      </div>
    )
  }
}

export default Content
