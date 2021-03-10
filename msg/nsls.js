//Starts
/*~~~~~[ Npm Package ]~~~~~*/
const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const ms = require('parse-ms')
const toMs = require('ms')
const path = require('path')
const util = require('util')
const os = require('os')
const crypto = require('crypto')
const axios = require('axios')

/*~~~~~[ JS File ]~~~~~*/
const { color, bgcolor } = require('./../lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./../lib/functions')
const { fetchJson, fetchText } = require('./../lib/fetcher')
const { recognize } = require('./../lib/ocr')
const { ind, eng } = require('./text/language')

/*~~~~~[ JSON File ]~~~~~*/
const welkom = JSON.parse(fs.readFileSync('./../database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./../database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./../database/group/simi.json'))
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const package = JSON.parse(fs.readFileSync('./../package.json'))
const _leveling = JSON.parse(fs.readFileSync('./../database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./../database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./../database/bot/registered.json'))
const event = JSON.parse(fs.readFileSync('./../database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./../database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./../database/user/uang.json'))
const prem = JSON.parse(fs.readFileSync('./../database/user/prem.json'))
const antilink = JSON.parse(fs.readFileSync('./../database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./../database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./../database/group/badword.json'))
const {
    mbbApiKey,
    botNames,
    ownerNames,
    ownerNumbers,
    zeksApiKey,
    langB
} = setting

const cd = 4.32e+7

prefix = setting.prefix
blocked = []

/*~~~~~[ Functions ]~~~~~*/
const getLevelingXp = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}

const getLevelingLevel = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}

const getLevelingId = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].id
    }
}

const addLevelingXp = (sender, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./../database/user/level.json', JSON.stringify(_level))
    }
}

const addLevelingLevel = (sender, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./../database/user/level.json', JSON.stringify(_level))
    }
}

const addLevelingId = (sender) => {
    const obj = {id: sender, xp: 1, level: 1}
    _level.push(obj)
    fs.writeFileSync('./../database/user/level.json', JSON.stringify(_level))
}
             
const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
    const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
    _registered.push(obj)
    fs.writeFileSync('./../database/bot/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === sender) {
            status = true
        }
    })
    return status
}
        
const addATM = (sender) => {
    const obj = {id: sender, uang : 0}
    uang.push(obj)
    fs.writeFileSync('./../database/user/uang.json', JSON.stringify(uang))
}
        
const addKoinUser = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang += amount
        fs.writeFileSync('./../database/user/uang.json', JSON.stringify(uang))
    }
}
        
const checkATMuser = (sender) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return uang[position].uang
    }
}
        
const bayarLimit = (sender, amount) => {
    let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./../database/user/limit.json', JSON.stringify(_limit))
    }
}
        	
const confirmATM = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./../database/user/uang.json', JSON.stringify(uang))
    }
}
        
const limitAdd = (sender) => {
    let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 1
        fs.writeFileSync('./../database/user/limit.json', JSON.stringify(_limit))
    }
}

