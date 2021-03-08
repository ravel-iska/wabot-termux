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
    zeksApiKey
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
			const mbbKey = mbbApiKey // contact mhankbarbar on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
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
                                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
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
                                    nsls.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                                    found = true
                                }
                            }
                            if (found === false) {
                                let obj = { id: sender, limit: 0 }
                                _limit.push(obj)
                                fs.writeFileSync('./../database/user/limit.json', JSON.stringify(_limit))
                                nsls.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
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
                                        nsls.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
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
                            if (bad.includes(messagesC)) {
                                if (!isGroupAdmins) {
                                    try { 
                                        reply("JAGA UCAPAN DONG!! 😠")
                                        setTimeout( () => {
 	                                    nsls.groupLeave(from) 
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
			if (messagesC.includes("://chat.whatsapp.com/")){
			    if (!isGroup) return
			    if (!isAntiLink) return
			    if (isGroupAdmins) return reply('karena kamu adalah admin group, BOT tidak akan kick kamu')
			    nsls.updatePresence(from, Presence.composing)
			    if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
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
