module.exports = {
    name: "eval",
    description: "Kod Denersiniz",
    usage: "prefix+eval",
    guildOnly: true,
    enabled: true,
    aliases: ["evsat"],
    cooldown: 5,
    category: "Owner",
    async favian(client, message, args) {
     client.inline;
      const Discord = require("discord.js")
      const db = client.db;
      const {MessageButton} = require("discord-buttons")
      let c = client;
      let m = message;
      let yetkili = client.db.fetch(`owner_${message.author.id}`)
      if(!yetkili) return message.channel.send(
        new Discord.MessageEmbed()
        .setColor(client.ayarlar.embedRenk)
        .setAuthor(`${client.user.username} Eval`, client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Bu komutu kullanmak için bot sahibi olman gerekli!!`)
        .setFooter(client.ayarlar.embedFooter)
        );
     
        try {
          let kod = args.join(" ");
          let kodd = eval(kod);
          if (!kod)
            return message.channel.send(
              new Discord.MessageEmbed()
                .setColor(client.ayarlar.embedRenk)
                .setAuthor(
                  `${client.user.username} => Eval`,
                 client.user.displayAvatarURL({ dynamic: true, format: "png" })
                )
                .setTitle(`Başarısız!`)
                .setDescription(
                  `Çalıştırmayı denemek için bir kod belirtmelisin!`
                )
                .setFooter(
                  `${client.ayarlar.embedFooter}`
                )
                .setTimestamp()
            );
          if (typeof code !== "string")
            kod = require("util").inspect(kod, { depth: 0 });
          return message.channel.send(
            new Discord.MessageEmbed()
            .setColor(client.ayarlar.embedRenk)
            .setAuthor(
              `${client.user.username} => Eval`,
              client.user.displayAvatarURL({ dynamic: true, format: "png" })
              )
              .setTitle(`Başarılı!`)
              .addField("» Giriş", `\`\`\`js\n${kod}\n\`\`\``)
              .addField("» Çıkış", `\`\`\`js\n${kodd}\n\`\`\``)
              .setFooter(
                `${client.ayarlar.embedFooter}`
              )
              .setTimestamp()
          );
        } catch (e) {
          return message.channel.send(
            new Discord.MessageEmbed()
              .setColor(client.ayarlar.embedRenk)
              .setAuthor(
                `${client.user.username} => Eval`,
                client.user.displayAvatarURL({ dynamic: true, format: "png" })
              )
              .setTitle(`Başarısız!`)
              .addField("» Hata", `\`\`\`js\n${e}\`\`\``)
              .setFooter(
                `${client.ayarlar.embedFooter}`
              )
              .setTimestamp()
          );
        }
    }
  }