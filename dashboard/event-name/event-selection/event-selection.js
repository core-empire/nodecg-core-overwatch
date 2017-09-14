(function() {
  'use strict';

  Polymer({
    'is': 'event-selection',

    setEvent: function() {
      let event = this.$.eventName.value;

      nodecg.sendMessage('setEvent', event);
    }
  });
})();
