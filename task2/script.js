const consoleLog = document.querySelector('#consoleLog');
const alertFunction = document.querySelector('#alert');
const promptFunction = document.querySelector('#prompt');


consoleLog.addEventListener ('click', () => {
	alert('Команда console.log() выводит сообщение в консоль')
})

alertFunction.addEventListener ('click', () => {
	alert('Команда alert() показывает вот такое окно')
})

promptFunction.addEventListener ('click', () => {
	prompt('Команда promt() просит ввести текст')
})