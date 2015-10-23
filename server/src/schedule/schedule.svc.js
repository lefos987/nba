import q from 'q';
import DbService from '../core/services/db.svc';
import Game from '../core/models/game';
import GameRatingService from '../game-rating/game-rating.svc';

class ScheduleService extends DbService {

    constructSchedule(date) {

        return this.getFromDb('events_' + date)

            .then((data) => {

                let events = data.event;

                return events.map((event) => {

                    let game = new Game(event);

                    GameRatingService.rateGame(game, 0);

                    return {
                        id: game.id,
                        homeTeam: game.homeTeamName,
                        awayTeam: game.awayTeamName,
                        rating: game.rating
                    }
                });
            });
    }

}

let _ScheduleService = new ScheduleService();
export default _ScheduleService;