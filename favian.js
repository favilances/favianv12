const Discord = require("discord.js");

const fs = require("fs")

require("dotenv").config()

const chalk = require("chalk")

var deasync = require('deasync');

const { promisify } = require("util");

const moment = require("moment")

const { send } = require("process");

const efdb = require("efdb")
const db = new efdb({
  databaseName : "favian",
  adapter : "JsonDB"
})

const client = new Discord.Client ({
  disableMentions: "everyone", 
  ws: { 
    intents: ["GUILD_MEMBERS", "GUILD_WEBHOOKS", "GUILD_VOICE_STATES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILDS", "GUILD_BANS", "GUILD_EMOJIS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING"] 
  },
  autoReconnect: true,
  restTimeOffset: 0,
  messageEditHistoryMaxSize: 200,
  messageCacheMaxSize: 200,
  messageSweepInterval: 180,
  messageCacheLifetime: 180,
  partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
  shardCount: 1,
  disableEveryone: true
})

const logs = require('discord-logs');
logs(client);
require('discord-buttons')(client)

client.ayarlar = {
    token: "",
    prefix: "",
    sahip: [""],
    embedRenk: "",
    embedFooter: "",
    resim: "",
    oauthSecret: "",
	  callbackURL: "",
    id: "",
    port: ""
}

client.links = {
  invitelinks: "",
  supportserver : "",
  vote : "",
  oy : ""
}



const Favian = {
  DEV: ""
}

client.on("shardReady",() => {
  console.log(
    chalk.white("[" )+
      chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
      chalk.white("] " )+
    chalk.magenta(`Shard`) + 
    chalk.white(" | " )+
    chalk.cyan(`Aktif!`) 
  );
})

client.db = db;

client.inline = require("./bot/inlineReply");

client.on("ready", () => {
  client.user.setActivity(`${client.user.username} | ${client.ayarlar.prefix}yardım`, { type: 'WATCHING', status:'dnd' })
  console.log(
    chalk.white("[" )+
      chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
      chalk.white("] " )+
    chalk.red(`${client.user.username}`) + 
    chalk.white(" | " )+
    chalk.red(`Discord'a Bağlandı!`) 
  );
})

