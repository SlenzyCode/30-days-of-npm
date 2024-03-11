// Import the DiscordJS class from the specified module file path
const { DiscordJS } = require("../app");

// Create an instance of the DiscordJS class
const { converter } = new DiscordJS();

// Call the 'converter' method with the code snippet you want to convert
converter({ code: "MessageEmbed" /* write a your code. */ }).then((response) => {
    // Log the converted code response to the console
    console.log(response);
});
