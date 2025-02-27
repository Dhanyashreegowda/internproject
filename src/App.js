import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import TrendingCourses from './components/trendingCourses/TrendingCourses';
import RecentAddition from './components/recentAdditions/RecentAdd';
import DiscoverTopCatogories from './components/discoverTopCatogories/DiscoverTopCatogories';
import Reviews from './components/reviews/Reviews';
import TopContactUs from './components/topContactUs/TopContactUs';
import AcheiversITEdge from './components/acheiversITEdge/AcheiversITEdge';
import TopBanner from './components/topBanner/TopBanner';
import TrainersFrom from './components/trainersFrom/TrainersFrom';
import AItProcess from './components/aItProcess/AItProcess';
import JobOpenning from './components/jobOpennings/JobOpenning';
import BusinessContact from './components/businessContact/BusinessContact';
import CorporateClients from './components/corporateClients/CorporateClients';
import KnowUs from './components/knowUs/KnowUs';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import StickyFooter from './components/stickyFooter/StickyFooter';

function App() {
  return (
    <>
    <div className='content_box'>
   
      <Header/>
      <Carousel/>
      <TrendingCourses/>
      <RecentAddition/>
      <DiscoverTopCatogories/>
      <Reviews/>
      <TopContactUs/>
      <AcheiversITEdge/>
      <TopBanner/>
      <TrainersFrom/>
      <AItProcess/>
      <JobOpenning/>
      <BusinessContact/>
      <CorporateClients/>
      <KnowUs/>
      <Location/>
      <Footer/>
      <StickyFooter className="StickyFooter" />

      </div>
    

    </>
  );
}

export default App;
