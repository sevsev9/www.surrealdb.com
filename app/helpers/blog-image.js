import { helper } from '@ember/component/helper';

export function image([id]) {
	if (localStorage.dev) {
		return `https://cdn.brandsafe.io/w(1800)q(95)sharpen(1,0.4,0.8)cache(${new Date().getTime()})/${id}.jpg`;
	} else {
		return `https://cdn.brandsafe.io/w(1800)q(95)sharpen(1,0.4,0.8)/${id}.jpg`;
	}
}

export default helper(image);
