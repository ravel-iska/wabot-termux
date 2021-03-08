//Reading Text
exports.menu = (prefix, pushname, botName, ownerName) => {
    return`
◩ *User Info*
  │
  ├❏ Nama : ${pushname}
  └❏ 
◩ *Bot Info*
  │
  ├❏ Nama Bot : ${botName}
  ├❏ Nama Owner : ${ownerName}
  └❏ Prefix : 「 ${prefix} 」
◩ *About*
  │
  ├❏ ${prefix}info
  └❏
◩ *Menu*
  │
  ├❏
  └❏
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
