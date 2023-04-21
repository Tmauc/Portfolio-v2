import React from 'react';

import * as constants from 'constants/constants';

import MailForm from 'components/mailForm/mailForm';

import ChannelLive from 'components/ChannelLive/ChannelLive';

import { Neumorphism } from 'assets/styles/common.style';

function RightSide({ activeSection }) {

  return (
    <>
      {activeSection === constants.NAVBAR_ABOUT &&
        <Neumorphism>
          <p><b>Hello I'm Mauc</b></p>
          <p><i>A gamer</i></p>
          <p>It's been about ten years since I discovered <br />video games, photography and video and I love it.</p>
          <p>And as I like to share my passions:</p>
          <p>- I broadcast lives on twitch.</p>
          <p>- I do video editing and post my videos on youtube.</p>
          <p>- I take pictures and share them on instagram.</p>
        </Neumorphism>
      }
      {activeSection === constants.NAVBAR_TWITCH &&
        <ChannelLive channelId='256677231' />
      }
      {activeSection === constants.NAVBAR_CONTACT &&
        <MailForm activeSide={constants.RIGHT_SIDE} />
      }
    </>
  );
}
export default RightSide;