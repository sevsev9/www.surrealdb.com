'use strict';

module.exports = function(environment) {

	var ENV = {

		environment,
		rootURL: '/',
		locationType: 'auto',
		modulePrefix: 'surreal',

		fastboot: {
			hostWhitelist: [
				'www.surrealdb.com',
				'surrealdb.com',
				/^localhost:\d+$/,
			],
		},

		// Metric configuration details for
		// using Google analytics in the
		// production environment.

		metrics: [
			{
				name: 'google-analytics',
				environments: ['production'],
				config: {
					id: 'UA-159406644-1',
				}
			},
		],

		// Set the configuration options for
		// the @ascua/webapp addon, so that the
		// favicons are created correctly.

		webapp: {
			background: '#181a1f',
			color: '#aa41fb',
			description: '',
			display: 'standalone',
			enabled: true,
			mask: '#aa41fb',
			name: 'SurrealDB',
			orientation: 'portrait',
			scope: '/',
			short: 'SurrealDB',
			start: '/',
			style: 'default',
		},

		// Set the configuration options for
		// the @ascua/fastboot addon, so that a
		// content-security-policy can be set.

		CSP: {
			report: false,
			policy: {
				'base-uri': ["'self'"],
				'form-action': ["'none'"],
				'default-src': ["'none'"],
				'img-src': ["'self'", 'https://www.google-analytics.com/'],
				'font-src': ["'self'"],
				'style-src': ["'self'"],
				'script-src': ["'self'", 'https://www.google-analytics.com/'],
				'connect-src': ["'self'", 'https://www.google-analytics.com/', 'https://contact.abcum.com'],
				'frame-ancestors': ["'self'"],
				'block-all-mixed-content': null,
				'upgrade-insecure-requests': null,
			},
		},

		// Set ember flags / options for the
		// ember runtime environment config

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

		EmberENV: { FEATURES: { }, EXTEND_PROTOTYPES: { Date: false } },

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
