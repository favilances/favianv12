module.exports = {
    name: "kullanıcı",
    description: "Kullanıcı Komutlarını Görürsünüz.",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["user"],
    category: "Yardım",
    async favian(client, message, args) {
       const Discord = require("discord.js")
       const prefix = client.ayarlar.prefix;
       const kembed = new Discord.MessageEmbed()
       .setAuthor(client.user.username, client.user.avatarURL())
       .setDescription(`
       **${prefix}davet**  => \`Bot'un davet linklerini görürsünüz!\`
       **${prefix}yardım**  => \`Botun Komutlarını Görürsünüz!\`
       **${prefix}bilgi**  => \`Bot ile ilgili bilgileri görürsünüz!\`
       **${prefix}test**  => \`Bot'u test edersiniz!\`
       **${prefix}avatar**  => \`Belirtiğiniz Kullanıcının Avatarını Görürsünüz!\`
       **${prefix}istatistik**  => \`Bot'un istatistiğini görürsünüz!\`
   
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