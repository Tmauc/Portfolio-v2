import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TiCalendar } from 'react-icons/ti';

import {
  EDUCATIONAL_ITEMS as educationalItems,
  PROFESSIONAL_ITEMS as professionalItems,
} from 'components/data/resumeData';

import { MainWrapper, Wrapper, ResumesWrapper, ResumeWrapper, ResumeHeader, Title, P, BigText, Desc } from './resume.style';

function ResumeGroup({ items, titleSection }) {
  const [t] = useTranslation();
  const [openSection, setOpenSection] = useState(null);

  const handleResumeClick = useCallback((id) => {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  }, [openSection])

  return (
    <Wrapper>
      <Title>{titleSection}</Title>
      <ResumesWrapper>
        {items.map((item) => (
          <ResumeWrapper
            key={'key' + item.name}
            isOpen={openSection === item.id}
            onClick={() => handleResumeClick(item.id)}
          >
            <ResumeHeader>
              <TiCalendar />
              <P>{item.date}</P>
              <BigText>{item.name}</BigText>
              <P>{t(item.title)}</P>
            </ResumeHeader>
            {openSection === item.id && <Desc isOpen={openSection === item.id}>{t(item.desc)}</Desc>}
          </ResumeWrapper>
        ))}
      </ResumesWrapper>
    </Wrapper>
  );
}


function Resume() {
  const [t] = useTranslation();
  return (
    <MainWrapper>
      <ResumeGroup items={educationalItems} titleSection={t('resume.education')} />
      <ResumeGroup items={professionalItems} titleSection={t('resume.professional')} />
    </MainWrapper>
  );
}

export default Resume;
