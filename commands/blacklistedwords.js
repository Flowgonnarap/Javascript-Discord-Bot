const Discord = require('discord.js');

module.exports = {
    name: "blacklist",
    description: "words banned",
    execute(message, args) {

        const color = require("../colors.json")
// for tomorrow do (../colors.json)
        const BlackListedWords = ["nigger","faggot","nigga",]

        for(i = 0; i < BlackListedWords.length; i++){
            if(message.content.toLowerCase().includes(BlackListedWords[i])) {
                message.delete()
                message.channel.send(`<@!${msg.author.id}>, That isn't allowed`)
            }
        }
    },
    
}