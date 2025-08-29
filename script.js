// Chatbot responses - you can modify these to add more responses
const botResponses = {
    // Greetings
    'hello': 'Hello! How can I help you today?',
    'hi': 'Hi there! Nice to meet you!',
    'hey': 'Hey! What can I do for you?',
    'good morning': 'Good morning! Hope you\'re having a great day!',
    'good afternoon': 'Good afternoon! How can I assist you?',
    'good evening': 'Good evening! What would you like to know?',
    
    // Common questions
    'how are you': 'I\'m doing great, thank you for asking! How about you?',
    'what is your name': 'My name is AI Assistant, nice to meet you!',
    'who are you': 'I\'m an AI chatbot designed to help answer your questions.',
    'what can you do': 'I can help you with various topics like general knowledge, basic questions, and casual conversation. Feel free to ask me anything!',
    'help': 'I\'m here to help! You can ask me questions about various topics, or just chat with me. What would you like to know?',
    
    // Weather
    'weather': 'I\'m sorry, I don\'t have access to real-time weather data. You might want to check a weather app or website for current conditions.',
    'temperature': 'I can\'t check the current temperature, but I\'d recommend looking up the weather forecast for your area.',
    
    // Time
    'what time is it': 'I can\'t tell you the exact time, but you can check the clock on your device!',
    'time': 'The current time should be displayed on your device. I\'m not connected to real-time data.',
    
    // Math
    'calculate': 'I can help with basic math! Try asking something like "what is 2 + 2" or "calculate 15 * 3".',
    'math': 'I\'m happy to help with math problems! What would you like to calculate?',
    
    // Technology
    'technology': 'Technology is fascinating! It\'s constantly evolving and changing how we live and work. What specific aspect interests you?',
    'ai': 'Artificial Intelligence is a field of computer science that aims to create systems capable of performing tasks that typically require human intelligence.',
    'machine learning': 'Machine Learning is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed.',
    
    // General knowledge
    'capital of france': 'The capital of France is Paris.',
    'largest planet': 'Jupiter is the largest planet in our solar system.',
    'human body': 'The human body is incredibly complex, made up of trillions of cells, 206 bones, and numerous systems working together.',
    
    // Fun responses
    'joke': 'Why don\'t scientists trust atoms? Because they make up everything! 😄',
    'fun fact': 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!',
    'quote': 'Here\'s a great quote: "The only way to do great work is to love what you do." - Steve Jobs',
    
    // Default response
    'default': 'That\'s an interesting question! I\'m still learning and might not have the perfect answer, but I\'m here to help as best I can. Could you try rephrasing or ask something else?'
};

// Function to get bot response based on user input
function getBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Check for exact matches first
    if (botResponses[input]) {
        return botResponses[input];
    }
    
    // Check for partial matches
    for (const key in botResponses) {
        if (input.includes(key) || key.includes(input)) {
            return botResponses[key];
        }
    }
    
    // Check for math expressions
    if (input.includes('+') || input.includes('-') || input.includes('*') || input.includes('/') || input.includes('=')) {
        try {
            // Remove non-math characters and evaluate
            const mathExpression = input.replace(/[^0-9+\-*/().]/g, '');
            if (mathExpression) {
                const result = eval(mathExpression);
                if (isFinite(result)) {
                    return `The answer is: ${result}`;
                }
            }
        } catch (e) {
            // If math evaluation fails, continue to default response
        }
    }
    
    // Check for specific patterns
    if (input.includes('what is') || input.includes('what\'s')) {
        if (input.includes('capital')) {
            return 'I\'d be happy to help with geography questions! Could you be more specific about which country or region you\'re asking about?';
        }
        if (input.includes('weather')) {
            return botResponses['weather'];
        }
        if (input.includes('time')) {
            return botResponses['time'];
        }
    }
    
    if (input.includes('how to') || input.includes('how do i')) {
        return 'That sounds like a practical question! I\'d be happy to help, but could you provide more details about what you\'re trying to accomplish?';
    }
    
    // Return default response if no match found
    return botResponses['default'];
}

// Function to add a message to the chat
function addMessage(message, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    
    if (isUser) {
        avatar.innerHTML = '<i class="fas fa-user"></i>';
    } else {
        avatar.innerHTML = '<i class="fas fa-robot"></i>';
    }
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${message}</p>`;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to send message
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, true);
    
    // Clear input
    userInput.value = '';
    
    // Simulate typing delay
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, false);
    }, 500);
}

// Function to handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Function to clear chat
function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>Hello! I'm your AI assistant. I can help you with various questions. Try asking me something!</p>
            </div>
        </div>
    `;
}

// Add some suggested questions for better user experience
function addSuggestedQuestions() {
    const chatMessages = document.getElementById('chatMessages');
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'message bot-message';
    suggestionsDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <p>Here are some things you can ask me:</p>
            <ul style="margin-top: 10px; padding-left: 20px;">
                <li>Tell me a joke</li>
                <li>What's the capital of France?</li>
                <li>Calculate 15 * 3</li>
                <li>Tell me a fun fact</li>
                <li>What is AI?</li>
            </ul>
        </div>
    `;
    
    // Add suggestions after a delay
    setTimeout(() => {
        chatMessages.appendChild(suggestionsDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 2000);
}

// Initialize chatbot
document.addEventListener('DOMContentLoaded', function() {
    // Focus on input field
    document.getElementById('userInput').focus();
    
    // Add suggested questions after initial greeting
    addSuggestedQuestions();
    
    // Add some interactive features
    const sendBtn = document.querySelector('.send-btn');
    const userInput = document.getElementById('userInput');
    
    // Enable/disable send button based on input
    userInput.addEventListener('input', function() {
        sendBtn.disabled = this.value.trim() === '';
    });
    
    // Initial state
    sendBtn.disabled = true;
});
