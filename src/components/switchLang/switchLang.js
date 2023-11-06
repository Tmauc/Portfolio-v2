import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from 'translation/i18n';

import { LANG_FR, LANG_EN } from 'constants/constants';

import {
  Wrapper,
  LangButton,
  LangDesktop,
  Separator,
} from './switchLang.style';

function SwitchLang({ isMobile }) {
  const [t] = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('language') || LANG_FR);

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
        <Wrapper>
          <Separator />
          <LangDesktop onClick={handleToggle} className="clickable">
            {lang === LANG_FR ? 'FR' : 'EN'}
          </LangDesktop>
        </Wrapper>
        :
        <LangButton onClick={handleToggle} mobile>
          {t('navbar.language')} {lang === LANG_FR ? 'FR' : 'EN'}
        </LangButton>
      }
    </>
  );
}

export default SwitchLang;