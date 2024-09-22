
module.exports = {
    name: "warn-setup",
    description: "Warn Sistemini Ayarlar",
    usage: "prefix+warn-setup",
    guildOnly: true,
    enabled: true,
    aliases: ["uyarı-ayarla"],
    cooldown: 5,
    category: "Warn",
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
          .setAuthor(`${client.user.username} » Warn Ayarla`, client.user.displayAvatarURL({dynamic: true}))
          .setDescription(`<:savana_warn:929104901819215882> | » **Bir seçenek belirtmelisin;**
            \`yetkili\`,\`log\`
          `)
          .setFooter(client.ayarlar.embedFooter)
  if(!command) return message.inlineReply(embed)
  if (args[0] == 'yetkili') {
    let rol = message.mentions.roles.first();
             const ayarlanmadı = new Discord.MessageEmbed()
           .setTitle(`${client.user.username} - Warn Yetkili Rol Ayarla `)
           .setColor(client.ayarlar.embedRenk)
           .setDescription(`Warn Yetkili Rolü Belirt! `)
           .setThumbnail(client.user.avatarURL())
           .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
           if (!rol) return message.inlineReply(ayarlanmadı);
           const ayarlandı = new Discord.MessageEmbed()
         .setAuthor(client.user.username, client.user.avatarURL())
         .setTitle(`${client.user.username} - Warn Yetkili Ayarlandı `)
         .setColor(client.ayarlar.embedRenk)
         .setDescription(`Warn Yetkili Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
         .setThumbnail(client.user.avatarURL())
         .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
         db.set(`sunucu.ayarlar.warn.staff_${message.guild.id}`, rol.id)
         message.inlineReply(ayarlandı)
         }
  if (args[0] == 'log') {
    let kanal = message.mentions.channels.first()
    const ayarlanmadı = new Discord.MessageEmbed()
  .setTitle(`${client.user.username} - Warn Log Kanalı Ayarla `)
  .setColor(client.ayarlar.embedRenk)
  .setDescription(`Warn Log Kanalı Belirt! `)
  .setThumbnail(client.user.avatarURL())
  .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
  if (!kanal) return message.inlineReply(ayarlanmadı);
  const ayarlandı = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle(`${client.user.username} - Warn Log Kanalı Ayarlandı `)
  .setColor(client.ayarlar.embedRenk)
  .setDescription(`Warn Log Kanalı Başarıyla ${kanal} Olarak Ayarlandı ! `)
  .setThumbnail(client.user.avatarURL())
  .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
  db.set(`sunucu.ayarlar.warn.log_${message.guild.id}`, kanal.id)
  message.inlineReply(ayarlandı)

   }}
  }