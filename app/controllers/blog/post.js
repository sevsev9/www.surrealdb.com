import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { cache } from '@ascua/decorators';

const slug = function(text) {
	return String(text).replace(/[\s.]/gi, '-').replace(/[^a-zA-Z0-9_-]+/g, '').replace(/--/, '-').toLowerCase();
}

export default class extends Controller {

	@cache get headings() {
		return marked.lexer(this.html).filter(section => {
			return section.type === 'heading' && section.depth === 2;
		}).map(heading => {
			return {
				text: heading.text,
				id: slug(heading.text),
				link: '#' + slug(heading.text),
			};
		});
	}

	@cache get index() {
		return this.posts.findIndex(post => post.id === this.model.id);
	}

	@cache get prev() {
		return this.posts[this.index+1] || null;
	}

	@cache get next() {
		return this.posts[this.index-1] || null;
	}

	@cache get html() {
		return this.model.html || '';
	}

}
