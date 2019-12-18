import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Controller {

	@tracked email;

	@action async submit() {

		if (this.email) {

			await fetch('https://europe-west2-surreal-io.cloudfunctions.net/request-surrealdb-com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: this.email,
				}),
			});

		}

		this.email = null;

	}

}
