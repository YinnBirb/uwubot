const fs = require("fs");
const discord = require('discord.js') 
const { MessageEmbed } = require('discord.js');
const { promisify } = require('util')
const ms = require('ms')
const sleep = promisify(setTimeout)
module.exports.run = async (bot, message, args) => {
message.delete()
  let time = ms(args[0])
  let vote = args.join(" ").replace(args[0], "").trim()
  if(!time) {
    let pollEmbedFall = new discord.MessageEmbed()
    .setDescription("Please type the command correctly:\n*poll <time> <poll description>")
  }
  if(args[0].toLowerCase().includes("s".toLowerCase())||args[0].toLowerCase().includes("m".toLowerCase())||args[0].toLowerCase().includes("ms".toLowerCase())||args[0].toLowerCase().includes("h".toLowerCase())||args[0].toLowerCase().includes("d".toLowerCase())) {
    if(args.join(" ").length < 1) {
    return
  }
  let pollEmbed = new discord.MessageEmbed()
  .setTitle("Poll")
  .setDescription(vote + "\nHosted By: <@!"+message.member.id+"> \nTime Left: " + args[0] )
  .setColor('#0affaf')
const sendEmbed= await message.channel.send(pollEmbed)
  await sendEmbed.react("👍")
  await sendEmbed.react("👎")
 const reactionx = (reaction) => reaction.emoji.name ==='👎'
 const reactionv = (reaction) => reaction.emoji.name === "👍" //, {time: time});
 const collectorv = sendEmbed.createReactionCollector(reactionv,{time})
 
 
 const collectorx = sendEmbed.createReactionCollector(reactionx,{time})
 
collectorv.on("end",collectv => {
      console.log("Okay.");
      let CompleteEmbed = new discord.MessageEmbed()
   .setColor("#0affaf")
  collectorx.on("end",(collectx) => {
     CompleteEmbed
    .setTitle("Time's up!")
 .setDescription("Poll" + "\nHosted By: <@!"+message.member.id+"> \n Time Left: " + args[0] )  
Result:
👍(Yes): ${collectv.size}
👎(No): ${collectx.size}`)
     console.log("ok!")
  sendEmbed.edit(CompleteEmbed)
    })
  })

  
  }
  


};

module.exports.info = {
    name: 'polls',
  aliases: ['poll'],
  usage:"<time> <poll question>",
description:"Send polls in the channel you sent the poll message"
};
exports.conf={
  cooldown: 0,
  dm: "no"
}