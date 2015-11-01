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
        boxscore: '/'
    }
};

export const INTERNAL_API = {
    system: {
        events: '/api/v1/system/events',
        boxscores: '/api/v1/system/boxscores'
    },
    schedule: '/api/v1/schedule'
};

// NBA TEAM LOGOS FROM http://www.sportslogos.net/teams/list_by_league/6/National_Basketball_Association/NBA/logos/

export const TEAM_LOGOS = {
    'atlanta-hawks': 'http://content.sportslogos.net/logos/6/220/full/9168_atlanta_hawks-primary-2016.png',
    'boston-celtics': 'http://content.sportslogos.net/logos/6/213/full/slhg02hbef3j1ov4lsnwyol5o.png',
    'brooklyn-nets': 'http://content.sportslogos.net/logos/6/3786/full/137_brooklyn-nets-primary-2013.png',
    'charlotte-hornets': 'http://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png',
    'chicago-bulls': 'http://content.sportslogos.net/logos/6/221/full/hj3gmh82w9hffmeh3fjm5h874.png',
    'cleveland-cavaliers': 'http://content.sportslogos.net/logos/6/222/full/e4701g88mmn7ehz2baynbs6e0.png',
    'dallas-mavericks': 'http://content.sportslogos.net/logos/6/228/full/ifk08eam05rwxr3yhol3whdcm.png',
    'denver-nuggets': 'http://content.sportslogos.net/logos/6/229/full/xeti0fjbyzmcffue57vz5o1gl.gif',
    'detroit-pistons': 'http://content.sportslogos.net/logos/6/223/full/3079.gif',
    'golden-state-warriors': 'http://content.sportslogos.net/logos/6/235/full/qhhir6fj8zp30f33s7sfb4yw0.png',
    'houston-rockets': 'http://content.sportslogos.net/logos/6/230/full/8xe4813lzybfhfl14axgzzqeq.gif',
    'indiana-pacers': 'http://content.sportslogos.net/logos/6/224/full/3083.gif',
    'los-angeles-clippers': 'http://content.sportslogos.net/logos/6/236/full/5462_los_angeles_clippers-primary-2016.png',
    'los-angeles-lakers': 'http://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.gif',
    'memphis-grizzlies': 'http://content.sportslogos.net/logos/6/231/full/793.gif',
    'miami-heat': 'http://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif',
    'milwaukee-bucks': 'http://content.sportslogos.net/logos/6/225/full/8275_milwaukee_bucks-primary-2016.png',
    'minnesota-timberwolves': 'http://content.sportslogos.net/logos/6/232/full/zq8qkfni1g087f4245egc32po.gif',
    'new-orleans-pelicans': 'http://content.sportslogos.net/logos/6/4962/full/2681_new_orleans_pelicans-primary-2014.png',
    'new-york-knicks': 'http://content.sportslogos.net/logos/6/216/full/2nn48xofg0hms8k326cqdmuis.gif',
    'oklahoma-city-thunder': 'http://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.gif',
    'orlando-magic': 'http://content.sportslogos.net/logos/6/217/full/wd9ic7qafgfb0yxs7tem7n5g4.gif',
    'philadelphia-76ers': 'http://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png',
    'phoenix-suns': 'http://content.sportslogos.net/logos/6/238/full/4370_phoenix_suns-primary-2014.png',
    'portland-trail-blazers': 'http://content.sportslogos.net/logos/6/239/full/bahmh46cyy6eod2jez4g21buk.gif',
    'sacramento-kings': 'http://content.sportslogos.net/logos/6/240/full/832.png',
    'san-antonio-spurs': 'http://content.sportslogos.net/logos/6/233/full/827.gif',
    'toronto-raptors': 'http://content.sportslogos.net/logos/6/227/full/4578_toronto_raptors-primary-2016.png',
    'utah-jazz': 'http://content.sportslogos.net/logos/6/234/full/m2leygieeoy40t46n1qqv0550.gif',
    'washington-wizards': 'http://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png'
};