import { helper } from '@ember/component/helper';

export function image([id]) {
	return `https://cdn.brandsafe.io/w(1800)/${id}.png`;
}

export default helper(image);
