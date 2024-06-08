/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';

const CheckoutForm = ({ campaignId, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      // Handle the payment process
      // For example, send paymentMethod.id and amount to your backend
      console.log(paymentMethod.id, amount);

      // After successful payment
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Donation Amount
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded mb-4 w-full text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
          required
          min="1"
        />
      </label>
      <label>
        Card details
        <CardElement className="border p-2 rounded mb-4 w-full" />
      </label>
      <button type="submit" disabled={!stripe} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Donate
      </button>
    </form>
  );
};

CheckoutForm.propTypes = {
  campaignId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CheckoutForm;
