import React from 'react';
import EbayArray from '../ebay-array/ebay-array.component';

const EbayItemsList = ({ebayItems}) => (
  <React.Fragment>
    {
      ebayItems.map((input, i) => (
        <EbayArray
          key={i}
          name={input.title}
          price={input.sellingStatus[0].currentPrice[0].__value__}
          imageUrl={input.galleryURL}
          discount={input.postalCode}
          shipping={(input.shippingInfo[0].shipToLocations)}
          purchaseLink={input.viewItemURL}
        />
		  )
    )
  };
  </React.Fragment>
);

export default EbayItemsList;
