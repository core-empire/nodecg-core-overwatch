'use strict';

const casters = require('../data/casters.json');

module.exports = function (nodecg) {
	const castersRep = nodecg.Replicant('casters', { defaultValue: casters, persistent: false });
	const casterNamesRep = nodecg.Replicant('casters:names', { defaultValue: [], persistent: false });
	const castersSelectedRep = nodecg.Replicant('casters:selected', { defaultValue: [], persistent: false });

	function fetchCaster(term) {
		for (var caster in casters) {
			if (casters.hasOwnProperty(caster)) {
				if(casters[caster].name == term) {
					return casters[caster];
				}
			}
		}
	}

	function buildNames() {
		let casterData = castersRep.value;
		let formattedCasters = [];

		for (var caster in casterData) {
			if(casterData.hasOwnProperty(caster)) {
				formattedCasters.push(casterData[caster].name);
			}
		}

		casterNamesRep.value = formattedCasters;
	}

	nodecg.listenFor('setCasters', function(data) {
		let selectedCasters = [];

		for (var i = 0; i < data.length; i++) {
			selectedCasters.push(fetchCaster(data[i]));
		}

		castersSelectedRep.value = selectedCasters;
	});
	
	buildNames();
};