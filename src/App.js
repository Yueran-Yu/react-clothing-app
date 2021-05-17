// we need to update the data of reducer in App.js too
import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {connect} from 'react-redux';
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js';
import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null

  // fetch data
  componentDidMount() {
    // destructure
    const {setCurrentUser} = this.props

    // onAuthStateChanged() is a method on the auth library
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        // we will get  back a snapShot object through onSnapshot method
        userRef.onSnapshot(snapshot => {
          // console.log(snapshot.data())
          // setState is a asynchronous, the second parameter of setState() is the way to log out the result
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div >
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/signin'
                   // the spell mistake no warning
                   render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
          </Switch>
        </div>
    )
  }
}

const mapStateToProps = ({user}) => (
    {currentUser: user.currentUser}
)

const mapDispatchProps = dispatch => ({
                  // where is this user come from????
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// the first argument:null. because we don't need any state === props from our reducer
export default connect(mapStateToProps, mapDispatchProps)(App);

// reading the articles about Redux
