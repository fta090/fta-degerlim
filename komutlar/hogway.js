const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let username = 'You are';
if(message.mentions.members.first()) username = message.mentions.members.first().user.username+' is';
if(message.mentions.users.first()) username = message.mentions.users.first().username+' is';

let random = Math.floor(Math.random(100) * 100);
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('gay r8 machine').setDescription(`${username} ${random}% gay 🏳️‍🌈`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'howgay'
};