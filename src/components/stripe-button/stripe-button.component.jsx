import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HK73RKHtPI77eCDS4Wp8du5SmCK8Pq8NIEgtbTKD8QE7zL0zqTTc9vORfAqQBE3ZsM9yvQtMhntRaiYvU911MQf005gux25BK';

  const onToken = token => {
    console.log(token);
    alert('Paiement réussi!');
  };

  return (
    <StripeCheckout
      label='Payez maintenant'
      name='achatez vos meilleurs vétements.'
      billingAddress
      shippingAddress
      image="https://i.ibb.co/G59HPND/clothes.png" 
      description={`votre totale est $${price}`}
      amount={priceForStripe}
      panelLabel='Payez maintenant'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
