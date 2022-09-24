window.addEventListener('load', function(){

	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let result = document.querySelector('.result');
	let operation = document.querySelector('select');
	

	btn.addEventListener('click', function(){
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		let oper = operation.value;

	if (oper === 'add') {

			let sum = num1 + num2;
			result.innerHTML = sum;

	}
	else if (oper === 'subtract') {

			let sub = num1 - num2;
			result.innerHTML = sub;

	}
	else if (operation.value === 'multiply') {

			let mult = num1 * num2;
			result.innerHTML = mult;

	}
	else {

			let div = num1 / num2;
			result.innerHTML = div;

	}



	btn.disabled = true;


	
	inp1.addEventListener("change", (event) => {

		btn.disabled = false;
	  }, false);

	inp2.addEventListener("change", (event) => {

		btn.disabled = false;
	  }, false);


		console.log('внутри клика' + operation.value);
		
	});
	//result

	console.log('вне клика' + operation.value);

	
});

