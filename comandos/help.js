module.exports = (client, message, args) => {

const Discord = require("discord.js")

const help = new Discord.MessageEmbed()
.setDescription(`Hola ${message.author.username}`)
.addField("Comandos de Configuración", "`setprefix`")
.addField("Comandos de Utilidad", "`avatar` `ping`")
.setColor("RANDOM")
message.channel.send(help)
}