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
    selectSize: '',
    isShow: false
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleToggleShow = () => {
    this.setState({ isShow: !this.state.isShow });
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
      measurementImage,
      category
    } = item;
    item.size = this.state.selectSize;
    item.id =
      item.id === `${item.id}${item.size}`
        ? `${item.id}${item.size}`
        : `${item.id.toString().split('')[0]}${item.size}`;
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
              <span className="sales-price price">₦{sale}</span>
              {sale === price ? null : <span>SALE</span>}
              <span
                className="normal-price price"
                style={
                  sale === price
                    ? { textDecoration: 'none' }
                    : { textDecoration: 'line-through' }
                }
              >
                ₦{price}
              </span>
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
            <div className="desc">
              <h5>DESCRIPTION</h5>
              {category === 'hoodies' ? (
                <ul>
                  <li>Pullover hoodie</li>
                  <li>92% Polyester, 8% Spandex Blend ( Elastane)</li>
                  <li>Unisex</li>
                  <li>Front pouch pocket</li>
                  <li> High quality very comfortable style Hoodie.</li>
                </ul>
              ) : category === 'tees' ? (
                <ul>
                  <li>Super soft tubular t-shirt</li>
                  <li>52% Cotton / 48% Polyester</li>
                  <li>Unisex</li>
                  <li> High quality.</li>
                </ul>
              ) : null}
            </div>
            <div className="note">
              <h5>NOTE:</h5>
              <ol>
                <li>
                  Please according your own measurements to choose your suitable
                  size.
                </li>
                <li>
                  This sizes listed is based on international sizing
                  system,Please see the Size chart Guide to find the correct
                  size.
                </li>
              </ol>
            </div>

            <div className="disclaimer">
              <div className="head" onClick={this.handleToggleShow}>
                <h5 className="option">DISCLAIMER</h5>
                <span className="sign">
                  {this.state.isShow ? (
                    <span> &#8722; </span>
                  ) : (
                    <span> &#43; </span>
                  )}
                </span>
              </div>
              {this.state.isShow ? (
                <p>
                  Size may be 2cm/1 inch inaccuracy due to hand measure. These
                  measurements are meant as a guide to help you select the
                  correct size. Please take your own measurements and choose
                  your size accordingly.
                  <br />
                  <br />
                  every device displays colours differently and we cannot
                  guarantee that the colours you see on your screen match the
                  colour of actual item.
                </p>
              ) : null}
            </div>
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
