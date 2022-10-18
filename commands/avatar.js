const Discord = require('discord.js');

module.exports = {
    
    name: "avatar",
    description: "profile picture",
    async execute(message, args, client) {
        
        if (!message.mentions.users.size) {
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}'s Avatar!`)
            .setURL(`${message.author.displayAvatarURL({size: 2048, format: 'png', dynamic: true})}`)
            .setImage(`${message.author.displayAvatarURL({size: 2048, format: 'png', dynamic: true })}`)
            .setColor(message.member.displayHexColor)
            return message.channel.send({ embeds: [embed] })
        }
        let AvatarUser = message.mentions.users.first();
        const memberc = await message.guild.members.fetch(AvatarUser).catch(() => { });

        let embed = new Discord.MessageEmbed()
        .setTitle(`${AvatarUser.username}'s Avatar!`)
        .setURL(`${AvatarUser.displayAvatarURL({size: 2048, format: 'png', dynamic: true})}`)
        .setColor(memberc.displayAvatarURL)
        .setImage(`${AvatarUser.displayAvatarURL({size: 2048, format: 'png', dynamic: true})}`)
        message.channel.send({embeds: [embed]})
    },
}