(function() {
	'use strict';

	const match = nodecg.Replicant('current-match');

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

			match.on('change', newVal => {
				that.set('teamOneName', newVal.teamOneName);
				that.set('teamOneScore', newVal.teamOneScore);
				that.set('teamTwoName', newVal.teamTwoName);
				that.set('teamTwoScore', newVal.teamTwoScore);
			});
		}
	});
})();