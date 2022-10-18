const Discord = require('discord.js');
module.exports = {
    name: "ping",
    description: "bot latency",
    execute(message, args) {
        const color = require("../colors.json")
        var ping = message.createdTimestamp - message.createdTimestamp;
        let embed = new Discord.MessageEmbed()
		.setColor(color.navy)
		.setTitle("Succesful!")
		.setDescription(`Latency is ${ping} ms!`)
		
		message.channel.send({embeds: [embed]})
    },
}