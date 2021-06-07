import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IzZCdDoG3CMesjQ7WomYduwEK2eiGLEUVb5La2zJcDVccXUGgAMjXrs8RL9xVVXQnlSzHPyc8aQmk5y6sGgG9Jy003RDq1ORY';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }
  return (
      <StripeCheckout
          label="Pay Now"
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
      />
  )
}

export default StripeCheckoutButton;