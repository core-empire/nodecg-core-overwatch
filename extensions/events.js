'use strict';

const eventNames = require('../data/event-names.json');

module.exports = function(nodecg) {
  const eventNamesRep = nodecg.Replicant('events:names', {
    defaultValue: eventNames.CORE,
    persistent: false
  });

  const eventSelectedRep = nodecg.Replicant('events:selected', {
    defaultValue: "League",
    persistent: false
  });

  nodecg.listenFor('setEvent', function(event) {
    eventSelectedRep.value = event;
  });
};
