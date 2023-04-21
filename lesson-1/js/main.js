// 1. Hello, World! の出力 []
//    JavaScript を使って、Web ページ上に"Hello, World!"というテキストを表示させてください。
document.getElementById('example').innerText = 'Hello, world!';

// 2. 四則演算の計算 []
//    ユーザーに 2 つの数値を入力させ、それらの加算、減算、乗算、除算の結果を Web ページ上に表示してください。

// 3. 配列の合計と平均 []
//    JavaScript の配列に数値が格納されていると仮定して、その配列の合計値と平均値を計算し、結果を Web ページ上に表示してください。

const numberArray = [1, 2, 3, 4, 5]; // 数値が格納された配列

// 配列の合計値
const sumValueElement = document.getElementById('sum-value');
let sumValue = 0;

numberArray.forEach((value) => {
	sumValue += value;
});

sumValueElement.innerText = `配列の合計値：${sumValue}`;

// 配列の平均値
const averageValueElement = document.getElementById('average-value');
const averageValue = sumValue / numberArray.length;
averageValueElement.innerText = `配列の平均値：${averageValue}`;

// 4. 簡易クイズアプリ []
//    JavaScript を使って、ユーザーに簡単なクイズを出題し、答えが正しいかどうかを判定して、結果を Web ページ上に表示してください。例えば、「日本の首都はどこですか？」といった質問を出題し、ユーザーが回答した結果に応じて、「正解！」または「残念、不正解です。」と表示するようにします。

const answerButtonElement = document.getElementById('answer-button'); // 回答ボタン
const userAnswerInputElement = document.getElementById('user-answer'); // 回答エリア
const showIsCorrectAreaELement = document.getElementById('answer'); // 正否を表示するエリア

// クリックイベント設定
answerButtonElement.addEventListener('click', () => {
	// 実行したい処理を書く

	// ユーザーの回答を取得
	const userAnswer = userAnswerInputElement.value;

	// 正否を判定
	if (userAnswer === '東京') {
		console.log('正解!');
		showIsCorrectAreaELement.innerText = '正解!';
	} else {
		console.log('残念、不正解です。');
		showIsCorrectAreaELement.innerText = '残念、不正解です。';
	}
});

// 5. 文字数カウンター []
//    ユーザーにテキスト入力を受け付けるテキストボックスを作成し、入力されたテキストの文字数をリアルタイムに表示してください。例えば、「あなたの入力した文字数は 10 文字です。」のように表示するようにします

const inputField = document.getElementById('input-field');
const charCount = document.getElementById('char-count');

inputField.addEventListener('input', updateCharCount);

function updateCharCount() {
	const inputText = inputField.value;
	const count = inputText.length;
	charCount.innerText = `文字数: ${count}`;
}

// 2. 四則演算の計算

const additionAnswerButtonElement = document.getElementById(
	'addition-answer-button'
); // ボタン取得

additionAnswerButtonElement.addEventListener('click', () => {
	const additionAnswerInputElement = document.getElementById('addition-answer'); // 解答欄取得

	//足し算実行
	const addition1InputElement = document.getElementById('addition1').value; // 足したい数取得
	const addition2InputElement = document.getElementById('addition2').value; // 足したい数取得
	const additionAnswer =
		Number(addition1InputElement) + Number(addition2InputElement); // 足した値

	additionAnswerInputElement.innerText = `${additionAnswer}`; // 足した値を表示させる
});
