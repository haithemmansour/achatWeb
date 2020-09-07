import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/clothes.svg';
import { ImHome, ImCart, ImPhone, ImEnter,ImExit } from "react-icons/im";

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
      ACHAT WEB
    </Link> 
    <div className='options'>
      <Link className='option' to='/'>
        <ImHome className='icons' />
        <br/>
        BOUTIQUE
      </Link>
      <Link className='option' to='/shop'>
        <ImCart className='icons'/>
        <br/>
        ACHAT
      </Link>
      <Link className='option' to='/contact'>
        <ImPhone className='icons' />
        <br/>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
        <Link to='/signin'>
            <ImExit className='icons' />
            <br/>
            DECONNECTION
        </Link>
        </div>
      ) : (
        <Link className='option' to='/signin'>
          <ImEnter className='icons' />
          <br/>
          CONNECTION
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
