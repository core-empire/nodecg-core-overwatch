(function() {
	'use strict';
	/**
	 * @customElement
	 * @polymer
	 * @appliesMixin Polymer.MutableData
	 */
	class LoadingIndicator extends Polymer.Element {
		static get is() {
			return 'loading-indicator';
		}

		static get properties() {
			return {
				text: String
			};
		}
	}

	customElements.define(LoadingIndicator.is, LoadingIndicator);
})();
