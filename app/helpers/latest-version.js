import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject version;

	compute() {
		return this.version.latest;
	}

}
