const { MessageEmbed } = require("discord.js");

module.exports = {
  conf:{
    cooldown: 0,
  dm: "no"
  },
  info: {
    name:"leave",
    description: "To stop the music and clearing the queue",
    usage: "",
    aliases: ["disconnect"],
  },
//checked
  run: async function (client, message, args) {
    const sendError = require("../../util/error");
const sendSuccess = require("../../util/success");

    const channel = message.member.voice.channel
    if (!channel)return sendError('<:tairitsuno:801419553933492245> | You need to join a voice channel to use this command!', message);
    if (message.guild.me.voice.channel !== channel)return sendError('<:tairitsuno:801419553933492245> | You need to join voice channel where the bot is to use this command!', message);
    await channel.leave();
    message.react("801419553841741904")
    sendSuccess("<:hikariok:801419553841741904> | Disconnected Successfully!", message);
    const serverQueue = message.client.queue.get(message.guild.id);

    if(serverQueue){message.client.queue.delete(message.guild.id);console.log("disconnected")}
  },
  options:[],
  interaction: async function (client, message, args){//message=interaction
   let sendError=require('../../util/slash/error.js')
    let sendSuccess=require('../../util/slash/success.js')
   let channel=await client.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id).voice.channel
    if (!channel)return sendError('<:tairitsuno:801419553933492245> | You need to join a voice channel to use this command!', message, client);
    if (client.guilds.cache.get(message.guild_id).me.voice.channel !== channel)return sendError('<:tairitsuno:801419553933492245> | You need to join voice channel where the bot is to use this command!', message, client);

    await channel.leave();
    //message.react("801419553841741904")
    sendSuccess("<:hikariok:801419553841741904> | Disconnected Successfully!", message, client);
    const serverQueue = client.guilds.cache.get(message.guild_id).client.queue.get(message.guild_id);

    if(serverQueue){client.guilds.cache.get(message.guild_id).client.queue.delete(message.guild_id);console.log("disconnected")}
  }
};
