const { codeBlock } = require("@discordjs/builders");
const mcsrvstat = require('mcsrvstat-wrapper');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  await mcsrvstat.fetchJavaServer(args[0]);
  if (mcsrvstat.status === true) {
  const stats = codeBlock("asciidoc", `= MC Stats =
  • Server  :: Online
  • Online Players  :: ${mcsrvstat.oPlayers} / ${mcsrvstat.maxPlayers}
  • IP  :: ${mcsrvstat.servip}
  • Version  :: ${mcsrvstat.version}`);
  message.channel.send(stats);
  } else if (mcsrvstat.status === false) {
    const stats = codeBlock("asciidoc", `= MC Stats =
    • Server :: Offline`);
    message.channel.send(stats);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "mcsrvstats",
  category: "MC",
  description: "Gives some useful bot statistics on a MC server",
  usage: "mcsrvstats [IP]"
};
