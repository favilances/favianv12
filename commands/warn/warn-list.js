module.exports = {
    name: "warn-list",
    description: "Belirtiğiniz Kullanıcının Uyarı Sayısın Görürsünüz",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["uyarı-liste"],
    category: "Warn",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const {MessageButton} = require("discord-buttons")
        const db = client.db;
        const member = message.mentions.users.filter(s => s.ID !== client.user).first() || message.guild.members.cache.get(args[0]) || message.author 
        var data = db.get(`uyarı_${member.id}_${message.guild.id}`)
   if(!db.has(`uyarı_${member.id}_${message.guild.id}`) === true) {
       var yok = new Discord.MessageEmbed()
           .setColor(client.ayarlar.embedRenk)
           .setDescription(`${member} Adlı kişinin hiç bir uyarısı yok!`)
           .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic:true}))
           return message.channel.send(yok);
   }
   var list = Object.keys(data).map(_data => {
       return {
           id: (data[_data].kullanıcı),
           uyarısebep: (data[_data].sebep),
           moderator: (data[_data].moderator),
           uyarıid: (data[_data].uyarısayı)
       };
   })

   var embed = new Discord.MessageEmbed()
       .setColor(client.ayarlar.embedRenk)
       .setTitle(client.user.username)
       .setDescription(`
       <:savana_warn:929104901819215882> ${member} Adlı kişinin toplamda **${data.length}** Adet uyarısı var!
   ${list.splice(0, 10).map((item, index) => `**${index + 1}.** <@${item.id}> => 
  Sebep; **${item.uyarısebep}** 
  Moderator: <@${item.moderator}> (**${item.moderator}**) 
  Uyarı ID: **${item.uyarıid}**`).join("\n")}
   `)
       .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic:true}))

   message.channel.send(embed);
    }}