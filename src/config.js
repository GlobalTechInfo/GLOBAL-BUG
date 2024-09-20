global.namaown = "Qasim Ali" // your owner name here
global.namabot = "© GlobalTechInfo" // your bot name here
global.versisc = "9.5.0" //
global.owner = ["923444844060"] // your owner number here
global.tele = "https://t.me/GlobalBotInc" // your telegram here
global.url = "https://www.youtube.com/@GlobalTechInfo" // Your YouTube Here
global.namastore = "LynnZxD" // UBAH NAMA STORE LU
global.simbol = "✪" // You Can Change Simbol
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Ganti Logo Disini
global.painlogo = "http://telegra.ph/file/9a332c815ad31956d5ce6.jpg" 

global.my = {
      saluran: "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07",
      idCH: "120363319098372999@newsletter",
      youtube: "https://www.youtube.com/@GlobalTechInfo",
      telegram: "https://t.me/GlobalBotInc",
      Instagram: "https://www.instagram.com/"
   }


global.mess = {
    success: 'ᴅᴏɴᴇ',
    admin: '_*❗ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ !*_',
    botAdmin: '_*❗ʙᴏᴛ ᴍᴜꜱᴛ ʙᴇ ᴛʜᴇ ᴀᴅᴍɪɴ !*_',
    OnlyOwner: '_*❗ᴏᴡɴᴇʀꜱ ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ !*_',
    OnlyGrup: '_*❗ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ ꜰᴏʀ ɢʀᴏᴜᴘ !*_',
    private: '_(❗ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ ꜰᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ !*_',
    wait: '_*ᴘʀᴏᴄᴇꜱꜱɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*_',
    notregist: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ*_',
    premium: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴘʀᴇᴍɪᴜᴍ_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 WIB_*.',
     bugrespon: `\`[ ! ]\`ᴡᴀɪᴛ ; ᴄᴜʀʀᴇɴᴛʟʏ ꜱᴇɴᴅɪɴɢ ᴠɪʀᴜꜱ ᴀᴛᴛᴀᴄᴋ`,
     donebug: `\`[ ! ]\`ᴠɪʀᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ꜱᴇɴᴛ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ`,
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})