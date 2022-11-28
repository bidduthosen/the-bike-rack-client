import React from 'react';
import Banner from '../Banner/Banner';
import BikeBrands from '../BikeBrands/BikeBrands';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categories></Categories>
           <BikeBrands></BikeBrands>
        </div>
    );
};

export default Home;