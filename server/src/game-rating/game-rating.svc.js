import {
    finalScoreRatingCategories,
    overtimeRating
} from './game-rating.conf';

const GAME_PERIODS = 4;

class GameRatingService {

    rateGame(game) {
        this._rateFinalScore(game);
        this._rateOvertime(game);
    }

    _rateFinalScore(game) {
        let scoreDiff = Math.abs(game.homeTeamPoints - game.awayTeamPoints);
        finalScoreRatingCategories.forEach((category) => {
            if (category.condition(scoreDiff)) {
                game.rating += category.rating;
            }
        });
    }

    _rateOvertime(game) {
        let hasOvertime = game.homeTeamPeriodScores.length > GAME_PERIODS;
        game.rating = (hasOvertime) ? game.rating + overtimeRating.rating : game.rating;
    }

    _ratePeriodScores(game, rating) {

    }
}

let _GameRatingService = new GameRatingService();
export default _GameRatingService;