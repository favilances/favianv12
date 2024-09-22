module.exports = {
    name: "istatistik",
    description: "Bot'un istatistiğini görürsünüz!",
    usage: "prefix+i",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["i"],
    category: "User",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const moment = require("moment")
        require("moment-duration-format");
        const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
        const embed = new Discord.MessageEmbed()
        .setColor(client.ayarlar.embedRenk)
        .setFooter(client.ayarlar.embedFooter)
        .setAuthor(client.user.username, client.user.avatarURL())
        .setImage(client.ayarlar.resim)
        .setDescription(`
        ${client.user.username} | Bot İstatistik
        > **Sunucu Sayısı:** \`${client.guilds.cache.size}\`
        > **Kullanıcı Sayısı:** \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\`
        > **Komut Sayısı:** \`${client.commands.size}\`
        > **Kanal Sayısı:** \`${client.channels.cache.size}\`
        > **Ping:** \`${client.ws.ping}ms\`
        > **Aktiflik Süresi:** \`${duration}\`

        ${client.user.username} | Modül Sürümleri
        > **Discord.js:** \`${Discord.version}\`
        > **Moment:** \`${moment.version}\`

        ${client.user.username} | Yapımcıları
        > **Favilancesxld#0045** | <@891554381760192552>
        `)
        message.channel.send(embed)
    }}