module.exports = async(client, message, args) => {

const Discord = require("discord.js")
const comandos = args.join(" ").split(";")
const descripcion = comandos[0]
const tiempo = comandos[1]

let ms = require("ms")

if (!message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS')) return message.channel.send("No tengo permisos.\n`Embed Links`")

if (!descripcion) return message.channel.send("Debes colocarlo de la siguiente. Regalo;Tiempo ")
if (!tiempo) return message.channel.send("Debes poner los segundos de duracion del sorteo.")

const giveaway = new Discord.MessageEmbed()
.setTitle(descripcion)
.setDescription(`:alarm_clock: Termina en: \nPatrocinado por: **${message.author.username}**\n\nReaccionar con :tada: para participar.`)
.setTimestamp()
.setColor("EC5373")
message.channel.send(giveaway).then(m => {

m.react("🎉")

const filter = (reaction, user) => reaction.emoji.name == "🎉" && user.id !== client.user.id
const collector = m.createReactionCollector(filter, {time: ms(tiempo)})

var array = []

collector.on("collect", r => {
array.push(r.users.cache.last().id)

})

collector.on("end", () => {

const winner = array[Math.floor(Math.random() * array.length)] 

if (array.length === 0) return message.channel.send("Lastimosamente nadie a reaccionado al Regalo de **"+message.author.username+"**")

const edit = new Discord.MessageEmbed()
.setTitle(descripcion)
.setDescription("Ganador: <@!"+winner+">\nAlojado por: <@!"+message.author.id+">")
.setColor("EC5373")
.setTimestamp()
.setFooter("Terminó a las")
m.edit(edit)

message.channel.send(" Felicidades!! <@!"+winner+"> Haz ganado **"+descripcion+"**").then(g => {
g.react("719063407751462922")

})
})
})
}