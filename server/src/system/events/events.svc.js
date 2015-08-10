import DbService from '../../core/db.svc';
import Request from '../../core/request';
import { XML_STATS_API } from '../../constants/constants';
import { formatDate } from '../../core/utils';

class EventsService extends DbService{

    areAllEventsCompleted(events) {
        let result = (events.length > 0);
        events.forEach((event) => {
            result = (event.event_status === 'completed');
        });
        return result;
    }

    getEventsFromApi(date) {

        date = formatDate(date);

        let req = new Request({
            method: 'GET',
            host: XML_STATS_API.host,
            endpoint: XML_STATS_API.endpoints.events,
            headers: XML_STATS_API.headers,
            urlParams: ['nba'],
            query: { date }
        });

        let successHandler = (data) => ({
            date,
            data: data.res.body
        });

        return req.send(null, successHandler);

    }

    eventIdsForDate(date) {

        return this.getFromDb(this.key(date))
            .then((result) => {
                let events = result.event;
                return events.map((event) => event.event_id);
            })
            .catch((err) => {
                return err;
            });
    }

    key(date) {
        date = formatDate(date);
        return 'events_' + date;
    }

}

let _EventsService = new EventsService();
export default _EventsService;