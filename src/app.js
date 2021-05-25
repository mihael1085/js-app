import './styles.css'
import { Question } from './question'
import {createModal, isValid} from './utils'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const modalBtn = document.getElementById('modal-btn')
const submitBtn = form.querySelector('#submit')



window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitHandlerBtn)
input.addEventListener('input', () => {
	submitBtn.disabled = !isValid(input.value)
})

modalBtn.addEventListener('click', () => {
	openModal()
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

function openModal() {
	createModal('Авторизация', '<h1>Test</h1>')
}