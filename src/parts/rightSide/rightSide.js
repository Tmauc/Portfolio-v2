import React from 'react';

import * as constants from 'constants/constants';

import MailForm from 'components/mailForm/mailForm';

import ChannelLive from 'components/ChannelLive/ChannelLive';

function RightSide({ activeSection }) {

  return (
    <>
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