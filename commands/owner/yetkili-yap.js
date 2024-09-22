module.exports = {
    name: "yetkili-yap",
    description: "Belirlediğiniz kullanıcıya yetki verirsiniz!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: [],
    category: "Owner",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const db = client.db;
        let yetkili = client.db.fetch(`owner_${message.author.id}`)
        if(!yetkili) return message.channel.send(
          new Discord.MessageEmbed()
          .setColor(client.ayarlar.embedRenk)
          .setAuthor(`${client.user.username} Eval`, client.user.displayAvatarURL({dynamic: true}))
          .setDescription(`Bu komutu kullanmak için bot sahibi olman gerekli!!`)
          .setFooter(client.ayarlar.embedFooter)
          );
        client.inline;
        if (!args[0]) return message.inlineReply(`
        Bir seçenek belirt! \n __owner__ , __destek__ 
        `)
        if (args[0] === 'owner') {
            if(!args[1]) return;
            message.channel.send("\\✅")
            db.set(`owner_${args[1]}`,"owner")
        }
        if (args[0] === 'destek') {
            if(!args[1]) return;
            message.channel.send("\\✅")
            db.set(`supportteam_${args[1]}`,"support")
        }
    }}