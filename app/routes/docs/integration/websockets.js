import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {
	@inject fastboot;

	redirect() {
		if (this.fastboot.isFastBoot) {
			this.fastboot.response.headers.set(
				'location',
				'/docs/integration/websocket/text'
			);
			this.fastboot.response.statusCode = 301;
		} else {
			window.location.replace('/docs/integration/websocket/text');
		}
	}
}
