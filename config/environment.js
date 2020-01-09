'use strict';

module.exports = function(environment) {

	var ENV = {

		environment,
		rootURL: '/',
		locationType: 'auto',
		modulePrefix: 'surreal',

		// Metric configuration details for
		// settingup Google analytics in the
		// production environment.

		metrics: [
			{
				name: 'google-analytics',
				environments: ['production'],
				config: {
					id: '##########'
				}
			},
		],

		// Set ember flags / options for the
		// ember runtime application
		// environment

		APP: {
			BINDINGS: false,
			LOG_RESOLVER: false,
			LOG_TRANSITIONS: false,
			LOG_VIEW_LOOKUPS: false,
			LOG_ACTIVE_GENERATION: false,
			LOG_TRANSITIONS_INTERNAL: false,
			RAISE_ON_DEPRECATION: false,
			LOG_STACKTRACE_ON_DEPRECATION: false,
		},

		// Set experimental ember features
		// to be used when using ember
		// canary builds

		EmberENV: {
			EXTEND_PROTOTYPES: {
				Date: false,
			},
			FEATURES: {
				EMBER_METAL_TRACKED_PROPERTIES: true,
			},
		},

	};

	if (environment === 'test') {
		ENV.locationType = 'none';
		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'development') {
		// Ignore
	}

	if (environment === 'production') {
		// Ignore
	}

	return ENV;

};
