module.exports = {
    name: "avatar",
    description: "Belirtiğiniz Kullanıcının Avatarını Görürsünüz!!",
    usage: "prefix+avatar",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: [],
    category: "User",
    async favian(client, message, args) {
        const Discord  = require("discord.js")
        const user = message.mentions.users.first() || message.author;

        const avatar = new Discord.MessageEmbed()
        .setImage(user.displayAvatarURL({size:4096,dynamic:true}))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`<@${user.id}> adlı kullanıcının avatar'ı`)
       return message.channel.send(avatar)
    }}