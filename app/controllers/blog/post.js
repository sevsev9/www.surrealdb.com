import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { cache } from '@ascua/decorators';

export default class extends Controller {

	@cache get index() {
		return this.posts.findIndex(post => post.id === this.model.id);
	}

	@cache get prev() {
		return this.posts[this.index+1] || null;
	}

	@cache get next() {
		return this.posts[this.index-1] || null;
	}

}
