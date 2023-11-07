import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { MAIL_NAME } from 'constants/constants';

import Skills from 'components/skills/skills';
import Resume from 'components/resume/resume';
import Projects from 'components/projects/projects';
import Button from 'components/button/button';

import {
  H2,
  P,
  Italic,
  HighlightRect,
  HighlightLine,
  Section,
  AboutWrapper,
  ContactWrapper,
  Center,
} from './sides.style';

function LeftSide() {
  const [t] = useTranslation();
  return (
    <>
      <Section id="about">
        <AboutWrapper>
          <H2>
            <b>{t('left.about.hello')}</b>
          </H2>
          <Italic>{t('left.about.job')}</Italic>
          <P>
            <Trans
              i18nKey="left.about.certificate"
              components={{ 1: <HighlightRect /> }}
            />
          </P>
          <P>{t('left.about.passions')}</P>
          <P>
            <Trans
              i18nKey="left.about.qualities"
              components={{ 1: <HighlightRect />, 2: <HighlightLine /> }}
            />
          </P>
        </AboutWrapper>
        <ContactWrapper>
          <Button
            label={t('button.project')}
            href={'mailto:' + MAIL_NAME + '@gmail.com'}
          />
        </ContactWrapper>
      </Section>
      <Section id="projects">
        <P>
          <Trans
            i18nKey="left.projects"
            components={{ 1: <HighlightRect /> }}
          />
        </P>
        <Projects />
      </Section>
      <Section id="skills">
        <P>
          <Trans i18nKey="left.skills" components={{ 1: <HighlightRect /> }} />
        </P>
        <Skills />
      </Section>
      <Section id="resume">
        <P>
          <Trans i18nKey="left.resume" components={{ 1: <HighlightRect /> }} />
        </P>
        <Resume />
      </Section>
      <Center>
        <Button
          label={t('button.contact')}
          href={'mailto:' + MAIL_NAME + '@gmail.com'}
        />
      </Center>
    </>
  );
}

export default LeftSide;
