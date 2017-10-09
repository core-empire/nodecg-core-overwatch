(function() {
  'use strict';

  const eventName = nodecg.Replicant('events:selected');
  /**
	 * @customElement
	 * @polymer
	 */
	class coreMasthead extends Polymer.Element {
    static get is() {
      return 'core-masthead';
    }

    static get properties() {
      return {
        eventName: {
          type: String,
          value: ''
        },
        loading: Boolean,
        text: String
      };
    }

    ready() {
      super.ready();
      eventName.on('change', newVal => {
        this.set('eventName', newVal);
      });
    }
  }

  customElements.define(coreMasthead.is, coreMasthead);
})();
