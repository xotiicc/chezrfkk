const Discord = require("discord.js")
const bot = new Discord.Client();
const token = require("./token.json")

bot.on("ready", async () => {
    console.log("Le bot est allumé")
    setTimeout(() => {
        bot.user.setActivity("Le developpement", { type: 'WATCHING' })
    }, 100)

})
bot.on("message", message => {

    if (message.content.startsWith("/clear")) {
        message.delete();
        if (message.member.hasPermission('MANAGE_MESSAGES')) {

            let args = message.content.trim().split(/ +/g);

            if (args[1]) {
                if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99) {

                    message.channel.bulkDelete(args[1])
                    message.channel.send(`J'ai supprimé ${args[1]} message(s) !`)

                }
                else {
                    message.channel.send('Vous devez indiquez une valeur entre 1 et 99 !')
                }

            }
            else {
                message.channel.send('Vous devez indiquer un nombre de message à supprimer !')
            }
        }
        else {
            message.channel.send('Vous devez avoir la permission de gerer les messages pour effectuer cette commande !')
        }






    }
    if (message.content.startsWith("/stats")) {
        let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
        let totalmembers = message.guild.members.cache.size;
        let totalservers = bot.guilds.cache.size;
        let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;
        let total_news = message.guild.roles.cache.get('743580602481115266').members.size;
        
        
        const StatsServ = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Stats Du Serv')
            .setURL('https://https://twitch.tv/jl_xotiic')
            .setAuthor('ИксоTяпротив#3184', 'https://media.discordapp.net/attachments/729824880794533944/747184555449909268/pp_gentil.jpg?width=655&height=677', 'https://twitch.tv/jl_xotiic')
            .setDescription('Statistique Du Serveur')
            .setThumbnail('https://media.discordapp.net/attachments/729824880794533944/747184555449909268/pp_gentil.jpg?width=655&height=677')
            .addFields(
                { name: 'Membres Connectés', value: onlines, inline: true },
                { name: 'Nombres de personnes arrivantes', value:total_news , inline: true },
                { name: 'Nombre de bots', value: totalbots , inline: true },
            )
            .addField('PUTE', 'NOC', true)
            .setTimestamp('')
            .setFooter('NIQUE LES PD', 'https://media.discordapp.net/attachments/729824880794533944/747184555449909268/pp_gentil.jpg?width=655&height=677');

        message.channel.send(StatsServ);

    }
    if (message.content.startsWith("/ban")) {
       if(message.member.hasPermission('BAN_MEMBERS')){
           let args = message.content.trim().split(/ +/g)

           utilisateur = message.mentions.members.first();
           temps = args[2]
           raison = args[3]

           if(!utilisateur){
               return message.channel.send('Vous devez mentionnez un utilisateur');
           }
           else{
               if(!temps || isNaN(temps)){
                   return message.channel.send('Vous devez indiquer un temps en seconde');
               }
               else{
                   if(!raison){
                       return message.channel.send('Vous devez indiquer la raison du ban'); 
                    }
                   else{
                        // On effectue le tempban
                        message.guild.members.ban(utilisateur.id);
                        setTimeout(function(){
                            message.guild.members.unban(utilisateur.id)
                        }, temps*1000);

                    } 
               }
           }
        }
        else{
            return message.channel.send('Vous n\'avez pas les permissions nécessaires !')
        }
    }
    if (message.content.startsWith("/elyssa")) {
        return message.channel.send('La moins hlel du fc hlel')
    }
    if (message.content.startsWith("/rfk")) {
        return message.channel.send('Il s\'appelle en réalité yanis !')
    }
    if (message.content.startsWith("/fantom")) {
        return message.channel.send('Qu\'il ferme sa gueule ce satané gros lardon !')
    }
    

    




    
})
bot.login(token.token);