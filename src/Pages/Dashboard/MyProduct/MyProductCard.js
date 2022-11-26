import React from 'react';

const MyProductCard = ({product}) => {
    const {title} = product;
    console.log(product)
    return (
        <div>
            {title}
        </div>
    );
};

export default MyProductCard;