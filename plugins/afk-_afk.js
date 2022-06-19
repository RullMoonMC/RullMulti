export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
  𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒂𝒈 𝑫𝒊𝒂 :𝑽
  𝑫𝒊𝒂 𝑺𝒆𝒅𝒂𝒏𝒈 𝑨𝑭𝑲 ${reason ? '𝑫𝒆𝒏𝒈𝒂𝒏 𝑨𝒍𝒂𝒔𝒂𝒏 ' + reason : '𝑻𝒊𝒅𝒂𝒌 𝑨𝒅 𝑨𝒍𝒂𝒔𝒂𝒏'}
  Selama ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
