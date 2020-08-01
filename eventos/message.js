module.exports = async (client, message) => { 

const Discord = require("discord.js")

const prefixes = "g!"
    
if(!message.content.startsWith(prefixes)) return; 
if(message.author.bot) return;
                    
const args = message.content.slice(prefixes.length).trim().split(/ +/g);  
const command = args.shift().toLowerCase()
                      
let cmd = client.comandos.get(command); 
if(!cmd) return;

let blacklist = []
if(blacklist.includes(message.author.id)) return;

cmd(client, message, args)

}