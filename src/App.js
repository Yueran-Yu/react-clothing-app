import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
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
    const {setCurrentUser} = this.props;

    // onAuthStateChanged() is a method on the auth library
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        // we will get  back a snapShot object through onSnapshot method
        userRef.onSnapshot(snapshot => {
          // console.log(snapshot.data())

          // setState is a asynchronous, the second parameter of setState() is the way to log out the result
          this.props.setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
              }
              , () => {
                console.log(this.state)
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
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
        </div>
    )
  }
}

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchProps)(App);