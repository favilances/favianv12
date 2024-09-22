const Discord = require("discord.js");
module.exports = {
	name: 'message',
	async execute(message) {
        let maze = message.client;
        let db = maze.db;
        const { MessageButton } = require("discord-buttons")
        let prefix = maze.ayarlar.prefix;
        let m = message;
        if(message.author.bot || message.channel.type === "dm" || !message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase()
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(maze.user.username,maze.user.avatarURL())
        .setDescription(`Hey Selam, <@${message.author.id}> malesef botumuz bakımdadır. \n Kısa süre sonra tekrar deneyin.`)
        .setFooter(maze.ayarlar.embedFooter)
       
        if(db.fetch(`bakım`) == "aktif") return message.channel.send(embed);
        let karaliste = db.fetch(`karaliste_${message.author.id}`)
        const embed2 = new Discord.MessageEmbed() 
        .setDescription(`
        <:savana_no:929104901567578224> Hey, Selam! ${message.author.tag} botu kullanma izniniz kısıtlanmış!
        > __Sebep__ : ${karaliste}

        Şikayet için : [Resmi Sunucu](${maze.links.supportserver})
        `)
        .setTitle(maze.user.username)
        .setFooter(maze.ayarlar.embedFooter)
        if(karaliste) return message.channel.send(embed2) 
        let cmd;
        if(maze.commands.has(command)) {
          cmd = maze.commands.get(command);
        } else if(maze.aliases.has(command)) {
          cmd = maze.commands.find(sa => sa.aliases && sa.aliases.includes(command));
        }
        
        if (cmd) { cmd.favian(maze, message, args, prefix, m)
       
        }
        
	},
};