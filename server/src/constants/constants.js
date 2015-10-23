const XML_STATS_API_KEY    = 'b82ed8df-bb50-476f-a354-2b4418202b76';
const XML_STATS_USER_AGENT = 'elparask@gmail.com';

export const XML_STATS_API = {
    api_key: XML_STATS_API_KEY,
    user_agent: XML_STATS_USER_AGENT,
    host: 'erikberg.com',
    headers: {
        'Authorization': 'Bearer ' + XML_STATS_API_KEY,
        'User-Agent': XML_STATS_USER_AGENT
    },
    endpoints: {
        events: '/events.json',
        boxscore: ''
    }
};

export const INTERNAL_API = {
    host: 'http://localhost:3000',
    system: {
        events: '/api/v1/system/events',
        boxscores: '/api/v1/system/boxscores'
    },
    schedule: '/api/v1/schedule'
};