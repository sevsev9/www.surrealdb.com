import EmberRouter from '@ember/routing/router';
import config from 'surreal/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function() {

	this.route('features');
	this.route('install');
	this.route('roadmap');
	this.route('blog');
	this.route('docs');

	this.route('showcase', function() {
		this.route('modelling');
		this.route('surrealql');
		this.route('analytics');
		this.route('permissions');
	});

});
