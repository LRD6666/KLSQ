const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unmute",
  category: "<:mod:767763177047588864> moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to unmute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to unmute"
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User do not have mute role so what i am suppose to take")
    }
    
    
    user.roles.remove(muterole)
    
    let embed = new MessageEmbed()
      .setAuthor(`${message.mentions.users.first().username} Is unmuted`, message.mentions.users.first().displayAvatarURL())
    await message.channel.send(embed);
    
    user.send(`You are now unmuted from **${message.guild.name}**`)

  }
};
