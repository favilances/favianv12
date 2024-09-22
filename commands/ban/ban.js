module.exports = {
    name: "ban",
    description: "Kullanıcıyı banlar",
    usage: "prefix+ban",
    guildOnly: true,
    enabled: true,
    aliases: ["yasakla"],
    cooldown: 5,
    category: "Ban",
   async favian(client, message, args) {
       const Discord = require("discord.js")
    const db = client.db
    const {MessageButton} = require("discord-buttons")
    let yetkili = db.fetch(`sunucu.ayarlar.bansistem.yetkili_${message.guild.id}`)
    const sembed = new Discord.MessageEmbed()
    .setColor(client.ayarlar.embedRenk)
    .setAuthor(`${client.user.username} » Yasakla`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`<:savana_banhammer:929104901584334988>   | Yetkili Rolü Ayarlanmamış!`)
    .setFooter(client.ayarlar.embedFooter)
        if(!yetkili) return message.inlineReply(sembed);
            const dembed = new Discord.MessageEmbed()
            .setColor(client.ayarlar.embedRenk)
            .setAuthor(`${client.user.username} » Yasakla`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`\<:savana_banhammer:929104901584334988>   | Bu komutu kullanmak için <@&${yetkili}> rolüne sahip olmalısın!`)
            .setFooter(client.ayarlar.embedFooter)
            if(!message.member.roles.cache.has(yetkili)) return message.inlineReply(dembed);
            let log = db.fetch(`sunucu.ayarlar.bansistem.log_${message.guild.id}`)
            const fembed = new Discord.MessageEmbed()
                  .setColor(client.ayarlar.embedRenk)
                  .setAuthor(`${client.user.username} » Yasakla`, client.user.displayAvatarURL({dynamic: true}))
                  .setDescription(`\<:savana_banhammer:929104901584334988>   | » Log Kanalı Ayarlanmamış!`)
                  .setFooter(client.ayarlar.embedFooter)
            if(!log) return message.inlineReply(fembed)
    let banuser = message.mentions.users.first()
    if(message.author.id == banuser) return message.inlineReply("Kendini banlayamazsın sunucudan çık!")
    if(client.user.id == banuser) return message.inlineReply("Bot'u banlayamazsın!")
    const jembed = new Discord.MessageEmbed()
          .setColor(client.ayarlar.embedRenk)
          .setAuthor(`${client.user.username} » Yasakla`, client.user.displayAvatarURL({dynamic: true}))
          .setDescription(`\<:savana_banhammer:929104901584334988>   | » Bir kullanıcı belirtmelisin!`)
          .setFooter(client.ayarlar.embedFooter)
    if(!banuser) return message.inlineReply(jembed);
    let sebep = args.slice(1).join(' ');
    const kembed = new Discord.MessageEmbed()
          .setColor(client.ayarlar.embedRenk)
          .setAuthor(`${client.user.username} » Yasakla`,client.user.displayAvatarURL({dynamic: true}))
          .setDescription(`\<:savana_banhammer:929104901584334988>   | » Bir Sebep belirtmelisin!`)
          .setFooter(client.ayarlar.embedFooter)
    if(!sebep) return message.inlineReply(kembed)
    var button = new MessageButton()
      .setID("banonay")
      .setLabel('✅ Onaylıyorum')
      .setStyle('green')
      var button2 = new MessageButton()
      .setID("banred")
      .setLabel('❌ Reddet')
      .setStyle('red')
    let onayy = new Discord.MessageEmbed()
    .setDescription(`\`${banuser.tag}\`  **Adlı şahsın yasaklanmasını onaylıyor musunuz?**`)
    .setColor(client.ayarlar.embedRenk)
    .setFooter(client.ayarlar.embedFooter)
    .setAuthor(`${client.user.username} » Yasakla`, client.user.displayAvatarURL({dynamic: true}))
    let msg = await message.channel.send({ embed: onayy , buttons : [ button, button2]})
      
      var filter = (button) => button.clicker.user.id === message.author.id;
     
      let collector = await msg.createButtonCollector(filter, { time: 30000 })
      collector.on("collect", async (button) => {
      if(button.id === "banonay") {
          message.guild.members.ban(banuser,{reason: `"${message.author.tag}" tarafından "${sebep}" sebebiyle yasaklanmış!`})
          const okembed = new Discord.MessageEmbed()
                .setColor(client.ayarlar.embedRenk)
                .setAuthor(`${client.user.username} » Yasakla`, client.user.displayAvatarURL({dynamic: true}))
                .setDescription(`\<:savana_banhammer:929104901584334988>   | » ${banuser} başarıyla yasaklandı gerekli bilgiler <#${log}> kanalına gönderildi!`)
                .setFooter(client.ayarlar.embedFooter)
                let okbutton = new MessageButton()
                .setStyle('url')
                .setLabel('Log Kanalı!')
                .setURL(`https://discord.com/channels/${message.guild.id}/${log}`)
                await button.message.edit({embed: okembed , buttons: [okbutton]})
          const logembed = new Discord.MessageEmbed()
                .setColor(client.ayarlar.embedRenk)
                .setAuthor(`${client.user.username} » Yasakla`, client.user.displayAvatarURL({dynamic: true}))
                .setDescription(`
          > » **Yasaklanan:** ${banuser.tag} (\`${banuser.id}\`)
          > » **Yasaklayan:** ${message.author.tag} (\`${message.author.id}\`)
          > » **Sebep:** \`${sebep}\`
                  `)
                .setFooter(client.ayarlar.embedFooter)
                let mesajbutton = new MessageButton()
                .setStyle('url')
                .setLabel('Mesaj Linki')
                .setURL(`https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`)
          client.channels.cache.get(log).send({embed: logembed , buttons: mesajbutton})
      }
      if(button.id === "banred") {
          msg.delete();
      }
      if(button.id === "ok") {
        msg.delete();
    }
    });
    
      collector.on("end", async () => {
        msg.delete();
      });
    
    
      
    }
  }