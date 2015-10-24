import {
    finalScoreRatingCategories,
    overtimeRating,
    periodScoresRatingCategories
} from './game-rating.conf';

class GameRatingService {

    rateGame(game) {
        this._rateFinalScore(game);
        this._rateOvertime(game);
        this._ratePeriodScores(game);
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
        let hasOvertime = game.hasOvertime;
        game.rating = (hasOvertime) ? game.rating + overtimeRating.rating : game.rating;
    }

    _ratePeriodScores(game) {
        let homeScoresPerPeriod = game.homeTeamPeriodScores;
        let awayScoresPerPeriod = game.awayTeamPeriodScores;
        let scoresDiff = [];
        
        if (homeScoresPerPeriod.length === awayScoresPerPeriod.length) {

            for (var p=0; p < homeScoresPerPeriod.length; p ++) {

                scoresDiff[p] = Math.abs(homeScoresPerPeriod[p] - awayScoresPerPeriod[p]);

                let period = p + 1;

                periodScoresRatingCategories.forEach((category) => {
                    if (category.condition(period, scoresDiff[p])) {
                        game.rating += category.rating;
                    }
                });

            }
        }

    }
}

let _GameRatingService = new GameRatingService();
export default _GameRatingService;