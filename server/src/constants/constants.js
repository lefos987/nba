const XML_STATS_API_KEY    = '8d2b5e51-b1f6-4605-90d2-5473f4f4d1b7';
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
    system: {
        events: '/api/v1/system/events'
    }
};