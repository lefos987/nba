import DbService from '../../core/db.svc';
import Request from '../../core/request';
import { XML_STATS_API } from '../../constants/constants';
import { formatDate } from '../../core/utils';

class EventsService extends DbService{

    getEventsFromApi(date) {

        date = formatDate(date);

        let req = new Request({
            host: XML_STATS_API.host,
            method: XML_STATS_API.endpoints.events,
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
            .then((response) => {
                let events = response.data.event;
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