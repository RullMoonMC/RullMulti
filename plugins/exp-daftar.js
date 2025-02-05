import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "Pilih Umur !",
	rows: [
	    {title: "Umur Random", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "O L D",
	rows: [
	    {title: "30 Years", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 Years", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 Years", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 Years", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 Years", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 Years", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 Years", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 Years", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Years", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Years", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "Y O U N G",
	rows: [
	    {title: "20 Years", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Years", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Years", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Years", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 Years", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 Years", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 Years", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Years", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Years", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 Years", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 Years", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 Years", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `│›ᴍᴏʜᴏɴ ᴘɪʟɪʜ ᴜᴍᴜʀ ᴀɴᴅᴀ ᴅɪ ᴛᴏᴍʙᴏʟ ʙᴇʀɪᴋᴜᴛ...`,
  footer: `┗ *ɴᴀᴍᴀ ᴋᴀᴍᴜ:* ${conn.getName(m.sender)}\n<❔> Mau Custom Name? Ketik *${usedPrefix + command} NamaKamu.Umur*`,
  title: "▢- - - - - ʀᴇɢɪsᴛʀᴀsɪ - - - - -",
  buttonText: "ᴋʟɪᴋ ᴅɪsɪɴɪ !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] ᴋᴀᴍᴜ ᴜᴅʜ ᴛᴇʀᴅᴀғᴛᴀʀ\nᴍᴀᴜ ᴅᴀғᴛᴀʀ ᴜʟᴀɴɢ ʙɢ? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'ᴛᴇʀʟᴀʟᴜ ᴛᴜᴀ ᴀɴᴅᴀᴀᴀ'
  if (age < 5) throw 'ʙᴏᴄɪʟ ʙᴀɴɢ :ᴠ'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `

⏚ ɴᴀᴍᴀ: ${name}
⏚ sɴ: ${sn}
⏚ sᴛᴀᴛᴜs: ᴠᴇʀɪᴠᴇᴅ
⏚ ᴜᴍᴜʀ: ${age} ᴛᴀʜᴜɴ

`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'𔘓 MoonBot',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/0db7d1f638e0dc0672a60.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
