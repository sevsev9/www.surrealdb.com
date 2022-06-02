import EmberRouter from '@ember/routing/router';
import config from 'surreal/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function() {

	this.route('about');
	this.route('discord');
	this.route('docs');
	this.route('features');
	this.route('install');
	this.route('license');
	this.route('media');
	this.route('opensource');
	this.route('roadmap');
	this.route('store');
	this.route('why');

	this.route('blog', function() {
		this.route('post', { path: '/:post_slug' });
	});

	this.route('legal', function() {
		this.route('terms');
		this.route('privacy');
		this.route('cookies');
		this.route('security');
	});

	this.route('usecase', function() {
		this.route('jamstack');
		this.route('serverless');
	});

	this.route('showcase', function() {
		this.route('modelling');
		this.route('surrealql');
		this.route('analytics');
		this.route('collaborate');
		this.route('permissions');
	});

	this.route('404', {
		path: '*:'
	});

});
