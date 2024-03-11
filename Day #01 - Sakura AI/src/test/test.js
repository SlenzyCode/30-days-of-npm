// Import the Gpt class from the specified module file path
const { Gpt } = require("../app"); // Replace "../app" with your actual module file path

// Create an instance of the Gpt class with the provided API key
const gpt = new Gpt({ key: "api_key" }); // Replace "api_key" with your actual SakuraAI API key

// Execute an asynchronous function to interact with the Gpt instance
(async () => {
    // Use the 'ai' method of the Gpt instance to send a message and receive a response
    await gpt.ai({ content: "Hello, how are you today?", username: "Slenzy" }).then((response) => {
        // Log the response object received from the 'ai' method to the console
        console.log(response);
        // Optionally, you can access the reply message using response.reply if available
    });
})();
