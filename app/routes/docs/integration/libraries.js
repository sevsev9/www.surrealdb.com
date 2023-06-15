import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {
	@inject fastboot;

	redirect() {
		const platform = arguments[1].to.params.platform;
		const location = `/docs/integration/sdks${
			platform ? `/${platform}` : ''
		}`;

		if (this.fastboot.isFastBoot) {
			this.fastboot.response.headers.set('location', location);
			this.fastboot.response.statusCode = 301;
		} else {
			window.location.replace(location);
		}
	}
}