const getPremiumExpired = (sender) => {
    let position = null
    Object.keys(prem).forEach((i) => {
        if (prem[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return prem[position].expired
    }
} 
		
const expiredCheck = () => {
    setInterval(() => {
        let position = null
	Object.keys(prem).forEach((i) => {
	    if (Date.now() >= prem[i].expired) {
	        position = i
            }
	})
	if (position !== null) {
	    console.log(`Premium expired: ${prem[position].id}`)
	    prem.splice(position, 1)
            fs.writeFileSync('./../database/bot/prem.json', JSON.stringify(prem))
        }
    }, 1000)
} 
		
const getAllPremiumUser = () => {
    const array = []
    Object.keys(prem).forEach((i) => {
        array.push(prem[i].id)
    })
    return array
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const nsls = new WAConnection()
	nsls.logger.level = 'warn'
	nsls.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Nsls.json') && nsls.loadAuthInfo('./Nsls.json')
	nsls.on('connecting', () => {
		start('2', 'Connecting...')
	})
	nsls.on('open', () => {
		success('2', '[SYSTEM] Bot is Now Online!')
	})
	await nsls.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nsls.json', JSON.stringify(nsls.base64EncodedAuthInfo(), null, '\t'))

        console.log(color(`[DEV]`, 'cyan'), color(`${package.author}`, 'yellow'))
        console.log(color('=> Bot successfully loaded!', 'yellow'))
        console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))

	nsls.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await nsls.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await nsls.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				nsls.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await nsls.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				nsls.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	nsls.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	nsls.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var cht = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const chat = cht.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const botNumber = nsls.user.jid
			const ownerNumber = [`${ownerNumbers}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await nsls.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			pushname = nsls.contacts[sender] != undefined ? nsls.contacts[sender].vname || nsls.contacts[sender].notify : undefined
                        const botName = botNames
                        const ownerName = ownerNames
                        const isEventon = isGroup ? event.includes(from) : false
                        const isRegistered = checkRegisteredUser(sender)
                        const isBadWord = isGroup ? badword.includes(from) : false
                        const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isPrem = prem.includes(sender) || isOwner
			const isAntiLink = isGroup ? antilink.includes(from) : false
                        
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				nsls.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				nsls.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nsls.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nsls.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

                        /*~~~~~[ Private Message ]~~~~~*/
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mnsls EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mnsls RECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))

                        /*~~~~~[ Group Message ]~~~~~*/
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mGROUP EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mGROUP RECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

			let authorname = nsls.contacts[from] != undefined ? nsls.contacts[from].vname || nsls.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	

			//Mbb
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./../src/stickers/${name}.exif`)) return `./../src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./../src/stickers/${name}.exif`, buffer, (err) => {	
					return `./../src/stickers/${name}.exif`	
				})	

			}
			//auto Expired - Affis
			expiredCheck()

			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
			    per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
			    per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
			    per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
			    per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
			    per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
			    per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
			    per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
			    per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
			    per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
			    per = `*[██████████] ${resl}%*`
			} 
			
			//function rank - Affis
			const levelRole = getLevelingLevel(sender)
   	                var role = 'Trainee'
   	                if (levelRole <= 5) {
   	                    role = 'senior trainee'
   	                } else if (levelRole <= 10) {
   	                    role = 'private'
   	                } else if (levelRole <= 15) {
   	                    role = 'corporal'
   	                } else if (levelRole <= 20) {
   	                    role = 'Sergeant'
   	                } else if (levelRole <= 25) {
   	                    role = 'staff sgt I'
   	                } else if (levelRole <= 30) {
   	                    role = 'staff sgt II'
   	                } else if (levelRole <= 35) {
   	                    role = 'staff sgt II'
   	                } else if (levelRole <= 40) {
   	                    role = 'Sgt 1st class I'
   	                } else if (levelRole <= 45) {
   	                    role = 'Sgt 1st class II'
   	                } else if (levelRole <= 50) {
   	                    role = 'Sgt 1st class III'
   	                } else if (levelRole <= 55) {
   	                    role = 'Ggt 1st class IV'
   	                } else if (levelRole <= 60) {
   	                    role = 'Master sgt I'
   	                } else if (levelRole <= 65) {
   	                    role = 'Master sgt II'
   	                } else if (levelRole <= 70) {
   	                    role = 'Master sgt III'
   	                } else if (levelRole <= 75) {
   	                    role = 'Master sgt IV'
   	                } else if (levelRole <= 80) {
   	                    role = 'Master sgt V'
   	                } else if (levelRole <= 85) {
   	                    role = '2nd Lt I'
   	                } else if (levelRole <= 90) {
   	                    role = '2nd Lt II'
   	                } else if (levelRole <= 95) {
   	                    role = '2nd Lt III'
   	                } else if (levelRole <= 100) {
   	                    role = '2nd Lt IV'
   	                }

			var premi = '*X*'
			if (isPrem) {
			    premi = '*✓*'
			} 
			if (isOwner) {
			    premi = '*Owner*'
			}

	                //function leveling
                        if (isGroup && isRegistered && isLevelingOn) {
                            const currentLevel = getLevelingLevel(sender)
                            const checkId = getLevelingId(sender)
                            try {
                                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                                const amountXp = Math.floor(Math.random() * 10) + 500
                                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                                const getLevel = getLevelingLevel(sender)
                                addLevelingXp(sender, amountXp)
                                if (requiredXp <= getLevelingXp(sender)) {
                                    addLevelingLevel(sender, 1)
                                    bayarLimit(sender, 3)
                                    await reply(langB.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                                }
                            } catch (err) {
                                console.error(err)
                            }
                        }

                        //function check limit
                        const checkLimit = (sender) => {
          	            let found = false
                            for (let lmt of _limit) {
                                if (lmt.id === sender) {
                                    let limitCounts = limitawal - lmt.limit
                                    if (limitCounts <= 0) return nsls.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                                    nsls.sendMessage(from, langB.limitcount(limitCounts), text, { quoted : mek})
                                    found = true
                                }
                            }
                            if (found === false) {
                                let obj = { id: sender, limit: 0 }
                                _limit.push(obj)
                                fs.writeFileSync('./../database/user/limit.json', JSON.stringify(_limit))
                                nsls.sendMessage(from, langB.limitcount(limitCounts), text, { quoted : mek})
                            }
		        }

			//funtion limited
                        const isLimit = (sender) =>{ 
          	            if (isOwner && isPrem) {return false;}
		            let position = false
                            for (let i of _limit) {
                                if (i.id === sender) {
                        	    let limits = i.limit
                                    if (limits >= limitawal ) {
              	                        position = true
                                        nsls.sendMessage(from, langB.limitend(pushname), text, {quoted: mek})
                                        return true
                                    } else {
                        	        _limit
                                        position = true
                                        return false
                                    }
                                }
                            }
                            if (position === false) {
           	                const obj = { id: sender, limit: 0 }
                                _limit.push(obj)
                                fs.writeFileSync('./../database/user/limit.json',JSON.stringify(_limit))
                                return false
     	                    }
     	                }

     	                if (isGroup) {
			    try {
				const getmemex = groupMembers.length	
				if (getmemex <= memberlimit) {
				    reply(`maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)
				    setTimeout( () => {
 	                                nsls.groupLeave(from) 
 				    }, 0)
				}
		            } catch (err) {
                                console.error(err)
                            }
 	                }

	   	        if (isGroup && isBadWord) {
                            if (bad.includes(chat)) {
                                if (!isGroupAdmins) {
                                    try {
                                        var kicbedworuser = `${sender.split("@")[0]}@s.whatsapp.net`
                                        reply("JAGA UCAPAN DONG!! 😠")
                                        setTimeout( () => {
 	                                    nsls.groupRemove(from, [kicbedworuser]).catch((e)=>{
                                                reply(`*ERR:* ${e}`)
                                            })
 					}, 3000)
					setTimeout( () => {
					    nsls.updatePresence(from, Presence.composing)
					}, 2000)
					setTimeout( () => {
					    nsls.updatePresence(from, Presence.composing)
					}, 1000)
					setTimeout( () => {
					    nsls.updatePresence(from, Presence.composing)
					    reply("*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!")
					}, 0)
                                    } catch {
                                        nsls.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek})
                                    }
                                } else {
                                    return reply( "Tolong Jaga Ucapan Min 😇")
                                }
                            }
                        }

			//function antilink 
			if (chat.includes("://chat.whatsapp.com/")){
			    if (!isGroup) return
			    if (!isAntiLink) return
			    if (isGroupAdmins) return reply('karena kamu adalah admin group, BOT tidak akan kick kamu')
			    nsls.updatePresence(from, Presence.composing)
			    if (chat.includes("#izinadmin")) return reply("#izinadmin diterima")
			    var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			    reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
			    setTimeout( () => {
			        nsls.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			    }, 5000)
			    setTimeout( () => {
			        nsls.updatePresence(from, Presence.composing)
				reply("1detik")
			    }, 4000)
			    setTimeout( () => {
				nsls.updatePresence(from, Presence.composing)
				reply("2detik")
			    }, 3000)
			    setTimeout( () => {
				nsls.updatePresence(from, Presence.composing)
				reply("3detik")
			    }, 2000)
			    setTimeout( () => {
				nsls.updatePresence(from, Presence.composing)
				reply("4detik")
			    }, 1000)
			    setTimeout( () => {
				nsls.updatePresence(from, Presence.composing)
				reply("5detik")
			    }, 0)
			}

	                //function balance
 	                if (isRegistered ) {
 	                    const checkATM = checkATMuser(sender)
 	                    try {
 	                        if (checkATM === undefined) addATM(sender)
 	                        const uangsaku = Math.floor(Math.random() * 10) + 90
	                        addKoinUser(sender, uangsaku)
  	                    } catch (err) {
   	                        console.error(err)
   	                    }
	                }
			switch(command) {
                                case 'help': //nslszt
                                case 'menu':
                                        nsls.sendMessage(from, langB.menu(prefix, pushname, botName, ownerName), text)
                                        break
				case 'info': //mbb
					me = nsls.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					nsls.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
                                case 'tebakgambar': //affis
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=${zeksApiKey}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soal)
					tebak = `❏ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					        nsls.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					        nsls.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					        nsls.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					        nsls.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					        nsls.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
				        break
				case 'memeindo': //nsls
					nganu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${zeksApiKey}`)
					buper = await getBuffer(nganu.result)
					nsls.sendMessage(from, buper, image, {quoted: mek})
				        break
                                case 'ttp': //affis
					pngttp = './../tmp/ttp.png'
					webpng = './../tmp/ttp.webp'
					const ttptext = body.slice(5)
					fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
					    .then(async res => {
					        const ttptxt = await res.json()
					        base64Img.img(ttptxt.base64, 'tmp', 'ttp', function(err, filepath) {
					                if (err) return console.log(err);
					                exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
					                        buffer = fs.readFileSync(webpng)
					                        nsls.sendMessage(from, buffer, sticker)
					                        fs.unlinkSync(webpng)
					                        fs.unlinkSync(pngttp)
					                })
					        })
					    });
				        break
                                case 'stiker': //mbb
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nsls.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(langB.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(langB.stikga())
									nsls.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*nsls.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nsls.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(langB.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(langB.stikga())
									nsls.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*nsls.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
				case 'gtts': //mbb
                                case 'tts':
					if (args.length < 1) return nsls.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nsls.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						nsls.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				case 'setprefix': //mbb
					if (args.length < 1) return
					if (!isOwner) return reply(langB.ownerb())
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./settings/setting.json', JSON.stringify(setting, null, '\t'))
					nsls.sendMessage(from, langB.sucpref(prefix), text)
					break
				case 'ytmp3': //mbb
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply()
					anu = await fetchJson(`https://mhankbarbar.tech/api/yta?url=${args[0]}&apiKey=${mbbApiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}\n\n*LAGUNYA LAGI DIKIRIM, JANGAN SPAM YA SAYANG...*`
					thumb = await getBuffer(anu.thumb)
					nsls.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					nsls.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'clearall': //mbb
					if (!isOwner) return reply('Kamu siapa?')
					anu = await nsls.chats.all()
					nsls.setMaxListeners(25)
					for (let _ of anu) {
						nsls.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc': //mbb
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await nsls.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nsls.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nsls.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ Ini Broadcast ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
                                case 'promote': //mbb
					if (!isGroup) return reply(langB.groupo())
					if (!isGroupAdmins) return reply(langB.admin())
					if (!isBotGroupAdmins) return reply(langB.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						nsls.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						nsls.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote': //mbb
					if (!isGroup) return reply(langB.groupo())
					if (!isGroupAdmins) return reply(langB.admin())
					if (!isBotGroupAdmins) return reply(langB.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nsls.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						nsls.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add': //mbb
					if (!isGroup) return reply(langB.groupo())
					if (!isGroupAdmins) return reply(langB.admin())
					if (!isBotGroupAdmins) return reply(langB.badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nsls.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick': //mbb
					if (!isGroup) return reply(langB.groupo())
					if (!isGroupAdmins) return reply(langB.admin())
					if (!isBotGroupAdmins) return reply(langB.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nsls.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nsls.groupRemove(from, mentioned)
					}
					break
				case 'listadmins': //mbb
					if (!isGroup) return reply(langB.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `「 ${no.toString()} 」@${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgroup': //mbb
                                        if (!isGroup) return reply(langB.groupo())
                                        if (!isGroupAdmins) return reply(langB.admin())
                                        if (!isBotGroupAdmins) return reply(langB.badmin)
                                        linkgc = await nsls.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave': //nslszt
                                        if (!isGroup) return reply(langB.groupo())
                                        if (isGroupAdmins || isOwner) {
                         	                nsls.groupLeave(from)
                                        } else {
                                                reply(langB.admin())
                                        }
                                        break
				case 'toimg': //mbb
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(langB.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nsls.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						nsls.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'welcome': //mbb
					if (!isGroup) return reply(langB.groupo())
					if (!isGroupAdmins) return reply(langB.admin())
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./../database/group/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./../database/group/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
				case 'leaderboard': //affis
				case 'lb':
				        bo = args[0]
				        _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				        uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                                        let leaderboardlvl = '*「 LEADERBOARD LEVEL 」*\n\n'
                                        let leaderboarduang = '*「 LEADERBOARD BALANCE 」*\n\n'
                                        var nom = 0
                                        try {
                                                for (let i = 0; i < 10; i++) {
                                                        nom++
                                                        leaderboardlvl += `*「 ${nom} 」* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n  │\n  └❏ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                                                        leaderboarduang += `*「 ${nom} 」* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n  │\n  ├❏ *Uang*: _Rp${uang[i].uang}_\n  └❏ *Limit*: ${limitawal - _limit[i].limit}\n`
                                                }
                                                await reply(leaderboardlvl)
                                                await reply(leaderboarduang)
                                        } catch (err) {
                                                console.error(err)
                                                await reply(`minimal ${len} user untuk bisa mengakses database`)
                                        }
				        break
				case 'limit': //affis
				        if (!isRegistered) return reply(langB.noregis())
				        checkLimit(sender)
					break 
				case 'giftlimit': //affis
				        if (!isOwner,!isPrem) return reply(langB.premon(pushname))
				        const nomerr = args[0].replace('@','')
                                        const jmla = args[1]
                                        if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                                        if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                                        if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @628880199392 20`)
                                        const cysz = nomerr + '@s.whatsapp.net'
                                        var found = false
                                        Object.keys(_limit).forEach((i) => {
                                                if(_limit[i].id === cysz){
                                                        found = i
                                                }
                                        })
                                        if (found !== false) {
                                                _limit[found].limit -= jmla
                                                const updated = _limit[found]
                                                const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*

❏ User : @${updated.id.replace('@s.whatsapp.net','')}
❏ Limit: ${limitawal-updated.limit}`
                                                console.log(_limit[found])
                                                fs.writeFileSync('./../database/user/limit.json',JSON.stringify(_limit));
                                                reply(result)
                                        } else {
                                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                                        }
                                        break
				case 'premlist': //affis
	                        case 'listprem':
                                case 'premiumlist':
                                case 'listpremium':
	                                if (!isRegistered) return reply( langB.noregis())
	                                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                                var nomorList = 0
	                                const deret = getAllPremiumUser()
	                                const arrayPremi = []
	                                for (let i = 0; i < deret.length; i++) {
	                                        const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                                        arrayPremi.push(getAllPremiumUser()[i])
	                                        nomorList++
	                                        listPremi += `「 ${nomorList} 」 wa.me/${getAllPremiumUser()[i].split("@")[0]}\n❏ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	                                }
	                                await reply(listPremi)
	                                break
				case 'transfer': //affis
				        if (!isRegistered) return reply(langB.noregis())
				        if (!q.includes('|')) return  reply(langB.wrongf())
                                        const tujuan = q.substring(0, q.indexOf('|') - 1)
                                        const jumblah = q.substring(q.lastIndexOf('|') + 1)
                                        if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                                        if (jumblah < 100 ) return reply(`minimal transfer 100`)
                                        if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                                        const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                                        fee = 0.005 *  jumblah
                                        hasiltf = jumblah - fee
                                        addKoinUser(tujuantf, hasiltf)
                                        confirmATM(sender, jumblah)
                                        addKoinUser(`${ownerNumbers.replace("@", '')}@s.whatsapp.net`, fee)
                                        reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                                        break
				case 'bal': //affis
                                case 'balance':
				        if (!isRegistered) return reply(langB.noregis())
				        const kantong = checkATMuser(sender)
				        reply(langB.uangkau(pushname, sender, kantong))
				        break
				case 'buylimit': //affis
				        if (!isRegistered) return reply(langB.noregis())
				        payout = body.slice(10)
				        if(isNaN(payout)) return await reply('limit harus berupa angka!!')
				        const koinPerlimit = 300
				        const total = koinPerlimit * payout
				        if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				        if ( checkATMuser(sender) >= total ) {
					        confirmATM(sender, total)
					        bayarLimit(sender, payout)
					        await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				        }
				        break
				case 'level': //affis
                                        if (!isRegistered) return reply(langB.noregis())
                                        if (!isLevelingOn) return reply(langB.lvlnoon())
                                        if (!isGroup) return reply(langB.groupo())
                                        const userLevel = getLevelingLevel(sender)
                                        const userXp = getLevelingXp(sender)
                                        if (userLevel === undefined && userXp === undefined) return reply(langB.lvlnul())
                                        const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                                        resul = `*「 LEVEL 」*\n❏ *Nama* : ${pushname}\n❏ Nomor : wa.me/${sender.split("@")[0]}\n❏ User XP :  ${userXp}/${requiredXp}\n❏ User Level : ${userLevel}`
                                        costum(resul, text, tescuk, per)
				        break 
				case 'mining': //affis
                                        if (!isRegistered) return reply(langB.noregis())
                                        if (isLimit(sender)) return reply(langB.limitend(pushname))
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
					break
				case 'grup':
				case 'group': //affis
					if (!isGroup) return reply(langB.groupo())
					if (!isGroupAdmins) return reply(langB.admin())
					if (!isBotGroupAdmins) return reply(langB.badmin())
					if (args[0] === 'open') {
					        reply(`*BERHASIL MEMBUKA GROUP*`)
						nsls.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`*BERHASIL MENUTUP GROUP`)
						nsls.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				        break
				case 'setname': //affis
                                        if (!isGroup) return reply(langB.groupo())
			                if (!isGroupAdmins) return reply(langB.admin())
				        if (!isBotGroupAdmins) return reply(langB.badmin())
                                        nsls.groupUpdateSubject(from, `${body.slice(9)}`)
                                        nsls.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                                case 'setdesc': //affis
                                        if (!isGroup) return reply(langB.groupo())
			                if (!isGroupAdmins) return reply(langB.admin())
				        if (!isBotGroupAdmins) return reply(langB.badmin())
                                        nsls.groupUpdateDescription(from, `${body.slice(9)}`)
                                        nsls.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
				case 'checkprem': //affis
				        const cekExp = ms(getPremiumExpired(sender) - Date.now())
				        reply(`*「 PREMIUM EXPIRED 」*\n\n❏ *ID*: ${sender.split('@')[0]}\n❏ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				        break
                                case 'leveling': //affis
                                        if (!isGroup) return reply(langB.groupo())
                                        if (!isGroupAdmins) return reply(langB.admin())
                                        if (args.length < 1) return reply('Hmmm')
                                        if (Number(args[0]) === 1) {
                                                if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                 	                        _leveling.push(from)
                 	                        fs.writeFileSync('./../database/group/leveling.json', JSON.stringify(_leveling))
                  	                        reply(langB.lvlon())
              	                        } else if (args[0] === 'disable') {
                  	                        _leveling.splice(from, 1)
                 	                        fs.writeFileSync('./../database/group/leveling.json', JSON.stringify(_leveling))
                 	                        reply(langB.lvloff())
             	                        } else {
                 	                        reply(langB.satukos())
                                	}
				        break 
				case 'antibadword': //affis
                                        if (!isGroup) return reply(langB.groupo())
                                        if (!isGroupAdmins) return reply(langB.admin())
                                        if (args.length < 1) return reply('Hmmm')
                                        if (args[0] === 'enable') {
                                                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
                 	                        badword.push(from)
                 	                        fs.writeFileSync('./../database/group/badword.json', JSON.stringify(badword))
                  	                        reply(`badword is enable`)
              	                        } else if (args[0] === 'disable') {
                  	                        badword.splice(from, 1)
                 	                        fs.writeFileSync('./../database/group/badword.json', JSON.stringify(badword))
                 	                        reply(`badword is disable`)
             	                        } else {
                 	                        reply(langB.satukos())
                	                }
                                        break
				case 'delete': //nslszt
				case 'del':
				case 'd':
				        nsls.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				        break
				case 'addbadword': //affis
                                        if (!isOwner) return reply(langB.ownerb())
                                        if (!isGroupAdmins) return reply(langB.admin())
                                        if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                                        const bw = body.slice(12)
                                        bad.push(bw)
                                        fs.writeFileSync('./../database/group/bad.json', JSON.stringify(bad))
                                        reply('Success Menambahkan Bad Word!')
                                        break
                                case 'delbadword': //affis
                                        if (!isOwner) return reply(langB.ownerb())
                                        if (!isGroupAdmins) return reply(langB.admin())
                                        if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                                        let dbw = body.slice(12)
                                        bad.splice(dbw)
                                        fs.writeFileSync('./../database/group/bad.json', JSON.stringify(bad))
                                        reply('Success Menghapus BAD WORD!')
                                        break 
                                case 'listbadword': //affis
                                        let lbw = `◩ *List Badword*\nTotal : ${bad.length}\n`
                                        for (let i of bad) {
                                                lbw += `❏ ${i.replace(bad)}\n`
                                        }
                                        await reply(lbw)
                                        break
			  	case 'event': //affis
					if (!isGroup) return reply(langB.groupo())
					if (!isOwner) return reply(langB.ownerb())
					if (args.length < 1) return reply('Hmmm')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./../database/bot/event.json', JSON.stringify(event))
						reply('*❬ Succsess ❭ Mengaktifkan EVENT di group ini*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./../database/bot/event.json', JSON.stringify(event))
						reply('*❬ Succsess ❭ Menonaktifkan EVENT di group ini*')
					} else {
						reply(langB.satukos())
					}
					break 
				case 'antilinkgroup': //affis
					if (!isGroup) return reply(langB.groupo())
					if (!isGroupAdmins) return reply(langB.ownerg())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						antilink.push(from)
						fs.writeFileSync('./../database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ Succsess ❭ ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./../database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ Succsess ❭ DEACTIVATED ANTILINK*')
					} else {
						reply(langB.satukos())
					}
					break
				case 'block': //nslszt
					nsls.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(langB.groupo())
					if (!isOwner) return reply(langB.ownerb())
					nsls.blockUser (`${body.slice(8)}@c.us`, "add")
					nsls.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
				        break
				case 'unblock': //nslszt
					nsls.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(langB.group())
					if (!isOwner) return reply(langB.ownerb())
					nsls.blockUser (`${body.slice(10)}@c.us`, "remove")
					nsls.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
				        break
				case 'clearall': //mbb
					if (!isOwner) return reply(langB.ownerb())
					anu = await nsls.chats.all()
					nsls.setMaxListeners(25)
					for (let _ of anu) {
						nsls.deleteChat(_.jid)
					}
					reply(langB.clears())
				        break
				case 'addprem': //affis
                                case 'addpremium':
				        if (!isOwner) return reply(langB.ownerb())
				        expired = "30d"
				        if (args.length < 1 ) return reply(' tag member')
				        mente = `${args[0].replace('@','')}@s.whatsapp.net`
				        const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				        prem.push(pnom) 
				        fs.writeFileSync('./../database/user/prem.json',JSON.stringify(prem))
				        reply(langB.premadd(args[0]))
				        break
				case 'delprem': //affis
                                case 'delpremium':
				        if (!isOwner) return reply(langB.ownerb())
				        if (args.length < 1 ) return reply(' tag member')
				        mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			                for( var i = 0; i < arr.length; i++){ 
 		                                if ( arr[i] === mente) { 
    		      	                                arr.splice(i, 1); 
      		   	                                i--; 
      				                        fs.writeFileSync('./../database/user/prem.json',JSON.stringify(arr))
       			                        }
 			                }
				        reply(langB.dellprem(args[0]))
				        break
				case 'tomp3': //affis
				        nsls.updatePresence(from, Presence.composing)
				        if (!isQuotedVideo) return reply('itu video bruh?:V')
				        reply(langB.wait())
				        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				        media = await nsls.downloadAndSaveMediaMessage(encmedia)
				        ran = getRandom('.mp4')
				        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					        fs.unlinkSync(media)
					        if (err) return reply('Yahh emrror bruh:(')
					        buffer = fs.readFileSync(ran)
					        nsls.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					        fs.unlinkSync(ran)
				        })
				        break
				case 'wait': //mbb
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(langB.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await nsls.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							nsls.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
