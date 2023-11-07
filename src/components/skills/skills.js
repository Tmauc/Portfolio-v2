import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  WEB_ITEMS as webItems,
  OBJECT_ITEMS as objectItems,
  MOBILE_ITEMS as mobileItems,
  FUNCTIONAL_ITEMS as functionalItems,
  OS_ITEMS as osItems,
  OTHER_ITEMS as otherItems,
} from 'data/skillsData';

import {
  MainWrapper,
  Wrapper,
  SkillsWrapper,
  SkillWrapper,
  Title,
  Span,
  P,
} from './skills.style';

function SkillsGroup({ items, title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SkillsWrapper>
        {items.map(({ name, icon, color }) => (
          <SkillWrapper key={'key' + name}>
            <Span color={color}>{icon}</Span>
            <P>{name}</P>
          </SkillWrapper>
        ))}
      </SkillsWrapper>
    </Wrapper>
  );
}

function Skills() {
  const [t] = useTranslation();
  return (
    <MainWrapper>
      <SkillsGroup items={webItems} title={t('skills.web')} />
      <SkillsGroup items={objectItems} title={t('skills.object')} />
      <SkillsGroup items={mobileItems} title={t('skills.mobile')} />
      <SkillsGroup items={functionalItems} title={t('skills.functional')} />
      <SkillsGroup items={osItems} title={t('skills.os')} />
      <SkillsGroup items={otherItems} title={t('skills.other')} />
    </MainWrapper>
  );
}

export default Skills;
