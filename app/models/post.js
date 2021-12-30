import Model from '@ascua/surreal/model';
import { array } from '@ascua/surreal/field';
import { datetime } from '@ascua/surreal/field';
import { string } from '@ascua/surreal/field';

export default class Post extends Model {

	// ------------------------------
	// Persistent properties
	// ------------------------------

	@string image;

	@string title;

	@string label;

	@string text;

	@string html;

	@datetime time;

	@array('string') tags;

}
