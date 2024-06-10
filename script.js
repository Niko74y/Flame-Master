// Отправка сообщений по нажатию клавиши Enter
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Функция для отправки сообщений
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput !== "") {
        var chatBox = document.getElementById("chat-box");
        var message = document.createElement("p");
        message.textContent = "Вы: " + userInput;
        chatBox.appendChild(message);
        document.getElementById("user-input").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
        // Добавьте здесь код для отправки сообщения на сервер или обработки его по вашему усмотрению
    }
}

// Функция для получения входящих сообщений (примерно)
function receiveMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var receivedMessage = document.createElement("p");
    receivedMessage.textContent = "Собеседник: " + message;
    chatBox.appendChild(receivedMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    // Добавьте здесь код для обработки входящих сообщений по вашему усмотрению
}
