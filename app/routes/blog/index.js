import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject surreal;

	model() {
		return this.modelFor('blog');
	}

}
