import Component from '@glimmer/component';
import { cache } from '@ascua/decorators';

const slug = function(text) {
	return String(text).replace(/[\s.]/gi, '-').replace(/[^a-zA-Z0-9_-]+/g, '').replace(/--/, '-').toLowerCase();
}

export default class extends Component {

	@cache get headings() {

		let html = this.args.model.html || '';

		return marked.lexer(html).filter(section => {
			return section.type === 'heading' && section.depth === 2;
		}).map(heading => {
			return { text: heading.text, link: '#' + slug(heading.text) };
		});

	}

}
