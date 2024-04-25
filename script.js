let socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', function (event) {
    console.log('WebSocket is connected.');
});

socket.addEventListener('message', function (event) {
    appendMessage(event.data);
});

function appendMessage(message) {
    let messages = document.getElementById('messages');
    let messageElement = document.createElement('div');
    messageElement.textContent = message;
    messages.appendChild(messageElement);
}

function sendMessage() {
    let messageInput = document.getElementById('messageInput');
    let message = messageInput.value;

    if (message.trim() !== '') {
        socket.send(message);
        messageInput.value = '';
    }
}
