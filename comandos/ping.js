module.exports = (client, message, args) => {

const Discord = require("discord.js")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')){
    const permisos = new Discord.MessageEmbed()
    .setDescription("No tengo permisos.\n`Embed Links`")
    .setColor("RANDOM")
    message.channel.send(permisos)
}

const ping = new Discord.MessageEmbed()
.setDescription("Espere un momento")
.setColor("RANDOM")
message.channel.send(ping).then(m => {
setTimeout(() => {
    
const algo = new Discord.MessageEmbed()
.setDescription(`:incoming_envelope:  Envío de mensajes: **${m.createdTimestamp - message.createdTimestamp} ms.**\n:satellite_orbital: DiscordAPI: **${client.ws.ping} ms.**`)
.setTimestamp()
.setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
.setColor("RANDOM")
m.edit(algo)
}, 3000)
})
}