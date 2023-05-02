import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TiCalendar } from 'react-icons/ti';
import { BiTimeFive, BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';

import {
  EDUCATIONAL_ITEMS as educationalItems,
  PROFESSIONAL_ITEMS as professionalItems,
} from 'data/resumeData';

import {
  MainWrapper,
  Wrapper,
  ResumesWrapper,
  ResumeWrapper,
  ResumeHeader,
  Title,
  P,
  BigText,
  DescWrapper,
  DescSeparator,
  Desc,
  InfoWrapper,
  LineWrapper,
  ChevronWrapper,
} from './resume.style';

function ResumeGroup({ items, titleSection }) {
  const [t] = useTranslation();
  const [openSection, setOpenSection] = useState(null);
  const [isOpen, setIsOpen] = useState(null)

  const handleResumeClick = useCallback((id) => {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
    setIsOpen(false);
  }, [openSection])

  useEffect(() => {
    setIsOpen(true);
  }, [openSection]);

  return (
    <Wrapper>
      <Title>{titleSection}</Title>
      <ResumesWrapper>
        {items.map((item) => (
          <ResumeWrapper
            key={'key' + item.name}
            isOpenSection={openSection}
            isOpen={openSection === item.id}
            onClick={() => handleResumeClick(item.id)}
          >
            <ResumeHeader>
              <InfoWrapper>
                <LineWrapper>
                  <TiCalendar />
                  <P>{item.date}</P>
                </LineWrapper>
                <LineWrapper>
                  <BiTimeFive />
                  <P>{t(item.durationType, { num: item.duration })}</P>
                </LineWrapper>
              </InfoWrapper>

              <BigText>{item.name}</BigText>
              <P>{t(item.title)}</P>
              <ChevronWrapper>
                {openSection === item.id ? <BiChevronUpCircle /> : <BiChevronDownCircle />}
              </ChevronWrapper>
            </ResumeHeader>
            {openSection === item.id &&
              <DescWrapper>
                <DescSeparator />
                <Desc isOpen={isOpen}>
                  {t(item.desc)}
                </Desc>
              </DescWrapper>
            }
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
      <ResumeGroup items={professionalItems} titleSection={t('resume.experiences')} />
    </MainWrapper>
  );
}

export default Resume;
