import { helper } from '@ember/component/helper';

export function image([id, type]) {
	switch (type) {
	case 'main':
		return `https://cdn.brandsafe.io/w(1800)q(95)sharpen(1,0.4,0.8)/${id}.jpg`;
	default:
		return `https://cdn.brandsafe.io/w(1600)q(95)sharpen(1,0.4,0.8)/${id}.jpg`;
	}
}

export default helper(image);
