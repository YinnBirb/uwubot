const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');

exports.run = (bot, message, args) => {
  let link1 = `https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot+applications.commands&permissions=2146958847`
  let msgembed = new Discord.MessageEmbed()
      .setColor('#0affaf')
      .setTitle("Invite our bot")
      .addField("Tairitsu", '[Click here]' + `(${link1})`)
      //.addField("Tairitsu", '[Click here]' + `(${link2})`)
      //.addField("Al!ce (Unstable)", '[Click here]' + `(${link3})`)
      .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
      
  
      message.noMentionReply('Generating...')
    .then(msg => {
      msg.edit("", msgembed);
    });   
}
exports.interaction= async (bot, interaction, args) =>{
  let link1 = `https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot+applications.commands&permissions=2146958847`
  let msgembed = new Discord.MessageEmbed()
      .setColor('#0affaf')
      .setTitle("Invite our bot")
      .addField("Tairitsu", '[Click here]' + `(${link1})`)
      //.addField("Tairitsu", '[Click here]' + `(${link2})`)
      //.addField("Al!ce (Unstable)", '[Click here]' + `(${link3})`)
      .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
  
  bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: await bot.createAPIMessage(interaction, msgembed)
                    }
                }
            });
}
exports.info = {
  name: 'invite',
  aliases: [],
  usage: "",
  description: "gives an invite link of this bot"
}
//checked
exports.conf={
  cooldown: 0,
  dm: "yes"
}
