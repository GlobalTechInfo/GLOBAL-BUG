/* Subscribe My YouTube Channel: @GlobalTechInfo

Follow The Channel For More :https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07

Contact Me: https://t.me/GlobalTechInc

GitHub: https://github.com/GlobalTechInfo

Credit Qasim Ali

🚫 DON'T TRY TO CHANGE ANYTHING OTHERWISE BOT WILL NOT WORK PROPERLY 🚫
 */



const cheerio = require('cheerio')
const axios = require('axios')

async function dafontSearch(query) {
const base = 'https://www.dafont.com'
const res = await axios.get(`${base}/search.php?q=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
const total = $('div.dffont2').text().replace(` fonts on DaFont for ${query}`, '') 
$('div').find('div.container > div > div.preview').each(function(a, b) {
$('div').find('div.container > div > div.lv1left.dfbg').each(function(c, d) { 
$('div').find('div.container > div > div.lv1right.dfbg').each(function(e, f) { 
let link = `${base}/` + $(b).find('a').attr('href')
let judul = $(d).text() 
let style = $(f).text() 
hasil.push({ judul, style, link, total}) 
}) 
}) 
}) 
return hasil
}

async function dafontDown(link) {
const des = await axios.get(link)
const sup = cheerio.load(des.data)
const result = []
let style = sup('div').find('div.container > div > div.lv1right.dfbg').text() 
let judul = sup('div').find('div.container > div > div.lv1left.dfbg').text()
let isi
try {
isi = sup('div').find('div.container > div > span').text().split('.ttf')
output = sup('div').find('div.container > div > span').eq(0).text().replace('ttf' , 'zip')
} catch {
isi = sup('div').find('div.container > div > span').text().split('.otf')
output = sup('div').find('div.container > div > span').eq(0).text().replace('otf' , 'zip')
}
let down = 'http:' + sup('div').find('div.container > div > div.dlbox > a').attr('href')
result.push({ style, judul, isi, output, down})
return result
}

module.exports = { dafontSearch, dafontDown }