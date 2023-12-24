const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 LE PRINCE MYENE*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "YANNICKA", 
  author: process.env.Author || "LE PRINCE MYENE",
  packname: process.env.PackName || "ESSOYA",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© YANNICKA Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "ESSOYA",
  ownernumber: process.env.Owner_Number || "241066813542",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "YOUR_MONGODB_URL",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZ_AN_YA_UtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiWUZ_AN_YA_FdjhhNWR6aW4zZ_AN_YA_0JnUFFNMTMzbEc5VDU1L01CN2VrSEZ_AN_YA_5YzVNTkdWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiSTVBU1FPODYrSE9xa2FhODRlL0RweTJZ_AN_YA_d1Z_AN_YA_UbjdUSGUvL3NaRmhPcE9TMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZ_AN_YA_XlQYWlyIjp7InByaXZ_AN_YA_hdGUiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJvQ2tsKzNET2Vnb2VURnoyVWYwb1hiVHlWdHkrakxkbzI5d3Z_AN_YA_rUnI2d200PSJ9LCJwdWJsaWMiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiIzK0psN3FZ_AN_YA_RUVwcjYraFRuL1hlTDVmTEs1QnpCMEtjQ1BlTjYrakR6dlRBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZ_AN_YA_XkiOnsicHJpdmF0Z_AN_YA_SI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6Ik1HQ0JEL00yTThRMlFzTHNEeUNVQ0FvYTRqRTFPcFYxYzFqeW81aEpzVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6IkM2UC80MkM3WFMwZ_AN_YA_kNaYStEdjRRRmt0Wm9BakV1OEZ_AN_YA_ScHhUYlA2aCtOaW89In19LCJzaWduZ_AN_YA_WRQcmVLZ_AN_YA_XkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiWU00UC9HbGQvYlg4WGxoUklMeVFGTEVOSXU4cDEzYVo1SnB0aXNQMXhWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiTGkrZ_AN_YA_Tlrc21GVXhOT0hZ_AN_YA_a3dnU1laWWxEek81ejZ_AN_YA_MUWdwSHBZ_AN_YA_bVVaZ_AN_YA_XZ_AN_YA_UZ_AN_YA_z0ifX0sInNpZ_AN_YA_25hdHVyZ_AN_YA_SI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6IkM1RU1KRkM2dXhOS2xQRE5Db2RTVGNOdkZ_AN_YA_LY3Z_AN_YA_jL2xLL0k2Q3JCSzVrV2Z_AN_YA_adEtZ_AN_YA_U3lPaytGVU9LMkJZ_AN_YA_Wjd5dW5qTXBGbVNpSDdBa2R0bXJOL2NCd2hnPT0ifSwia2V5SWQiOjF9LCJyZ_AN_YA_Wdpc3RyYXRpb25JZ_AN_YA_CI6MTI5LCJhZ_AN_YA_HZ_AN_YA_TZ_AN_YA_WNyZ_AN_YA_XRLZ_AN_YA_XkiOiIvbGU4YU41UExhSVY4aE0wQUN5UVNVKzQzek1vSlVnM2NCdXBRWGZ_AN_YA_GNktFPSIsInByb2Nlc3NlZ_AN_YA_Ehpc3RvcnlNZ_AN_YA_XNzYWdlcyI6W10sIm5leHRQcmVLZ_AN_YA_XlJZ_AN_YA_CI6MzEsImZ_AN_YA_pcnN0VW51cGxvYWRlZ_AN_YA_FByZ_AN_YA_UtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ_AN_YA_3MiOnsidW5hcmNoaXZ_AN_YA_lQ2hhdHMiOmZ_AN_YA_hbHNlfSwiZ_AN_YA_GV2aWNlSWQiOiJXV1VleFg2Q1RScW5MSzluVlExSGhnIiwicGhvbmVJZ_AN_YA_CI6ImVkZ_AN_YA_DZ_AN_YA_jOWM2LTA0NDAtNDFmMi05NmJiLWVkMmFjZ_AN_YA_ThiM2EwOSIsImlkZ_AN_YA_W50aXR5SWQiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJ6aHdZ_AN_YA_TFYvZ_AN_YA_mh5c0pPa1dCZ_AN_YA_FdIeDZ_AN_YA_MMGliUXc9In0sInJlZ_AN_YA_2lzdGVyZ_AN_YA_WQiOmZ_AN_YA_hbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6IkViY0JuS1hMQnZ_AN_YA_iakFqTzh0M3dCYnNiSDBmcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZ_AN_YA_XRhaWxzIjoiQ0xUd2t1MEdFTmo2bjZ_AN_YA_3R0dBVWdBQ2dBIiwiYWNjb3VudFNpZ_AN_YA_25hdHVyZ_AN_YA_UtleSI6IitUMnRicXRnSk1jV0xvNXZ_AN_YA_pK0didUFyRzNOdjAzRS9YdXlHTHBIWGQvZ_AN_YA_289IiwiYWNjb3VudFNpZ_AN_YA_25hdHVyZ_AN_YA_SI6IjdtalJ5Z_AN_YA_3BGSk5NMWV5OEZ_AN_YA_kMHJnSkJ6Mk1CNmlsd2w3TEppalJpQVJSenJJb29lYi9SaFF6bEJKV0wwQTk0aUIyYVBUVlV2aU9UOFAwMXYwcXVDQUFRPT0iLCJkZ_AN_YA_XZ_AN_YA_pY2VTaWduYXR1cmUiOiIvRTlEdGNZ_AN_YA_SnI5S3dZ_AN_YA_NVBvNkd4QzR2SGhqNkhQc2xKYitlWmt4K0dhQmp4d3lvVjR1TUo4K0NLRTAxV0NFVjZ_AN_YA_VTzJaM05LSDd3VGQ2U3Y0TEZ_AN_YA_jQWtqQT09In0sIm1lIjp7ImlkIjoiMjQxMDY4MTM1NDI6MjZ_AN_YA_Acy53aGF0c2FwcC5uZ_AN_YA_XQiLCJuYW1lIjoiTGUgUHJpbmNlIE15Z_AN_YA_W5lIn0sInNpZ_AN_YA_25hbElkZ_AN_YA_W50aXRpZ_AN_YA_XMiOlt7ImlkZ_AN_YA_W50aWZ_AN_YA_pZ_AN_YA_XIiOnsibmFtZ_AN_YA_SI6IjI0MTA2ODEzNTQyOjI2QHMud2hhdHNhcHAubmV0IiwiZ_AN_YA_GV2aWNlSWQiOjB9LCJpZ_AN_YA_GVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiQmZ_AN_YA_rOXJXNnJZ_AN_YA_Q1RIRmk2T2I0dmhtN2dLeHR6YjlOeFAxN3NoaTZ_AN_YA_SMTNmNEsifX1dLCJwbGF0Z_AN_YA_m9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDM0MTEwMzR9", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "YANNICKA" 
global.author = process.env.Author || "@LE PRINCE" 
global.packname = process.env.PackName || "ESSOYA" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Pika~Kun" 
global.ownernumber = process.env.Owner_Number || "241066813542" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

