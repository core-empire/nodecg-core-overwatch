(function() {
	'use strict';

	const obsSocket = nodecg.Replicant('obs:websocket');
	const obsScenes = nodecg.Replicant('obs:sceneList');

	Polymer({
		is: 'obs-scene-selector',

		properties: {
			scenes: {
				type: Array,
				value: []
			}
		},

		ready: function() {
			let that = this;

			obsScenes.on('change', newVal => {
				this.set('scenes', newVal);
			});
		},

		switchScene: function() {
			let selectedScene = this.$.sceneList.value;
			
			nodecg.sendMessage('obs:previewScene', selectedScene).then(() => {
				console.log('successfully previewed ' + selectedScene);
			}).catch(err => {
				console.error('failed to preview ' + selectedScene, err);
			});

			nodecg.sendMessage('obs:transition', '').then(() => {
				console.log('successfully started transition');
			}).catch(err => {
				console.error('failed to start transition', err);
			});
		}
	});
})();