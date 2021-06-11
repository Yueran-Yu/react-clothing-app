import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {HeaderContainer, LogoContainer, OptionLink, OptionDiv, OptionsContainer} from "./header.styles";


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo'/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionDiv to='/shop'>
          CONTACT
        </OptionDiv>
        {
          currentUser ?
              (<OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>) :
              (<OptionLink to='/signin'>SIGN IN</OptionLink>)
        }
        <CartIcon/>
      </OptionsContainer>
      {
        hidden ? null : <CartDropDown/>
      }
    </HeaderContainer>
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


// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })
//  transform to the below structure


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
// need to read more document