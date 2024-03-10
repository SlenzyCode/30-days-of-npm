const { SakuraAI } = require("sakura.ai");
let sakura;

class Gpt {
    constructor({ key }) {
        // Initialize the SakuraAI instance with the provided API key
        this.key = key;
        sakura = new SakuraAI(key);
    };

    async ai({ content, username }) {
        try {
            // Call the Kirai method of SakuraAI to generate a response based on the given content and username
            const response = await sakura.kirai({ model: "SBT-1", content, username });
            // Create a modified response object with the message field set to the content parameter
            const modifiedResponse = {
                message: content,
                ...response
            };
            // Return the modified response object
            return modifiedResponse;
        } catch (error) {
            // Log any errors that occur during the execution of the SakuraAI method
            console.error(error);
            // Rethrow the error for further error handling
            throw error;
        }
    };
};

// Export the Gpt class for use in other modules
module.exports = { Gpt };
