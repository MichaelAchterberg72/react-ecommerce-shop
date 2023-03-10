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
            <CartItems>
              {cartItems.length ? (cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
              ))) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
              )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
};

export const CartDropdownContainer = styled.div`
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
  ${Button} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

export default CartDropdown;