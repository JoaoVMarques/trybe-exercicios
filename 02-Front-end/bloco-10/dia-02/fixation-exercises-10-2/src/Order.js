import { Component } from 'react';
import PropTypes  from 'prop-types';

class Order extends Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

Order.propTypes = {
  user: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Order;