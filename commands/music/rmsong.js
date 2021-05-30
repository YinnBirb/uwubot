const { MessageEmbed } = require("discord.js");

module.exports = {
  conf:{
    cooldown: 0,
  dm: "no"
  },
 info: 
  {
  name: "removesong",
  description: "Drop The Song From Queue",
    usage:"<number>",
  aliases: ["rmsong",
            "remove-song",
            "drop",
            "drop-song",
            "dropsong",
            "rm-song",
            "qremove",
            "queueremove",
            "quremove",
            "qrm",
            "queuerm",
            "qurm"]
  },
  interaction: (bot, message, arg) => {
    const sendSuccess = require("../../util/slash/success")
const sendError =require("../../util/slash/error")
    let args=[]
if(arg)args=[arg.find(arg => arg.name.toLowerCase() == "song").value]  
    const channel = message.member.voice.channel
    if (!channel)return sendError('<:tairitsuno:801419553933492245> | You need to join a voice channel to use this command!', message);
    if (message.guild.me.voice.channel !== channel)return sendError('<:tairitsuno:801419553933492245> | You need to join voice channel where the bot is to use this command!', message);

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue)return sendError("<:tairitsuno:801419553933492245> | There is nothing playing in this server.", message);
     if(isNaN(args[0]))return sendError("<:tairitsuno:801419553933492245> | Please use Numerical Values only", message)
    if(args[0]<2)return sendError("<:tairitsuno:801419553933492245> | Please give a number that is higher than 1", message)
   
    if(args[0] > serverQueue.songs.length) {
      return sendError("<:tairitsuno:801419553933492245> | Unable to find this song", message)
    }
    
    
    serverQueue.songs.splice(args[0] - 1, 1)
    sendSuccess("<:hikariok:801419553841741904> | Song is removed sucessfully!", message)
  },
  options: [
  {
    name: "song",
    description: "which song do you want to remove(By number)",
    type: 3,
    required: false
  }
],
  run: (bot, message, args) => {
    const sendSuccess = require("../../util/success")
const sendError =require("../../util/error")
    const channel = message.member.voice.channel
    if (!channel)return sendError('<:tairitsuno:801419553933492245> | You need to join a voice channel to use this command!', message);
    if (message.guild.me.voice.channel !== channel)return sendError('<:tairitsuno:801419553933492245> | You need to join voice channel where the bot is to use this command!', message);

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue)return sendError("<:tairitsuno:801419553933492245> | There is nothing playing in this server.", message);
     if(isNaN(args[0]))return sendError("<:tairitsuno:801419553933492245> | Please use Numerical Values only", message)
    if(args[0]<2)return sendError("<:tairitsuno:801419553933492245> | Please give a number that is higher than 1", message)
   
    if(args[0] > serverQueue.songs.length) {
      return sendError("<:tairitsuno:801419553933492245> | Unable to find this song", message)
    }
    
    
    serverQueue.songs.splice(args[0] - 1, 1)
    sendSuccess("<:hikariok:801419553841741904> | Song is removed sucessfully!", message)
  },
  
};
