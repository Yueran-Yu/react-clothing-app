import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert(`password don't match`)
      return
    }

    try {
      // user is a key...
      const x = await auth.createUserWithEmailAndPassword(email, password)
      // const {user} = await auth.createUserWithEmailAndPassword(email, password)
      console.log(x.user)

      await createUserProfileDocument(x.user, {displayName})

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

//Hello here has a problem
  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
        <div className='sign-up'>
          <h2 className='title'>I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
                label='Display Name'
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                required/>
            <FormInput
                label='Email'
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                required/>
            <FormInput
                label='Password'
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                required/>
            <FormInput
                label='Confirm Password'
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                required/>
            <CustomButton type='submit'>
              SIGN UP
            </CustomButton>
          </form>
        </div>
    )
  }
}

export default SignUp;