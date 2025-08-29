# AI Chatbot

A simple, responsive web chatbot built with HTML, CSS, and JavaScript that provides fixed responses to user queries.

## Features

- **Modern UI Design**: Clean, responsive interface with gradient backgrounds and smooth animations
- **Fixed Bot Responses**: Pre-programmed responses for common questions and topics
- **Math Calculator**: Can handle basic mathematical expressions
- **Responsive Design**: Works on both desktop and mobile devices
- **Interactive Elements**: Typing indicators, message animations, and smooth scrolling
- **Clear Chat Function**: Button to reset the conversation

## How to Use

1. **Open the Chatbot**: Simply open `index.html` in any modern web browser
2. **Start Chatting**: Type your message in the input field and press Enter or click the send button
3. **Get Responses**: The bot will respond with relevant information based on your input

## Supported Topics

The chatbot can respond to various topics including:

- **Greetings**: Hello, Hi, Hey, Good morning/afternoon/evening
- **Personal Questions**: How are you, What's your name, Who are you
- **General Knowledge**: Capitals, planets, human body facts
- **Technology**: AI, Machine Learning, general tech topics
- **Math**: Basic calculations and mathematical expressions
- **Fun Content**: Jokes, fun facts, inspirational quotes
- **Help**: General assistance and guidance

## Example Questions

Try asking the bot:
- "Hello"
- "Tell me a joke"
- "What is the capital of France?"
- "Calculate 15 * 3"
- "Tell me a fun fact"
- "What is AI?"
- "How are you?"

## Customization

### Adding New Responses

To add new bot responses, edit the `botResponses` object in `script.js`:

```javascript
const botResponses = {
    // Add your new responses here
    'your question': 'Your answer here',
    // ... existing responses
};
```

### Modifying the UI

- **Colors**: Update CSS variables in `style.css`
- **Layout**: Modify the HTML structure in `index.html`
- **Behavior**: Adjust JavaScript functions in `script.js`

## File Structure

```
Website_chatbot/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Future Enhancements

- Integration with real AI APIs
- User authentication
- Chat history storage
- File upload support
- Voice input/output
- Multi-language support

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing the chatbot, feel free to modify the code or reach out for assistance.
