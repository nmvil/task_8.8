const input = document.querySelector('#inputText');
const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('#submitButton');

input.addEventListener('input', function(event) {
	duplicateField.textContent = event.target.value;
})

button.addEventListener('click', function(event) {
	event.preventDefault();
	console.log(input.value);
	input.value = '';
	duplicateField.textContent = ''; 
})