const teaus = require("teaus4")
 
const bot = new teaus({
  token: "",
  prefix: ["?"]
})
console.log("Бот запущен")
bot.MessageEvent()

bot.Command({
name: "test",
aliases: ["тест", "t", "отест"],
code: ``
})