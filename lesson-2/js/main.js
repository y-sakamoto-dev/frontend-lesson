// 1. 簡単な自己紹介プログラムの作成
//    ユーザーに名前、年齢、趣味を入力してもらい、それらの情報を使って自己紹介文を出力するプログラムを作成してください。
const sendButton = document.getElementById('button');

sendButton.addEventListener('click', () => {
	const nameInputElement = document.getElementById('name');
	const ageInputElement = document.getElementById('age');
	const textInputElement = document.getElementById('text');
	const introduction = document.getElementById('introduction');

	introduction.innerText = `私は${nameInputElement.value}です。歳は${ageInputElement.value}です。趣味は${textInputElement.value}です。`;
});

// 2. ユーザーの誕生日に応じた星座を表示するプログラム
//    ユーザーに誕生月と誕生日を入力してもらい、それに応じた星座を表示するプログラムを作成してください。例えば、3 月 21 日から 4 月 19 日までの間は牡羊座です。
const signButton = document.getElementById('sign-button');

signButton.addEventListener('click', () => {
	const monthInputElement = document.getElementById('month');
	const dayInputElement = document.getElementById('day');
	const signAnswer = document.getElementById('sign-answer');

	const month = Number(monthInputElement.value);
	const day = Number(dayInputElement.value);

	const is牡羊座 = (month === 3 && day >= 21) || (month === 4 && day <= 19);

	if (is牡羊座) {
		console.log('non');
		signAnswer.innerText = `あなたの星座は水瓶座です。`;
	} else {
	}
});

// 3. 奇数と偶数の判定
//    ユーザーに数値を入力してもらい、その数値が奇数か偶数かを判定し、結果を表示するプログラムを作成してください。

// 4. FizzBuzz プログラム
//    1 から 100 までの数を順番に表示するプログラムを作成してください。ただし、3 の倍数の場合は "Fizz"、5 の倍数の場合は "Buzz"、3 と 5 の公倍数の場合は "FizzBuzz" と表示してください。

for (let i = 0; i <= 10; i++) {
	if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	} else {
		console.log(i);
	}
}

// 5. 配列内の最大値と最小値を求める
//    配列内の数値の中で最大値と最小値を見つけ、表示するプログラムを作成してください。配列の要素は事前に与えられたものを使用してください。
const numbers = [12, 45, 23, 67, 89, 34, 20, 7, 98, 54];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);
console.log(maxNumber);
console.log(minNumber);
