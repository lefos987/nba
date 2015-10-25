export const HOST = 'http://localhost:3000';

export const API_ENDPOINTS = {
    SYSTEM: {
        EVENTS: '/api/v1/system/events',
        BOXSCORES: '/api/v1/system/boxscores'
    },
    SCHEDULE: '/api/v1/schedule'
};

export const PAYLOAD_SOURCES = {
    SERVER_ACTION: 'SERVER_ACTION',
    VIEW_ACTION:   'VIEW_ACTION'
};

export const ACTION_TYPES = {
    SYSTEM: {
        GET_LOG_ENTRIES: 'GET_LOG_ENTRIES',
        GET_LOG_ENTRIES_RESPONSE: 'GET_LOG_ENTRIES_RESPONSE',
        SAVE_BOXSCORES: 'SAVE_BOXSCORES',
        SAVE_BOXSCORES_RESPONSE: 'SAVE_BOXSCORES_RESPONSE',
        SAVE_EVENTS: 'SAVE_EVENTS',
        SAVE_EVENTS_RESPONSE: 'SAVE_EVENTS_RESPONSE'
    },
    SCHEDULE: {
        GET_SCHEDULE: 'GET_SCHEDULE',
        GET_SCHEDULE_RESPONSE: 'GET_SCHEDULE_RESPONSE',
        SET_DATE: 'SET_DATE'
    }
};