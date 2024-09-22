module.exports = {
    name: "sistemler",
    description: "Sistems Komutlarını Görürsünüz.",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["systenm"],
    category: "Yardım",
    async favian(client, message, args) {
       const Discord = require("discord.js")
       const prefix = client.ayarlar.prefix;
       const kembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`
    **${prefix}ban-ayarla**  => \`Ban Sistemini Ayarlarsınız!\`
    **${prefix}uyarı-ayarla** (${prefix}uyarı-yardım)  => \`Uyarı Sistemini Ayarlarsınız!\`
    **${prefix}kick-ayarla**  => \`Kick Sistemini Ayarlarsınız!\`

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