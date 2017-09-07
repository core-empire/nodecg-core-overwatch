(function() {
	'use strict';

	const casters = nodecg.Replicant('casters');

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
				this.set('casterNames', newVal.names);
			});
		},

		submitCasters: function() {
			let casterNames = [this.$.casterOne.value, this.$.casterTwo.value];

			nodecg.sendMessage('setCasters', casterNames);
		}
	});
})();