client.on('rateLimit', (info) => {
  chalk.white("[" )+
      chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
      chalk.white("] " )+
    chalk.red(`Rate Limit`) + 
    chalk.white(" | " )+
    chalk.cyan(`${info.timeDifference ? info.timeDifference : info.timeout ? info.timeout: 'Zaman Bulunamadı '}`) 
  //console.log(`Rate limit hit ${info.timeDifference ? info.timeDifference : info.timeout ? info.timeout: 'Unknown timeout '}`)
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {

	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
    console.log(
      chalk.white("[" )+
      chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
      chalk.white("] " )+
      chalk.blue(`Yükleyici`) + 
      chalk.white(" | " )+
      chalk.blue(`${command.name} Yüklendi`) 
    );
   // console.log(`[Yüklenen Komut]: ${command.name}`)
		client.commands.set(command.name, command)
    if(command.aliases) {
      command.aliases.forEach(alias => {
        client.aliases.set(alias, command.name);
      });
    }
	}
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
  console.log(
    chalk.white("[" )+
      chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
      chalk.white("] " )+
    chalk.blue(`Yükleyici`) + 
    chalk.white(" | " )+
    chalk.blue(`Eventler Yüklendi`) 
  );
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.cooldowns = new Discord.Collection()




client.login(client.ayarlar.token)

/*client.on("ready", async() => {
  console.log(
    chalk.white("[" )+
      chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
      chalk.white("] " )+
    chalk.yellow(`Website`) + 
    chalk.white(" | " )+
    chalk.yellow(`Aktif!`) 
  );
    require("./web.js")(client)
  }) */

  client.on("disconnect", function(event){
    console.log(
      chalk.white("[" )+
      chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
      chalk.white("] " )+
      chalk.magenta(`${client.user.username}`) + 
      chalk.white(" | " )+
      chalk.cyan(`Kapandı!`) 
    );
});

client.on("error", function(error){
  console.log(
    chalk.white("[" )+
    chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
    chalk.white("] " )+
    chalk.magenta(`Error`) + 
    chalk.white(" | " )+
    chalk.cyan(`${error}`) 
  );
});

client.on("warn", function(info){
  console.log(
    chalk.white("[" )+
    chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
    chalk.white("] " )+
    chalk.magenta(`Warn`) + 
    chalk.white(" | " )+
    chalk.cyan(`${info}`) 
  );
});
client.on("debug", function(info){
  console.log(
    chalk.white("[" )+
    chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
    chalk.white("] " )+
    chalk.magenta(`Debug`) + 
    chalk.white(" | " )+
    chalk.cyan(`${info}`) 
  );
});
  function userBul(ID) {
    return deasync(async(_ID, cb) => {
      let output = null;
  
      try {
        let user = await client.users.fetch(_ID);
  
        output = { 
          tag: user.tag,
          avatar: user.avatarURL(),
          name:user.username,
          isbot:user.bot,
       };
      } catch(err) { output = {tag:"Bulunamadı#0000",isbot:null,name:"Bulunamadı",avatar:client.user.avatarURL()} }
      
      cb(null, output);
    })(ID);
  }

  function botista() {
    return {
      serverSize: client.guilds.cache.size,
      userSize:client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      emojiSize:client.emojis.cache.size.toLocaleString(),
      channelSize:client.channels.cache.size.toLocaleString()
    }
  }

client.kisibul = userBul;
client.stats = botista;




module.exports = Favian;


client.on('message', msg => {
  let ads = db.fetch(`sunucu.ayarlar.moderation.ads_${msg.guild.id}`)
  let adslog = db.fetch(`sunucu.ayarlar.moderation.ads.log_${msg.guild.id}`)
  let adsmesaj = db.fetch(`sunucu.ayarlar.moderation.ads.message_${msg.guild.id}`)
if(ads === "aktif"){  
      const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                  const embed = new Discord.MessageEmbed()
                  .setDescription(`
                  ${msg.author.tag} (\`${msg.author.id}\`) adlı kullanıcı sunucumuzda reklam yapmaya çalışmıştır.

                  Reklamı;
                  > ${msg.content}
                  `)
                  .setColor("#E70000")
                  .setTitle(`${msg.guild.name} => Reklam Engel`)
                  .setFooter(client.user.username,client.user.avatarURL())
                  client.channels.cache.get(adslog.id).send(embed)
                    return msg.channel.send(`
                  <@${msg.author.id}> , ${adsmesaj}
                    `);
            }              
          } catch(err) {
            console.log(err);
          }
        }}
else {return;

}
})



client.on('message', msg => {
  let ads = db.fetch(`sunucu.ayarlar.moderation.küfürengel_${msg.guild.id}`)
  let adslog = db.fetch(`sunucu.ayarlar.moderation.küfürengel.log_${msg.guild.id}`)
  let adsmesaj = db.fetch(`sunucu.ayarlar.moderation.küfürengel.message_${msg.guild.id}`)
if(ads === "aktif"){  
      const reklam = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                  const embed = new Discord.MessageEmbed()
                  .setDescription(`
                  ${msg.author.tag} (\`${msg.author.id}\`) adlı kullanıcı sunucumuzda küfür yapmaya çalışmıştır.

                  Küfürü;
                 > ${msg.content}
                  `)
                  .setColor("#E70000")
                  .setTitle(`${msg.guild.name} => Küfür Engel`)
                  .setFooter(client.user.username,client.user.avatarURL())
                  client.channels.cache.get(adslog.id).send(embed)
                    return msg.channel.send(`
                  <@${msg.author.id}> , ${adsmesaj}
                    `);
            }              
          } catch(err) {
            console.log(err);
          }
        }}
else {return;

}
})


