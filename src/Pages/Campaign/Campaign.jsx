import { useContext, useState, useEffect } from 'react';
import ThemeContext from "../../Hooks/ThemeContext";
import Cover from "../../Layout/Cover/Cover";
import DonationCampaignCard from './DonationCampaignCard';
import LoadingSpinner from '../../Components/Shared/Loading';

const donationCampaigns = [
  {
    id: 1,
    petName: "Buddy",
    petImage: "https://example.com/buddy.jpg",
    maxDonationAmount: 100,
    donatedAmount: 50,
    date: '2023-06-01',
  },
  {
    id: 2,
    petName: "Sasha",
    petImage: "https://example.com/sasha.jpg",
    maxDonationAmount: 150,
    donatedAmount: 100,
    date: '2023-06-02',
  },
  {
    id: 3,
    petName: "Max",
    petImage: "https://example.com/max.jpg",
    maxDonationAmount: 200,
    donatedAmount: 150,
    date: '2023-06-03',
  },
  // Add more campaigns as needed
];

const sortedCampaigns = donationCampaigns.sort((a, b) => new Date(b.date) - new Date(a.date));

const DonationCampaignsPage = () => {
  const { theme } = useContext(ThemeContext);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadCampaigns = () => {
      setLoading(true);
      setTimeout(() => {
        setCampaigns(sortedCampaigns.slice(0, page * 3)); // Load 3 campaigns per page
        setLoading(false);
      }, 1000); // Simulating network delay
    };

    loadCampaigns();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(prevPage => prevPage + 1); // Load next page of campaigns when scrolled to bottom
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
      <Cover
        image={'https://i.ibb.co/WzqTDHt/lily-banse-YHSwy6uqvk-unsplash.jpg'}
        title={"Donation Campaign"}
      />
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold my-4">Donation Campaigns</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {campaigns.map(campaign => (
            <DonationCampaignCard key={campaign.id} campaign={campaign} />
          ))}
          {loading && <LoadingSpinner></LoadingSpinner>}
        </div>
      </div>
    </div>
  );
};

export default DonationCampaignsPage;
