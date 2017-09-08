(function() {
	'use strict';

	const casters = nodecg.Replicant('casters:selected');

	/**
	 * @customElement
	 * @polymer
	 * @appliesMixin Polymer.MutableData
	 */
	class CasterCards extends Polymer.MutableData(Polymer.Element) {
		static get is() {
			return 'caster-cards';
		}

		static get properties() {
			return {
				casters: {
					type: Array,
					value: []
				}
			};
		}

		ready() {
			super.ready();
			casters.on('change', newVal => {
				this.set('casters', newVal);
			});
		}
	}

	customElements.define(CasterCards.is, CasterCards);
})();
