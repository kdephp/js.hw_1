window.addEventListener('load', function(){

	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let result = document.querySelector('.result');
	let operation = document.querySelector('select');

	btn.addEventListener('click', function(){
	if (operation.value === 'add') {

			let sum = parseInt(inp1.value) + parseInt(inp2.value);
			result.innerHTML = sum;

	}
	else if (operation.value === 'subtract') {

			let sub = parseInt(inp1.value) - parseInt(inp2.value);
			result.innerHTML = sub;

	}
	else if (operation.value === 'multiply') {

			let mult = parseInt(inp1.value) * parseInt(inp2.value);
			result.innerHTML = mult;

	}
	else {

			let div = parseInt(inp1.value) / parseInt(inp2.value);
			result.innerHTML = div;

	}
	});
	//result
	console.log(operation.value)




});

