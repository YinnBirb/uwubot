const Discord = require("discord.js");
module.exports = {
  info:{
  name: "shuffle",
  description:"Shuffle the Queue",
  usage:"",
  aliases: ["sf", "shufflequeue"],
  },
  conf:{
    cooldown: 0,
  dm: "no"
  },
  run: async (client, message, args) => {
    let sendSuccess= require("../../util/success"),
        sendError= require("../../util/error")

    
    const channel = message.member.voice.channel
    if (!channel)return sendError('<:tairitsuno:801419553933492245> | You need to join a voice channel to use this command!', message);
    if (message.guild.me.voice.channel !== channel)return sendError('<:tairitsuno:801419553933492245> | You need to join voice channel where the bot is to use this command!', message);    
    
    const Queue = await message.client.queue.get(message.guild.id);

    if (!Queue)
      return sendError("<:tairitsuno:801419553933492245> | There is nothing playing in this server.", message);
    
    const Current = await Queue.songs.shift();
    
    Queue.songs = Queue.songs.sort(() => Math.round(Math.random()));
    await Queue.songs.unshift(Current);
    message.react("801419553841741904")
    sendSuccess("<:hikariok:801419553841741904> | Queue Has Been Shuffled", message)
    
  },
  interaction: async (client, message, args) => {
    let sendSuccess= require("../../util/slash/success"),
        sendError= require("../../util/slash/error")

    
    const channel = await client.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id).voice.channel

    if (!channel)return sendError('<:tairitsuno:801419553933492245> | You need to join a voice channel to use this command!', message, client);
    if (client.guilds.cache.get(message.guild_id).me.voice.channel !== channel)return sendError('<:tairitsuno:801419553933492245> | You need to join voice channel where the bot is to use this command!', message, client);    
    
    const Queue = await client.guilds.cache.get(message.guild_id).client.queue.get(message.guild_id);
    
    if (!Queue)
      return sendError("<:tairitsuno:801419553933492245> | There is nothing playing in this server.", message, client);
    
    const Current = await Queue.songs.shift();
    let random=Math.round(Math.random())
    Queue.songs = Queue.songs.sort(() => random);
    await Queue.songs.unshift(Current);
    //message.react("801419553841741904")
    sendSuccess("<:hikariok:801419553841741904> | Queue Has Been Shuffled", message, client)
    
  },
  options:[]
  
};