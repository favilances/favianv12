module.exports = {
    name: "owner",
    description: "owner Komutlarını Görürsünüz.",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["sahip"],
    category: "Yardım",
    async favian(client, message, args) {
       const Discord = require("discord.js")
       const prefix = client.ayarlar.prefix;
       const kembed = new Discord.MessageEmbed()
       .setAuthor(client.user.username, client.user.avatarURL())
       .setDescription(`
       **${prefix}karaliste**  => \`Kullanıcıyı karaliste ye allırsınız!\`
       **${prefix}beyazliste**  => \`Kullanıcıyı beyazliste ye allırsınız!\`
       **${prefix}bakım**  => \`Bakım Modunu Açarsınız!\`
       **${prefix}eval**  => \`Kod Denersiniz!\`
       **${prefix}yetkili-yap**  => \`Belirlediğiniz kullanıcıya yetki verirsiniz! (BOT İÇİ)\`
       **${prefix}yetki-al**  => \`Belirlediğiniz kullanıcıdan yetki alırsınız! (BOT İÇİ)\`
       
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