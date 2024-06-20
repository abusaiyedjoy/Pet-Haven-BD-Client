import { useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DonationCampaignCard from '../DonationCampaignCard';
import ThemeContext from '../../../Hooks/ThemeContext';
import CheckoutForm from './ChackoutFrom';
import { useLocation } from 'react-router-dom';

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
  const { state: campaign } = useLocation()
  const { theme } = useContext(ThemeContext);
  // const { id } = useParams();
  // const campaign = donationCampaigns.find(c => c.id === parseInt(id));

  // eslint-disable-next-line no-unused-vars
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.getElementById('my_modal_3').showModal();
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.getElementById('my_modal_3').close();
  };

  return (
    <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
      <div className="container mx-auto pt-10">
        <div className="flex flex-col justify-center items-center h-[70vh] w-full mx-auto">
          <div className="w-full lg:w-[80%] h-96 bg-gray-700 bg-center bg-cover object-cover rounded-xl shadow-md" style={{ backgroundImage: `url(${campaign?.petImage})` }}></div>

          <div className="w-[50%] -mt-10 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="py-2 text-3xl font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Name: {campaign?.petName}</h3>

            <div className="flex flex-col justify-center items-center space-y-5 mt-3 p-3 text-center">
              <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 md:text-xl">Maximum Donation Amount: ${campaign?.maxDonationAmount}</h1>
              <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 md:text-xl">Donated Amount: ${campaign?.donatedAmount}</h1>
              <button onClick={openModal} className="cursor-pointer w-1/2 inline items-center justify-items-center  rounded-full px-7 py-3 text-xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">Donate Now</button>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8">Recommended Donations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
          {donationCampaigns
            // .filter(c => c.id !== campaign.id)
            .slice(0, 3)
            .map(campaign => (
              <DonationCampaignCard key={campaign.id} campaign={campaign} />
            ))}
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white dark:bg-gray-800">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost text-gray-800 dark:text-gray-200 absolute right-2 top-2" onClick={closeModal}>✕</button>
            </form>
            <h2 className="text-xl text-gray-800 dark:text-gray-200 font-bold mb-4">Donate to {campaign?.petName}</h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm campaignId={campaign?.id} closeModal={closeModal} />
            </Elements>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default DonationDetailsPage;
