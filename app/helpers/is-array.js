import { helper } from '@ember/component/helper';

export function isArray([value]) {
	return Array.isArray(value);
}

export default helper(isArray);
