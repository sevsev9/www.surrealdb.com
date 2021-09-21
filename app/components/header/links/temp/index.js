import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { drop } from '@ascua/tasks';

export default class extends Component {

	@tracked show;

	@tracked done;

	@tracked email;

	@drop * submit(event) {

		event.stopPropagation();

		event.preventDefault();

		if (!this.email) throw "Please provide an email";

		yield fetch('https://contact.abcum.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				Email: this.email,
			}),
		});

		this.email = null;
		this.done = true;

	}

}
