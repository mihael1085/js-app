export function isValid(value) {
	if(value.length >= 10)
		console.log('valid', value.length)
	return value.length >= 10
}
