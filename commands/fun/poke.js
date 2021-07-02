exports.run = async (bot, message, args) => {
  let discord = require('discord.js')

 let userm;
  let author;
  let usern;
  const fetch= require("node-fetch"),main = await fetch("https://nekos.life/api/v2/img/poke"), mat = await main.json();
if (args[0]=== "me"||args[0]=== `<@!${message.author.id}>`) {
      userm = message.author
      usern = message.author
      author = bot.user
    } else if(args[0]){
      if(!message.guild) return;
      userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@","").replace(">","")).catch(err => { return message.mentionReply("Remember to mention a valid user to poke!") })
      usern =userm.user
      author = message.author
    }
  
  if(!userm||!args[0]) {
return message.mentionReply('Remember to mention a valid user to poke!');
}
    
  let embed = new discord.MessageEmbed()
  .setTitle(`${author.username} pokes ${usern.username} - you should poke back <3`)
  .setImage(mat.url)
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter("Poke! OwO")
  message.channel.send(embed)
  
}
exports.info = {
  name: 'poke',
  aliases:[],
  description: "poke a user",
  usage: "<user_id/mention/\"me\">",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}