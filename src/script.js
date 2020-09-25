const inputText = document.getElementById('input-text');
const form = document.getElementById('form');
const errorMessageElement = document.getElementById('error-message');
const content = document.getElementById('content')

form.addEventListener('submit', event => {

	event.preventDefault();

	let errorMessage;
	errorMessage = [];
	const iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";

	if (inputText.value === '' || inputText.value == null) {
		errorMessage.push('Please enter your text.')
	} else {
		let contentText = document.createElement("p");
		contentText.className = 'content__text';
		contentText.innerText = inputText.value;
		content.append(contentText);

		if (inputText.value.length > 3) {
			contentText.style.backgroundColor = 'green';
		}

		for (let inputTextElement of inputText.value) {
			if (iChars.indexOf(inputTextElement) !== -1) {
				contentText.style.backgroundColor = 'red';
			}
		}
	}

	errorMessage.length > 0 ? errorMessageElement.innerText = errorMessage : errorMessageElement.innerText = '';

	form.reset();
});