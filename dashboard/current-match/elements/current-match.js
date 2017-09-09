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
				teamTwoScore: this.$.teamTwoScore.value
			}

			nodecg.sendMessage('saveMatch', data);
		},

		switchSides: function() {
			let teamOneName = this.$.teamOneName.value;
			let teamOneScore = this.$.teamOneScore.value;
			let teamTwoName = this.$.teamTwoName.value;
			let teamTwoScore = this.$.teamTwoScore.value;

			this.$.teamOneName.value = teamTwoName;
			this.$.teamOneScore.value = teamTwoScore;
			this.$.teamTwoName.value = teamOneName;
			this.$.teamTwoScore.value = teamOneScore;

			this.saveMatch();
		}
	});
})();
