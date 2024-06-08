import { useContext, useState, useEffect } from 'react';
import ThemeContext from "../../Hooks/ThemeContext";
import Cover from "../../Layout/Cover/Cover";
import DonationCampaignCard from './DonationCampaignCard';
import LoadingSpinner from '../../Components/Shared/Loading';
import Header from '../Header/Header';

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
  {
    id: 4,
    petName: "Bella",
    petImage: "https://example.com/bella.jpg",
    maxDonationAmount: 180,
    donatedAmount: 130,
    date: '2023-06-04',
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
  {
    id: 4,
    petName: "Bella",
    petImage: "https://example.com/bella.jpg",
    maxDonationAmount: 180,
    donatedAmount: 130,
    date: '2023-06-04',
  },
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
        setCampaigns(sortedCampaigns.slice(0, page * 3));
        setLoading(false);
      }, 1000);
    };

    loadCampaigns();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
      setPage(prevPage => prevPage + 1); // Load next page of campaigns when scrolled to bottom
    }
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 200);

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
      <Cover
        image={'https://i.ibb.co/WzqTDHt/lily-banse-YHSwy6uqvk-unsplash.jpg'}
        title={"Donation Campaign"}
      />
      <div className="container mx-auto">
        <Header Heading={"🐕All the Donation Campaigns🐕"}></Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaigns.map(campaign => (
            <DonationCampaignCard key={campaign.id} campaign={campaign} />
          ))}
          {loading && <LoadingSpinner />}
        </div>
      </div>
    </div>
  );
};

// Debounce function to limit how often a function can be called
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default DonationCampaignsPage;
