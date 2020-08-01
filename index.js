const Discord = require("discord.js")
const client = new Discord.Client()

let { readdirSync } = require('fs')
client.comandos = new Discord.Collection()

for(const file of readdirSync('./comandos/')) { 
if(file.endsWith(".js")) { 
let fileName = file.substring(0, file.length - 3)
let fileContents = require(`./comandos/${file}`)
client.comandos.set(fileName, fileContents);
}
}

for(const file of readdirSync('./eventos/')) { 
if(file.endsWith(".js")){
let fileName = file.substring(0, file.length - 3)
let fileContents = require(`./eventos/${file}`)
client.on(fileName, fileContents.bind(null, client))
delete require.cache[require.resolve(`./eventos/${file}`)]; 
}
}


client.login(process.env.TOKEN)
console.log(`Estoy listo`)