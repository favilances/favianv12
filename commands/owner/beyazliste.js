module.exports = {
    name: "beyazliste",
    description: "Kullanıcıyı beyazliste ye allırsınız",
    usage: "prefix+beyazliste kullanıcıid ",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: [],
    category: "Owner",
    async favian (client, message, args) {
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
        let user = args[0]
        if(!user) return message.channel.send("<:savana_no:929104901567578224> ID Belirtmelisin")
        let sebep = args.slice(1).join(' ')
        if(!sebep) return;
        db.delete(`karaliste_${args[0]}`)
      const kanal = "942339963138224128"
       message.channel.send(`Gerekli Bilgiler <#${kanal}> kanalına gönderildi`)
       client.channels.cache.get(kanal).send(`
    ●▬▬▬▬▬[ \`Yetkili\` ]▬▬▬▬▬● 
   > <:savana_support:929104901689184277>  | **Yetkili**: <@${message.author.id}>
   > <:savana_support:929104901689184277>  | **Yetkili ID**: \`${message.author.id}\`
   > <:savana_support:929104901689184277>  | **Yetkili Tag**: \`${message.author.tag}\` \n
●▬▬▬▬▬[ \`Kullanıcı\` ]▬▬▬▬▬● 
   >  <:savana_user:929104902087647263>  | **Kullanıcı**: <@${user}>
   >  <:savana_user:929104902087647263>  | **Kullanıcı ID**: \`${user}\` \n
●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
 <:savana_warn:929104901819215882> | **Sebep;** \`${sebep}\`
           `)
    }}