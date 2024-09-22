const Discord = require("discord.js")

module.exports = {
    name: "davet",
    description: "Bot'un davet linklerini görürsünüz!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    aliases: [],
    cooldown: 5,
    category: "Kullanıcı",
   async favian(client, message, args) {
     const { MessageButton } = require("discord-buttons")
    let webpanel = new MessageButton()
    .setStyle('url')
    .setLabel('Oy Ver')
    .setURL(`${client.links.oy}`)
    let sunucunaekle = new MessageButton()
    .setStyle('url')
    .setLabel('Sunucuna Ekle!')
    .setURL(`${client.links.invitelinks}`)
    let resmisunucu = new MessageButton()
    .setStyle('url')
    .setLabel('Resmi Sunucu!')
    .setURL(`${client.links.supportserver}`)
    const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`Merhabalar **${message.author.tag}**, ${client.user.username} Botu Sahip Olduğu Özellikler  Sayesinde Sunucunuzu Güzelleştirmek Ve Moderasyonunu Daha Kolay Hale Getirmek İçin Tasarlanmış Bir Bottur! \n Denemeye Ne Dersin?`)
.addFields(
  {name : `\u200b`, value:`<:savana_add:929104901609496646> [Sunucuna Ekle](${client.links.invitelinks})`, inline: true},
  {name : `\u200b`, value:`<:savana_support:929104901689184277> [Resmi Sunucu](${client.links.supportserver})`, inline: true},
  {name : `\u200b`, value:`<:savana_vote:929104901567561760> [Oy Ver](${client.links.oy})`, inline: true}
)
.setColor(client.ayarlar.embedRenk)
.setFooter(client.ayarlar.embedFooter)
.setImage(client.ayarlar.resim)
message.channel.send({ buttons : [ resmisunucu,webpanel, sunucunaekle ], embed : embed})
}
  }