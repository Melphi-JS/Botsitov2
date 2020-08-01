module.exports = (client, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permisos.").then(m => {
setTimeout(() => {
m.delete()
}, 5000);
})

if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo permisos para banear.").then(m => {
setTimeout(() => {
m.delete()
}, 5000);
})

let usuario = message.mentions.users.first() || client.users.resolve(args[0]) 
if(!usuario) return message.channel.send("Debes mencionar a alguien.").then(m => {
setTimeout(() => {
m.delete()
}, 5000);
})

if(!message.guild.member(usuario).bannable) return message.channel.send("No puedo banear al ususario mencionado.").then(m => {
setTimeout(() => {
m.delete()
}, 5000);
})

let base = args.join(' ').split(' | ')
let razon = base[0]
let tiempo = base[1]

message.channel.send("El usuario **"+usuario.tag+"** fue baneado de **"+message.guild.name+"**")
message.guild.member.ban(usuario, {reason: razon, days: tiempo})

}