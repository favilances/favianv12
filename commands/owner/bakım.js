module.exports = {
    name: "bakım",
    description: "Bakım Modunu Açarsınız",
    usage: "prefix+bakım aç / kapat",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["maintenance"],
    category: "Owner",
    async favian (client, message, args) {
   
      const db = client.db;
      const Discord = require("discord.js")
      let yetkili = client.db.fetch(`owner_${message.author.id}`)
      if(!yetkili) return message.channel.send(
        new Discord.MessageEmbed()
        .setColor(client.ayarlar.embedRenk)
        .setAuthor(`${client.user.username} Eval`, client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Bu komutu kullanmak için bot sahibi olman gerekli!!`)
        .setFooter(client.ayarlar.embedFooter)
        );
      client.inline;
      if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)
 
      if (args[0] === 'aç') {
        
        db.set(`bakım`, 'aktif')
        message.channel.send(`Bakım modu açıldı!`)
     
      }
      
      if (args[0] === 'kapat') {
        
        db.set(`bakım`, 'deaktif')
        message.channel.send(`Bakım modu kapatıldı!`)
    
      }
    }
  }