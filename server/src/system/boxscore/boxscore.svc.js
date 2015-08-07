import request from 'superagent';
import q from 'q';

import { API_CONFIG } from '../../constants/constants';
import ExternalApiProvider from '../../core/externalApiProvider';
import redisClient from '../../core/redisClient';
import EventsService from '../events/events.svc';

class BoxscoreService {

    constructor() {

    }


}

let _BoxscoreService = new BoxscoreService();
export default _BoxscoreService;