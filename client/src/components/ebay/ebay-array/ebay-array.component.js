import React from 'react';
import './ebay-list.styles.css';


const EbayArray = ( props ) => {
  const { name, imageUrl, price, purchaseLink, shipping } = props;
  return (
    <div className="ebay-sales-list">
        <h4 className="ebay-sales-list-title">{name}</h4>
        <img alt={name} src={`${imageUrl}`} />
      <h4>Price: USD {price}</h4>
      <h4>Shipping:{shipping}</h4>
      <a
        target={name}
        href={purchaseLink}
        className="ebay-button"
      >
				Go To Ebay
      </a>
    </div>
  );
};

export default EbayArray;
