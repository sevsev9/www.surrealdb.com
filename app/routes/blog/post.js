import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject surreal;

	model(params) {
		return this.surreal.select('post', params.post_id);
	}

	setupController(controller, model) {

		super.setupController(...arguments);

		controller.posts = this.modelFor('blog').sort( (a, b) => {
			return a.time < b.time;
		});

	}

}
