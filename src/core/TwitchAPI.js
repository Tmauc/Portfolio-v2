import axios from 'axios';

const clientId = 'rne2m0mg98vozgspihetnw9pzlljqo';
const clientSecret = 'v125lrthffevmv0itpm27sp8lzzg5z';

const api = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'Client-ID': clientId,
  },
});

export const getToken = async () => {
  try {
    const response = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`);
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
  }
};

export default api;
