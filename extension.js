'use strict';

module.exports = function (nodecg) {
	try {
		require('./extensions/obs')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load "obs" lib:', e.stack);
		process.exit(1);
	}

	try {
		require('./extensions/match')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load "match" lib:', e.stack);
		process.exit(1);
	}
}