import q from 'q';
import DbService from '../core/services/db.svc';
import Game from '../core/models/game';
import GameRatingService from '../game-rating/game-rating.svc';

class ScheduleService extends DbService {

    constructSchedule(date) {

        let schedule = null;

        return this.getFromDb('events_' + date)

            .then((data) => {

                if (data && data.event) {

                    let events = data.event;

                    schedule = events.map((event) => {

                        let game = new Game(event);

                        GameRatingService.rateGame(game);

                        return {
                            id: game.id,
                            homeTeam: game.homeTeamName,
                            awayTeam: game.awayTeamName,
                            rating: game.rating
                        }
                    });

                }

                else if (data && data.length === 0) {
                    schedule = [];
                }

                return {
                    schedule
                };

            });
    }

}

let _ScheduleService = new ScheduleService();
export default _ScheduleService;