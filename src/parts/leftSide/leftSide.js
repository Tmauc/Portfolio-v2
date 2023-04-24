import React from 'react';

import { NAVBAR_ABOUT, NAVBAR_CONTACT } from '../../constants/constants';

import MailForm from '../../components/mailForm/mailForm';

import { Neumorphism } from '../../assets/styles/common.style';

function LeftSide({ activeSection }) {

  return (
    <>
      {activeSection === NAVBAR_ABOUT &&
        <Neumorphism>
          <p><b>Hello I'm Thomas ~ TEMPORAIRE</b></p>
          <p><i>Front-end developer</i></p>
          <p>For over 2 years.<br />I graduated from Epitech school.</p>
          <p>Whether at school on individual and group projects
            (about 50), or in the corporate world (2 years of professional experience), I always give my all to what I do.</p>
          <p>At Epitech, I learned to learn and never give up. I am persistent and always finish what I start.</p>
          <p>My main qualities: autonomy, rigor and curiosity.</p>
        </Neumorphism>
      }
      {activeSection === NAVBAR_CONTACT &&
        <MailForm />
      }
    </>
  );
}
export default LeftSide;