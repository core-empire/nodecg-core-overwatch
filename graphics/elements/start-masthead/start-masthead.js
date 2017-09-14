(function() {
  'use strict';

  const eventName = nodecg.Replicant('events:selected');

  Polymer({
    is: 'start-masthead',

    properties: {
      eventName: {
        type: String,
        value: ''
      }
    },

    ready: function() {
      eventName.on('change', newVal => {
        this.set('eventName', newVal);
      });
    }
  });
})();
