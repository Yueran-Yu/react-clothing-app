import React from 'react';
import './header.styles.scss';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ?
              (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>) :
              (<Link className='option' to='/signin'>SIGN IN</Link>)
        }
        <CartIcon/>
      </div>
      {
        hidden ? null : <CartDropDown />
      }
    </div>
)

// the state is the rootReducer
// const currentUser = user.currentUser, state = user.state => const {currentUser, state} = user
// const hidden = cart.hidden

/* ===>>  Original Style of the mapStateToProps
*
* const mapStateToProps = state => ({
*             // We go to store file find out the rootReducer file, store === state, the key of first object in the rootReducer === state.user
* currentUser: state.user.currentUser
* )
*/

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})
export default connect(mapStateToProps)(Header);
// need to read more document