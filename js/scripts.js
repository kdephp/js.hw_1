window.addEventListener('load', function(){

	let inp1 = document.querySelector('.inp1'); 
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let result = document.querySelector('.result');
	let operation = document.querySelector('select');

	
	if (operation.value === 'add') {
		btn.addEventListener('click', function(){
			let sum = parseInt(inp1.value) + parseInt(inp2.value);
			result.innerHTML = sum;
		});
	}
	else if (operation.value === 'subtract') {
		btn.addEventListener('click', function(){
			let sub = parseInt(inp1.value) - parseInt(inp2.value);
			result.innerHTML = sub;
		});
	}
	else if (operation.value === 'multiply') {
		btn.addEventListener('click', function(){
			let mult = parseInt(inp1.value) * parseInt(inp2.value);
			result.innerHTML = mult;
		});
	}
	else {
		btn.addEventListener('click', function(){
			let div = parseInt(inp1.value) / parseInt(inp2.value);
			result.innerHTML = div;
		});
	}
	//result
	console.log('${inp1.value} ${operator} ${inp2.value} = ${result}')

	


});

