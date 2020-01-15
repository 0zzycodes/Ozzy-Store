import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './select-size.scss';
class SelectSize extends React.Component {
  state = {
    selectSize: ''
  };
  handleChange = (addItem, item, handleSelectSize, e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      addItem(item);
      handleSelectSize();
    });
  };
  render() {
    const { item, handleSelectSize, addItem } = this.props;
    const { sizes } = item;
    item.size = this.state.selectSize;
    item.id =
      item.id === `${item.id}${item.size}`
        ? `${item.id}${item.size}`
        : `${item.id.toString().split('')[0]}${item.size}`;
    return (
      <div className="select-size">
        <div className="overlay" onClick={handleSelectSize}></div>
        <div className="box">
          <select
            name="selectSize"
            value={this.state.selectSize}
            onChange={this.handleChange.bind(
              this,
              addItem,
              item,
              handleSelectSize
            )}
          >
            <option value="Size">Size</option>
            {sizes.map(eachSize => (
              <option key={eachSize}>{eachSize}</option>
            ))}
          </select>
          <span className="indc">&#9662;</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(SelectSize);
