import React, { useState } from 'react';

import { CarrouselWrapper, CarrouselBtn, GiftIMG } from './carrousel.style';
import { Italic } from 'parts/sides/sides.style';

function Carrousel({ items }) {
  const [carrouselIndex, setCarrouselIndex] = useState(0);
  const activeGif = items[carrouselIndex];
  const firstItem = carrouselIndex === 0;
  const lastItem = carrouselIndex >= items.length - 1;

  const nextGif = () => {
    if (!lastItem) setCarrouselIndex((carrouselIndex) => carrouselIndex + 1);
  };

  const previousGif = () => {
    if (!firstItem) setCarrouselIndex((carrouselIndex) => carrouselIndex - 1);
  };

  return (
    <CarrouselWrapper>
      <div>
        <Italic>{carrouselIndex + 1 + '. ' + activeGif.name}</Italic>
        <GiftIMG alt={activeGif.alt} src={activeGif.gif} />
      </div>
      <div>
        <CarrouselBtn onClick={nextGif} lastItem={lastItem}>
          {'>'}
        </CarrouselBtn>
        <CarrouselBtn onClick={previousGif} firstItem={firstItem}>
          {'<'}
        </CarrouselBtn>
      </div>
    </CarrouselWrapper>
  );
}

export default Carrousel;
