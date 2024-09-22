module.exports = {
    name: "emoji-ekle",
    description: "Sunucunuza Belirtiğiniz Emojiyi Eklersiniz!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: ["emojiekle","ee"],
    category: "Moderation",
    async favian(client, message, args) {
        const Discord = require("discord.js")
        const db = client.db;
        const { parse } = require("twemoji-parser");
        const yetkiembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('___**HATA**___')
        .setDescription('**Emojileri Yönet** Yetkin Yok!')
        .setImage('https://s4.gifyu.com/images/emojileriyonet.gif')
                if (!message.member.hasPermission("MANAGE_EMOJIS")) {
        
        
                    return message.channel.send(yetkiembed)
        
                }
        
                const emoji = args[0];
        
                if (!emoji) return message.channel.send(`Bir emoji girmelisin!`);
        
                let customemoji = Discord.Util.parseEmoji(emoji);
        
                if (customemoji.id) {
        
                    const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        
                      customemoji.animated ? "gif" : "png"
        
                    }`;
        
                    const name = args.slice(1).join(" ");
        
                    message.guild.emojis.create(
        
                        `${Link}`,
        
                        `${name || `${customemoji.name}`}`
        
                    ).catch(error => {
        
                        console.log(error)
        
                    })
        
                    const Added = new Discord.MessageEmbed()
        
                        .setTitle(`${client.user.username} | Emoji Eklendi!`)
        
                        .setColor("RANDOM" )
        
                        .setDescription(
        
                            `**Emoji eklendi!** | **İsim:** \`${name || `${customemoji.name}`}\` | **Ön İzleme:** [Bana Tıkla](${Link})`
        
                        );
        
                    return message.channel.send(Added).catch(e => {
        
                        console.log(e)
        
                    })
        
                } else {
        
                    let CheckEmoji = parse(emoji, {
        
                        assetType: "png"
        
                    });
        
                    if (!CheckEmoji[0])
        
                        return message.channel.send(`Lütfen geçerli bir emoji girin!`);
        
                    message.channel.send(
        
                        `Normal emojileri sunucunuza ekleyemezsiniz!`
        
                    );
        
                }
  
    }}