const Discord = require('discord.js');

module.exports = {
    
    name: "eval",
    description: "Op command",
    execute(message, args) {
        const color = require("../colors.json")
        if (message.author.id != "585809481464807445") return
        args =  args.join(" ")
        console.log(args)
        let embed = new Discord.MessageEmbed()
        .setTitle(`Eval complete.`)
        .setColor(color.gold)
        .setDescription(eval(`${args}`))
        message.channel.send({embeds: [embed]})
    },
}