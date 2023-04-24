import React, { useState, useEffect } from 'react';
import api, { getToken } from '../../core/TwitchAPI';

const ChannelDetails = ({ channelName }) => {
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      const response = await api.get(`/users?login=${channelName}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.data.data.length > 0) {
        setChannelData(response.data.data[0]);
      }
    };

    fetchData();
  }, [channelName]);

  return (
    <div>
      {channelData ? (
        <>
          <h2>{channelData.display_name}</h2>
          <p>{channelData.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ChannelDetails;
