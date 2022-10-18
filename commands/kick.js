const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kick members",
    execute(message, args) {
        const color = require("../colors.json")
        if (!message.mentions.users.size) {
            
            let embed = new Discord.MessageEmbed()
                .setTitle("No user specified!")
                .setColor(color.red)
                .setDescription(`Mention a user next time. Example: ${prefix}kick @user`)
            return message.reply({embeds: [embed]})
        
        } 
        let taggedUser = message.mentions.users.first();

        let embed = new Discord.MessageEmbed()
        .setTitle("Succesful!")
        .setColor(color.green)
        .setDescription(`You tried kicking ${taggedUser.username} from the server.`)
        message.channel.send({embeds: [embed]})
    },
}
