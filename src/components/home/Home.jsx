
import Hero from './Hero';

import Overview from './Overview';
import Features from './Features';
import Team from './Team';
import Faqs from './Faqs';
import Products from './Products';
import Prices from './Prices';

function Home() {


  return (
    <>



      <Hero />
      <div className="overviewBgColor">

        <Overview />
        <Features />
        <Products />
        <Team />
        <Prices />

        <Faqs />
      </div>




    </>
  )
}

export default Home