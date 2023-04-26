import React, { useState, useCallback, useEffect } from 'react';

import i18n from '../../translation/i18n';

import { LANG_FR, LANG_EN } from '../../constants/constants';

import {
  ToggleWrapper,
  Input,
  Label,
  ToggleHandler,
} from './switchLang.style';

function SwitchLang() {
  const [lang, setLang] = useState(LANG_FR);

  const handleToggle = useCallback(() => {
    setTimeout(() => {
      setLang(lang === LANG_FR ? LANG_EN : LANG_FR);
    }, 200);
    i18n.changeLanguage(lang)
  }, [lang]);

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang]);

  return (
    <ToggleWrapper>
      <Input
        type="checkbox"
        title="Toggle Language"
        className="tgl"
        id="tgl"
        aria-label="Toggle Language"
        onChange={handleToggle}
      />
      <Label htmlFor="tgl" className="toggle">
        <ToggleHandler>{lang === LANG_FR ? 'FR' : 'EN'}</ToggleHandler>
      </Label>
    </ToggleWrapper>
  );
}

export default SwitchLang;
