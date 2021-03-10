const fs = require('fs')
let setting = JSON.parse(fs.readFileSync('./../../settings/setting.json'))
let {
    ownerNumbers
} = setting
const idowner = `${ownerNumbers}@s.whatsapp.net`

//Reading Text
exports.menu = (prefix, pushname, botName, ownerName, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, nsls, process) => {
    return`
◩ *User Info*
  │
  ├❏ Name : ${pushname}
  ├❏ Premium : ${premi}
  ├❏ Number : wa.me/${sender.split("@")[0]}
  ├❏ Money : ⏣ ${uangku}
  ├❏ XP : ${getLevelingXp(sender)}/${reqXp}
  ├❏ Level : ${getLevelingLevel(sender)}
  └❏ Role : ${role}
◩ *Bot Info*
  │
  ├❏ Bot Name : ${botName}
  ├❏ Owner Name : ${ownerName}
  ├❏ Owner Number : wa.me/${ownerNumbers}
  ├❏ Prefix : 「 ${prefix} 」
  ├❏ Browser : ${nsls.browserDescription[1]}
  ├❏ Server : ${nsls.browserDescription[0]}
  ├❏ Version : ${nsls.browserDescription[2]}
  ├❏ Speed : ${process.uptime()}
  ├❏ HandPhone : ${nsls.user.phone.device_manufacturer}
  └❏ WhatsApp Version : ${nsls.user.phone.wa_version}
◩ *Main*
  │
  ├❏ ${prefix}help
  └❏ ${prefix}menu
◩ *Xp, Limit, & Money*
  │
  ├❏ ${prefix}limit
  ├ Usage : ${prefix}limit
  ├ Example : ${prefix}limit
  ├───────────────
  ├❏ ${prefix}giftlimit
  ├ Usage : ${prefix}giftlimit [jumlah]
  ├ Example : ${prefix}giftlimit 3
  ├───────────────
  ├❏ ${prefix}buylimit
  ├ Usage : ${prefix}buylimit [jumlah]
  ├ Example : ${prefix}buylimit 3
  ├───────────────
  ├❏ ${prefix}bal
  ├ Usage : ${prefix}bal
  ├ Example : ${prefix}bal
  ├───────────────
  ├❏ ${prefix}balance
  ├ Usage : ${prefix}balance
  ├ Example : ${prefix}balance
  ├───────────────
  ├❏ ${prefix}transfer
  ├ Usage : ${prefix}transfer [@tag|jumlah]
  ├ Example : ${prefix}transfer @${idowner.split("@")[0]}|3
  ├───────────────
  ├❏ ${prefix}level
  ├ Usage : ${prefix}level
  ├ Example : ${prefix}level
  ├───────────────
  ├❏ ${prefix}mining
  ├ Usage : ${prefix}mining
  ├ Example : ${prefix}mining
  ├───────────────
  ├❏ ${prefix}leaderboard
  ├ Usage : ${prefix}leaderboard
  ├ Example : ${prefix}leaderboard
  └───────────────
◩ *About*
  │
  ├❏ ${prefix}info
  ├ Usage : ${prefix}info
  ├ Example : ${prefix}info
  └───────────────
◩ *Maker*
  │
  ├❏ ${prefix}sticker
  ├ Usage : ${prefix}sticker
  ├ Example : ${prefix}sticker
  ├───────────────
  ├❏ ${prefix}stiker
  ├ Usage : ${prefix}stiker
  ├ Example : ${prefix}stiker
  ├───────────────
  ├❏ ${prefix}toimg
  ├ Usage : ${prefix}toimg
  ├ Example : ${prefix}toimg
  ├───────────────
  ├❏ ${prefix}tomp3
  ├ Usage : ${prefix}tomp3
  ├ Example : ${prefix}tomp3
  ├───────────────
  ├❏ ${prefix}ttp
  ├ Usage : ${prefix}ttp [teks]
  ├ Example : ${prefix}ttp Nslszt
  └───────────────
◩ *Downloader*
  │
  ├❏ ${prefix}ytmp3
  ├ Usage : ${prefix}ytmp3 [https://link]
  ├ Example : ${prefix}ytmp3 https://youtu.be/vOdUcyAiHjI
  └───────────────
◩ *Group*
  │
  ├❏ ${prefix}promote
  ├ Usage : ${prefix}promote [@tag]
  ├ Example : ${prefix}promote @${idowner.split("@")[0]}
  ├───────────────
  ├❏ ${prefix}demote
  ├ Usage : ${prefix}demote [@tag]
  ├ Example : ${prefix}demote @${idowner.split("@")[0]}
  ├───────────────
  ├❏ ${prefix}add
  ├ Usage : ${prefix}add [nomor]
  ├ Example : ${prefix}add ${ownerNumbers}
  ├───────────────
  ├❏ ${prefix}kick
  ├ Usage : ${prefix}kick [@tag]
  ├ Example : ${prefix}kick @${idowner.split("@")[0]}
  ├───────────────
  ├❏ ${prefix}listadmins
  ├ Usage : ${prefix}listadmins
  ├ Example : ${prefix}listadmins
  ├───────────────
  ├❏ ${prefix}linkgroup
  ├ Usage : ${prefix}linkgroup
  ├ Example : ${prefix}linkgroup
  ├───────────────
  ├❏ ${prefix}leave
  ├ Usage : ${prefix}leave
  ├ Example : ${prefix}leave
  ├───────────────
  ├❏ ${prefix}group
  ├ Usage : ${prefix}group [open/close]
  ├ Example : ${prefix}group close
  ├───────────────
  ├❏ ${prefix}setname
  ├ Usage : ${prefix}setname [teks]
  ├ Example : ${prefix}setname Ini Group
  ├───────────────
  ├❏ ${prefix}setdesc
  ├ Usage : ${prefix}setdesc [teks]
  ├ Example : ${prefix}setdesc Welcome Tod!
  ├───────────────
  ├❏ ${prefix}welcome
  ├ Usage : ${prefix}welcome [1/0]
  ├ Example : ${prefix}welcome 1
  ├───────────────
  ├❏ ${prefix}antibadword
  ├ Usage : ${prefix}antibadword [enable/disable]
  ├ Example : ${prefix}antibadword enable
  ├───────────────
  ├❏ ${prefix}leveling
  ├ Usage : ${prefix}antibadword [enable/disable]
  ├ Example : ${prefix}antibadword enable
  ├───────────────
  ├❏ ${prefix}listbadword
  ├ Usage : ${prefix}listbadword
  ├ Example : ${prefix}listbadword
  ├───────────────
  ├❏ ${prefix}event
  ├ Usage : ${prefix}event [1/0]
  ├ Example : ${prefix}event 1
  ├───────────────
  ├❏ ${prefix}antilinkgroup
  ├ Usage : ${prefix}event [1/0]
  ├ Example : ${prefix}event 1
  └───────────────
◩ *Premium*
  │
  ├❏ ${prefix}checkpremium
  ├ Usage : ${prefix}checkpremium
  ├ Example : ${prefix}checkpremium
  └───────────────
◩ *Fun*
  │
  ├❏ ${prefix}tebakgambar
  ├ Usage : ${prefix}tebakgambar
  ├ Example : ${prefix}tebakgambar
  ├───────────────
  ├❏ ${prefix}memeindo
  ├ Usage : ${prefix}memeindo
  ├ Example : ${prefix}memeindo
  └───────────────
◩ *Google Text To Speech*
  │
  ├❏ ${prefix}gtts
  ├ Usage : ${prefix}gtts [id_bahasa] [teks]
  ├ Example : ${prefix}gtts en Welcome to my group tod!
  ├───────────────
  ├❏ ${prefix}tts
  ├ Usage : ${prefix}tts [id_bahasa] [teks]
  ├ Example : ${prefix}tts en Welcome to my group tod!
  └───────────────
◩ *Owner*
  ├❏ ${prefix}setprefix
  ├ Usage : ${prefix}setprefix [optional]
  ├ Example : ${prefix}setprefix !
  ├───────────────
  ├❏ ${prefix}clearall
  ├ Usage : ${prefix}clearall
  ├ Example : ${prefix}clearall
  ├───────────────
  ├❏ ${prefix}bc
  ├ Usage : ${prefix}bc [teks]
  ├ Example : ${prefix}bc Hai zhayang :V
  ├───────────────
  ├❏ ${prefix}addbadword
  ├ Usage : ${prefix}addbadword [teks]
  ├ Example : ${prefix}addbadword bego
  ├───────────────
  ├❏ ${prefix}delbadword
  ├ Usage : ${prefix}delbadword [teks]
  ├ Example : ${prefix}delbadword bego
  ├───────────────
  ├❏ ${prefix}block
  ├ Usage : ${prefix}block [nomor]
  ├ Example : ${prefix}block ${ownerNumbers}
  ├───────────────
  ├❏ ${prefix}unblock
  ├ Usage : ${prefix}unblock [nomor]
  ├ Example : ${prefix}unblock ${ownerNumbers}
  ├───────────────
  ├❏ ${prefix}addpremium
  ├ Usage : ${prefix}addpremium [@tag]
  ├ Example : ${prefix}addpremium @${idowner.split("@")[0]}
  ├───────────────
  ├❏ ${prefix}delpremium
  ├ Usage : ${prefix}delpremium [@tag]
  ├ Example : ${prefix}delpremium @${idowner.split("@")[0]}
  └───────────────
`
}
exports.wait = () => {
    return`*「 ⌛ 」BEING PROCESSED...*
}
exports.succes = () => {
    return`*「 ✔️ 」SUCCSESS*`
}
exports.lvlon = () => {
    return`*「 ✔️ 」ACTIVATE LEVELING IN THIS GROUP*`
}
exports.lvloff = () => {
    return`*「 ✔️ 」TURNING OFF LEVELING IN THIS GROUP*`
}
exports.lvlnul = () => {
    return`*「 LEVELING 」YOUR LEVEL IS STILL EMPTY*`
}
exports.lvlnoon = () => {
    return`*「 LEVELING 」LEVELING IS NOT ACTIVATED IN THIS GROUP*`
}
exports.noregis = () => {
    return`*「 NOT REGISTERED 」*\nYou are not registered as a BOT user yet, please register first sis.\n\n*how to register : ${prefix}register name|age* \n*example ${prefix}register nalzt|17*`
}
exports.stikga = () => {
    return`*「 ❌ 」Please try again later*`
}
exports.linkga = () => {
    return`*「 ❌ 」Sorry the link is invalid*`
}
exports.groupo = () => {
    return`*「 ❌ 」Can only be used in groups*`
}
exports.nogroup = () => {
    return`*「 ❌ 」Can only be used in private chat*`
}
exports.ownerb = () => {
    return`*「 ❌ 」Can only be used by the bot owner*`
}
exports.ownerg = () => {
    return`*「 ❌ 」Can only be used by the owner group*`
}
exports.admin = () => {
    return`*「 ❌ 」Can only be used by group admins*`
}
exports.badmin = () => {
    return`*「 ❌ 」can be used when the bot becomes admin*`
}
exports.nsfwoff = () => {
    return`*「 ❌ 」NSFW is not activated in this group*`
}
exports.bug = () => {
    return`*「 ✔️ 」Problems have been reported to the BOT owner, false / playful reports will not be responded to*`
}
exports.wrongf = () => {
    return`*「 ❌ 」Wrong format / blank text*`
}
exports.clears = () => {
    return`*「 ✔️ 」Clear all Success*`
}
exports.pc = () => {
    return`*「 REGISTRATION 」*\n\nTo see if you have registered please check the message I sent \n\nNOTE:\n*if you haven't got the message. means you haven't saved your bot number*`
}
exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
    return`*「 REGISTER DATA 」*\n\nyou have registered with the data \n\n┌❏ *Name*\n└❏ ${namaUser}\n┌❏ *Number*\n└❏ wa.me/${sender.split("@")[0]}\n┌❏ *Age*\n└❏ ${umurUser}\n┌❏ *Registration Time*\n└❏${time}\n\n┌❏ *SN*\n└❏ ${serialUser}\n\n❏ NOTE : don't forget this number because it's important:v`
}
exports.cmdnf = (prefix, command) => {
    return`command *${prefix}${command}* not found inside *${prefix}menu*`
}
exports.owneresce = (pushname) => {
    return`*Sorry but ${pushname} not the script owner*`
}
exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
    return`*Sorry ${pushname} your level is not sufficient*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Type Command : ${command}*\n*└❏ Permission Level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
    return`*Sorry ${pushname} your level is not sufficient*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Type Command : ${command}*\n*└❏ Permission Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
    return`*Sorry ${pushname} your level is not sufficient*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Type Command : ${command}*\n*└❏ Permission Level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
    return`*Sorry ${pushname} your level is not sufficient*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Type Command : ${command}*\n*└❏ Permission Level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
    return`*Sorry ${pushname} your level is not sufficient*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Type Command : ${command}*\n*└❏ Permission Level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
    return`*Sorry ${pushname} your level is not sufficient*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Type Command : ${command}*\n*└❏ Permission Level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
    return`
*「 CONGRATULATION 」*
┌❏ *Name* : ${pushname}
├❏ *Number* : wa.me/${sender.split("@")[0]}
├❏ *Xp* : ${getLevelingXp(sender)}
├❏ *Limit* : +3
├❏ *Role*: ${role}
└❏ *Level* : ${getLevel} ⋟ ${getLevelingLevel(sender)}`
}
exports.limitend = (pushname) => {
	return`*Sorry ${pushname} today's limit is up*\n*buy limit to get limit / level up*`
}
exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
the rest of your limit : ${limitCounts}

NOTE : to get to the limit. can pass level up or buylimit`
}
exports.satukos = () => {
	return`*Add parameter 1/enable or 0/disable`
}
exports.uangkau = (pushname, sender, uangkau) => {
	return`*「 ATM 」*\n┌❏ *Name* : ${pushname}\n├❏ *Number* : ${sender.split("@")[0]}\n└❏ *Money* : ⏣ ${uangkau}`
}
exports.premadd = (pnom) => {
	return`
*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}
exports.dellprem = (hnom) => {
	return`
*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}
exports.premon = (pushname, ownerNumbers) => {
	return`
*「 ❌ 」Sorry ${pushname} you are not a premium user, buy a premium to the owner.*
wa.me/${ownerNumbers}`
}
