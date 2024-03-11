class DiscordJS {
    /**
     * Converts Discord.js code to the specified format.
     * @param {Object} options - The options object.
     * @param {string} options.code - The Discord.js code to convert.
     * @returns {Object} - An object containing the original and converted code.
     */
    async converter({ code }) {
        // Replacing Discord.js constructs with specified formats
        let converted = code
            .replaceAll("Intents.FLAGS", "GatewayIntentBits")
            .replaceAll("Intents", "GatewayIntentBits")
            .replaceAll("MessageButton", "ButtonBuilder")
            .replaceAll("MessageSelectMenu", "SelectMenuBuilder")
            .replaceAll("MessageActionRow", "ActionRowBuilder")
            .replaceAll("TextInputComponent", "TextInputBuilder")
            .replaceAll("Permissions", "PermissionsBitField")
            .replaceAll("MessageFlags", "MessageFlagsBitField")
            .replaceAll("ThreadMemberFlags", "ThreadMemberFlagsBitField")
            .replaceAll("UserFlags", "UserFlagsBitField")
            .replaceAll("SystemChannelFlags", "SystemChannelFlagsBitField")
            .replaceAll("ApplicationFlags", "ApplicationFlagsBitField")
            .replaceAll("ActivityFlags", "ActivityFlagsBitField")
            .replaceAll("const { Colors } = Constants", "const { Colors } = require('discord.js')")
            .replaceAll("Opcodes", "GatewayOpcodes")
            .replaceAll("WSEvents", "GatewayDispatchEvents")
            .replaceAll("WSCodes", "GatewayCloseCodes")
            .replaceAll("InviteScopes", "OAuth2Scopes")
            .replaceAll("client.on('message'", "client.on('messageCreate'")
            .replaceAll("client.on('interaction'", "client.on('interactionCreate'")
            .replaceAll(".ban({ days", ".ban({ deleteMessageDays")
            .replaceAll(".setRolePositions", ".roles.setPositions")
            .replaceAll(".setChannelPositions", ".channels.setPositions")
            .replaceAll("MessageEmbed", "EmbedBuilder")
            .replaceAll(".addField", ".addFields")
            .replaceAll("client.on('apiRequest'", "client.rest.on('request'")
            .replaceAll("client.on('apiResponse'", "client.rest.on('response'")
            .replaceAll("client.on('rateLimit'", "client.rest.on('rateLimited'")
            .replaceAll(".editable", ".manageable")
            .replaceAll("ApplicationCommandOptionTypes", "ApplicationCommandOptionType")
            .replaceAll("MessageButtonStyles", "ButtonStyle");

        // Replacing specific types with Discord.js constants
        if (converted.includes("type: \"STRING\"") || converted.includes("type: \"BOOLEAN\"") || converted.includes("type: \"ATTACHMENT\"") || converted.includes("type: \"CHANNEL\"") || converted.includes("type: \"INTEGER\"") || converted.includes("type: \"MENTIONABLE\"") || converted.includes("type: \"NUMBER\"") || converted.includes("type: \"ROLE\"") || converted.includes("type: \"SUBCOMMAND\"") || converted.includes("type: \"SUBCOMMAND_GROUP\"") || converted.includes("type: \"USER\"")) {
            converted = `const { ApplicationCommandOptionType } = require('discord.js');\n${converted
                .replaceAll("type: \"ATTACHMENT\"", "type: ApplicationCommandOptionType.Attachment")
                .replaceAll("type: \"BOOLEAN\"", "type: ApplicationCommandOptionType.Boolean")
                .replaceAll("type: \"CHANNEL\"", "type: ApplicationCommandOptionType.Channel")
                .replaceAll("type: \"INTEGER\"", "type: ApplicationCommandOptionType.Integer")
                .replaceAll("type: \"MENTIONABLE\"", "type: ApplicationCommandOptionType.Mentionable")
                .replaceAll("type: \"NUMBER\"", "type: ApplicationCommandOptionType.Number")
                .replaceAll("type: \"ROLE\"", "type: ApplicationCommandOptionType.Role")
                .replaceAll("type: \"STRING\"", "type: ApplicationCommandOptionType.String")
                .replaceAll("type: \"SUBCOMMAND\"", "type: ApplicationCommandOptionType.Subcommand")
                .replaceAll("type: \"SUBCOMMAND_GROUP\"", "type: ApplicationCommandOptionType.SubcommandGroup")
                .replaceAll("type: \"USER\"", "type: ApplicationCommandOptionType.User")}`;
        };

        // Replacing button styles with Discord.js constants
        if (converted.includes("style: 'PRIMARY'") || converted.includes("style: 'DANGER'") || converted.includes("style: 'LINK'") || converted.includes("style: 'SECONDARY'") || converted.includes("style: 'SUCCESS'") || converted.includes(".setStyle('PRIMARY')") || converted.includes(".setStyle('DANGER')") || converted.includes(".setStyle('LINK')") || converted.includes(".setStyle('SECONDARY')") || converted.includes(".setStyle('SUCCESS')")) {
            converted = `const { ButtonStyle } = require('discord.js');\n${converted
                .replaceAll("style: 'PRIMARY'", "style: ButtonStyle.Primary")
                .replaceAll("style: 'DANGER'", "style: ButtonStyle.Danger")
                .replaceAll("style: 'LINK'", "style: ButtonStyle.Link")
                .replaceAll("style: 'SECONDARY'", "style: ButtonStyle.Secondary")
                .replaceAll("style: 'SUCCESS'", "style: ButtonStyle.Success")
                .replaceAll(".setStyle('PRIMARY')", ".setStyle(ButtonStyle.Primary)")
                .replaceAll(".setStyle('DANGER')", ".setStyle(ButtonStyle.Danger)")
                .replaceAll(".setStyle('LINK')", ".setStyle(ButtonStyle.Link)")
                .replaceAll(".setStyle('SECONDARY')", ".setStyle(ButtonStyle.Secondary)")
                .replaceAll(".setStyle('SUCCESS')", ".setStyle(ButtonStyle.Success)")}`;
        };

        // Replacing channel type checks with Discord.js constants
        if (converted.includes(".isText()") || converted.includes(".isVoice()") || converted.includes(".isDM()")) {
            converted = `const { ChannelType } = require("discord.js");\n${converted
                .replaceAll(".isText()", ".type === ChannelType.GuildText")
                .replaceAll(".isVoice()", ".type === ChannelType.GuildVoice")
                .replaceAll(".isDM()", ".type === ChannelType.DM")
                .replaceAll(".isDirectory()", ".type === ChannelType.GuildDirectory")
                .replaceAll(".isGroupDM()", ".type === ChannelType.GroupDM")
                .replaceAll(".isCategory()", ".type === ChannelType.GuildCategory")
                .replaceAll(".isNews()", ".type === ChannelType.GuildNews")}`;
        };

        // Replacing interaction type checks with Discord.js constants
        if (converted.includes(".isCommand()") || converted.includes(".isAutocomplete()") || converted.includes(".isMessageComponent()") || converted.includes(".isModalSubmit()")) {
            converted = `const { InteractionType } = require("discord.js");\n${converted
                .replaceAll(".isCommand()", ".type === InteractionType.ApplicationCommand")
                .replaceAll(".isAutocomplete()", ".type === InteractionType.ApplicationCommandAutocomplete")
                .replaceAll(".isMessageComponent()", ".type === InteractionType.MessageComponent")
                .replaceAll(".isModalSubmit()", ".type === InteractionType.ModalSubmit")}`;
        };

        return { your_code: code, translated_code: converted };
    };
};

module.exports = { DiscordJS };
