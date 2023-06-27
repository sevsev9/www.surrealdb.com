import { helper } from '@ember/component/helper';

export function image([id, type]) {
	switch (type) {
		case 'main':
			return `https://cdn.brandsafe.io/w(1720)q(90)sharpen(1,0.4,0.8)/${id}.auto`;
		case 'post':
			return `https://cdn.brandsafe.io/w(1600)q(90)sharpen(1,0.4,0.8)/${id}.auto`;
		case 'large':
			return `https://cdn.brandsafe.io/w(1250)q(90)sharpen(1,0.4,0.8)/${id}.auto`;
		case 'small':
			return `https://cdn.brandsafe.io/w(820)q(90)sharpen(1,0.4,0.8)/${id}.auto`;
		default:
			return `https://cdn.brandsafe.io/w(1600)q(90)sharpen(1,0.4,0.8)/${id}.auto`;
	}
}

export default helper(image);
