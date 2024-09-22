module.exports = {
    name: "warn-delete",
    description: "Belirtiğiniz Kullanıcının Uyarısını Silersiniz!",
    usage: "prefix+warn-delete",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["uyarı-sil"],
    category: "Warn",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const {MessageButton} = require("discord-buttons")
        const db = client.db;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yönetici yetkin yok!")

    const member = message.mentions.users.filter(s => s.ID !== client.user).first()
    if(!member) {
       return;
    }
    db.delete(`uyarı_${member.id}_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setColor(client.ayarlar.embedRenk)
    .addField("Kişi Bilgileri:", `> Adı: ${member.username}\n> İD: ${member.id}\n> Etiket: ${member}`)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
    return message.channel.send(embed)
    }}