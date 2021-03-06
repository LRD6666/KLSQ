const { MessageAttachment } = require("discord.js");
var Jimp = require("jimp")

module.exports = {
    name: "wanted",
    aliases: [" "],
    usage: " ",
    category: "<:fun:767763175709474878> fun",
    description: "wanted",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let i1 = Jimp.read(user.displayAvatarURL({ format: "png", size: 2048 }));
        let i2 = Jimp.read("https://cdn.discordapp.com/attachments/469606974548344853/501026267798175756/aranuyr.png");
    
        Promise.all([i1, i2]).then((images) =>
        {
            images[0].resize(450, 442).quality(100);
            images[1].composite(images[0], 140, 354).quality(100).getBuffer(Jimp.MIME_PNG, (err, buffer) =>
            {
                if(err)
                {
                    console.log("\x1b[31m*\x1b[0m Error creating \x1b[33m(Most Wanted)\x1b[0m meme: \x1b[31m" + err + "\x1b[0m");
                }
    
                message.channel.send(new MessageAttachment(buffer, "wanted.png")).then(() => message.channel.stopTyping(true)).catch(() => message.channel.stopTyping(true));
            });
        });
    }
}