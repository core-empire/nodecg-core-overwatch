(function() {
	'use strict';

	const teams = nodecg.Replicant('teams:selected');

	Polymer({
		is: 'gfx-match-score',

		properties: {
			teamOneName: String,
			teamOneScore: String,
			teamTwoName: String,
			teamTwoScore: String
		},

		ready: function() {
			let that = this;

			teams.on('change', newVal => {
				that.set('teamOneName', newVal.teamOne.name);
				that.set('teamOneScore', newVal.teamOne.score);
				that.set('teamTwoName', newVal.teamTwo.name);
				that.set('teamTwoScore', newVal.teamTwo.score);
			});
		}
	});
})();
