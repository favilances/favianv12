module.exports = {
    name: "warn-help",
    description: "Warn Sistemi!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["uyarı-yardım"],
    category: "Warn",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const {MessageButton} = require("discord-buttons")
        const db = client.db;
        const embed = new Discord.MessageEmbed()
        .setDescription(`
        => \`${client.ayarlar.prefix}uyar\` Belirtiğiniz Kullanıcıyı Uyarırsınız.
        => \`${client.ayarlar.prefix}uyarı-sil\` Belirtiğiniz Kullanıcının Uyarısını Silersiniz.
        => \`${client.ayarlar.prefix}uyarı-liste\` Belirtiğiniz Kullanıcının Uyarılarını Görürsünüz.

        `)
        .setColor(client.ayarlar.embedRenk)
        .setFooter(client.ayarlar.embedFooter)
        message.channel.send(embed)
    }}