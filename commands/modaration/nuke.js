module.exports = {
    name: "nuke",
    description: "Komutu Kullandığınız Kanalı Sıfırlar!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: [],
    category: "Moderation",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const yetki = new Discord.MessageEmbed()
        .setDescription(`Bu komutu kullanabilmek için MANAGE_CHANNELS-KANALLARI YÖNET yetkisine sahip olmanız gerekir!`)
          .setTitle('Başarısız!')
          .setColor('RED')
          .setImage('https://s4.gifyu.com/images/KANALALRI-YOENT.gif')
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(yetki);
        message.channel.clone().then(knl => {
          let position = message.channel.position;
          knl.setPosition(position);
          message.channel.delete();
          const embed = new Discord.MessageEmbed()
          .setTitle('Bir kanal patladı!')
          .setColor("GREEN")
        .setImage('https://media1.giphy.com/media/oe33xf3B50fsc/giphy.gif')
            .setThumbnail(message.author.displayAvatarURL({size:4096,dynamic:true}))
        .setFooter(`Nuke atan: ${message.author.username}`)
        knl.send(embed)
        });
    }}