const TelegramBot = require('node-telegram-bot-api')

const TOKEN ='557457250:AAEGwpwQeVgMaPYH_gsuhoOkE7kV8nUtvIs'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Salom quyon botim, shu safar ishlarsanda " Hi ${msg.from.first_name}"`)
})
