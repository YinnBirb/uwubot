const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const amount = parseInt(args[0]);
    const result = Math.floor(Math.random() * 10);
    const balance = client.db.get(`account.${message.author.id}.balance`)||200;

    if (!amount) return message.mentionReply("Please insert an amount first.");
    if (isNaN(amount)) return message.mentionReply("That amount is not a number.");
    if (amount > balance || !balance || balance === 0) return message.mentionReply("You don't have enough cookies.");
    
   
    if (amount < 1) return message.mentionReply("You don't give enough money for gambling. The minimum is 200 cookies.");

    let cooldown = 25000; 
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastGamble = await client.db.get(`lastGamble.${message.author.id}`);


   
    if (result < 5) {
        await client.db.set(`lastGamble.${message.author.id}`, Date.now());
        await client.db.subtract(`account.${message.author.id}.balance`, amount);
        return message.noMentionReply(`Oh noes, you lose ${amount} cookies. Good luck next time.`);
    } else if (result > 5) {
        await client.db.set(`lastGamble.${message.author.id}`, Date.now());
        await client.db.add(`account.${message.author.id}.balance`, amount);
        return message.noMentionReply(`Woohoo, you won ${amount} cookies! UwU`);
    }
}

exports.info = {
    name: "gamble",
    aliases: ["gambling", "bet"],
    description: "An efficient way to double your cookies.",
    usage: "<number>",
    example: "gamble 500"
}

exports.conf = {
    cooldown: 5,
  dm: "yes"
}