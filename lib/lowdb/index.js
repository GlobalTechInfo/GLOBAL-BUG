/* Subscribe My YouTube Channel: @GlobalTechInfo

Follow The Channel For More :https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07

Contact Me: https://t.me/GlobalTechInc

GitHub: https://github.com/GlobalTechInfo

Credit Qasim Ali

🚫 DON'T TRY TO CHANGE ANYTHING OTHERWISE BOT WILL NOT WORK PROPERLY 🚫
*/

module.exports = {
...require('./adapters/JSONFile.js'),
...require('./adapters/JSONFileSync.js'),
...require('./adapters/LocalStorage.js'),
...require('./adapters/Memory.js'),
...require('./adapters/MemorySync.js'),
...require('./adapters/TextFile.js'),
...require('./adapters/TextFileSync.js'),
...require('./Low.js'),
...require('./LowSync.js'),
}