/*

New Base By Fajar Reiva Cahya

*/

const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process')

//━━━━━━━━━━━━━━━[ FAKE IMG ]━━━━━━━━━━━━━━━\\

tamnel = fs.readFileSync('./image/fake.jpg')
gambar = fs.readFileSync('./image/allmenubott.jpg')
ttimg = fs.readFileSync('./image/tiktokmenubot.jpg')
ytimg = fs.readFileSync('./image/youtubemenubot.jpg')
skimg = fs.readFileSync('./image/skmenubot.jpg')
toddimg = fs.readFileSync('./image/todmenubot.jpg')

//━━━━━━━━━━━━━━━[ LIB ]━━━━━━━━━━━━━━━\\

const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')

//━━━━━━━━━━━━━━━[ data ]━━━━━━━━━━━━━━━\\

const setting = JSON.parse(fs.readFileSync('./srv/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./srv/apikey.json'))
const pendaftar = JSON.parse(fs.readFileSync('./data/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\

const ownerNumber = setting.OwnerNumber
const ownerName = setting.OwnerName
const botName = setting.BotName
const creator = ["FajarrXd"]

//━━━━━━━━━━━━━━━[ GRUP ]━━━━━━━━━━━━━━━\\

const linkGrup = ["https://chat.whatsapp.com/FCicT9gcYV14FOK1rwr8Ss"]

//━━━━━━━━━━━━━━━[ SETTING PUBLIC ]━━━━━━━━━━━━━━━\\

isSelf = false
isPublic = true

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━\\

const ZeksApi = apikey.ZEKSAPI
const HardiKey = apikey.HARDIKEY
const ZiyApi = apikey.ZIYAPI
const LeysApi = apikey.LEYSKEY
const LolKey = apikey.LOLHUMAN
const Fxc7Api = apikey.FXC7KEY
const apikey5 = apikey.ZEROKEY

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}JAM ${pad(minutes)}MENIT ${pad(seconds)}DETIK`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = nana = async (nana, mek) => {
	       try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked		
		    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = nana.user.jid
		    const botNumberss = nana.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? mek.participant : mek.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await nana.chats.all()
		    const groupMetadata = isGroup ? await nana.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
            const conts = mek.key.fromMe ? nana.user.jid : nana.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? nana.user.name : conts.notify || conts.vname || conts.name || '-'
            
            const isUser = pendaftar.includes(sender)
            
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━\\
mess = {
		wait: '_*Tunggu kak lagi di proses*_',
		success: '_*Berhasil nih kak*_',
		errorz: '_*Maaf banget nih kak website rest api nya lagi error*_',
		wrongFormat: '_*Format mungkin salah, coba liat lagi di menu kak*_',
error: {
	stick: '_*Bukan sticker itu kak*_',
	Iv: '_*Link nya error kak'
			},
only: {
	group: '_*Fitur ini khusus grup kak',
	own: '_*Lu bukan onwer gw kentot*_',
	adm: '_*Lu bukan admin cok*_',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            nana.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            nana.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? nana.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nana.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }            
const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      nana.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };            
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            nana.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await nana.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            nana.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return nana.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }            
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            nana.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        nana.chatRead(from, "read")
        const fakegroup = (teks) => {
            nana.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `Jangan Spam:(`, 
                            orderTitle: `Donate Donk:(`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        nana.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    nana.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }              
//━━━━━━━━━━━━━━━[ Semz User ]━━━━━━━━━━━━━━━\\            
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./data/user.json', JSON.stringify(pendaftar, null, 2))
        }
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!mek.key.fromMe && isSelf === true) return


//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━\\
switch (command) {           
    case 'jadibot':
    if (!mek.key.fromMe) return reply(mess.only.owner)
    jadibot(reply,nana,from)
    break
    case 'stopjadibot':
    if (!mek.key.fromMe) return reply(mess.only.owner)
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break

case 'menu':
case 'help':
menunya = `*${ucapanWaktu} @${sender.split('@')[0]}*

╭─❒「 *Info Bot* 」❒
│• *Nama Bot* : *${botName}*
│• *Prefix Bot : Multi Prefix*
│• *Type : JavaScript*
│• *Server : Baileys*
│• *Lib : Baileys*
╰─────❒

╭─❒「 *Other Menu* 」❒
│• ${prefix}sticker
│• ${prefix}toimg
│• ${prefix}owner
│• ${prefix}truth
│• ${prefix}dare
╰─────❒

╭─❒「 *Cecan Menu* 」❒
│• ${prefix}korea
│• ${prefix}vietnam
│• ${prefix}china
│• ${prefix}indonesia
│• ${prefix}malaysia
│• ${prefix}japan
│• ${prefix}thailand
╰─────❒

╭─❒「 *Asupan Menu* 」❒
│• ${prefix}asupancecan
│• ${prefix}asupanhijaber
│• ${prefix}asupansantuy
│• ${prefix}asupanukhti
│• ${prefix}asupanbocil
│• ${prefix}asupanrika
│• ${prefix}asupanghea
╰─────❒

╭─❒「 *Download Menu* 」❒
│• ${prefix}play <ᴊᴜᴅᴜʟ>
│• ${prefix}ytmp3 <ʟɪɴᴋ>
│• ${prefix}ytmp4 <ʟɪɴᴋ>
│• ${prefix}tiktok <ʟɪɴᴋ>
╰─────❒

╭─❒「 *Fun Menu* 」❒
│• ${prefix}quotes
│• ${prefix}artinama <ᴛᴇxᴛ>
│• ${prefix}artimimpi <ᴛᴇxᴛ>
╰─────❒

╭─❒「 *Nulis Menu* 」❒
│• ${prefix}nuliskanan <ᴛᴇxᴛ>
│• ${prefix}nuliskiri <ᴛᴇxᴛ>
│• ${prefix}foliokiri <ᴛᴇxᴛ>
│• ${prefix}foliokanan <ᴛᴇxᴛ>
╰─────❒

╭─❒「 *Anime Menu* 」❒
│• ${prefix}neko
│• ${prefix}waifu
│• ${prefix}husbu
│• ${prefix}loli
│• ${prefix}milf
│• ${prefix}cosplay
╰─────❒`

mnu =`*『 Patrick 』*`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ️' }, type: 1 },
{ buttonId: `${prefix}sk`, buttonText: { displayText: 'ʀᴜʟᴇs'}, type: 1 }
]
sendButLocation(from, menunya, mnu, gambar, but)
break
case 'sk':
sk1 =`👋 Hai @${sender.split('@')[0]}
Rules - Ketentuan Patrick Bot
❎ Dilarang spam!
❎ Dilarang menelpon bot!
❎ Bot tidak akan menyimpan
      data dari kalian!

Owner berhak memblokir nomormu jika melanggar ketentuan bot!
Fitur Error? harap chat owner`

sk2 =`*『 Patrick 』*`
but = [
{ buttonId: `${prefix}menu `, buttonText: { displayText: '️ᴍᴇɴᴜ' }, type: 1 }
]
sendButLocation(from, sk1, sk2, skimg, but)
break
case 'quotes':
reply(mess.wait)
qut = await fetchJson(`https://api.zeks.me/api/quote?apikey=${ZeksApi}`)
res = qut.result
txtt =`Author: ${res.author}\nQuotes: ${res.quotes}`
reply(txtt)
break
case 'primbonjodoh':
if (args.length ==0) return reply(`Nama Nya Mana?\nContoh ${prefix + command} Lexxy Dinda`)
nm1 = args(0)
nm2 = args(1)
anu = await fetchJson(`https://api.zeks.me/api/primbonjodoh?apikey=${ZeksApi}&nama1=${nm1}&nama2=${nm2}`)
get = anu.result
ini_txt =`Nama1: ${get.nama1}\n`
ini_txt +=`Nama2: ${get.nama2}\n`
ini_txt +=`Positif: ${get.positif}\n`
ini_txt +=`Negatif: ${get.negatif}`
buff = await getBuffer(get.thumb)
nana.sendMessage(from, buff, image, {quoted: mek, caption: ini_txt })
break
case 'nuliskanan':
case 'nuliskiri':
case 'foliokiri':
case 'foliokanan':
text = args.join(" ")
hsil = await getBuffer(`https://hardianto.xyz/api/${command}?text=${text}&apikey=${HardiKey}`)
nana.sendMessage(from, hsil, image, {quoted: mek, caption: 'Nih Hasilnya' })
break
case 'artinama':
reply(mess.wait)
b = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/artinama?apikey=${ZeksApi}&nama=${b}`)
bu =`${anu.result}`
reply(bu)
break
case 'artimimpi':
reply(mess.wait)
q = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/artimimpi?apikey=${ZeksApi}&q=${q}`)
get = anu.result
ini_txt =`String: ${get.string}\nArray: ${get.array}`
reply(ini_txt)
break
case 'truth':
reply(mess.wait)
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/truth`)
but = [
{ buttonId: `${prefix}truth`, buttonText: { displayText: '️</NEXT' }, type: 1 }
]
td1 =`${anu.truth}`
td2 =`*『 Patrick 』*`
sendButLocation(from, td1, td2, toddimg, but)
break
case 'dare':
reply(mess.wait)
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/dare`)
but = [
{ buttonId: `${prefix}dare`, buttonText: { displayText: '️</NEXT' }, type: 1 }
]
dr1 =`${anu.dare}`
dr2 =`*『 Patrick 』*`
sendButLocation(from, dr1, dr2, toddimg, but)
break
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'play':
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksApi}&q=${bo}`)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️MP3' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'MP4' }, type: 1 }
]
sendButLocation(from, ply1, ply2, ytimg, but)
break
case 'mp4':
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${ZeksApi}&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
nana.sendMessage(from, mp4, video)
break
case 'mp3':
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksApi}&q=${bo}`)
mp3 = await getBuffer(ini.result.url_audio)
nana.sendMessage(from, mp3, audio)
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
nana.sendMessage(from, buffer, image, {quoted: mek, caption: '_*Nih Kak Asupannya*_'})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
nana.sendMessage(from, buffer, image, {quoted: mek, caption: '_*Nih Kak Asupannya*_'})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
nana.sendMessage(from, buffer, video, {quoted: mek, caption: '_*Nih Kak Asupannya*_'})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
nana.sendMessage(from, buffer, video, {quoted: mek, caption: '_*Nih Kak Asupannya*_'})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
nana.sendMessage(from, buffer, video, {quoted: mek, caption: '_*Nih Kak Asupannya*_'})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
nana.sendMessage(from, buffer, video, {quoted: mek, caption: '_*Nih Kak Asupannya*_'})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
nana.sendMessage(from, buffer, video, {quoted: mek, caption: '_*Nih Kak Asupannya*_'})
break
case 'vietnam':
case 'korea':
case 'china':
case 'indonesia':
case 'malaysia':
case 'japan':
case 'thailand':
reply(mess.wait)
ini_result = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${apikey5}`)
get_result = ini_result.result
ini_img = await getBuffer(get_result.url)
nana.sendMessage(from, ini_img, image, {quoted: mek, caption: '_*Nih Kak Asupan Cecannya*_'})
break
case 'neko':
case 'waifu':
case 'husbu':
case 'loli':
case 'milf':
case 'cosplay':
reply(mess.wait)
hsil = await getBuffer(`https://ziy.herokuapp.com/api/randomimage/${command}`)
nana.sendMessage(from, hsil, image, { quoted: mek, caption: '*Halo Wibu*' })
break

