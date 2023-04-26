import React from 'react';
import { useTranslation } from 'react-i18next';

import { NAVBAR_ABOUT, NAVBAR_CONTACT } from '../../constants/constants';

import MailForm from '../../components/mailForm/mailForm';

import { Neumorphism } from '../../assets/styles/common.style';

import {
  H2,
  P,
  Italic,
  HighlightRect,
  HighlightLine,
} from '../../assets/styles/common.style';

function LeftSide({ activeSection }) {
  const [t] = useTranslation();
  return (
    <>
      {activeSection === NAVBAR_ABOUT && (
        <Neumorphism>
          <H2>
            <b>{t('left.about.hello')}</b>
          </H2>
          <Italic>{t('left.about.job')}</Italic>
          <P>
            {t('left.about.part1')}
            <HighlightRect>{t('left.about.part2')}</HighlightRect>{t('left.about.part3')}
          </P>
          <P>{t('left.about.part4')}</P>
          <P>
            {t('left.about.part5')}<HighlightRect>{t('left.about.part6')}</HighlightRect>{t('left.about.part7')}{' '}
            <HighlightLine>
              {t('left.about.part8')}
            </HighlightLine>
          </P>
        </Neumorphism>
      )}
      {activeSection === NAVBAR_CONTACT && <MailForm />}
    </>
  );
}
export default LeftSide;
