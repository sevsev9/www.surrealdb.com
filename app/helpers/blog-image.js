import { helper } from '@ember/component/helper';

export function image([id]) {
	return `https://cdn.brandsafe.io/w(1800)f(progressive)q(100)sharpen(1,0.4,0.8)/${id}.auto`;
}

export default helper(image);
