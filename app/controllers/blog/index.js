import Controller from '@ember/controller';
import { cache } from '@ascua/decorators';
import { inject } from '@ember/service';

export default class extends Controller {

	@inject storage;

	@cache get admin() {
		return this.storage.get('admin');
	}

	@cache get posts() {
		return []
			.concat(this.model)
			.filter(Boolean)
			.filter(v => this.admin ? true : v.visible)
			.sort( (a, b) => dayjs(b.time) - dayjs(a.time))
		;
	}

}
