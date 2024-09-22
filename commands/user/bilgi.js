module.exports = {
    name: "bilgi",
    description: "Bot ile ilgili bilgileri görürsünüz!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: [],
    category: "User",
    async favian(client, message, args) {
        client.inline;
        const Discord = require("discord.js")
        const embed = new Discord.MessageEmbed()
        .setDescription("TEST")
        .setColor(client.ayarlar.embedRenk)
        .setFooter(client.ayarlar.embedFooter,client.user.avatarURL())
        .setAuthor(client.user.username, client.user.avatarURL())
        message.inlineReply(embed)
    }}