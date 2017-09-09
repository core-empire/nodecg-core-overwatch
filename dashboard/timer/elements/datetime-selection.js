(function() {
  'use strict';

  const countdown = nodecg.Replicant('countdown');

  Polymer({
    is: 'datetime-selection',

    properties: {
      countingDown: {
        type: Boolean,
        value: false
      },
      countDownValue: {
        type: String,
        value: ''
      }
    },

    ready: function() {
      countdown.on('change', newVal => {
        this.set('countDownValue', newVal);
      });
    },

    setCountdown: function() {
      let time = this.$.streamStartTime.date + " " + this.$.streamStartTime.time;

      this.set('countingDown', true);
      nodecg.sendMessage('setCountdown', time);
    }
  });
})();
