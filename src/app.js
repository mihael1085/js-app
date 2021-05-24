import './styles.css'
import { Question } from './question'
import {isValid} from './utils'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')

form.addEventListener('submit', submitHandlerBtn)
input.addEventListener('input', () => {
	submitBtn.disabled = !isValid(input.value)
})

function submitHandlerBtn(event) {
	event.preventDefault()

	console.log(input.value)

	if(isValid(input.value)){
		const question = {
			text: input.value.trim(),
			date: new Date().toJSON()
		}

		submitBtn.disabled = true

		//Async request to server
		Question.create(question).then(() => {
			input.value = ''
			input.classList = ''
			submitBtn.disabled = false
		})

		console.log('question :', question)


	}


}

console.log('app working....')