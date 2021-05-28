let discord = require("discord.js");
let { MessageEmbed } = require("discord.js");
exports.run = async (bot, message, args) => {
  let module = bot.helps.array();
  let pages = [
    "**Utillity/misc Commands**\n> `help`, `invite`, `support`, `prefix`, `avatar`, `info`, `userinfo(whois)`",
    "**Search/query Commands**\n> `say`, `sayembed`, `calculate`, `anime`, `poll`",
    "**Moderation Commands**\n> `kick`, `ban/unban`, `purge`, `setprefix`, `warn`, `warnings`, `mute/unmute`",
    "**Setup Commands**\n> `setprefix`, `setautorole`, `setautorolesystem`, `setmuterole`, `setverifyrole`, `setverifychannel`, `setwelcomemessage`, `setwelcomechannel`, `setleavemessage`, `setleavechannel`, `setwelcomemessagesystem`, `setgoodbyemessagesystem`, `setwelcomeimage`, `setwelcomeembed`, `prefix`, `setwarns`, `setupstatus`, `lvlmsg`",
    "**Economy Commands**\n> `balance`, `daily`, `dice(roll)`, `bet(gamble)`, `transfer`",
    "**Music Commands**\n> `join`, `play`, `np`, `lyrics`, `pause/continue`, `search-song(search)`, `queue`, `skip`,`skipto`, `skipall`, `loop`, `volume`, `disconnect`",
    "**Npc/Tupper Commands**\n> `npc`, `npccreate`, `npcname`, `npclist`, `npcinfo`, `npcdesc`, `npcremove`, `npcavatar`",
    "**Fun/roleplay Commands**\n> `kiss`, `hug`, `pat`, `slap`, `wink`, `cuddle`, `neko`, `foxgirl`",
    "**Leveling Commands**\n> `rank`, `addxp`, `leaderboard`"
  ];
  let list = [
    {
      Category: "**Utillity/misc**",
      commands:
        "> `help`, `invite`, `support`, `prefix`, `avatar`, `info`, `userinfo(whois)`"
    }, //1
    {
      Category: "**Search/query Commands**",
      commands: "> `say`, `sayembed`, `calculate`, `anime`, `poll`"
    }, //2
    {
      Category: "**Moderation Commands**",
      commands:
        "> `kick`, `ban/unban`, `purge`, `setprefix`, `warn`, `warnings`, `mute/unmute`"
    }, //3
    {
      Category: "**Setup Commands**",
      commands:
        "> `setprefix`, `setautorole`, `setautorolesystem`, `setmuterole`, `setverifyrole`, `setverifychannel`, `setwelcomemessage`, `setwelcomechannel`, `setleavemessage`, `setleavechannel`, `setwelcomemessagesystem`, `setgoodbyemessagesystem`, `setwelcomeimage`, `setwelcomeembed`, `prefix`, `setwarns`, `setupstatus`, `lvlmsg`"
    }, //4
    {
      Category: "**Economy Commands**",
      commands: "> `balance`, `daily`, `dice(roll)`, `bet(gamble)`, `transfer`"
    }, //5
    {
      Category: "**Music Commands**",
      commands:
        "> `join`, `play`, `np`, `lyrics`, `pause/continue`, `search-song(search)`, `queue`, `skip`, `skipto`, `skipall`, `loop`, `volume`, `disconnect`"
    }, //6
    {
      Category: "**Npc/Tupper Commands**",
      commands:
        "> `npc`, `npccreate`, `npcname`, `npclist`, `npcinfo`, `npcdesc`, `npcremove`, `npcavatar`"
    }, //7
    {
      Category: "**Fun/roleplay Commands**",
      commands:
        "> `kiss`, `hug`, `pat`, `slap`, `wink`, `cuddle`, `neko`, `foxgirl`"
    }, //8
    {
      Category: "**Leveling Commands**",
      commands: "> `rank`, `addxp`, `leaderboard`"
    }
  ];

  let page = 1;

  if (!message.guild) {
    if (args[0]) {
      let cmd = args[0];
      let command = bot.commands.get(cmd.toLowerCase());
      if (!command)
        command = bot.commands.find(x =>
          x.info.aliases.includes(cmd.toLowerCase())
        );

      if (!command) {
        if (
          args[0] === "1" ||
          args[0].toLowerCase() === "utillity" ||
          args[0].toLowerCase() === "utillities" ||
          args[0].toLowerCase() === "util" ||
          args[0].toLowerCase() === "utils" ||
          args[0].toLowerCase() === "miscs" ||
          args[0].toLowerCase() === "misc"
        ) {
          page = 1;
        } else if (
          args[0] === "2" ||
          args[0].toLowerCase() === "search" ||
          args[0].toLowerCase() === "query" ||
          args[0].toLowerCase() === "searchs" ||
          args[0].toLowerCase() === "queries" ||
          args[0].toLowerCase() === "search/query" ||
          args[0].toLowerCase() === "query/search" ||
          args[0].toLowerCase() === "searchquery" ||
          args[0].toLowerCase() === "querysearch"
        ) {
          page = 2;
        } else if (
          args[0] === "3" ||
          args[0].toLowerCase() === "moderation" ||
          args[0].toLowerCase() === "moderator" ||
          args[0].toLowerCase() === "admin" ||
          args[0].toLowerCase() === "administrator" ||
          args[0].toLowerCase() === "mod" ||
          args[0].toLowerCase() === "moderations" ||
          args[0].toLowerCase() === "moderators" ||
          args[0].toLowerCase() === "mods" ||
          args[0].toLowerCase() === "admins" ||
          args[0].toLowerCase() === "administrators"
        ) {
          page = 3;
        } else if (args[0] === "4" || args[0].toLowerCase() === "setup") {
          page = 4;
        } else if (
          args[0] === "5" ||
          args[0].toLowerCase() === "economy" ||
          args[0].toLowerCase() === "economies" ||
          args[0].toLowerCase() === "eco" ||
          args[0].toLowerCase() === "ecos"
        ) {
          page = 5;
        } else if (args[0] === "6" || args[0].toLowerCase() === "music") {
          page = 6;
        } else if (
          args[0] === "7" ||
          args[0].toLowerCase() === "npc" ||
          args[0].toLowerCase() === "tupper" ||
          args[0].toLowerCase() === "npcs" ||
          args[0].toLowerCase() === "tuppers" ||
          args[0].toLowerCase() === "npc/tupper" ||
          args[0].toLowerCase() === "tupper/npc" ||
          args[0].toLowerCase() === "npctupper" ||
          args[0].toLowerCase() === "tuppernpc" ||
          args[0].toLowerCase() === "npcs/tuppers" ||
          args[0].toLowerCase() === "tuppers/npcs"
        ) {
          page = 7;
        } else if (
          args[0] === "8" ||
          args[0].toLowerCase() === "fun" ||
          args[0].toLowerCase() === "roleplay"
        ) {
          page = 8;
        } else if (args[0] === "9" || args[0].toLowerCase() === "leveling") {
          page = 9;
        } else
          return message.mentionReply(
            "<:tairitsuno:801419553933492245> | Unknown Command or Category"
          );
      } else {
        let commandinfo = new discord.MessageEmbed()
          .setTitle("Command: " + command.info.name)
          .setColor("#0affaf").setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${bot.config.prefix}${command.info.name}${" " + command.info.usage ||
          ""}\`\`
Aliases: ${command.info.aliases.join(", ")}

about the brackets:
\`blank\` means that you can leave it blank
<>:Means that if something with a space which must be used in the command
() or (<>):This can be left empty, or you can give argument after a space in
"":Means that if something with a space is used, this will combine it to one`);
        return message.noMentionReply(commandinfo);
      }
    }

    let embed = new discord.MessageEmbed()
      .setColor("#0affaf")
      .setTitle(`Page ${page}/${pages.length}`).setDescription(`${
      pages[page - 1]
    }

React <:botarright:766649411014361159>to go to page ${page + 1}`);

    message.noMentionReply(embed).then(msg => {
      msg.react("766649447413055498");
      msg.react("766649411014361159").then(r => {
        msg.react("🗑");
        const BackwardFilter = (reaction, user) =>
          reaction.emoji.id === "766649447413055498" &&
          user.id === message.author.id;
        const ForwardFilter = (reaction, user) =>
          reaction.emoji.id === "766649411014361159" &&
          user.id === message.author.id;
        const CloseFilter = (reaction, user) =>
          reaction.emoji.name === "🗑" && user.id === message.author.id;
        const backward = msg.createReactionCollector(BackwardFilter, {
          time: 60000,
          dispose: true
        });
        const forward = msg.createReactionCollector(ForwardFilter, {
          time: 60000,
          dispose: true
        });
        const close = msg.createReactionCollector(CloseFilter, {
          time: 60000
        });
        close.on("collect", r => {
          msg.delete();
          return;
        });
        backward.on("collect", async collect => {
          const userReactions = msg.reactions.cache.filter(reaction =>
            reaction.users.cache.has(message.author.id)
          );
          /*try {
	for (const reaction of userReactions.values()) {
		await reaction.users.remove(message.author.id);
	}
} catch (error) {
	console.error('Failed to remove reactions.');
}*/
          if (page <= 1) return;
          page--;
          if (page == 1) {
            embed.setDescription(`${pages[page - 1]}

React <:botarrowright:766649411014361159>to go to page ${page + 1}`);
            msg.edit(embed);
            return;
          }
          embed.setDescription(
            `${pages[page - 1]}` +
              `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
          );
          embed.setTitle(`Page ${page}/${pages.length}`);
          msg.edit(embed);
        });
        backward.on("remove", async collect => {
          if (page <= 1) return;
          page--;
          if (page == 1) {
            embed.setDescription(`${pages[page - 1]}

React <:botarrowright:766649411014361159>to go to page ${page + 1}`);
            msg.edit(embed);
            return;
          }
          embed.setDescription(
            `${pages[page - 1]}` +
              `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
          );
          embed.setTitle(`Page ${page}/${pages.length}`);
          msg.edit(embed);
        });
        forward.on("collect", async collect => {
          const userReactions = msg.reactions.cache.filter(reaction =>
            reaction.users.cache.has(message.author.id)
          );
          /*try {
	for (const reaction of userReactions.values()) {
		await reaction.users.remove(message.author.id);
	}
} catch (error) {
	console.error('Failed to remove reactions.');
}*/
          if (page === pages.length) return;
          page++;
          if (page >= pages.length) {
            embed.setDescription(
              `${pages[page - 1]}` +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
            return;
          }
          embed.setDescription(
            pages[page - 1] +
              `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1} 
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
          );
          embed.setTitle(`Page ${page}/${pages.length}`);
          msg.edit(embed);
        });
        forward.on("remove", async collect => {
          if (page === pages.length) return;
          page++;
          if (page >= pages.length) {
            embed.setDescription(
              `${pages[page - 1]}` +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
            return;
          }
          embed.setDescription(
            pages[page - 1] +
              `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1} 
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
          );
          embed.setTitle(`Page ${page}/${pages.length}`);
          msg.edit(embed);
        });
      });
    });
  } else {
    const permissions = message.channel.permissionsFor(message.client.user);

    if (!permissions.has("ADD_REACTIONS")) {
      if (args[0]) {
        let cmd = args[0];
        let command = bot.commands.get(cmd.toLowerCase());
        if (!command)
          command = bot.commands.find(x =>
            x.info.aliases.includes(cmd.toLowerCase())
          );
        if (!command)
          return message.mentionReply(
            "<:tairitsuno:801419553933492245> | Unknown Command"
          );
        let commandinfo = new discord.MessageEmbed()
          .setTitle("Command: " + command.info.name)
          .setColor("#0affaf").setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${bot.config.prefix}${command.info.name}${" " + command.info.usage ||
          ""}\`\`
Aliases: ${command.info.aliases.join(", ")}

about the brackets:
\`blank\` means that you can leave it blank
<>:Means that if something with a space which must be used in the command
() or (<>):This can be left empty, or you can give argument after a space in
"":Means that if something with a space is used, this will combine it to one`);
        return message.noMentionReply(commandinfo);
      }
      let command = new discord.MessageEmbed()
        .setTitle("Commands list")
        .setColor("#0affaf");
      list.forEach(i => {
        command.addField(i.Category, i.commands);
      });
      return message.noMentionReply(command);
    } else {
      if (args[0]) {
        let cmd = args[0];
        let command = bot.commands.get(cmd.toLowerCase());
        if (!command)
          command = bot.commands.find(x =>
            x.info.aliases.includes(cmd.toLowerCase())
          );

        if (!command) {
          if (
            args[0] === "1" ||
            args[0].toLowerCase() === "utillity" ||
            args[0].toLowerCase() === "utillities" ||
            args[0].toLowerCase() === "util" ||
            args[0].toLowerCase() === "utils" ||
            args[0].toLowerCase() === "miscs" ||
            args[0].toLowerCase() === "misc"
          ) {
            page = 1;
          } else if (
            args[0] === "2" ||
            args[0].toLowerCase() === "search" ||
            args[0].toLowerCase() === "query" ||
            args[0].toLowerCase() === "searchs" ||
            args[0].toLowerCase() === "queries" ||
            args[0].toLowerCase() === "search/query" ||
            args[0].toLowerCase() === "query/search" ||
            args[0].toLowerCase() === "searchquery" ||
            args[0].toLowerCase() === "querysearch"
          ) {
            page = 2;
          } else if (
            args[0] === "3" ||
            args[0].toLowerCase() === "moderation" ||
            args[0].toLowerCase() === "moderator" ||
            args[0].toLowerCase() === "admin" ||
            args[0].toLowerCase() === "administrator" ||
            args[0].toLowerCase() === "mod" ||
            args[0].toLowerCase() === "moderations" ||
            args[0].toLowerCase() === "moderators" ||
            args[0].toLowerCase() === "mods" ||
            args[0].toLowerCase() === "admins" ||
            args[0].toLowerCase() === "administrators"
          ) {
            page = 3;
          } else if (args[0] === "4" || args[0].toLowerCase() === "setup") {
            page = 4;
          } else if (
            args[0] === "5" ||
            args[0].toLowerCase() === "economy" ||
            args[0].toLowerCase() === "economies" ||
            args[0].toLowerCase() === "eco" ||
            args[0].toLowerCase() === "ecos"
          ) {
            page = 5;
          } else if (args[0] === "6" || args[0].toLowerCase() === "music") {
            page = 6;
          } else if (
            args[0] === "7" ||
            args[0].toLowerCase() === "npc" ||
            args[0].toLowerCase() === "tupper" ||
            args[0].toLowerCase() === "npcs" ||
            args[0].toLowerCase() === "tuppers" ||
            args[0].toLowerCase() === "npc/tupper" ||
            args[0].toLowerCase() === "tupper/npc" ||
            args[0].toLowerCase() === "npctupper" ||
            args[0].toLowerCase() === "tuppernpc" ||
            args[0].toLowerCase() === "npcs/tuppers" ||
            args[0].toLowerCase() === "tuppers/npcs"
          ) {
            page = 7;
          } else if (
            args[0] === "8" ||
            args[0].toLowerCase() === "fun" ||
            args[0].toLowerCase() === "roleplay"
          ) {
            page = 8;
          } else if (args[0] === "9" || args[0].toLowerCase() === "leveling") {
            page = 9;
          } else
            return message.mentionReply(
              "<:tairitsuno:801419553933492245> | Unknown Command or Category"
            );
        } else {
          let commandinfo = new discord.MessageEmbed()
            .setTitle("Command: " + command.info.name)
            .setColor("#0affaf").setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${bot.config.prefix}${command.info.name}${" " + command.info.usage ||
            ""}\`\`
Aliases: ${command.info.aliases.join(", ")}

about the brackets:
\`blank\` means that you can leave it blank
<>:Means that if something with a space which must be used in the command
() or (<>):This can be left empty, or you can give argument after a space in
"":Means that if something with a space is used, this will combine it to one`);
          return message.noMentionReply(commandinfo);
        }
      }

      let embed = new discord.MessageEmbed()
        .setColor("#0affaf")
        .setTitle(`Page ${page}/${pages.length}`).setDescription(`${
        pages[page - 1]
      }

React <:botarright:766649411014361159>to go to page ${page + 1}`);

      message.noMentionReply(embed).then(msg => {
        msg.react("766649447413055498");
        msg.react("766649411014361159").then(r => {
          msg.react("🗑");
          const BackwardFilter = (reaction, user) =>
            reaction.emoji.id === "766649447413055498" &&
            user.id === message.author.id;
          const ForwardFilter = (reaction, user) =>
            reaction.emoji.id === "766649411014361159" &&
            user.id === message.author.id;
          const CloseFilter = (reaction, user) =>
            reaction.emoji.name === "🗑" && user.id === message.author.id;
          const backward = msg.createReactionCollector(BackwardFilter, {
            time: 60000,
            dispose: true
          });
          const forward = msg.createReactionCollector(ForwardFilter, {
            time: 60000,
            dispose: true
          });
          const close = msg.createReactionCollector(CloseFilter, {
            time: 60000
          });
          close.on("collect", r => {
            msg.delete();
            return;
          });
          backward.on("collect", async collect => {
            const userReactions = msg.reactions.cache.filter(reaction =>
              reaction.users.cache.has(message.author.id)
            );
            /*try {
	for (const reaction of userReactions.values()) {
		await reaction.users.remove(message.author.id);
	}
} catch (error) {
	console.error('Failed to remove reactions.');
}*/
            if (page <= 1) return;
            page--;
            if (page == 1) {
              embed.setDescription(`${pages[page - 1]}

React <:botarrowright:766649411014361159>to go to page ${page + 1}`);
              msg.edit(embed);
              return;
            }
            embed.setDescription(
              `${pages[page - 1]}` +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
          });
          backward.on("remove", async collect => {
            if (page <= 1) return;
            page--;
            if (page == 1) {
              embed.setDescription(`${pages[page - 1]}

React <:botarrowright:766649411014361159>to go to page ${page + 1}`);
              msg.edit(embed);
              return;
            }
            embed.setDescription(
              `${pages[page - 1]}` +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
          });
          forward.on("collect", async collect => {
            const userReactions = msg.reactions.cache.filter(reaction =>
              reaction.users.cache.has(message.author.id)
            );
            /*try {
	for (const reaction of userReactions.values()) {
		await reaction.users.remove(message.author.id);
	}
} catch (error) {
	console.error('Failed to remove reactions.');
}*/
            if (page === pages.length) return;
            page++;
            if (page >= pages.length) {
              embed.setDescription(
                `${pages[page - 1]}` +
                  `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}`
              );
              embed.setTitle(`Page ${page}/${pages.length}`);
              msg.edit(embed);
              return;
            }
            embed.setDescription(
              pages[page - 1] +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1} 
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
          });
          forward.on("remove", async collect => {
            if (page === pages.length) return;
            page++;
            if (page >= pages.length) {
              embed.setDescription(
                `${pages[page - 1]}` +
                  `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}`
              );
              embed.setTitle(`Page ${page}/${pages.length}`);
              msg.edit(embed);
              return;
            }
            embed.setDescription(
              pages[page - 1] +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1} 
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
          });
        });
      });
    }
  }
};
exports.options = [
  {
    name: "command-page",
    description: "which page or which Category?",
    type: 3,
    required: true
  }
];
exports.interaction = async (bot, message, args) => {
  let module = bot.helps.array();
  let pages = [
    "**Utillity/misc Commands**\n> `help`, `invite`, `support`, `prefix`, `avatar`, `info`, `userinfo(whois)`",
    "**Search/query Commands**\n> `say`, `sayembed`, `calculate`, `anime`, `poll`",
    "**Moderation Commands**\n> `kick`, `ban/unban`, `purge`, `setprefix`, `warn`, `warnings`, `mute/unmute`",
    "**Setup Commands**\n> `setprefix`, `setautorole`, `setautorolesystem`, `setmuterole`, `setverifyrole`, `setverifychannel`, `setwelcomemessage`, `setwelcomechannel`, `setleavemessage`, `setleavechannel`, `setwelcomemessagesystem`, `setgoodbyemessagesystem`, `setwelcomeimage`, `setwelcomeembed`, `prefix`, `setwarns`, `setupstatus`, `lvlmsg`",
    "**Economy Commands**\n> `balance`, `daily`, `dice(roll)`, `bet(gamble)`, `transfer`",
    "**Music Commands**\n> `join`, `play`, `np`, `lyrics`, `pause/continue`, `search-song(search)`, `queue`, `skip`,`skipto`, `skipall`, `loop`, `volume`, `disconnect`",
    "**Npc/Tupper Commands**\n> `npc`, `npccreate`, `npcname`, `npclist`, `npcinfo`, `npcdesc`, `npcremove`, `npcavatar`",
    "**Fun/roleplay Commands**\n> `kiss`, `hug`, `pat`, `slap`, `wink`, `cuddle`, `neko`, `foxgirl`",
    "**Leveling Commands**\n> `rank`, `addxp`, `leaderboard`"
  ];
  let list = [
    {
      Category: "**Utillity/misc**",
      commands:
        "> `help`, `invite`, `support`, `prefix`, `avatar`, `info`, `userinfo(whois)`"
    }, //1
    {
      Category: "**Search/query Commands**",
      commands: "> `say`, `sayembed`, `calculate`, `anime`, `poll`"
    }, //2
    {
      Category: "**Moderation Commands**",
      commands:
        "> `kick`, `ban/unban`, `purge`, `setprefix`, `warn`, `warnings`, `mute/unmute`"
    }, //3
    {
      Category: "**Setup Commands**",
      commands:
        "> `setprefix`, `setautorole`, `setautorolesystem`, `setmuterole`, `setverifyrole`, `setverifychannel`, `setwelcomemessage`, `setwelcomechannel`, `setleavemessage`, `setleavechannel`, `setwelcomemessagesystem`, `setgoodbyemessagesystem`, `setwelcomeimage`, `setwelcomeembed`, `prefix`, `setwarns`, `setupstatus`, `lvlmsg`"
    }, //4
    {
      Category: "**Economy Commands**",
      commands: "> `balance`, `daily`, `dice(roll)`, `bet(gamble)`, `transfer`"
    }, //5
    {
      Category: "**Music Commands**",
      commands:
        "> `join`, `play`, `np`, `lyrics`, `pause/continue`, `search-song(search)`, `queue`, `skip`, `skipto`, `skipall`, `loop`, `volume`, `disconnect`"
    }, //6
    {
      Category: "**Npc/Tupper Commands**",
      commands:
        "> `npc`, `npccreate`, `npcname`, `npclist`, `npcinfo`, `npcdesc`, `npcremove`, `npcavatar`"
    }, //7
    {
      Category: "**Fun/roleplay Commands**",
      commands:
        "> `kiss`, `hug`, `pat`, `slap`, `wink`, `cuddle`, `neko`, `foxgirl`"
    }, //8
    {
      Category: "**Leveling Commands**",
      commands: "> `rank`, `addxp`, `leaderboard`"
    }
  ];

  let page = 1;

  if (!message.guild) {
    if (args.find(arg => arg.name.toLowerCase() == "page")) {
      let cmd = args.find(arg => arg.name.toLowerCase() == "page");
      var command;
      //if(isNaN(cmd)){
      command = bot.commands.get(cmd);
      if (!command)
        command = bot.commands.find(x => x.info.aliases.includes(cmd));
      //}

      if (!command) {
        if (
          cmd === "1" ||
          cmd === "utillity" ||
          cmd === "utillities" ||
          cmd === "util" ||
          cmd === "utils" ||
          cmd === "miscs" ||
          cmd === "misc"
        ) {
          page = 1;
        } else if (
          args[0] === "2" ||
          args[0] === "search" ||
          args[0] === "query" ||
          args[0] === "searchs" ||
          args[0] === "queries" ||
          args[0] === "search/query" ||
          args[0] === "query/search" ||
          args[0] === "searchquery" ||
          args[0] === "querysearch"
        ) {
          page = 2;
        } else if (
          args[0] === "3" ||
          args[0] === "moderation" ||
          args[0] === "moderator" ||
          args[0] === "admin" ||
          args[0] === "administrator" ||
          args[0] === "mod" ||
          args[0] === "moderations" ||
          args[0] === "moderators" ||
          args[0] === "mods" ||
          args[0] === "admins" ||
          args[0] === "administrators"
        ) {
          page = 3;
        } else if (args[0] === "4" || args[0].toLowerCase() === "setup") {
          page = 4;
        } else if (
          args[0] === "5" ||
          args[0] === "economy" ||
          args[0] === "economies" ||
          args[0] === "eco" ||
          args[0] === "ecos"
        ) {
          page = 5;
        } else if (args[0] === "6" || args[0] === "music") {
          page = 6;
        } else if (
          args[0] === "7" ||
          args[0] === "npc" ||
          args[0] === "tupper" ||
          args[0] === "npcs" ||
          args[0] === "tuppers" ||
          args[0] === "npc/tupper" ||
          args[0] === "tupper/npc" ||
          args[0] === "npctupper" ||
          args[0] === "tuppernpc" ||
          args[0] === "npcs/tuppers" ||
          args[0] === "tuppers/npcs"
        ) {
          page = 7;
        } else if (
          args[0] === "8" ||
          args[0] === "fun" ||
          args[0] === "roleplay"
        ) {
          page = 8;
        } else if (args[0] === "9" || args[0] === "leveling") {
          page = 9;
        } else
          return bot.api.interactions(message.id, message.token).callback.post({
          data: {
            type: 4,
            data:
            "<:tairitsuno:801419553933492245> | Unknown Command or Category"
          }
        });
      } else {
        let commandinfo = new discord.MessageEmbed()
          .setTitle("Command: " + command.info.name)
          .setColor("#0affaf").setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${bot.config.prefix}${command.info.name}${" " + command.info.usage ||
          ""}\`\`
Aliases: ${command.info.aliases.join(", ")}

about the brackets:
\`blank\` means that you can leave it blank
<>:Means that if something with a space which must be used in the command
() or (<>):This can be left empty, or you can give argument after a space in
"":Means that if something with a space is used, this will combine it to one`);

        return bot.api.interactions(message.id, message.token).callback.post({
          data: {
            type: 4,
            data: await bot.createAPIMessage(message, commandinfo)
          }
        });
      }
    }

    let embed = new discord.MessageEmbed()
      .setColor("#0affaf")
      .setTitle(`Page ${page}/${pages.length}`)
      .setDescription(`${pages[page - 1]}`);

    return bot.api.interactions(message.id, message.token).callback.post({
      data: {
        type: 4,
        data: await bot.createAPIMessage(message, embed)
      }
    });
  } else {
    const permissions = message.channel.permissionsFor(message.client.user);

    if (!permissions.has("ADD_REACTIONS")) {
      if (args[0]) {
        let cmd = args[0];
        let command = bot.commands.get(cmd.toLowerCase());
        if (!command)
          command = bot.commands.find(x =>
            x.info.aliases.includes(cmd.toLowerCase())
          );
        if (!command)
          return message.mentionReply(
            "<:tairitsuno:801419553933492245> | Unknown Command"
          );
        let commandinfo = new discord.MessageEmbed()
          .setTitle("Command: " + command.info.name)
          .setColor("#0affaf").setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${bot.config.prefix}${command.info.name}${" " + command.info.usage ||
          ""}\`\`
Aliases: ${command.info.aliases.join(", ")}

about the brackets:
\`blank\` means that you can leave it blank
<>:Means that if something with a space which must be used in the command
() or (<>):This can be left empty, or you can give argument after a space in
"":Means that if something with a space is used, this will combine it to one`);
        return bot.api.interactions(message.id, message.token).callback.post({
          data: {
            type: 4,
            data: await bot.createAPIMessage(message, commandinfo)
          }
        });
      }
      let command = new discord.MessageEmbed()
        .setTitle("Commands list")
        .setColor("#0affaf");
      list.forEach(i => {
        command.addField(i.Category, i.commands);
      });
      return message.noMentionReply(command);
    } else {
      if (args[0]) {
        let cmd = args[0];
        let command = bot.commands.get(cmd.toLowerCase());
        if (!command)
          command = bot.commands.find(x =>
            x.info.aliases.includes(cmd.toLowerCase())
          );

        if (!command) {
          if (
            args[0] === "1" ||
            args[0].toLowerCase() === "utillity" ||
            args[0].toLowerCase() === "utillities" ||
            args[0].toLowerCase() === "util" ||
            args[0].toLowerCase() === "utils" ||
            args[0].toLowerCase() === "miscs" ||
            args[0].toLowerCase() === "misc"
          ) {
            page = 1;
          } else if (
            args[0] === "2" ||
            args[0].toLowerCase() === "search" ||
            args[0].toLowerCase() === "query" ||
            args[0].toLowerCase() === "searchs" ||
            args[0].toLowerCase() === "queries" ||
            args[0].toLowerCase() === "search/query" ||
            args[0].toLowerCase() === "query/search" ||
            args[0].toLowerCase() === "searchquery" ||
            args[0].toLowerCase() === "querysearch"
          ) {
            page = 2;
          } else if (
            args[0] === "3" ||
            args[0].toLowerCase() === "moderation" ||
            args[0].toLowerCase() === "moderator" ||
            args[0].toLowerCase() === "admin" ||
            args[0].toLowerCase() === "administrator" ||
            args[0].toLowerCase() === "mod" ||
            args[0].toLowerCase() === "moderations" ||
            args[0].toLowerCase() === "moderators" ||
            args[0].toLowerCase() === "mods" ||
            args[0].toLowerCase() === "admins" ||
            args[0].toLowerCase() === "administrators"
          ) {
            page = 3;
          } else if (args[0] === "4" || args[0].toLowerCase() === "setup") {
            page = 4;
          } else if (
            args[0] === "5" ||
            args[0].toLowerCase() === "economy" ||
            args[0].toLowerCase() === "economies" ||
            args[0].toLowerCase() === "eco" ||
            args[0].toLowerCase() === "ecos"
          ) {
            page = 5;
          } else if (args[0] === "6" || args[0].toLowerCase() === "music") {
            page = 6;
          } else if (
            args[0] === "7" ||
            args[0].toLowerCase() === "npc" ||
            args[0].toLowerCase() === "tupper" ||
            args[0].toLowerCase() === "npcs" ||
            args[0].toLowerCase() === "tuppers" ||
            args[0].toLowerCase() === "npc/tupper" ||
            args[0].toLowerCase() === "tupper/npc" ||
            args[0].toLowerCase() === "npctupper" ||
            args[0].toLowerCase() === "tuppernpc" ||
            args[0].toLowerCase() === "npcs/tuppers" ||
            args[0].toLowerCase() === "tuppers/npcs"
          ) {
            page = 7;
          } else if (
            args[0] === "8" ||
            args[0].toLowerCase() === "fun" ||
            args[0].toLowerCase() === "roleplay"
          ) {
            page = 8;
          } else if (args[0] === "9" || args[0].toLowerCase() === "leveling") {
            page = 9;
          } else
            return message.mentionReply(
              "<:tairitsuno:801419553933492245> | Unknown Command or Category"
            );
        } else {
          let commandinfo = new discord.MessageEmbed()
            .setTitle("Command: " + command.info.name)
            .setColor("#0affaf").setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${bot.config.prefix}${command.info.name}${" " + command.info.usage ||
            ""}\`\`
Aliases: ${command.info.aliases.join(", ")}

about the brackets:
\`blank\` means that you can leave it blank
<>:Means that if something with a space which must be used in the command
() or (<>):This can be left empty, or you can give argument after a space in
"":Means that if something with a space is used, this will combine it to one`);
          return message.noMentionReply(commandinfo);
        }
      }

      let embed = new discord.MessageEmbed()
        .setColor("#0affaf")
        .setTitle(`Page ${page}/${pages.length}`).setDescription(`${
        pages[page - 1]
      }

React <:botarright:766649411014361159>to go to page ${page + 1}`);

      message.noMentionReply(embed).then(msg => {
        msg.react("766649447413055498");
        msg.react("766649411014361159").then(r => {
          msg.react("🗑");
          const BackwardFilter = (reaction, user) =>
            reaction.emoji.id === "766649447413055498" &&
            user.id === message.author.id;
          const ForwardFilter = (reaction, user) =>
            reaction.emoji.id === "766649411014361159" &&
            user.id === message.author.id;
          const CloseFilter = (reaction, user) =>
            reaction.emoji.name === "🗑" && user.id === message.author.id;
          const backward = msg.createReactionCollector(BackwardFilter, {
            time: 60000,
            dispose: true
          });
          const forward = msg.createReactionCollector(ForwardFilter, {
            time: 60000,
            dispose: true
          });
          const close = msg.createReactionCollector(CloseFilter, {
            time: 60000
          });
          close.on("collect", r => {
            msg.delete();
            return;
          });
          backward.on("collect", async collect => {
            const userReactions = msg.reactions.cache.filter(reaction =>
              reaction.users.cache.has(message.author.id)
            );
            /*try {
	for (const reaction of userReactions.values()) {
		await reaction.users.remove(message.author.id);
	}
} catch (error) {
	console.error('Failed to remove reactions.');
}*/
            if (page <= 1) return;
            page--;
            if (page == 1) {
              embed.setDescription(`${pages[page - 1]}

React <:botarrowright:766649411014361159>to go to page ${page + 1}`);
              msg.edit(embed);
              return;
            }
            embed.setDescription(
              `${pages[page - 1]}` +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
          });
          backward.on("remove", async collect => {
            if (page <= 1) return;
            page--;
            if (page == 1) {
              embed.setDescription(`${pages[page - 1]}

React <:botarrowright:766649411014361159>to go to page ${page + 1}`);
              msg.edit(embed);
              return;
            }
            embed.setDescription(
              `${pages[page - 1]}` +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
          });
          forward.on("collect", async collect => {
            const userReactions = msg.reactions.cache.filter(reaction =>
              reaction.users.cache.has(message.author.id)
            );
            /*try {
	for (const reaction of userReactions.values()) {
		await reaction.users.remove(message.author.id);
	}
} catch (error) {
	console.error('Failed to remove reactions.');
}*/
            if (page === pages.length) return;
            page++;
            if (page >= pages.length) {
              embed.setDescription(
                `${pages[page - 1]}` +
                  `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}`
              );
              embed.setTitle(`Page ${page}/${pages.length}`);
              msg.edit(embed);
              return;
            }
            embed.setDescription(
              pages[page - 1] +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1} 
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
          });
          forward.on("remove", async collect => {
            if (page === pages.length) return;
            page++;
            if (page >= pages.length) {
              embed.setDescription(
                `${pages[page - 1]}` +
                  `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1}`
              );
              embed.setTitle(`Page ${page}/${pages.length}`);
              msg.edit(embed);
              return;
            }
            embed.setDescription(
              pages[page - 1] +
                `

React with <:botarrowleft:766649447413055498>to go back page ${page - 1} 
Or react with <:botarrowright:766649411014361159>to go to page ${page + 1}`
            );
            embed.setTitle(`Page ${page}/${pages.length}`);
            msg.edit(embed);
          });
        });
      });
    }
  }
};
exports.info = {
  name: "help",
  aliases: [
    "h",
    "command",
    "commands",
    "commandlist",
    "commandslist",
    "cmd",
    "cmds",
    "cmdlist",
    "cmdlists"
  ],
  usage: "(<command>)",
  description: "Get the information of a command or get the help list"
};
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
