import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DonationCampaignCard from '../DonationCampaignCard';
import CheckoutForm from './ChackoutFrom';

const donationCampaigns = [
  {
    id: 1,
    petName: "Buddy",
    petImage: "https://example.com/buddy.jpg",
    maxDonationAmount: 100,
    donatedAmount: 50
  },
  {
    id: 2,
    petName: "Sasha",
    petImage: "https://example.com/sasha.jpg",
    maxDonationAmount: 150,
    donatedAmount: 100
  },
  {
    id: 3,
    petName: "Max",
    petImage: "https://example.com/max.jpg",
    maxDonationAmount: 200,
    donatedAmount: 150
  },
  // Add more campaigns as needed
];

const stripePromise = loadStripe('your-public-key-here');

const DonationDetailsPage = () => {
  // const { id } = useParams();
  const id = null;
  const campaign = donationCampaigns.find(c => c.id === parseInt(id));

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-2xl mx-auto bg-white rounded shadow-lg p-6">
        <img className="w-full" src={campaign?.petImage} alt={campaign?.petName} />
        <h1 className="text-3xl font-bold my-4">{campaign?.petName}</h1>
        <p className="text-gray-700 text-base">
          Maximum Donation Amount: ${campaign?.maxDonationAmount}
        </p>
        <p className="text-gray-700 text-base">
          Donated Amount: ${campaign?.donatedAmount}
        </p>
        <button onClick={openModal} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
          Donate Now
        </button>
      </div>

      <h2 className="text-2xl font-bold my-8">Recommended Donations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {donationCampaigns
          // .filter(c => c.id !== campaign.id)
          .slice(0, 3)
          .map(campaign => (
            <DonationCampaignCard key={campaign.id} campaign={campaign} />
          ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Donate Now">
        <h2 className="text-xl font-bold mb-4">Donate to {campaign?.petName}</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm campaignId={campaign?.id} closeModal={closeModal} />
        </Elements>
      </Modal>
    </div>
  );
};

export default DonationDetailsPage;
