function sendMessage(event) {
    event.preventDefault();
    const chatInput = document.getElementById('chatInput');
    const chatArea = document.getElementById('chatArea');
    
    if (chatInput.value.trim() !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'main-right';
        messageDiv.innerHTML = `<div class="main-right-p2">
                                    <img class="main-right-p2-img" src="./Opera Anlık Görüntü_2023-12-04_231044_www.instagram 1.png" alt="">
                                    <h1 class="main-right-p2-h1">You</h1>
                                    <p class="main-right-p2-time">Now</p>
                                    <p>${chatInput.value}</p>
                                </div>`;


        chatArea.appendChild(messageDiv);
        chatInput.value = '';

        chatArea.scrollTop = chatArea.scrollHeight;
    }
}