case 'toimg':
					if (!isQuotedSticker) return reply(' reply stickernya um ')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nana.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						nana.sendMessage(from, buffer, image, {quoted: mek, caption: '_*Nih*_'})
						fs.unlinkSync(ran)
					})
					break
 case 'sticker':
 case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await nana.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply('error')
            })
            .on('end', function () {
            nana.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await nana.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            nana.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
            }
            break
case 'owner':
sendKontak(from, `${ownerNumber}`, `${ownerName}`)
break
case 'ytmp3':
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=${ZeksApi}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
nana.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_audio)
nana.sendMessage(from, res, audio)
break
case 'ytmp4':
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=${ZeksApi}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
nana.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_video)
nana.sendMessage(from, res, video)
break
case 'tiktok':
if (args.length ==0)return reply('Link nya mana?')
link = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksApi}&q=${link}`)
ply1 =`_*TIKTOK DOWNLOAD BY Patrick*_`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}tiktokmusic ${args.join(" ")}`, buttonText: { displayText: '️ᴀᴜᴅɪᴏ' }, type: 1 },
{ buttonId: `${prefix}tiktoknowm ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ' }, type: 1 }
]
sendButLocation(from, ply1, ply2, ttimg, but)
break
case 'tiktoknowm':
ninoxd = args.join(" ")
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${ninoxd}`)
buffer = await getBuffer(anu.download)
nana.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'tiktokmusic':
                    if (args.length < 1) return reply(`Linknya Mana Cuy?\nContoh : ${prefix + command} Melukis Senja`)
                    if (!isUrl) return reply(`ITU KAH LINKNYA?`)        	 				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    reply(mess.wait)
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=BayuPerkasa&url=${ini_link}`)
                    nana.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})                             
                    break
case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.adm)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
default:

			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return nana.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}

