(function() {
	'use strict';

	const casters = nodecg.Replicant('casters:names');

	Polymer({
		'is': 'caster-selection',

		properties: {
			casterNames: {
				type: Array,
				value: []
			}
		},

		ready: function() {
			casters.on('change', newVal => {
				this.set('casterNames', newVal);
			});
		},

		submitCasters: function() {
			let casterNames = [this.$.casterOne.value, this.$.casterTwo.value];

			// Set our selected casters
			nodecg.sendMessage('setCasters', casterNames);

			// Tell our Discord bot to begin listening to casters within Discord
			nodecg.sendMessage('castersReady');
		}
	});
})();