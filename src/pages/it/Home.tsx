import { useEffect } from 'react';
import HeroSlider from '../../sections/HeroSlider';
import CategoryLinks from '../../sections/CategoryLinks';
import CompanyIntro from '../../sections/CompanyIntro';
import CategoriesGrid from '../../sections/CategoriesGrid';
import NewArrivals from '../../sections/NewArrivals';
import SolsPromo from '../../sections/SolsPromo';
import RolyShowcase from '../../sections/RolyShowcase';
import FeaturesBar from '../../sections/FeaturesBar';

const HomeIT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
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

export default HomeIT;
