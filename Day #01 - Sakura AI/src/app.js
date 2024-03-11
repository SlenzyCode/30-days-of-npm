const { SakuraAI } = require("sakura.ai");
let sakura;

// The Gpt class provides an interface for interacting with SakuraAI
class Gpt {
    // The constructor method takes an API key and initializes the SakuraAI instance
    constructor({ key }) {
        this.key = key;
        sakura = new SakuraAI(key);
    };

    // The ai method generates a response based on the provided content and username
    async ai({ content, username }) {
        try {
            // Call the Kirai method of SakuraAI to get a response
            const response = await sakura.kirai({ model: "SBT-1", content, username });
            // Create a new object combining the response with the content parameter
            const modifiedResponse = {
                message: content,
                ...response
            };
            // Return the modified response object
            return modifiedResponse;
        } catch (error) {
            // Log any errors that occur during the execution
            console.error(error);
            // Rethrow the error for further handling
            throw error;
        }
    };
};

// Export the Gpt class for use in other modules
module.exports = { Gpt };
