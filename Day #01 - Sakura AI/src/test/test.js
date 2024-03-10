const { Gpt } = require("../app"); // Enter your module file path here
const gpt = new Gpt({ key: "api_key" }); // The key you will enter here is SakuraAI api key, you can contact via discord to get it

// Execute an asynchronous function to call the 'ai' method of the Gpt class
(async () => {
    // Call the 'ai' method with a content and a username
    await gpt.ai({ content: "Hello, how are you today?", username: "Slenzy" }).then((response) => {
        // Log the response received from the 'ai' method
        console.log(response);
        // If you wish, you can get the answer to the question asked by making response.message by making response.reply
    });
})();
