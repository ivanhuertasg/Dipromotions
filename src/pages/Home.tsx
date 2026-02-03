import { useEffect, useState } from 'react';
import HeroSlider from '../sections/HeroSlider';
import CategoryLinks from '../sections/CategoryLinks';
import CompanyIntro from '../sections/CompanyIntro';
import CategoriesGrid from '../sections/CategoriesGrid';
import NewArrivals from '../sections/NewArrivals';
import SolsPromo from '../sections/SolsPromo';
import RolyShowcase from '../sections/RolyShowcase';
import FeaturesBar from '../sections/FeaturesBar';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSlider />
      <CategoryLinks />
      <CompanyIntro />
      <CategoriesGrid />
      <NewArrivals />
      <SolsPromo />
      <RolyShowcase />
      <FeaturesBar />
    </div>
  );
};

export default Home;
