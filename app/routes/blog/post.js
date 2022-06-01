import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject store;

	model(params) {
		return this.store.select('post', params.post_id);
	}

}
