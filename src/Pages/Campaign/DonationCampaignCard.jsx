import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCampaignCard = ({ campaign }) => {
  return (
      <div className="flex justify-center items-center gap-3 h-[25vh] overflow-hidden bg-white rounded-lg p-2 shadow-lg dark:bg-gray-800">
        
        <img className="w-2/5 bg-cover py-2 rounded-lg" src={campaign?.petImage} alt="" />

        <div className="w-3/5 p-4 md:p-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{campaign.petName}</h1>

          <div className="flex flex-col justify-center space-y-2 mt-3 item-center">
            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 md:text-lg">Max. Donation Amount: ${campaign.maxDonationAmount}</h1>
            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 md:text-lg">Donated Amount: ${campaign.donatedAmount}</h1>
            <Link to={`/donation`} state={campaign} className="cursor-pointer w-full items-center justify-items-center  rounded-full px-7 py-3 text-xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
              View Details
            </Link>
          </div>
        </div>
      </div>
  );
};

// Prop types validation
DonationCampaignCard.propTypes = {
  campaign: PropTypes.shape({
    id: PropTypes.number.isRequired,
    petName: PropTypes.string.isRequired,
    petImage: PropTypes.string.isRequired,
    maxDonationAmount: PropTypes.number.isRequired,
    donatedAmount: PropTypes.number.isRequired,
  }).isRequired,
};

export default DonationCampaignCard;
