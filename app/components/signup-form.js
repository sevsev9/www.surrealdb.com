import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@tracked completed = false;

	@tracked error = false;

	@tracked email = '';

	@action async submit(event) {

		event.stopPropagation();

		event.preventDefault();

		if (this.email == '') {
			this.error = true;
			return;
		}

		await fetch('https://europe-west2-surreal-io.cloudfunctions.net/contact-surrealdb-com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.email,
			}),
		});

		this.completed = true;

		this.error = false;

		this.email = '';

	}

}
