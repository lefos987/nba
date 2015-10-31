import DbService from '../../core/services/db.svc';
import Request from '../../core/models/request';
import { XML_STATS_API } from '../../constants/constants';
import { formatDate } from '../../core/services/utils.svc';

class EventsService extends DbService{

    areAllEventsCompleted(events) {

        let result = (events.length > 0);
        events.forEach((event) => {
            result = (event.event_status === 'completed');
        });
        return result;
    }

    getEventsFromApi(date) {

        let sport = 'nba';

        date = formatDate(date);

        let req = new Request({
            method: 'GET',
            host: XML_STATS_API.host,
            endpoint: XML_STATS_API.endpoints.events,
            headers: XML_STATS_API.headers,
            query: { date, sport },
            urlParams: []
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