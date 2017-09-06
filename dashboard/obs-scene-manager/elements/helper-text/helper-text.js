(function() {
	'use strict';

	const obsSocket = nodecg.Replicant('obs:websocket');

	Polymer({
		is: 'obs-scene-helper-text',

		properties: {
			obsConnected: {
				type: Boolean,
				value: false
			}
		},

		ready: function() {
			let that = this;

			obsSocket.on('change', newVal => {
				if(newVal.status == "connected") {
					that.set('obsConnected', true);
				} else {
					that.set('obsConnected', false);
				}
			});
		}
	});
})();