(function() {
	'use strict';

	const obsSocket = nodecg.Replicant('obs:websocket');

	Polymer({
		is: 'obs-scene-selector',
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
