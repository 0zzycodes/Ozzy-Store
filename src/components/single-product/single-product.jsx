import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button';
import './single-product.scss';
class SingleProduct extends React.Component {
  state = {
    selectSize: ''
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { item, addItem } = this.props;
    const {
      name,
      price,
      stock,
      sale,
      imageUrl,
      sizes,
      sideImage,
      backImage,
      measurementImage
    } = item;
    item.size = this.state.selectSize;
    return (
      <div className="single-product container">
        <div className="product-details container">
          <div className="left">
            <Carousel>
              <div>
                <img src={imageUrl} alt="product imgs" />
              </div>
              <div>
                <img
                  src={sideImage ? sideImage : imageUrl}
                  alt="product imgs"
                />
              </div>
              <div>
                <img
                  src={backImage ? backImage : imageUrl}
                  alt="product imgs"
                />
              </div>
              <div>
                <img
                  src={measurementImage ? measurementImage : imageUrl}
                  alt="product imgs"
                />
              </div>
            </Carousel>
          </div>
          <div className="right">
            <h3 className="name">{name}</h3>
            <span className={stock === 0 ? 'sold-out' : 'in-stock'}>
              {stock === 0 ? 'Sold Out' : 'In Stock'}{' '}
            </span>
            <div className="prices">
              <span className="sales-price price">#{price - sale}</span>
              {sale === 0 ? null : <span>SALE</span>}
              <span className="normal-price price">#{price}</span>
            </div>
            <br />
            <div className="box">
              <select
                name="selectSize"
                value={this.state.selectSize}
                onChange={this.handleChange}
              >
                <option value="Size">Size</option>
                {sizes.map(eachSize => (
                  <option key={eachSize}>{eachSize}</option>
                ))}
              </select>
              <span className="indc">&#9662;</span>
            </div>
            {stock === 0 ? (
              <CustomButton disabled inverted>
                Sold Out
              </CustomButton>
            ) : this.state.selectSize !== '' ? (
              <CustomButton onClick={() => addItem(item)} inverted>
                Cart &#43;
              </CustomButton>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(null, mapDispatchToProps)(SingleProduct));
