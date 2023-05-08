const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chat-box');

chatBtn.addEventListener('click', () => {
	chatBox.classList.toggle('show');
});

// CHATボタン
const chatBtn2 = document.getElementById('chat-btn2');
const chatBox2 = document.getElementById('chat-box2');
const chatContent = document.getElementById('chat-content');

chatBtn2.addEventListener('click', () => {
	chatBox2.classList.add('show');
});

chatBox.addEventListener('click', (e) => {
	if (e.target === chatBox2) {
		chatBox2.classList.remove('show');
	}
});
