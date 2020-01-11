import React, { Component } from 'react';
import './comment.scss';
class Comment extends Component {
  render() {
    return (
      <article className="media">
        <div className="content">
          <h5>{this.props.comment.name}</h5>
          <p>{this.props.comment.comment}</p>
        </div>
      </article>
    );
  }
}

export default Comment;
