import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button';
import './commentBox.scss';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();

    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment };

      // Publish comment
      /*global Ably*/
      const channel = Ably.channels.get('comments');
      channel.publish('add_comment', commentObject, err => {
        if (err) {
          console.log('Unable to publish message; err = ' + err.message);
        }
      });

      // Clear input fields
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }
  }
  handleToggleShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <div className="comment-box">
        <div className="head" onClick={this.handleToggleShow}>
          <h3 className="title">Kindly leave your thought(s) below</h3>
          <span className="tog">
            {this.state.isShow ? <span> &#8722; </span> : <span> &#43; </span>}
          </span>
        </div>
        {this.state.isShow ? (
          <form onSubmit={this.addComment}>
            <div className="field">
              <div className="control">
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  name="comment"
                  placeholder="Add a comment"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <CustomButton inverted>Submit</CustomButton>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    );
  }
}

export default CommentBox;
