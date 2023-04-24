import React from 'react';

import { NAVBAR_ABOUT, NAVBAR_CONTACT, NAVBAR_TWITCH } from '../../constants/constants';

import MailForm from '../../components/mailForm/mailForm';

import ChannelLive from '../../components/ChannelLive/ChannelLive';

import { Neumorphism } from '../../assets/styles/common.style';

function RightSide({ activeSection }) {

  return (
    <>
      {activeSection === NAVBAR_ABOUT &&
        <Neumorphism>
          <p><b>Hello I'm Mauc  ~ TEMPORAIRE</b></p>
          <p><i>A gamer</i></p>
          <p>It's been about ten years since I discovered <br />video games, photography and video and I love it.</p>
          <p>And as I like to share my passions:</p>
          <p>- I broadcast lives on twitch.</p>
          <p>- I do video editing and post my videos on youtube.</p>
          <p>- I take pictures and share them on instagram.</p>
        </Neumorphism>
      }
      {activeSection === NAVBAR_TWITCH &&
        <ChannelLive channelId='256677231' />
      }
      {activeSection === NAVBAR_CONTACT &&
        <MailForm />
      }
    </>
  );
}
export default RightSide;