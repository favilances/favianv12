module.exports = {
    name: "sunucu-kur",
    description: "Sunucunuzu baştan kurar!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["sunucukur"],
    category: "Moderation",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const db = client.db;
        if(message.author.id !== message.guild.ownerID){
            message.channel.send("Bu komutu sadece sunucu sahibi kullanabilir.")
            return;
        }
        const {MessageButton} = require("discord-buttons")
        var botlist = new MessageButton()
        .setStyle('gray')
        .setLabel("Bot List")
        .setID("botlist")
        .setEmoji("929104901752119306")
        var youtuber = new MessageButton()
        .setStyle('gray')
        .setLabel("Youtuber")
        .setID("youtuber")
        .setEmoji("929104901873758319")
        var public = new MessageButton()
        .setStyle('gray')
        .setLabel("Public")
        .setID("public")
        .setEmoji("929104901743730728")
        const embed = new Discord.MessageEmbed()
        .setDescription(`
         Sunucu Kurabilmek İçin Altaki Butonları Kullanabilirsin!

         **<:savana_themes:929104901500444733> | Temalar;**

         > <:savana_bot:929104901752119306> | \`Botlist\` => Botlist Temasını Kurmak İçin Alttaki **Bot List** Butonuna Tıkla! [Şablon](https://discord.new/e3aM6dBmN63s) \n
         > <:savana_youtube:929104901873758319> | \`Youtuber (YAKINDA)\` => Youtuber Temasını Kurmak İçin Alttaki **Youtuber** Butonuna Tıkla! [Şablon](${client.links.invitelinks}) \n
         > <:savana_public:929104901743730728> | \`Public (YAKINDA)\` => Public Temasını Kurmak İçin Alttaki **Public** Butonuna Tıkla! [Şablon](${client.links.invitelinks}) \n

        `)
        .setColor(client.ayarlar.embedRenk)
        .setFooter(client.ayarlar.embedFooter)
        .setAuthor(client.user.username + `=> Sunucu Kur`, client.user.avatarURL())
        let msg = await message.channel.send({ embed: embed , buttons : [ botlist, youtuber, public]})
        var filter = (button) => button.clicker.user.id === message.author.id;
        let collector = await msg.createButtonCollector(filter, { time: 60000 })
        collector.on("collect", async (button) => {
            if(button.id === "botlist") {
              const mazeembed = new Discord.MessageEmbed()
              .setAuthor(client.user.username + `=> Sunucu Kur`, client.user.avatarURL())
              .setDescription("**Sunucu Teması** `botlist` olarak değiştiriliyor!")
              .setColor(client.ayarlar.embedRenk)
              .setFooter(client.ayarlar.embedFooter)
             await button.think(true)
              await button.reply.edit(mazeembed)
              message.guild.channels.cache.forEach(x => x.delete())

              message.guild.roles.create({ data: 
                { name: '👑 ・Kurucu',
                 color: "#030303"
                 }}).then(role => {role.setPermissions(
                   ['ADMINISTRATOR']
                   )});
                   message.guild.roles.create({ data: 
                    { name: '⚒️ ・Staff',
                     color: "#0545ff"
                     }}).then(role => {role.setPermissions(
                       ['BAN_MEMBERS','MANAGE_MESSAGES']
                       )});
                       message.guild.roles.create({ data: 
                        { name: '🏵・Bot Sahibi',
                         color: "#00f805"
                         }}).then(role => {role.setPermissions(
                           ["VIEW_CHANNEL"]
                           )});
                       message.guild.roles.create({ data: 
                        { name: '⚡ ・ Üye',
                         color: "#19ff00"
                         }}).then(role => {role.setPermissions(
                           ["VIEW_CHANNEL"]
                           )});
                           message.guild.roles.create({ data: 
                            { name: '・🏵 ┊・Bot List Botları',
                             color: "#dd8136"
                             }}).then(role => {role.setPermissions(
                               ["VIEW_CHANNEL"]
                               )});
            message.guild.channels.create(`${message.guild.name}・Bilgi・📖`, {type: "category"})
            message.guild.channels.create('『📣』duyuru', {type: "text"}).then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === `${message.guild.name}・Bilgi・📖`)));
            message.guild.channels.create('『📚』kurallar', {type: "text"}).then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === `${message.guild.name}・Bilgi・📖`)));
            message.guild.channels.create('『📝』bot-ekleme-şartları', {type: "text"}).then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === `${message.guild.name}・Bilgi・📖`)));
            message.guild.channels.create('『🚀』boostcuklar', {type: "text"}).then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === `${message.guild.name}・Bilgi・📖`)));
            message.guild.channels.create(`${message.guild.name}・Yazı Kanalları・💬`, {type: "category"})
            message.guild.channels.create('『💬』sohbet', {type: "text"}).then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === `${message.guild.name}・Yazı Kanalları・💬`)));
            message.guild.channels.create('『📷』foto-chat', {type: "text"}).then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === `${message.guild.name}・Yazı Kanalları・💬`)));
            message.guild.channels.create(`${message.guild.name}・Partner・🎈`, {type: "category"})
            message.guild.channels.create('『🎈』partner', {type: "text"}).then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === `${message.guild.name}・Partner・🎈`)));
            message.guild.channels.create('『🎈』partner-log', {type: "text"}).then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === `${message.guild.name}・Partner・🎈`)));

          }
            if(button.id === "youtuber") {
                const mazeembed = new Discord.MessageEmbed()
                .setAuthor(client.user.username + `=> Sunucu Kur`, client.user.avatarURL())
                .setDescription("**Sunucu Teması** `youtuber` olarak değiştiriliyor!")
                .setColor(client.ayarlar.embedRenk)
                .setFooter(client.ayarlar.embedFooter)
               await button.think(true)
                //await button.reply.edit(mazeembed)
                await button.reply.edit("YAKINDA")
              }
              if(button.id === "public") {
                const mazeembed = new Discord.MessageEmbed()
                .setAuthor(client.user.username + `=> Sunucu Kur`, client.user.avatarURL())
                .setDescription("**Sunucu Teması** `youtuber` olarak değiştiriliyor!")
                .setColor(client.ayarlar.embedRenk)
                .setFooter(client.ayarlar.embedFooter)
               await button.think(true)
               // await button.reply.edit(mazeembed)
                await button.reply.edit("YAKINDA")
              }
          });
          collector.on("end", async () => {
          });
        }
    }

 