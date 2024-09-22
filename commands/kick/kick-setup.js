
module.exports = {
    name: "kick-setup",
    description: "Kick Sistemini Ayarlar",
    usage: "prefix+kick-setup",
    guildOnly: true,
    enabled: true,
    aliases: ["kick-ayarla"],
    cooldown: 5,
    category: "Kick",
   async favian(client, message, args) {
    const Discord = require("discord.js")

    const db = client.db;
    const yetkiembed = new Discord.MessageEmbed()
       .setColor('RED')
       .setTitle('___**HATA**___')
       .setDescription('**Yönetici** Yetkin Yok!')
       .setImage('https://s4.gifyu.com/images/yonetic.gif')
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetkiembed);
    let command = args[0];
    const embed = new Discord.MessageEmbed()
          .setColor(client.ayarlar.embedRenk)
          .setAuthor(`${client.user.username} » Kick Ayarla`, client.user.displayAvatarURL({dynamic: true}))
          .setDescription(`<:savana_banhammer:929104901584334988>   | » **Bir seçenek belirtmelisin;**
            \`yetkili\`,\`log\`
          `)
          .setFooter(client.ayarlar.embedFooter)
  if(!command) return message.inlineReply(embed)
  if (args[0] == 'yetkili') {
    let rol = message.mentions.roles.first();
             const ayarlanmadı = new Discord.MessageEmbed()
           .setTitle(`${client.user.username} - Kick Yetkili Rol Ayarla `)
           .setColor(client.ayarlar.embedRenk)
           .setDescription(`Ban Yetkili Rolü Belirt! `)
           .setThumbnail(client.user.avatarURL())
           .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
           if (!rol) return message.inlineReply(ayarlanmadı);
           const ayarlandı = new Discord.MessageEmbed()
         .setAuthor(client.user.username, client.user.avatarURL())
         .setTitle(`${client.user.username} - Kick Yetkili Ayarlandı `)
         .setColor(client.ayarlar.embedRenk)
         .setDescription(`Ban Yetkili Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
         .setThumbnail(client.user.avatarURL())
         .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
         db.set(`sunucu.ayarlar.kicksistem.yetkili_${message.guild.id}`, rol.id)
         message.inlineReply(ayarlandı)
         }
  if (args[0] == 'log') {
    let kanal = message.mentions.channels.first()
    const ayarlanmadı = new Discord.MessageEmbed()
  .setTitle(`${client.user.username} - Kick Log Kanalı Ayarla `)
  .setColor(client.ayarlar.embedRenk)
  .setDescription(`Kick Log Kanalı Belirt! `)
  .setThumbnail(client.user.avatarURL())
  .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
  if (!kanal) return message.inlineReply(ayarlanmadı);
  const ayarlandı = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle(`${client.user.username} - Kick Log Kanalı Ayarlandı `)
  .setColor(client.ayarlar.embedRenk)
  .setDescription(`Kick Log Kanalı Başarıyla ${kanal} Olarak Ayarlandı ! `)
  .setThumbnail(client.user.avatarURL())
  .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
  db.set(`sunucu.ayarlar.kicksistem.log_${message.guild.id}`, kanal.id)
  message.inlineReply(ayarlandı)

   }}
  }