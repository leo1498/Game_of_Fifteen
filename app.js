window.onload = function(){ 
	

	
	document.getElementById('start').onclick  = function(){
		startGame();
	}
		




			var game = document.getElementsByClassName('block');
			
				for (var i = 0; i < game.length; i++) {
					// перебираем все ячейки с классом block
					
					game[i].onclick = function (e) {
						
						//кликаем на текущую ячейку

						var row = e.target.getAttribute('data-row'),
							col = e.target.getAttribute('data-col');
							
						// получаем координаты текещей ячейки (ряд и столбец)
						
						var val = e.target.innerHTML;
						// получили значение  ячейки на которую кликнули

						console.log(row);
			
						
						
						if (row != 'a' ) {
					
							
							
							var top_col = col;
							// получаем координаты столбца соседней ячейки справа
							var top_row;
							// получаем координаты ряда, соседней ячейки
							
							switch(row){
									case 'b' : top_row = 'a'; break;
									case 'c' : top_row = 'b'; break;
									case 'd' : top_row = 'c'; break;
							}
							
							
							
							valReplace(top_col, top_row);
							
							
							
						}	
						// проверяем только ячейки снизу
						
						if (col != 4 ) {
						
						// проверяем только ячейки слева
							
							var right_col = +col + 1;
							// получаем координаты столбца соседней ячейки справа
							var right_row = row;
							// получаем координаты ряда, соседней ячейки
							
							
							valReplace(right_col, right_row);
						}
						
						if (row != 'd') {
							
							
							var bottom_col = col;
							// получаем координаты столбца соседней ячейки справа
							var bottom_row;
							// получаем координаты ряда, соседней ячейки
							
							switch(row){
									case 'a' : bottom_row = 'b'; break;
									case 'b' : bottom_row = 'c'; break;
									case 'c' : bottom_row = 'd'; break;
							}
							
							
							
							valReplace(bottom_col, bottom_row);
							
						}
						// проверяем только ячейки сверху
						
						if (col != 1) {
				
						// проверяем только ячейки справа
							
							var left_col = col - 1;
							// получаем координаты столбца соседней ячейки слева
							var left_row = row;
							// получаем координаты ряда, соседней ячейки
							
							
							valReplace(left_col, left_row);
							
						}
						
						function valReplace(next_col, next_row) {
								for (var i = 0; i < game.length; i++) {
									// перебираем все ячейки 
										if ((game[i].getAttribute('data-col') == next_col) && (game[i].getAttribute('data-row') == next_row)) {
											// если значение текущего атрибута равно значению правого и находится в том же ряде
											
											
											if (game[i].innerHTML == ''){
												// если текущее значения ячейки пустое
												
												game[i].innerHTML = val;
												// записываем в пустую ячейку значение ячейки, на которою кликнули
												
												e.target.innerHTML = '';
												
												game[i].className = game[i].className.replace('block hidden', 'block');
												
												e.target.className = e.target.className.replace('block', 'block hidden');
												
											}
										}
									
								}	
						}
						
						// Вызываем функцию проверки на победу
						winnerGame();
										
					} // end фунции клику
					
				}
			
			
		
			

	
	
	function randomMix(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var arr = [];
		// создаем массив, в который будем записывать соседние елементы
		
	var emptyBlock;
	
	function startGame() {
		
		arr = [];
		
		var game = document.getElementsByClassName('block');
		
		
		for (var i = 0; i < game.length; i++) {
			
			// перебираем все элементы в масиве
			
				var col = game[i].getAttribute('data-col');
					// получаем значение атрибута столбца текущего пустого елемента
				var row = game[i].getAttribute('data-row');
				// получаем значение атрибута ряда текущего пустого елемента
				
				var elem = game[i];
				// объект текущего елемента
			
			if (elem.innerHTML == '') {
				
				// если текущий елемент пустой
				
				emptyBlock = elem;
				// записываем значение
											

				if (row != 'a') {
					// смотрим есть ли елементы сверху


					var top_col = col;
					// находим столбец соседнего елемента
					var top_row;
				
					switch(row) {
						case 'b': top_row = 'a'; break;
						case 'c': top_row = 'b'; break;
						case 'd': top_row = 'c'; break;
					}
					// находим ряд соседнего елемента

					
					for (var i = 0; i < game.length; i++) {
						// перебираем все элементы в масиве
						if ( (game[i].getAttribute('data-col') == top_col) && (game[i].getAttribute('data-row') == top_row) ) {
							// если значение текущего атрибута равно значению соседнего столбца и находится в том же ряде		
							
							arr[arr.length] = game[i];
								// записываем в массив соседний элемент
						}
					}
					
				}
				
				if (col != 4) {
					// смотрим есть ли елементы справа

					var right_col = +col + 1;
					var right_row = row;
					
					for (var i = 0; i < game.length; i++) {
						if ( (game[i].getAttribute('data-col') == right_col) && (game[i].getAttribute('data-row') == right_row) ) {
							// если значение текущего атрибута равно значению соседнего столбца и находится в том же ряде						
							
							arr[arr.length] = game[i];
								// записываем в массив соседний элемент
						}
					}
				}
				
				if (row != 'd') {
					// смотрим есть ли елементы снизу

					var bottom_col = col;
					var bottom_row;

					switch(row) {
						case 'a': bottom_row = 'b'; break;
						case 'b': bottom_row = 'c'; break;
						case 'c': bottom_row = 'd'; break;
					}
					for (var i = 0; i < game.length; i++) {
						if ( (game[i].getAttribute('data-col') == bottom_col) && (game[i].getAttribute('data-row') == bottom_row) ) {
							// если значение текущего атрибута равно значению соседнего столбца и находится в том же ряде		
							
							arr[arr.length] = game[i];
								// записываем в массив соседний элемент
						}
					}
				}
				
				if (col != 1) {
					// смотрим есть ли елементы слева
					
					var left_col = col - 1;
					var left_row = row;

					
					
					for (var i = 0; i < game.length; i++) {
						if ( (game[i].getAttribute('data-col') == left_col) && (game[i].getAttribute('data-row') == left_row) ) {
							// если значение текущего атрибута равно значению соседнего столбца и находится в том же ряде		
							
							arr[arr.length] = game[i];
								// записываем в массив соседний элемент
						}
					}
					
				}
				
			} // end if
			
		} // end for
		
			
	} // end startGame
		
	
		var startTime; 
	
		document.getElementById('start').onclick  = function(){
			// при клике на кнопку  рандом выполняем функцию
			
			startTime = new Date;
						
			var levelNumber = document.getElementById('level').value;
				// записываем значение инпута "уровня"
			
//			console.log(levelNumber);
			
			for (var a = 0; a < levelNumber; a++) {
				// мешаем ячейки на введенное к-во ходов
				
			
			startGame();

//			console.log(arr[randomMix(0, arr.length-1)] );
				//  рандомно выбираем с массива элементы


									var randomInt = arr[randomMix(0, arr.length-1)];
										// записываем рандомный элемент

									emptyBlock.innerHTML = randomInt.innerHTML;
										// записываем в текущий пустой элемент значение соседнего рандомного элемента
									randomInt.innerHTML = '';
										// записываем в соседний элемент пустое значение

									randomInt.className = 'block hidden';
										// присваеваем класс соседнему элементу

									emptyBlock.className = 'block';
										// присваеваем класс текущему элементу	
				

		}		
	}
		
		
	// Функция проверки на выграш ************************************//
	function winnerGame() {
						
		var game = document.getElementsByClassName('block');
		
		var win = true;
		
		for (var i = 0; i < game.length - 1; i++) {
						
					// console.log((i + 1) + ' : ' + game[i].innerHTML);
			
			
				if ((i + 1) != +game[i].innerHTML) {

					win = false;
					
			}
		}
			if (win) {
				alert('Поздровляем! Вы победили!!! Затраченое время ' + (new Date - startTime) / 1000 + ' секунд');

			}
		
	}
	
	
	// Функция начать заново ***************************************//
	document.getElementById('reset').onclick  = function() {
		
		for (var i = 0; i < game.length; i++) {
			
			
			
		}
		
	}

	
} // end