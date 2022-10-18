const Discord = require('discord.js');

module.exports = {
    name: "purge",
    description: "delete channels",
    execute(message, args) {
const color = require("../colors.json")

        let amount = parseInt(args[0]) + 1 // + 1 is because the purge will register 13 as 12 so yeah.
			if (isNaN(amount)) {
				
				let embed = new Discord.MessageEmbed()
				.setTitle(`Invalid number`)
				.setColor(color.red)
				.setDescription(`That does not seem to be a number!`)
				return message.channel.send({embeds: [embed]})
				
				
			} else if (amount <= 0 || amount > 100) {
				let embed = new Discord.MessageEmbed()
				.setTitle(`Invalid amount`)
				.setColor(color.red)
				.setDescription(`Please input a number between 0 and 100.`)
				return message.channel.send({embeds: [embed]})
			}
			message.channel.bulkDelete(amount).catch(err => {
				console.log(err)
				let embed = new Discord.MessageEmbed()
				.setTitle(`Error!`)
				.setColor(color.red)
				.setDescription(`You cannot delete messages that are over two weeks.`)				
				message.channel.send({embeds: [embed]})
			})
		},
    }
