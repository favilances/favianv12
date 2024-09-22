module.exports = {
    name: "slots",
    description: "Slots Oyunu oynarsınız!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: [],
    category: "Owner",
    async favian(client, message, args) {
        const slots = [':grapes:', ':tangerine:', ':pear:', ':cherries:', ':lemon:'];
    var slot1 = slots[Math.floor(Math.random() * slots.length)];
    var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];

    if (slot1 === slot2 && slot1 === slot3) {
        message.channel.send(`
        ${slot1} : ${slot2} : ${slot3}

        \\😋 Kazandın
        `);
    } else {
        message.channel.send(`
        ${slot1} : ${slot2} : ${slot3}

        \\😩   Kaybettin
        `);
  }
}
}
