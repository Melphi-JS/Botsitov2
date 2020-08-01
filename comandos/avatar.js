module.exports = (client, message, args) => {

const Discord = require("discord.js")

const usuario = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;

const avatar = new Discord.MessageEmbed()
.setAuthor("Avatar de "+usuario.tag, usuario.displayAvatarURL({size: 2048, dynamic: true}))
.setDescription(`**__[Descargar Avatar](${usuario.displayAvatarURL({size: 2048, dynamic: true})})__**`)
.setImage(usuario.displayAvatarURL({size: 2048 ,dynamic: true}))
.setColor("RANDOM")
message.channel.send(avatar)
}