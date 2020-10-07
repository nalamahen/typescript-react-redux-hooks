import React, { FC } from 'react';
import StripeCheckout from 'react-stripe-checkout';

interface IProps {
  price: number;
}

const StripeButton: FC<IProps> = ({ price }): JSX.Element => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_MIs9Uhyo1e94DF2EE6jKiaFb';

  const onToken = (token: any) => {
    console.log('token:', token);
    alert('payment successfull');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Nala Ecommerce Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
