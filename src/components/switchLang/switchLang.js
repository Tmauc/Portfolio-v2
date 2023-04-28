import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from 'translation/i18n';

import { LANG_FR, LANG_EN } from 'constants/constants';

import {
  ToggleWrapper,
  LangButton,
  Input,
  Label,
  ToggleHandler,
} from './switchLang.style';

function SwitchLang({ isMobile }) {
  const [t] = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('language') || LANG_FR);
  const isChecked = lang === LANG_FR ? false : true

  const handleToggle = useCallback(() => {
    setTimeout(() => {
      setLang(lang === LANG_FR ? LANG_EN : LANG_FR);
    }, 200);
    i18n.changeLanguage(lang)
  }, [lang]);

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  }, [lang]);

  return (
    <>
      {!isMobile ?
        <ToggleWrapper>
          <Input
            type="checkbox"
            title="Toggle Language"
            className="tgl"
            id="tgl"
            checked={isChecked}
            aria-label="Toggle Language"
            onChange={handleToggle}
          />
          <Label htmlFor="tgl" className="toggle">
            <ToggleHandler>{lang === LANG_FR ? 'FR' : 'EN'}</ToggleHandler>
          </Label>
        </ToggleWrapper>
        :
        <LangButton onClick={handleToggle}>
          {t('navbar.language')} {lang === LANG_FR ? 'FR' : 'EN'}
        </LangButton>
      }
    </>
  );
}

export default SwitchLang;
