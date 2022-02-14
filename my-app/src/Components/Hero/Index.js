import React, { Component } from 'react';
import DiscountItem from './DiscountItem';
import FeaturedSection from './FeaturedSection';
import LatestProduct from './LatestProduct';
import LeatestBlog from './LeatestBlog';
import MainSlider from './MainSlider';
import SubscribeNewsLetter from './SubscribeNewsLetter';
import TopCategory from './TopCategory';
import TrendingProducts from './TrendingSection';
import UniqueFeatuer from './UniqueFeatuer';
import WhatsOffer from './Whatsoffer';

class Hero extends Component {
    
    render() {
        return (
            <>
             <MainSlider/>
             <FeaturedSection/>
             <LatestProduct/>
             <WhatsOffer/>
             <UniqueFeatuer/>
             <TrendingProducts/>
             <DiscountItem/>
             <TopCategory/> 
             <SubscribeNewsLetter/>
             <LeatestBlog/>
            </>
        );
    }
}

export default Hero;