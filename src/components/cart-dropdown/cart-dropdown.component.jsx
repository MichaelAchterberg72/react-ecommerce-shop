import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

    return (
        <CartDropdownContainer>
            <div className='cart-items'>
              {cartItems.length ? (cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
              ))) : (
                <span>Your cart is empty</span>
              )}
              <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
            </div>
        </CartDropdownContainer>
    )
};

const CartDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

.empty-message {
  font-size: 18px;
  margin: 50px auto;
}

.cart-items {
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

button {
  margin-top: auto;
}
`

export default CartDropdown;