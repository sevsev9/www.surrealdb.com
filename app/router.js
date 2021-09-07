import EmberRouter from '@ember/routing/router';
import config from 'surreal/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function() {

	this.route('product');
	this.route('customers');
	this.route('who');
	this.route('agencies');
	this.route('commercial');
	this.route('memberorganisations');
	this.route('contact');
	this.route('pricing');

});
