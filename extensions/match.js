'use strict';

const teamNames = require('../data/teams.json');

module.exports = function(nodecg) {
	const teamNamesRep = nodecg.Replicant('teams:names', {
		defaultValue: teamNames.teams,
		persistent: true
	});

	const teamsSelectedRep = nodecg.Replicant('teams:selected', {
		defaultValue: false,
		persistent: true
	});

	nodecg.listenFor('saveMatch', function(data) {
		teamsSelectedRep.value = {
			"teamOne": {
				"name": data.teamOneName,
				"score": data.teamOneScore
			},
			"teamTwo": {
				"name": data.teamTwoName,
				"score": data.teamTwoScore
			}
		}
	});
};
