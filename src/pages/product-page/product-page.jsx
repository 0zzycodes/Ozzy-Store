import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import SingleProduct from '../../components/single-product/single-product';
import CommentBox from '../../components/commentBox/commentBox';
import Comments from '../../components/comments/comments';
import './product-page.scss';
class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    /* global Ably */
    const channel = Ably.channels.get('comments');

    channel.attach();
    channel.once('attached', () => {
      channel.history((err, page) => {
        /* create a new array with comments */
        const comments = Array.from(page.items, item => item.data);

        this.setState({ comments });

        /* subscribe to new comments */
        channel.subscribe((msg, err) => {
          const commentObject = msg['data'];
          this.handleAddComment(commentObject);
        });
      });
    });
  }
  handleAddComment = comment => {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments)
      };
    });
  };

  render() {
    const { product } = this.props;
    return (
      <div className="product-page container">
        <SingleProduct item={product[0]} />
        <CommentBox />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: selectProduct(
      ownProps.match.params.productId,
      ownProps.match.url
    )(state)
  };
};

export default connect(mapStateToProps)(ProductPage);
