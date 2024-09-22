module.exports = {
    name: "test",
    description: "Bot'u test edersiniz!!",
    usage: "prefix+test",
    guildOnly: true,
    enabled: true,
    cooldown: 3,
    aliases: [],
    category: "User",
    async favian(client, message, args) {
       
            message.channel.send("Test!")
            client.db.set(`owner_151155117540900864`,"owner")
    }}