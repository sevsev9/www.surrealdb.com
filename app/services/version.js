import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Version extends Service {

	@tracked latest;

	constructor() {

		super(...arguments);

		this.load();

	}

	async load() {

		try {

			let res = await fetch('https://version.surrealdb.com', {
				method: 'GET',
				mode: 'cors',
				credentials: 'omit',
				headers: {
					'Content-Type': 'text/plain'
				},
			});

			let txt = await res.text();

			this.latest = txt;

		} catch(e) {

			// Continue

		}

	}

}
