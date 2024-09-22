module.exports = {
    name: "emoji",
    description: "Emoji Değiştirirsiniz!",
    usage: "prefix+emoji test <emoji>",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: [],
    category: "Owner",
    async favian(client, message, args, m) {
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

          if(!args[0]) {
        message.channel.send("Bir seçenek belirt! \n __davet__ , __destek__ , __oyver__ , __kullanıcı__ , __moderasyon__ , __sistemler__ , __logo__ , __eğlence__ , __sahip__ , __no__ , __yes__ ")
    }

        if(args[0] === "davet") {
            if(!args[1]) return message.channel.send("Bir emoji belirtmelisin!")
            message.channel.send(`Davet emojisi başarıyla ${args[1]} olarak ayarlandı!`)
            db.set(`bot.ayarlar.emoji.davet`,args[1])
    }
        if(args[0] == "destek"){
            if(!args[1]) return m.channel.send("Bir emoji belirtmelisin!")
            message.channel.send(`Destek emojisi başarıyla ${args[1]} olarak ayarlandı!`)
            db.set(`bot.ayarlar.emoji.destek`, args[1])
    }
        if(args[0] == "oyver") {
            if(!args[1]) return m.channel.send("Bir emoji belirmelisin!")
            message.channel.send(`Oyver emojisi başarıyla ${args[1]} olarak ayarlandı!`)
            db.set(`bot.ayarlar.emoji.oyver`,args[1])
        }
        if(args[0] == "kullanıcı") {
            if(!args[1]) return m.channel.send("Bir emoji belirtmelisin!")
            message.channel.send(`Kullanıcı emojisi başarıyla ${args[1]} olarak ayarlandı!`)
            db.set(`bot.ayarlar.emoji.kullanıcı`, args[1])
        }
        
    }}