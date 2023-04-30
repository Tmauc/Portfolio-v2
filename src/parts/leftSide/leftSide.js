import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import Skills from 'components/skills/skills';
import MailForm from 'components/mailForm/mailForm';
import Resume from 'components/resume/resume';
import Projects from 'components/projects/projects';

import { NAVBAR_ABOUT, NAVBAR_SKILLS, NAVBAR_CONTACT, NAVBAR_RESUME, NAVBAR_PROJECTS } from 'constants/constants';

import {
  H2,
  P,
  Italic,
  HighlightRect,
  HighlightLine,
  Neumorphism,
} from 'assets/styles/common.style';

import { Wrapper, Section } from './leftSide.style';

function LeftSide({ activeSection }) {
  const [t] = useTranslation();
  return (
    <Wrapper>
      <Section>
        <Neumorphism>
          <H2>
            <b>{t('left.about.hello')}</b>
          </H2>
          <Italic>{t('left.about.job')}</Italic>
          <P>
            <Trans i18nKey="left.about.certificate" components={{ 1: <HighlightRect /> }} />
          </P>
          <P>{t('left.about.passions')}</P>
          <P>
            <Trans
              i18nKey="left.about.qualities"
              components={{ 1: <HighlightRect />, 2: <HighlightLine /> }}
            />
          </P>
        </Neumorphism>
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Resume />
      </Section >
      <Section>
        <Projects />
      </Section >
      <Section>
        <MailForm />
      </Section >
    </Wrapper>
  );
}

export default LeftSide;
