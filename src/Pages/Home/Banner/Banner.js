import React from 'react';
import img1 from '../../../assets/banner/banner3.jpg';
import img2 from '../../../assets//banner/banner.jpg'
import img3 from '../../../assets/banner/banner1.jpg'
import BannerItems from './BannerItems/BannerItems';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 3,
            id: 1,
            next: 2,
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3,
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1,
        },
        
    ]
    return (
        <div className="carousel w-full">
             {
                bannerData.map(slider => <BannerItems
                    key={slider.id}
                    slider={slider}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;