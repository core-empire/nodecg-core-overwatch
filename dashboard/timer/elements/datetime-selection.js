(function() {
  'use strict';

  Polymer({
    is: 'datetime-selection',

    ready: function() {

    },

    setCountdown: function() {
      //let time = this.$.streamStartTime.date.value + " " + this.$.streamStartTime.time.value;

      nodecg.sendMessage('setCountdown', "2017-09-09 02:00:00.000");
    }
  });
})();
