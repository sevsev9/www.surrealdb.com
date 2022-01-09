import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class extends Service {

	@tracked points = [];

	add(name) {
		this.points.pushObject(name);
	}

	del(name) {
		this.points.removeObject(name);
	}

}
