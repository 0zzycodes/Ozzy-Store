import React from 'react';
import { connect } from 'react-redux';
import {
  selectShippingDetail,
  selectCity
} from '../../redux/shipping/shipping.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { addCartTotal } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { GenerateId } from '../../utils/id-generator';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import './payment-page.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Payment from '../../components/payment/payment';
class PaymentPage extends React.Component {
  state = {
    orderId: `${GenerateId()}`,
    discount: 0,
    promo: '',
    price:
      this.props.enterdCity.toLowerCase() !== 'ibadan'
        ? this.props.total + 200
        : this.props.total
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, isSuccess: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    let qty = this.props.itemCount;
    if (this.state.promo.toLowerCase() === 'rmd200') {
      const calc = 200 * qty;
      const afterPromo = this.state.price - calc;
      this.setState({ discount: calc, promo: '', price: afterPromo }, () =>
        this.props.addCartTotal(this.state.price)
      );
    }
  };

  render() {
    const { cartItems, currentUser, shippingDetails } = this.props;
    const { firstName, address, city, country, phone, email } = shippingDetails;
    const detail = {
      name: firstName,
      address,
      city,
      country,
      email,
      phone
    };

    const { price } = this.state;
    return (
      <div className="payment-page container">
        <div className="payment-page-header">
          <span className="order-id">
            ORDER ID: <span className="id">{this.state.orderId}</span>
          </span>
          <Payment
            total={price}
            getReference={this.state.orderId}
            shippingDetails={detail}
            currentUser={currentUser}
            handleShowPaid={this.handleShowPaid}
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="promo"
            value={this.state.promo}
            placeholder="Enter Promo Code"
            className="form-input"
            onChange={this.handleChange}
          />
          <button className="btn">Apply</button>
        </form>
        <div className="product-summary">
          {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="subtotal">
            <h6>Subtotal</h6> <p>₦{this.props.total}</p>
          </div>
          <div className="shipping">
            <h6>Shipping</h6>
            <p>{city.toLowerCase() !== 'ibadan' ? `+₦${200}` : 'Free'}</p>
          </div>
          <div className="shipping">
            <h6>Promo</h6>
            <p>-₦{this.state.discount}</p>
          </div>
          <div className="total">
            <h3>Total</h3> <span>₦{price}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount,
  total: selectCartTotal,
  shippingDetails: selectShippingDetail,
  enterdCity: selectCity
});
const mapDispatchToProps = dispatch => ({
  addCartTotal: total => dispatch(addCartTotal(total))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
