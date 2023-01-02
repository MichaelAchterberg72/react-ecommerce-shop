import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";


const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
      <CheckoutItemContainer>
          <div className='image-container'>
              <img src={imageUrl} alt={`${name}`} />
          </div>
          <span className='name'>{name}</span>
          <span className='quantity'>
              <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
              <span className='value'>{quantity}</span>
              <div className='arrow' onClick={addItemHandler}>&#10095;</div>
          </span>
          <span className='price'>{price}</span>
          <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
      </CheckoutItemContainer>
  )
};

const CheckoutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;

.image-container {
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
}
.name,
.quantity,
.price {
  width: 23%;
}

.quantity {
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
}

.remove-button {
  padding-left: 12px;
  cursor: pointer;
}
`
export default CheckoutItem;