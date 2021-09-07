import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@tracked special;

	@action created(element) {
		this.element = element;
	}

	@action scrolled(event) {
		this.special = (document.documentElement.scrollTop > 100);
	}

}
