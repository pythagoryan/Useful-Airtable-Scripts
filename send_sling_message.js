// This script sends a message to a specific Sling (https://getsling.com) conversation
// Two secret input variables are required: the Sling API token and the conversation ID
// Other input variables can be added as needed

// Input data declaration & initialization
const inputConfig = input.config();
const slingApiToken = input.secret('slingApiToken');
const slingConversationId = input.secret('stl__slingManagerChatId');

// Content of message to send to Sling
const messageContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
`;

// Sling API endpoint definition
const apiUrl = `https://api.getsling.com/v1/conversations/${slingConversationId}/messages`;

// POST call options
const requestOptions = {
  method: 'POST',
  headers: {
    'Authorization': slingApiToken,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'content': messageContent
  })
};

// Make the API call to Sling.
fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      return response.text().then(text => { throw new Error(`Sling API Error: ${response.status} ${response.statusText} - ${text}`) });
    }
    return response.json();
  })