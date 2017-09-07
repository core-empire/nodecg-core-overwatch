(function() {
	'use strict';

	const casters = nodecg.Replicant('casters:selected');

	Polymer({
		is: 'caster-cards',

		properties: {
			casters: {
				type: Array,
				value: []
			}
		},

		ready: function() {
			casters.on('change', newVal => {
				alert('change');
				this.set('casters', newVal);
			});
		}
	});
})();