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

        let homePointsPerPeriod = this._teamScorePerPeriod(game.homeTeamPeriodScores);
        let awayPointsPerPeriod = this._teamScorePerPeriod(game.awayTeamPeriodScores);
        let scoresDiff = [];
        
        if (homePointsPerPeriod.length === awayPointsPerPeriod.length) {

            for (var p=0; p < homePointsPerPeriod.length; p ++) {

                scoresDiff[p] = Math.abs(homePointsPerPeriod[p] - awayPointsPerPeriod[p]);

                let period = p + 1;

                periodScoresRatingCategories.forEach((category) => {
                    if (category.condition(period, scoresDiff[p])) {
                        game.rating += category.rating;
                    }
                });

            }
        }
    }

    _teamScorePerPeriod(pointsPerPeriod) {

        var scorePerPeriod = [];

        for (let i=0; i < pointsPerPeriod.length; i++) {

            let s = 0;

            for (let j=0; j < scorePerPeriod.length; j++) {
                s += pointsPerPeriod[j];
            }
            scorePerPeriod[i] = s + pointsPerPeriod[i];
        }
        return scorePerPeriod;
    }
}

let _GameRatingService = new GameRatingService();
export default _GameRatingService;