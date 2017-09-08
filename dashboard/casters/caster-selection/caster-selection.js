(function() {
	'use strict';

	Polymer({
		'is': 'caster-selection',

		submitCasters: function() {
			let casterNames = [this.$.casterOne.value, this.$.casterTwo.value];

			// Set our selected casters
			nodecg.sendMessage('setCasters', casterNames);

			// Tell our Discord bot to begin listening to casters within Discord
			nodecg.sendMessage('castersReady');
		}
	});
})();
