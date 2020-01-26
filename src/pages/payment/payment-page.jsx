import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  selectShippingDetail,
  selectCity
} from '../../redux/shipping/shipping.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  addCartTotal,
  addDiscount,
  addPromo
} from '../../redux/cart/cart.actions';
import { addTotal } from '../../redux/total/total.action';
import { addPath } from '../../redux/path/path.action';
import { createStructuredSelector } from 'reselect';
import { GenerateId } from '../../utils/id-generator';
import {
  selectCartItems,
  selectCartItemsCount,
  selectDiscount,
  selectPromo,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Payment from '../../components/payment/payment';
import loader from '../../assets/loader.gif';
import './payment-page.scss';
class PaymentPage extends React.Component {
  state = {
    orderId: `${GenerateId()}`,
    discount: 0,
    shippingFee: this.props.enterdCity.toLowerCase() !== 'ibadan' ? 1500 : 500,
    promoCode: '',
    price:
      this.props.enterdCity.toLowerCase() !== 'ibadan'
        ? this.props.total + 1500
        : this.props.total + 500,
    isPromoAplied: false,
    isLoading: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const promoCode = {
      code: this.state.promoCode
    };
    let qty = this.props.itemCount;
    this.setState({ isLoading: true });
    fetch('https://ozzystore-backend.herokuapp.com/usepromo', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(promoCode)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response === 200) {
          const calc = 200 * qty;
          const afterPromo = this.state.price - calc;
          this.setState(
            {
              discount: calc,
              promoCode: '',
              price: afterPromo,
              isPromoAplied: true,
              isLoading: false
            },
            () => {
              this.props.addCartTotal(this.state.price);
              this.props.addPromo(calc);
            }
          );
          this.props.addTotal(
            this.props.enterdCity.toLowerCase() !== 'ibadan'
              ? this.props.total + 1500 - calc
              : this.props.total + 500 - calc
          );
        }
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.props.addTotal(
      this.props.enterdCity.toLowerCase() !== 'ibadan'
        ? this.props.total + 1500
        : this.props.total + 500
    );
    this.props.addPath(this.props.match.path);
  }

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
        <Helmet>
          <title>Payment | REMEDI</title>
          <meta property="og:title" content="Payment | Remedi" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Cleaning When your clothes need a wash, don’t simply stick them in the washer as you might do usually; follow these guidelines. Use a gentle cleaning cycle, and opt for an eco-friendly detergent; not only is that better for the environment, it is more gentle for the bamboo fabric too and keeps everything as fresh and neat"
          />
          <meta property="og:site_name" content="REMEDI" />
          <meta property="og:url" content="https://www.remedi.store/payment" />
        </Helmet>
        <div className="payment-page-header">
          {this.state.isPromoAplied ? null : (
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="promoCode"
                value={this.state.promoCode}
                placeholder="Enter Promo Code"
                className="form-input"
                onChange={this.handleChange}
              />
              <button className="btn">
                <span>Apply</span>
                {this.state.isLoading ? (
                  <img src={loader} alt="loader" />
                ) : null}
              </button>
            </form>
          )}
          <span className="order-id">
            ORDER ID: <span className="id">{this.state.orderId}</span>
          </span>
          <Payment
            total={price}
            promo={this.state.discount}
            shippingFee={this.state.shippingFee}
            getReference={this.state.orderId}
            shippingDetails={detail}
            currentUser={currentUser}
            handleShowPaid={this.handleShowPaid}
          />
        </div>

        <div className="product-summary">
          {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="subtotal">
            <h6>Subtotal</h6> <p>₦{this.props.total}</p>
          </div>
          <div className="subtotal">
            <h6>Promo</h6>
            <p>-₦{this.state.discount}</p>
          </div>
          <div className="shipping">
            <h6>Shipping</h6>
            <p>{city.toLowerCase() !== 'ibadan' ? `+₦${1500}` : 500}</p>
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
  discount: selectDiscount,
  promo: selectPromo,
  total: selectCartTotal,
  shippingDetails: selectShippingDetail,
  enterdCity: selectCity
});
const mapDispatchToProps = dispatch => ({
  addCartTotal: total => dispatch(addCartTotal(total)),
  addTotal: total => dispatch(addTotal(total)),
  addPath: path => dispatch(addPath(path)),
  addDiscount: total => dispatch(addDiscount(total)),
  addPromo: total => dispatch(addPromo(total))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentPage)
);
