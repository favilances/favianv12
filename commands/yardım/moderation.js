module.exports = {
    name: "moderasyon",
    description: "Moderasyon Komutlarını Görürsünüz.",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["Moderation"],
    category: "Yardım",
    async favian(client, message, args) {
       const Discord = require("discord.js")
       const prefix = client.ayarlar.prefix;
       const kembed = new Discord.MessageEmbed()
       .setAuthor(client.user.username, client.user.avatarURL())
       .setDescription(`
       **${prefix}reklam-engel**  => \`Reklam Engel Sistemi\`
       **${prefix}küfürengel**  => \`Küfür Engel Sistemi\`
       **${prefix}sunucukur**  => \`Sunucunuzu baştan kurar!\`
       **${prefix}emojiekle**  => \`Sunucunuza Belirtiğiniz Emojiyi Eklersiniz!\`
       **${prefix}nuke**  => \`Komutu Kullandığınız Kanalı Sıfırlar!\`
   
       `)
       .addFields(
         {name : `\u200b`, value:`[Sunucuna Ekle](${client.links.invitelinks})`, inline: true},
     {name : `\u200b`, value:`[Resmi Sunucu](${client.links.supportserver})`, inline: true},
     {name : `\u200b`, value:`[Oy Ver](${client.links.vote})`, inline: true}
       )
       .setColor(client.ayarlar.embedRenk)
   .setFooter(client.ayarlar.embedFooter)
   .setImage(client.ayarlar.resim)
       message.channel.send(kembed)
    }}