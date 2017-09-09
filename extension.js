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

	try {
		require('./extensions/casters')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load "casters" lib:', e.stack);
		process.exit(1);
	}

	try {
		require('./extensions/discord')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load "discord" lib:', e.stack);
		process.exit(1);
	}

	try {
		require('./extensions/countdown')(nodecg);
	} catch (e) {
			nodecg.log.error('Failed to load "countdown" lib', e.stack);
			process.exit(1);
	}
}
