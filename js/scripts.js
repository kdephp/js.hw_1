window.addEventListener('load', function(){

	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');
	let operation = document.querySelector('select');

	if (operation.value === '+') {
		console.log(operation.value);
	}

	btn.addEventListener('click', function(){

		let sum = parseInt(inp1.value) + parseInt(inp2.value);
		res.innerHTML = sum;
	});
	btn.addEventListener('click', function(){
		let min = parseInt(inp1.value) - parseInt(inp2.value);
		res.innerHTML = min;
	});
	btn.addEventListener('click', function(){
		let mult = parseInt(inp1.value) * parseInt(inp2.value);
		res.innerHTML = mult;
	});
	btn.addEventListener('click', function(){
		let divide = parseInt(inp1.value) / parseInt(inp2.value);
		res.innerHTML = divide;

	});


});

