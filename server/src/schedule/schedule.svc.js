import q from 'q';
import DbService from '../core/db.svc';

class ScheduleService extends DbService {

    constructSchedule(date) {

        return this.getFromDb('events_' + date)
            .then((data) => {
                let events = data.event;
                return events.map((event) => {
                    let id       = event.event_id;
                    let homeTeam = event.home_team.first_name + ' ' + event.home_team.last_name;
                    let awayTeam = event.away_team.first_name + ' ' + event.away_team.last_name;
                    return {
                        id,
                        homeTeam,
                        awayTeam
                    }
                });
            });
    }

}

let _ScheduleService = new ScheduleService();
export default _ScheduleService;