import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class extends Route {

	@inject router;

	@inject store;

	model() {
		return this.store.select('post');
	}

	@action error(error, transition) {
		return this.router.transitionTo('blog');
	}

}
