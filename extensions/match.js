'use strict';

module.exports = function(nodecg) {
	const matchRep = nodecg.Replicant('current-match', {
		defaultValue: false,
		persistent: true
	});

	nodecg.listenFor('saveMatch', function(data) {
		let formatted = {
			'teamOneName': data.teamOneName,
			'teamTwoName': data.teamTwoName,
			'teamOneScore': data.teamOneScore,
			'teamTwoScore': data.teamTwoScore,
			'casterOne': data.casterOne,
			'casterTwo': data.casterTwo
		}

		matchRep.value = formatted;
	});
};
