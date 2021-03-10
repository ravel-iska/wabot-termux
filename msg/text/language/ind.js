const fs = require('fs')
let setting = JSON.parse(fs.readFileSync('./../../settings/setting.json'))
let {
    ownerNumbers
} = setting
const idowner = `${ownerNumbers}@s.whatsapp.net`

//Reading Text
exports.menu = (prefix, pushname, botName, ownerName) => {
    return`
◩ *User Info*
  │
  ├❏ Nama : ${pushname}
  ├❏ Premium : ${premi}
  ├❏ Nomer : wa.me/${sender.split("@")[0]}
  ├❏ Uang : ⏣ ${uangku}
  ├❏ XP : ${getLevelingXp(sender)}/${reqXp}
  ├❏ Level : ${getLevelingLevel(sender)}
  └❏ Role : ${role}
◩ *Bot Info*
  │
  ├❏ Nama Bot : ${botName}
  ├❏ Nama Owner : ${ownerName}
  ├❏ Nomor Owner : wa.me/${ownerNumbers}
  ├❏ Prefix : 「 ${prefix} 」
  ├❏ Browser : ${nsls.browserDescription[1]}
  ├❏ Server : ${nsls.browserDescription[0]}
  ├❏ Version : ${nsls.browserDescription[2]}
  ├❏ Speed : ${process.uptime()}
  ├❏ HandPhone : ${nsls.user.phone.device_manufacturer}
  └❏ Versi WhatsApp : ${nsls.user.phone.wa_version}
◩ *Main*
  │
  ├❏ ${prefix}help
  └❏ ${prefix}menu
◩ *Xp, Limit, & Uang*
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
    return`*「 ⌛ 」SEDANG DI PROSES...*
}
exports.succes = () => {
    return`*「 ✔️ 」SUCCSESS*`
}
exports.lvlon = () => {
    return`*「 ✔️ 」MENGAKTIFKAN LEVELING DI GROUP INI*`
}
exports.lvloff = () => {
    return`*「 ✔️ 」MENONAKTIFKAN LEVELING DI GROUP INI*`
}
exports.lvlnul = () => {
    return`*「 LEVELING 」LEVEL MU MASIH KOSONG*`
}
exports.lvlnoon = () => {
    return`*「 LEVELING 」LEVELING BELUM DI AKTIFKAN DI GROUP INI*`
}
exports.noregis = () => {
    return`*「 BELUM DAFTAR 」*\nKamu belum terdaftar sebagai user BOT ini, silahkan register terlebih dahulu kak.\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar nalz|17*`
}
exports.stikga = () => {
    return`*「 ❌ 」Coba ulangi beberapa saat lagi*`
}
exports.linkga = () => {
    return`*「 ❌ 」Maaf link tidak valid*`
}
exports.groupo = () => {
    return`*「 ❌ 」Hanya dapat digunakan di dalam group*`
}
exports.nogroup = () => {
    return`*「 ❌ 」Hanya dapat digunakan di dalam private chat*`
}
exports.ownerb = () => {
    return`*「 ❌ 」Hanya dapat digunakan oleh owner bot*`
}
exports.ownerg = () => {
	return`*「 ❌ 」Hanya dapat digunakan oleh owner group*`
}
exports.admin = () => {
	return`*「 ❌ 」Hanya dapat digunakan oleh admin group*`
}
exports.badmin = () => {
	return`*「 ❌ 」Hanya dapat digunakan ketika bot menjadi admin*`
}
exports.nsfwoff = () => {
	return`*「 ❌ 」NSFW tidak diaktifkan di group ini*`
}
exports.bug = () => {
	return`*「 ✔️ 」Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}
exports.wrongf = () => {
	return`*「 ❌ 」Format salah/text kosong*`
}
exports.clears = () => {
	return`*「 ✔️ 」Clear all Success*`
}
exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}
exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA REGISTER 」*\n\nkamu sudah terdaftar dengan data \n\n┌❏ *Nama*\n└❏ ${namaUser}\n┌❏ *Nomer*\n└❏ wa.me/${sender.split("@")[0]}\n┌❏ *Umur*\n└❏ ${umurUser}\n┌❏ *Waktu Pendaftaran*\n└❏${time}\n\n┌❏ *NS*\n└❏ ${serialUser}\n\n❏ NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}
exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan di dalam *${prefix}menu*`
}
exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}
exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Tipe Command : ${command}*\n*└❏ Syarat Level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Tipe Command : ${command}*\n*└❏ Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Tipe Command : ${command}*\n*└❏ Syarat Level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Tipe Command : ${command}*\n*└❏ Syarat Level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Tipe Command : ${command}*\n*└❏ Syarat Level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┌❏ Level : ${getLevelingLevel(sender)}*\n*├❏ Tipe Command : ${command}*\n*└❏ Syarat Level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
┌❏ *Nama* : ${pushname}
├❏ *Nomer* : wa.me/${sender.split("@")[0]}
├❏ *Xp* : ${getLevelingXp(sender)}
├❏ *Limit* : +3
├❏ *Role*: ${role}
└❏ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`
}
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}
exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}
exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}
exports.uangkau = (pushname, sender, uangkau) => {
	return`*「 ATM 」*\n┌❏ *Nama* : ${pushname}\n├❏ *Nomer* : ${sender.split("@")[0]}\n└❏ *Uang* : ${uangkau}`
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
*「 ❌ 」Maaf ${pushname} kamu bukan user premium, silahkan membeli premium kepada owner.*
wa.me/${ownerNumbers}`
}
