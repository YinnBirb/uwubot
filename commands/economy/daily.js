const Discord = require("discord.js");
let ms = require("ms");

exports.run = async (client, message, args) => {
  
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 8.64e+7; 
    let amount = 1115; 
    let lastDaily = await client.db.get(`lastDaily.${message.author.id}`);
    let buck = await client.db.get(`account.${message.author.id}.balance`);

    try {
        
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj=cooldown - (Date.now() - lastDaily)
          
let totalSeconds = (timeObj / 1000);
          
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let mins = Math.floor(totalSeconds / 60);
  let secs = Math.floor(totalSeconds % 60);
          
            let hrs = pad_zero(timeObj.hours).padStart(2, "0"),
                ms = pad_zero(timeObj.minutes).padStart(2, "0"),
                ss = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.mentionReply(`You cannot collect your daily cookies too early. Please wait ${finalTime}.`);
        } else {
           client.db.set(`lastDaily.${message.author.id}`, Date.now());
            client.db.add(`account.${message.author.id}.balance`, amount);
            return message.noMentionReply(`Great **${message.author.tag}**, you've been given 1,115 cookies today!`);
        }

    } catch (error) {
        console.log(error);
        return message.noMentionReply(`Oopsie, unknown error I guess: ${error}.`);
    }
}

exports.info = {
    name: "daily",
    aliases: ["dailies"],
    usage:"",
    description: "Collect the daily cookies."
}

exports.conf = {
  cooldown: 10,
  dm: "yes"
}