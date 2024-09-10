/* Subscribe My YouTube Channel: @GlobalTechInfo

Follow The Channel For More :https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07

Contact Me: https://t.me/GlobalTechInc

GitHub: https://github.com/GlobalTechInfo

Credit Qasim Ali

🚫 DON'T TRY TO CHANGE ANYTHING OTHERWISE BOT WILL NOT WORK PROPERLY 🚫
*/

const { MissingAdapterError } = require('./MissingAdapterError.js');
class LowSync {
constructor(adapter) {
this.data = null;
if (adapter) {
this.adapter = adapter;
}
else {
throw new MissingAdapterError();
}
}
read() {
this.data = this.adapter.read();
}
write() {
if (this.data !== null) {
this.adapter.write(this.data);
}
}
}
module.exports = { LowSync };
