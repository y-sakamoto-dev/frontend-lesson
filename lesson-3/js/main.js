// // 1. シンプルなタイマー
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const timerElement = document.getElementById('timer');

const startTimer = () => {
	startButton.disabled = true; // スタートボタンを無効化

	let seconds = Number(secondsInput.value); //なぜこの位置でないといけない？

	let countdown = setInterval(() => {
		seconds--;
		timerElement.innerText = seconds;

		if (seconds <= 0) {
			clearInterval(countdown);
			timerElement.innerText = 'タイムアップ！';
			startButton.disabled = false; // スタートボタンを有効化

			secondsInput.value = '';

			setTimeout(() => {
				timerElement.textContent = '';
			}, 3000);
		}
	}, 1000);
};

startButton.addEventListener('click', () => {
	startTimer();
});

// 2. リストのソート
let numbers = [1, 4, 3, 5, 2];

const selectElement = document.getElementById('sortType');
const ascElement = document.getElementById('asc');
const descElement = document.getElementById('desc');
const sortButtonElement = document.getElementById('sortButton');
const resultElement = document.getElementById('result');

//ソート関数
const sortNumbers = (value) => {
	//昇順か降順かを判定
	if (value === 'asc') {
		numbers.sort((a, b) => a - b);
	} else {
		numbers.sort((a, b) => b - a);
	}

	resultElement.textContent = numbers.join(', ');
};

//ボタンクリック
sortButtonElement.addEventListener('click', () => {
	const currentSelectValue = selectElement.value;
	sortNumbers(currentSelectValue);
});

// const sortButton = document.getElementById('sortButton');
// const result = document.getElementById('result');

// // 配列の初期値
// let numbers = [5, 3, 8, 1, 9];

// // ソート関数
// const sortNumbers = (type) => {
// 	// 昇順か降順かを判定
// 	if (type === 'asc') {
// 		numbers.sort((a, b) => a - b);
// 	} else {
// 		numbers.sort((a, b) => b - a);
// 	}

// 	// 結果を表示
// 	result.textContent = numbers.join(', ');
// };

// sortButton.addEventListener('click', () => {
// 	const sortType = document.getElementById('sortType').value;
// 	sortNumbers(sortType);
// });

// 3. 簡易的な ToDo リスト

const newTaskElement = document.getElementById('newTask');
const taskButtonElement = document.getElementById('taskButton');
const taskListElement = document.getElementById('taskList');

// リスト配列
let list = [];

// ボタンクリック
taskButtonElement.addEventListener('click', () => {
	list.push(newTaskElement.value);
	newTaskElement.value = '';

	console.log('list', list);

	const resetElement = () => {
		// ulの中身をリセット
		taskListElement.innerText = '';

		//繰り返し
		for (let i = 0; i < list.length; i++) {
			// console.log(list[i]);
			//HTML表示
			const listElement = document.createElement('li');
			const deleteButtonElement = document.createElement('button');

			listElement.innerText = list[i];
			deleteButtonElement.innerText = '削除';

			deleteButtonElement.addEventListener('click', () => {
				let deleteIndex;

				if (list.length === 1) {
					deleteIndex = 1;
				} else {
					deleteIndex = i - 1;
				}

				console.log('削除前', list);
				list = list.splice(deleteIndex, 1);
				resetElement();
				console.log('削除後', list);
			});

			listElement.appendChild(deleteButtonElement);
			taskListElement.appendChild(listElement);
		}
	};

	resetElement();
});
