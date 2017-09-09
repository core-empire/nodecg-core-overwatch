'use strict';

const casters = require('../data/casters.json');
const clone = require('clone');

module.exports = function(nodecg) {
	const castersRep = nodecg.Replicant('casters', {
		defaultValue: casters,
		persistent: false
	});
	const casterNamesRep = nodecg.Replicant('casters:names', {
		defaultValue: [],
		persistent: false
	});
	const castersSelectedRep = nodecg.Replicant('casters:selected', {
		defaultValue: [],
		persistent: false
	});

	function fetchCaster(term) {
		let casterData = clone(casters);

		for (var caster in casterData) {
			if (casterData.hasOwnProperty(caster)) {
				if (casterData[caster].name == term) {
					return casterData[caster];
				}
			}
		}
	}

	function buildNames() {
		let casterData = clone(castersRep.value);
		let formattedCasters = [];

		for (var caster in casterData) {
			if (casterData.hasOwnProperty(caster)) {
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
