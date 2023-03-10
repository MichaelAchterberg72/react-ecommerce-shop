import { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// import { ReactComponent as EcLogo } from '../../assets/ecommerce-logo.jpg';


const Navigation = () => {
   const { currentUser } = useContext(UserContext);
   const { isCartOpen } = useContext(CartContext);

    return (
       <Fragment>
          <NavigationContainer>
            <LogoLink>
                <Link to='/'>
                    <div>Logo</div>
                </Link>
            </LogoLink>
             
            <NavLinksContainer>
            <NavLink>
                <Link to='/shop'>SHOP</Link>
            </NavLink>
            {
               currentUser ? (
                     <NavLink>
                        <Link to='/' onClick={signOutUser}>SIGN-OUT</Link>
                     </NavLink>
                  ) : (
                     <NavLink>
                        <Link to='/auth'>SIGN-IN</Link>
                     </NavLink>
                  )
            }
            <CartIcon />
            
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}

          </NavigationContainer>
          <Outlet />
       </Fragment>
    )
 };

 const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
 `

 const NavLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
 `

 const LogoLink = styled.div`
    height: 100%;
    width: 70px;
    padding: 25px;
 `

 const NavLink = styled.div`
    padding: 10px 15px;
    cursor: pointer;
 `

 export default Navigation;

