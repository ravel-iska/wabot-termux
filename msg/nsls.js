//Starts
/*~~~~~[ Npm Package ]~~~~~*/
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()

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
/*const {
    prefix,
} = setting*/


prefix = setting.prefix
blocked = []

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
