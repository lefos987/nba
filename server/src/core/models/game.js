import { TEAM_LOGOS } from '../../constants/constants';

const REGULAR_TIME_PERIODS = 4;

class Game {

    constructor(params = {}) {

        this.id = params.event_id || null;

        this.homeTeam = {
            id: params.home_team.team_id || null,
            name: params.home_team.full_name || null,
            points: params.home_points_scored,
            periods: params.home_period_scores
        };

        this.awayTeam = {
            id: params.away_team.team_id || null,
            name: params.away_team.full_name || null,
            points: params.away_points_scored,
            periods: params.away_period_scores
        };

        this.rating = params.rating || 0;
    }

    _findTeamLogo(teamId) {
        return TEAM_LOGOS[teamId];
    }

    get homeTeamName() { return this.homeTeam.name; }

    get homeTeamLogo() { return this._findTeamLogo(this.homeTeam.id); }

    get homeTeamPoints() { return this.homeTeam.points; }

    get homeTeamPeriodScores() { return this.homeTeam.periods; }

    get awayTeamName() { return this.awayTeam.name; }

    get awayTeamLogo() { return this._findTeamLogo(this.awayTeam.id); }

    get awayTeamPoints() { return this.awayTeam.points; }

    get awayTeamPeriodScores() { return this.awayTeam.periods }

    get hasOvertime() { return this.homeTeam.periods.length > REGULAR_TIME_PERIODS; }
}

export default Game;