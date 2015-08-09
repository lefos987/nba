export const API_ENDPOINTS = {
    SYSTEM: {
        EVENTS: '/api/v1/system/events',
        BOXSCORES: '/api/v1/system/boxscores'
    }
};

export const PAYLOAD_SOURCES = {
    SERVER_ACTION: 'SERVER_ACTION',
    VIEW_ACTION:   'VIEW_ACTION'
};

export const ACTION_TYPES = {
    SYSTEM: {
        SAVE_BOXSCORES: 'SAVE_BOXSCORES',
        SAVE_BOXSCORES_RESPONSE: 'SAVE_BOXSCORES_RESPONSE',
        SAVE_EVENTS: 'SAVE_EVENTS',
        SAVE_EVENTS_RESPONSE: 'SAVE_EVENTS_RESPONSE'
    }
};