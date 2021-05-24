export class Question {
	static create(question) {
		return fetch('https://js-app-13bf8-default-rtdb.firebaseio.com/questions.json', {
			method: 'POST',
			body: JSON.stringify(question),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(response => {
				console.log('res : ', response)
			})
	}
}

