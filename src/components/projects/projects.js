import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

import { HiCursorClick } from 'react-icons/hi';

import { PROJECTS_ITEMS as projectsItems } from 'data/projectsData';

import Button from 'components/button/button';

import { Legend, ButtonWrapper, ContactWrapper } from 'parts/sides/sides.style';

import {
  MainWrapper,
  ProjectWrapper,
  Description,
  ContentWrapper,
  MiddleWrapper,
  IMGWrapper,
  SelectedIMG,
  SkillsWrapper,
  Skill,
  ProjectIMG
} from './projects.style';

function Images({ title, description, images, skills }) {
  const [t] = useTranslation();
  const [selectedIMG, setSelectedIMG] = useState(0);

  const onClickIMG = (targetIMGIndex) => {
    setSelectedIMG(targetIMGIndex);
  }

  return (
    <ProjectWrapper>
      <IMGWrapper>
        {images.map((image, index) => (
          <ProjectIMG
            key={title + index}
            alt={title + index}
            src={image}
            isSelected={index === selectedIMG}
            onClick={() => onClickIMG(index)}
          />
        ))}
      </IMGWrapper>
      <MiddleWrapper>
        <SelectedIMG alt={title + 'img'} src={images[selectedIMG]} />
        <ProjectSkills title={title} skills={skills} />
      </MiddleWrapper>
      <Description>{t(description)}</Description>
    </ProjectWrapper>
  )
}

function ProjectSkills({ title, skills }) {

  return (
    <SkillsWrapper>
      {skills.map((skill, index) => (
        <Skill key={'skill' + title + index}>{skill}</Skill>
      ))}
    </SkillsWrapper>
  )
}

function Projects() {
  const [t] = useTranslation();

  return (
    <MainWrapper>
      {projectsItems.map(({ title, description, images, skills }, index) => {
        return (
          <ContentWrapper key={'keyProject' + index}>
            <h3>{title} :</h3>
            <Images title={title} description={description} images={images} skills={skills} />
          </ContentWrapper>
        )
      })}
      <ContactWrapper>
        <ButtonWrapper>
          <Button
            label={t('button.github')}
            CustomIcon={HiCursorClick}
            href={'https://github.com/Tmauc?tab=repositories'}
          />
          <Legend>{t('button.moreProjects')}</Legend>
        </ButtonWrapper>
      </ContactWrapper>

    </MainWrapper>
  )
}

export default Projects
