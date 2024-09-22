module.exports = {
    name: "warn",
    description: "Belirtiğiniz Kullanıcıyı Uyarırsınız!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["uyar"],
    category: "Warn",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const {MessageButton} = require("discord-buttons")
        const db = client.db;
        var gen = require('randomcode');
        let id = gen(5);
    
        const member = message.mentions.users.filter(s => s.ID !== client.user).first()
        const reason = args.slice(1).join(' ');
        let log = db.fetch(`sunucu.ayarlar.warn.log_${message.guild.id}`)
        let staff = db.fetch(`sunucu.ayarlar.warn.staff_${message.guild.id}`)
        if(!log) {
            const fembed = new Discord.MessageEmbed()
                  .setColor(client.ayarlar.embedRenk)
                  .setAuthor(`${client.user.username} » Warn`, client.user.displayAvatarURL({dynamic: true}))
                  .setDescription(`<:savana_warn:929104901819215882>  | » Log Kanalı Ayarlanmamış!`)
                  .setFooter(client.ayarlar.embedFooter)
                  return message.channel.send(fembed)
        }
        if(!staff) {
            const fembed = new Discord.MessageEmbed()
                  .setColor(client.ayarlar.embedRenk)
                  .setAuthor(`${client.user.username} » Warn`, client.user.displayAvatarURL({dynamic: true}))
                  .setDescription(`<:savana_warn:929104901819215882>  | » Yetkili Rolü Ayarlanmamış!`)
                  .setFooter(client.ayarlar.embedFooter)
                  return message.channel.send(fembed)
        }
        const dembed = new Discord.MessageEmbed()
            .setColor(client.ayarlar.embedRenk)
            .setAuthor(`${client.user.username} » Warn`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`<:savana_warn:929104901819215882>  | Bu komutu kullanmak için <@&${staff}> rolüne sahip olmalısın!`)
            .setFooter(client.ayarlar.embedFooter)
            if(!message.member.roles.cache.has(staff)) return message.inlineReply(dembed);
        if(!member) {
            const jembed = new Discord.MessageEmbed()
            .setColor(client.ayarlar.embedRenk)
            .setAuthor(`${client.user.username} » Warn`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`<:savana_warn:929104901819215882> | » Bir kullanıcı belirtmelisin!`)
            .setFooter(client.ayarlar.embedFooter)
            return message.channel.send(jembed)
        }
    
        if(!reason) {
            const jembed = new Discord.MessageEmbed()
            .setColor(client.ayarlar.embedRenk)
            .setAuthor(`${client.user.username} » Warn`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`<:savana_warn:929104901819215882> | » Bir sebep belirtmelisin!`)
            .setFooter(client.ayarlar.embedFooter)
            return message.channel.send(jembed)
        }
        
        if(member.id === message.author.id) return message.channel.send("Kendine uyarı veremezsin!")
        if(member.id === client.user.id) return message.channel.send("Kendime uyarı veremem!")
         
        db.push(`uyarı_${member.id}_${message.guild.id}`, { kullanıcı: member.id, sebep: reason, sunucu: message.guild.id, moderator: message.author.id, uyarısayı: id})
        message.channel.send("\\✅ __Başarılı!__ Uyarı Başarıyla Verildi! \n Gerekli bilgiler log kanalına gönderildi.")
        const logembed = new Discord.MessageEmbed()
        .setColor(client.ayarlar.embedRenk)
        .setAuthor(`${client.user.username} » Warn`, client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`
  > » **Uyarı Alan:** ${member} (\`${member.id}\`)
  > » **Yetkili:** ${message.author.tag} (\`${message.author.id}\`)
  > » **Sebep:** \`${reason}\`
  > » **Uyarı ID:** \`${id}\`

          `)
        .setFooter(client.ayarlar.embedFooter)
        let mesajbutton = new MessageButton()
        .setStyle('url')
        .setLabel('Mesaj Linki')
        .setURL(`https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`)
  client.channels.cache.get(log).send({embed: logembed , buttons: mesajbutton})
    }}