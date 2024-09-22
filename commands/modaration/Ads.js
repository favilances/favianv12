module.exports = {
    name: "ads",
    description: "Reklam Engel Sistemi",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["reklam-engel"],
    category: "Moderation",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const db = client.db;
        client.inline;
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için **MESAJLARI YÖNET** yetkisine sahip olmalısın!')
        if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! \n Nasıl Kullanılıcağını bilmiyorsanız ${client.ayarlar.prefix}reklam-engel yardım`)
        if (args[0] === 'yardım') {
          const YardımEmbed = new Discord.MessageEmbed()
          .setDescription(`
         >  | ${client.ayarlar.prefix}reklam-engel aç \`Reklam Engel Sistemini Aktif Edersiniz!\`
         >  | ${client.ayarlar.prefix}reklam-engel kapat \`Reklam Engel Sistemini Kapatırsınız!\`
         >  | ${client.ayarlar.prefix}reklam-engel log \`Reklam Engel Log Kanalını Ayarlarsınız!\`
         >  | ${client.ayarlar.prefix}reklam-engel mesaj \`Reklam Yapan Kişiye Verilecek Cevap!\`
          `)
        .setTitle(`${client.user.username} - Reklam Engel `)
        .setColor(client.ayarlar.embedRenk)
        .setFooter(client.ayarlar.embedFooter)
        message.inlineReply(YardımEmbed)
        }
        if (args[0] === 'aç') {
           let log = db.fetch(`sunucu.ayarlar.moderation.ads.log_${message.guild.id}`)
           if(!log) return message.channel.send("<:savana_no:929104901567578224> | Reklam Engel Sistemini Aktif Edebilmek İçin Log Kanalı Ayarlamalısın!")
           let adsmessage = db.fetch(`sunucu.ayarlar.moderation.ads.message_${message.guild.id}`)
           if(!adsmessage) return message.channel.send("<:savana_no:929104901567578224> | Reklam Engel Sistemini Aktif Edebilmek İçin Engel Mesajı Ayarlamalısın!")
          db.set(`sunucu.ayarlar.moderation.ads_${message.guild.id}`, 'aktif')
          message.channel.send(`<:savana_yes:929104901877928016> | **Reklam Engel** Başarıyla Aktif Edildi  `)
       
        }
      
        
        if (args[0] === 'kapat') {
          
          db.delete(`sunucu.ayarlar.moderation.ads_${message.guild.id}`)
          message.channel.send(`<:savana_yes:929104901877928016> | **Reklam Engel** Başarıyla DeAktif Edildi  `)
          db.delete(`sunucu.ayarlar.moderation.ads.log_${message.guild.id}`)
          db.delete(`sunucu.ayarlar.moderation.ads.message_${message.guild.id}`)

        }
        if (args[0] === 'log') {    
            let channel = message.mentions.channels.first()    
            if(!channel) return message.channel.send("<:savana_no:929104901567578224> | Bir log kanalı belirtin! ")
              db.set(`sunucu.ayarlar.moderation.ads.log_${message.guild.id}`, channel)
              message.channel.send(`<:savana_yes:929104901877928016> | ${channel} başarıyla reklam log kanalı olarak ayarlandı  `)
    }
    if (args[0] === 'mesaj') {  
      let messageads = args.slice(1).join(' ')
      if(!messageads) return message.channel.send("<:savana_no:929104901567578224> | Bir mesaj belirtin! ")
        db.set(`sunucu.ayarlar.moderation.ads.message_${message.guild.id}`, messageads)
        message.channel.send(`<:savana_yes:929104901877928016> | Reklam Engel Mesajı \`${messageads}\` olarak ayarlandı! \n \n Örnek; <@${message.author.id}>, ${messageads}`)
    }
    }}