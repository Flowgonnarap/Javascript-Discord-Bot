const Discord = require('discord.js');

module.exports = {
    name: "server",
    description: "server info",
    execute(message, args) {
const color = require("../colors.json")

        let embed = new Discord.MessageEmbed()
		.setTitle("Server Information")
		.setColor(color.green)
		.setDescription(`The server name is ${message.guild.name}`)
		message.channel.send({embeds: [embed]})
    },
}