import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
      <CartIconContainer onClick={toggleIsCartOpen}>
          <ShoppingIcon className='shopping-icon' />
          <span className='item-count'>{cartCount}</span>
      </CartIconContainer>
  )
};

const CartIconContainer = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

.shopping-icon {
  width: 24px;
  height: 24px;
}

.item-count {
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
}
`

export default CartIcon;