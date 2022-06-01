import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject store;

	model(params) {
		return this.store.select('post', params.post_id);
	}

	setupController(controller, model) {

		super.setupController(...arguments);

		controller.posts = this.modelFor('blog.index').sort( (a, b) => {
			return a.time < b.time;
		});

	}

}
