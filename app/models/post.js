import Model from '@ascua/surreal/model';
import { array } from '@ascua/surreal/field';
import { boolean } from '@ascua/surreal/field';
import { datetime } from '@ascua/surreal/field';
import { string } from '@ascua/surreal/field';
import { cache } from '@ascua/decorators';

export default class Post extends Model {

	// ------------------------------
	// Persistent properties
	// ------------------------------

	@string html;

	@string image;

	@string label;

	@string slug;

	@array('string') tags;

	@string text;

	@datetime time;

	@string title;

	@boolean visible;

	// ------------------------------
	// Computed properties
	// ------------------------------

	@cache get url() {
		return `https://surrealdb.com/blog/${this.slug}`;
	}

}
