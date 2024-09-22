module.exports = {
    name: "yardım",
    description: "Botun Komutlarını Görürsünüz!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    aliases: [],
    cooldown: 5,
    category: "Kullanıcı",
   async favian(client, message, args) {
      const db = client.db;
      const { MessageButton } = require("discord-buttons")
      const Discord = require("discord.js")
      client.inline;
let prefix = client.ayarlar.prefix;
var kullanıcı = new MessageButton()
.setStyle('blurple')
.setLabel("Kullanıcı")
.setID("kullanıcı")
var sistemler = new MessageButton()
.setStyle('blurple')
.setLabel("Sistemler")
.setID("sistemler")
var moderasyon = new MessageButton()
.setStyle('blurple')
.setLabel("Moderasyon")
.setID("moderasyon")
var eglence = new MessageButton()
.setStyle('blurple')
.setLabel("Eğlence")
.setID("eglence")
var logo = new MessageButton()
.setStyle('blurple')
.setLabel("Logo")
.setID("logo")
var sahip = new MessageButton()
.setStyle('red')
.setLabel("Sahip")
.setID("sahip")
/*const t = new Discord.MessageEmbed()
.addField("<:favian_user:865495075633758228> | Kullanıcı Komutları","`yardım`, `test`")
.addField("<:favian_sistemler:865494716216246272> | Sistemler","undefined")
.addField("<:favian_moderasyon:865495421249126420> | Moderasyon Komutları","`modlog`")
.addField("<:favian_kral:865495695578759188> | Owner Komutları","`bakım`, `eval`")
.setAuthor(client.user.username,client.user.avatarURL)
.setTitle("Butonlar'a basıp komutları görebilirsiniz!")
.setURL("https://favian.cf")
.setColor(client.ayarlar.embedRenk)
.setFooter(client.ayarlar.embedFooter)
.setImage(client.ayarlar.resim)
*/
const t = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`Merhabalar **${message.author.tag}**, ${client.user.username} Botu Sahip Olduğu Özellikler  Sayesinde Sunucunuzu Güzelleştirmek Ve Moderasyonunu Daha Kolay Hale Getirmek İçin Tasarlanmış Bir Bottur!`)
.addFields(
  {name : `<:savana_user:929104902087647263> Kullanıcı`, value:`**${prefix}kullanıcı** Yazarak Ve Ya Butonlara Basarak Kullanıcı Komutlarını Görüntüleyebilirsin`, inline: true},
  {name : `<:savana_sistemler:929104901827592242>  Sistemler`, value:`**${prefix}sistemler** Yazarak Ve Ya Butonlara Basarak Sistem Komutlarını Görüntüleyebilirsin`, inline: true},
  {name : `<:savana_moderasyon:929104901349453825>  Moderasyon`, value:`**${prefix}moderasyon** Yazarak Ve Ya Butonlara Basarak Moderasyon Komutlarını Görüntüleyebilirsin`, inline: true},
  {name : `<:savana_eglence:929104901735338004>  Eğlence`, value:`**${prefix}eğlence** Yazarak Ve Ya Butonlara Basarak Eğlence Komutlarını Görüntüleyebilirsin`, inline: true},
  {name : `<:savana_developer:929104901668241468>  Sahip`, value:`**${prefix}sahip** Yazarak Ve Ya Butonlara Basarak Sahip Komutlarını Görüntüleyebilirsin`, inline: true},
  {name : `\u200b`, value:`\u200b`, inline: true},
  {name : `\u200b`, value:`\<:savana_add:929104901609496646>  [Sunucuna Ekle](${client.links.invitelinks})`, inline: true},
  {name : `\u200b`, value:`\<:savana_support:929104901689184277>  [Resmi Sunucu](${client.links.supportserver})`, inline: true},
  {name : `\u200b`, value:`\<:savana_vote:929104901567561760>  [Oy Ver](${client.links.vote})`, inline: true}
)
.setColor(client.ayarlar.embedRenk)
.setFooter(client.ayarlar.embedFooter)
.setImage(client.ayarlar.resim)
let msg = await message.channel.send({ buttons : [kullanıcı, sistemler, moderasyon, eglence,sahip ], embed : t})
message.react("✅")
var filter = (button) => button.clicker.user.id === message.author.id;

let collector = await msg.createButtonCollector(filter, { time: 60000 })

  collector.on("collect", async (button) => {
  if(button.id === "kullanıcı") {
    const kembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`
    **${prefix}davet**  => \`Bot'un davet linklerini görürsünüz!\`
    **${prefix}yardım**  => \`Botun Komutlarını Görürsünüz!\`
    **${prefix}bilgi**  => \`Bot ile ilgili bilgileri görürsünüz!\`
    **${prefix}test**  => \`Bot'u test edersiniz!\`
    **${prefix}avatar**  => \`Belirtiğiniz Kullanıcının Avatarını Görürsünüz!\`
    **${prefix}istatistik**  => \`Bot'un istatistiğini görürsünüz!\`

    `)
    .addFields(
      {name : `\u200b`, value:`[Sunucuna Ekle](${client.links.invitelinks})`, inline: true},
  {name : `\u200b`, value:`[Resmi Sunucu](${client.links.supportserver})`, inline: true},
  {name : `\u200b`, value:`[Oy Ver](${client.links.vote})`, inline: true}
    )
    .setColor(client.ayarlar.embedRenk)
    .setFooter(client.ayarlar.embedFooter)
    .setImage(client.ayarlar.resim)
     await button.think(true)
    await button.reply.edit(kembed)
  }
  if(button.id === "sistemler") {
    const kembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`
    **${prefix}ban-ayarla**  => \`Ban Sistemini Ayarlarsınız!\`
    **${prefix}uyarı-ayarla** (${prefix}uyarı-yardım)  => \`Uyarı Sistemini Ayarlarsınız!\`
    **${prefix}kick-ayarla**  => \`Kick Sistemini Ayarlarsınız!\`

    `)
    .addFields(
      {name : `\u200b`, value:`[Sunucuna Ekle](${client.links.invitelinks})`, inline: true},
  {name : `\u200b`, value:`[Resmi Sunucu](${client.links.supportserver})`, inline: true},
  {name : `\u200b`, value:`[Oy Ver](${client.links.vote})`, inline: true}
    )
    .setColor(client.ayarlar.embedRenk)
    .setFooter(client.ayarlar.embedFooter)
    .setImage(client.ayarlar.resim)
     await button.think(true)
    await button.reply.edit(kembed)
  }
  if(button.id === "moderasyon") {
    const kembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`
    **${prefix}reklam-engel**  => \`Reklam Engel Sistemi\`
    **${prefix}küfürengel**  => \`Küfür Engel Sistemi\`
    **${prefix}sunucukur**  => \`Sunucunuzu baştan kurar!\`
    **${prefix}emojiekle**  => \`Sunucunuza Belirtiğiniz Emojiyi Eklersiniz!\`
    **${prefix}nuke**  => \`Komutu Kullandığınız Kanalı Sıfırlar!\`

    `)
    .addFields(
      {name : `\u200b`, value:`[Sunucuna Ekle](${client.links.invitelinks})`, inline: true},
  {name : `\u200b`, value:`[Resmi Sunucu](${client.links.supportserver})`, inline: true},
  {name : `\u200b`, value:`[Oy Ver](${client.links.vote})`, inline: true}
    )
    .setColor(client.ayarlar.embedRenk)
.setFooter(client.ayarlar.embedFooter)
.setImage(client.ayarlar.resim)
     await button.think(true)
    await button.reply.edit(kembed)
  }
  if(button.id === "sahip") {
    const kembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`
    **${prefix}karaliste**  => \`Kullanıcıyı karaliste ye allırsınız!\`
    **${prefix}beyazliste**  => \`Kullanıcıyı beyazliste ye allırsınız!\`
    **${prefix}bakım**  => \`Bakım Modunu Açarsınız!\`
    **${prefix}eval**  => \`Kod Denersiniz!\`
    **${prefix}yetkili-yap**  => \`Belirlediğiniz kullanıcıya yetki verirsiniz! (BOT İÇİ)\`
    **${prefix}yetki-al**  => \`Belirlediğiniz kullanıcıdan yetki alırsınız! (BOT İÇİ)\`
    
    `)
    .addFields(
      {name : `\u200b`, value:`[Sunucuna Ekle](${client.links.invitelinks})`, inline: true},
      {name : `\u200b`, value:`[Resmi Sunucu](${client.links.supportserver})`, inline: true},
      {name : `\u200b`, value:`[Oy Ver](${client.links.vote})`, inline: true}
    )
    .setColor(client.ayarlar.embedRenk)
.setFooter(client.ayarlar.embedFooter)
.setImage(client.ayarlar.resim)
     await button.think(true)
    await button.reply.edit(kembed)
  }
  if(button.id === "eglence") {
    const kembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`
    **${prefix}slots**  => \`Slots Oyunu oynarsınız!\`
    
    `)
    .addFields(
      {name : `\u200b`, value:`[Sunucuna Ekle](${client.links.invitelinks})`, inline: true},
  {name : `\u200b`, value:`[Resmi Sunucu](${client.links.supportserver})`, inline: true},
  {name : `\u200b`, value:`[Oy Ver](${client.links.vote})`, inline: true}
    )
    .setColor(client.ayarlar.embedRenk)
.setFooter(client.ayarlar.embedFooter)
.setImage(client.ayarlar.resim)
     await button.think(true)
    await button.reply.edit(kembed)
  }
});
collector.on("end", async () => {
  msg.delete()
});

    }}