'use strict';

const casters = require('../data/casters.json');

module.exports = function (nodecg) {
	const castersRep = nodecg.Replicant('casters', { defaultValue: { "data": casters, "names": [], "selected": [] }, persistent: false });

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
		let casterData = castersRep.value.data;
		let formattedCasters = [];

		for (var caster in casterData) {
			if(casterData.hasOwnProperty(caster)) {
				formattedCasters.push(casterData[caster].name);
			}
		}

		castersRep.value.names = formattedCasters;
	}

	nodecg.listenFor('setCasters', function(data) {
		let selectedCasters = [];

		for (var i = 0; i < data.length; i++) {
			selectedCasters.push(fetchCaster(data[i]));
		}

		castersRep.value.selected = selectedCasters;
	});

	buildNames();
};