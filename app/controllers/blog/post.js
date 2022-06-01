import Controller from '@ember/controller';
import { inject } from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { cache } from '@ascua/decorators';

const slug = function(text) {
	return String(text).replace(/[\s.]/gi, '-').replace(/[^a-zA-Z0-9_-]+/g, '').replace(/--/, '-').toLowerCase();
}

export default class extends Controller {

	@inject('blog.index') blog;

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
		return this.blog.posts.findIndex(post => post.id === this.model.id);
	}

	@cache get prev() {
		return this.blog.posts[this.index+1] || null;
	}

	@cache get next() {
		return this.blog.posts[this.index-1] || null;
	}

	@cache get html() {
		return this.model.html || '';
	}

}
