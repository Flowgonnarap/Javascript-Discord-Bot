const Discord = require('discord.js');
const fs = require('fs');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.colors = require("./colors.json")
client.colors = new Discord.Collection();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	console.log(`Finished loading ${command.name}`)
}
const { prefix , token} = require("./config.json")
// const command = require("./command");
// let owner = 585809481464807445
// let 
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// client.on("message", message => {
	
// 	if (message.content.toLowerCase().includes("oh no cringe")) {
// 		const exampleEmbed = new Discord.MessageEmbed()
// 		  .setColor('#0099ff')
// 		  .setTitle('testing')
	 
// 		  .setDescription('epic description testing by flow')
// 		  .setThumbnail('https://i.imgur.com/wSTFkRM.png')
// 		  .addFields(
// 			  { name: 'Regular field title', value: 'Some value here' },
// 			  { name: '\u200B', value: '\u200B' },
// 			  { name: 'Inline field title', value: 'Some value here', inline: true },
// 			  { name: 'Inline field title', value: 'Some value here', inline: true },
// 		  )
// 		  .addField('Inline field title', 'Some value here', true)
// 		  .setImage('https://i.imgur.com/wSTFkRM.png')
// 		  .setTimestamp()
// 		  .setFooter('Created By Flow#0002', 'https://i.imgur.com/wSTFkRM.png');
	 
// 		message.channel.send(exampleEmbed);
// 		}
// });
client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


client.login(token);