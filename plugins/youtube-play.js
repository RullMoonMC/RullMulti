import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} Playing ${htka}*

${htjava} *Title:* ${title}
𓊔˖ ۫ ݂ 🌙 *Waktu Publikasi:* ${publishedTime}
𓊔˖ ۫ ݂ ✨ *Durasi:* ${durationH}
𓊔˖ ۫ ݂ 🎀 *Penonton:* ${viewH}

🔗 *Link:* ${url}
📔 *Deskripsi:* ${description}
  `.trim(), wm, thumbnail, url, '❒ Ke Youtube', null, null, [
    ['⌗° |Audio', `${usedPrefix}yta ${url} yes`],
    ['⌗° |Video', `${usedPrefix}ytv ${url} yes`],
    ['⌗° |Cari Di Youtube', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler
