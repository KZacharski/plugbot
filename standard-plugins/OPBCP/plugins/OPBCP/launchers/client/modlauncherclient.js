
// load configs

const mainConfig = require('../../../../mainconfig.json')

// load commands

const purge = require('../../commands/moderation/purge')
const ban = require('../../commands/moderation/ban')
const kick = require('../../commands/moderation/kick')

// load other functions

const logger = require('../../../logger')

module.exports = {
    name: "mod",
    func: function a(client){

        logger.save(`modlauncher for client is ready`, './logs/OPBCP/cmdhandler.txt')
        
        client.on('message', msg =>{

            const args = msg.content.slice(mainConfig.prefix.length).split(/ +/);
            const command = args.shift().toLocaleLowerCase();

            switch(command){

                case "ban":
                    ban.func(msg, args)
                    logger.save(`called out ban`, './logs/OPBCP/cmdhandler.txt')
                break;

                case "kick":
                    kick.func(msg, args)
                    logger.save(`called out kick`, './logs/OPBCP/cmdhandler.txt')
                break;

                case "purge":
                    purge.func(msg, args)
                    logger.save(`called out purge`, './logs/OPBCP/cmdhandler.txt')
                break;

                default:

                break;
            }
        })
    }
}