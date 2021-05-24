import './styles.css'
import {isValid} from './utils'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')

form.addEventListener('submit', submitHandlerBtn)

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

		console.log('question :', question)

		input.value = ''
		input.classList = ''
		submitBtn.disabled = false
	}


}

console.log('app working....')