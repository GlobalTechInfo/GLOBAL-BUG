/* Subscribe My YouTube Channel: @GlobalTechInfo

Follow The Channel For More :https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07

Contact Me: https://t.me/GlobalTechInc

GitHub: https://github.com/GlobalTechInfo

Credit Qasim Ali

🚫 DON'T TRY TO CHANGE ANYTHING OTHERWISE BOT WILL NOT WORK PROPERLY 🚫
*/

const fs = require('fs')

/**
 * Add Commands/Response message to database
 * @param {String} hex
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
const addRespons = (hex, response, userId, _data) => {
    const obj = {
        hex: hex,
        balasan: response,
        creator: userId
    }
    _data.push(obj)
    fs.writeFileSync('./database/respon.json', JSON.stringify(_data))

    return true
}


/**
 * Delete commands from database
 * @param {String} command
 * @param {Object} _data
 */
const deleteRespons = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].hex === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/respon.json', JSON.stringify(_data))
        }
    })
    return true
}


/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @returns {Boolean}
 */

const checkRespons = (commands, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].hex === commands) {
            status = true
        }
    })

    return status
}



module.exports = {
    addRespons,
    deleteRespons,
    checkRespons
}