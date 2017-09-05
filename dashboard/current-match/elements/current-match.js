(function() {
	'use strict';

	const match = nodecg.Replicant('current-match');

	Polymer({
		is: 'current-match',

		saveMatch: function() {
			let data = {
				teamOneName: this.$.teamOneName.value,
				teamOneScore: this.$.teamOneScore.value,
				teamTwoName: this.$.teamTwoName.value,
				teamTwoScore: this.$.teamTwoScore.value,
				casterOne: this.$.casterOne.value,
				casterTwo: this.$.casterTwo.value
			}

			nodecg.sendMessage('saveMatch', data);
		}
	});
})();