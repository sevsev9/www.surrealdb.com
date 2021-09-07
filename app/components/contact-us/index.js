import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { drop } from '@ascua/tasks';

export default class extends Component {

	@tracked name;
	@tracked email;
	@tracked phone;
	@tracked message;
	@tracked complete;

	@drop * submit(event) {

		event.preventDefault();

		event.stopPropagation();

		if (!this.name) throw "Please provide a name";

		if (!this.email) throw "Please provide an email";

		if (!this.message) throw "Please provide a message";

		yield fetch('https://contact.abcum.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				Name: this.name,
				Email: this.email,
				Phone: this.phone,
				Message: this.message,
			})
		});

		this.name = null;
		this.email = null;
		this.phone = null;
		this.message = null;
		this.complete = true;

	}

}
