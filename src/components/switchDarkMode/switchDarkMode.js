import React, { useCallback } from 'react';

import { ToggleWrapper, Input, Label, ToggleHandler, Crater, Star } from './switchDarkMode.style';

function SwitchDarkMode({ isDarkMode, setIsDarkMode, setLoading }) {

  const handleToggle = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setIsDarkMode(isDarkMode => !isDarkMode);
    }, 500);
  }, [setIsDarkMode, setLoading]);

  return (
    <ToggleWrapper>
      <Input type="checkbox" className="dn" id="dn" checked={isDarkMode} onChange={handleToggle} />
      <Label htmlFor="dn" className="toggle">
        <ToggleHandler>
          <Crater className="crater crater--1"></Crater>
          <Crater className="crater crater--2"></Crater>
          <Crater className="crater crater--3"></Crater>
        </ToggleHandler>
        <Star className="star star--1"></Star>
        <Star className="star star--2"></Star>
        <Star className="star star--3"></Star>
        <Star className="star star--4"></Star>
        <Star className="star star--5"></Star>
        <Star className="star star--6"></Star>
      </Label>
    </ToggleWrapper>
  );
}

export default SwitchDarkMode;