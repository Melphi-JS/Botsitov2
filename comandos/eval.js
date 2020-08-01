module.exports = async (client, message, args) => {
if (!["534951970310586378"].includes(message.author.id)) return;

const Discord = require("discord.js")

let code = args.join(' ')
if(!code) return;

try {

let evaluacion = eval(code)
let type = typeof(evaluacion)
if (typeof evaluacion !== "string")
evaluacion = require("util").inspect(evaluacion)

const correct = new Discord.MessageEmbed()
.addField("Evaluado en ", `\`\`\`md\n< ${client.ws.ping}ms >\n\`\`\``, true)
.addField("Tipo", `\`\`\`md\n< ${type} >\n\`\`\``, true)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\n\`\`\``)
.addField("Salida", `\`\`\`js\n${evaluacion}\n\`\`\``)
.setFooter(`Evalucion Lista | ${message.author.username}`, message.author.displayAvatarURL())
.setColor("RANDOM")
message.channel.send(correct)    

} catch(err) {

const problema = new Discord.MessageEmbed()
.addField("Evaluado en ", `\`\`\`md\n< ${client.ws.ping}ms >\n\`\`\``, true)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\n\`\`\``)
.addField("Salida", `\`\`\`js\n${err}\n\`\`\``)
.setFooter(`Error | ${message.author.username}`,message.author.displayAvatarURL())
.setColor("RANDOM")
message.channel.send(problema)
}}