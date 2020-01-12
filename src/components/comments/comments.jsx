import React, { Component } from 'react';
import Comment from '../comment/comment';
import './comments.scss';
class Comments extends Component {
  state = {
    isShow: false
  };

  handleToggleShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render() {
    const { comments } = this.props;

    return (
      <div className="comments">
        <div className="head" onClick={this.handleToggleShow}>
          <h5>{comments.length} REVIEW(S)</h5>
          <span className="tog">
            {this.state.isShow ? <span> &#8722; </span> : <span> &#43; </span>}
          </span>
        </div>

        {this.state.isShow
          ? comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })
          : null}
      </div>
    );
  }
}

export default Comments;
