import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TwitchPlayer, TwitchChat } from 'react-twitch-embed';
import api, { getToken } from '../../core/TwitchAPI';
import { Neumorphism } from '../../assets/styles/common.style';
import { TwitchPlayerStyle, LiveWrapper } from './ChannelLive.style';

import useDeviceType from '../../hooks/useDeviceType';

const ChannelPlanning = ({ channelId }) => {
  const [streamData, setStreamData] = useState(null);
  const { isMobile } = useDeviceType();
  const [t] = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      if (token) {
        const response = await api.get(`/streams?user_id=${channelId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.data.length > 0) {
          setStreamData(response.data.data[0]);
        } else {
          setStreamData(null);
        }
      }
    };

    if (channelId) {
      fetchData();
    }
  }, [channelId]);

  return (
    <LiveWrapper>
      <Neumorphism>
        {streamData ? (
          <>
            <p>
              <b>{t('twitch.status')}</b> {t('twitch.onLive')}
            </p>
            <p>
              <b>{t('twitch.title')}</b>
              {streamData.title}
            </p>
            <p>
              <b>{t('twitch.game')}</b> {streamData.game_name}
            </p>
          </>
        ) : (
          <p>
            <b>{t('twitch.status')}</b> {t('twitch.offline')}
          </p>
        )}
        <TwitchPlayerStyle>
          <TwitchPlayer
            title={streamData?.title}
            allowFullScreen={true}
            channel="maucsama"
            width="100%"
            height="100%"
          />
        </TwitchPlayerStyle>
      </Neumorphism>
      {!isMobile && (
        <Neumorphism>
          <TwitchChat
            title={streamData?.title}
            channel="maucsama"
            width="100%"
            height="100%"
          />
        </Neumorphism>
      )}
    </LiveWrapper>
  );
};

export default ChannelPlanning;
