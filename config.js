/*
      Subscribe My YouTube Channel: @GlobalTechInfo

Follow The Channel For More :https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07

Contact Me: https://t.me/GlobalTechInc

GitHub: https://github.com/GlobalTechInfo

Credit Qasim Ali
 

*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "© GlobalTechInfo"
global.namabot = "𝗚𝗹𝗼𝗯𝗮𝗹-𝗕𝘂𝗴"
global.versisc = "9.0.0"
global.owner = ["923xxx Qasim Ali"]
global.tele = "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07"
global.url = "https://www.youtube.com/@GlobalTechInfo"
global.namastore = "Zʏɴxᴢᴏ"

// Global Simbol
global.simbol = "ᯤ"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\`This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\`This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\`This Command Can Only Be Used By Owner !`,
    OnlyGrup: `\`[ # ]\`This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\`This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\`Wait a Moment`,
    notregist: `\`[ # ]\`You are not registered in the Bot Database. Please register first`,
    premium: `\`[ # ]\`Premium only" Want Premium? Chat Owner`,
    endLimit: `\`[ # ]\`Your Daily Limit Has Expired, The Limit Will Be Reset Every Hour 00:00 WIB`,
     bugrespon: `\`[ # ]\`𝙒𝙖𝙞𝙩 𝙖 𝙈𝙞𝙣𝙪𝙩𝙚\nCurrently Sending Virus Attack`,
     donebug: `\`[ # ]\` 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴\nVirus Has Been Sent`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})