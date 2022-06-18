const rewards = {
    exp: 90000000,
    money: 90000000,
    potion: 900000,
    mythic: 90000000,
    legendary: 90000,
}

const cooldown = 1
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `You have already claimed this owner claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,'*––––––『 Owner Claim 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = ['oclaim']
handler.tags = ['owner']
handler.command = /^(oclaim)$/i

handler.cooldown = cooldown
handler.owner = true

export default handler
