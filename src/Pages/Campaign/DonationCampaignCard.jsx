import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCampaignCard = ({ campaign }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={campaign.petImage} alt={campaign.petName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{campaign.petName}</div>
        <p className="text-gray-700 text-base">
          Maximum Donation Amount: ${campaign.maxDonationAmount}
        </p>
        <p className="text-gray-700 text-base">
          Donated Amount: ${campaign.donatedAmount}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <Link to={`/donation`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </Link>
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
