import React, { useState, useEffect } from 'react';
import { LoaderWrapper, LoaderElement } from './loader.style';

function Loader({ setLoading, isSwap }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 1000);
  }, [setLoading]);

  return (
    <LoaderWrapper visible={visible}>
      <LoaderElement isSwap={isSwap} />
    </LoaderWrapper>
  );
}

export default Loader;
