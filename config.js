const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_13_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxODksXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRBeFNseXZLY2t4anplVWlzR2NERUU2ZVl1emhkSGZNdXhtZDdveVgrbEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4NTEzOTYwODc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMzU4NkU5NEQ1MjVDM0U1OTNDNkU3RjJCNjFFQzdCMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM0NjU1OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTg1MTM5NjA4NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg0MEQwNDI2NDVEQjE3OTYxOUVDMkI1QkU3N0RCNERGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzQ2NTU5OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzYmYzOHhxa1ROQ0VPUktDcFhibC1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2YWE3MTBkLTE4ZjMtNDI3YS04YTdkLTcxNWQxOGRhYWEyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDE5NSxcbiAgICAgIDI1NSxcbiAgICAgIDE5MyxcbiAgICAgIDE2LFxuICAgICAgMjQsXG4gICAgICA2NyxcbiAgICAgIDE1NCxcbiAgICAgIDI0MCxcbiAgICAgIDExMSxcbiAgICAgIDE5MixcbiAgICAgIDE2NixcbiAgICAgIDg5LFxuICAgICAgMTYwLFxuICAgICAgMjIzLFxuICAgICAgNDgsXG4gICAgICAxNDUsXG4gICAgICA4MyxcbiAgICAgIDE2NyxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMTY4LFxuICAgICAgMTcyLFxuICAgICAgMTUsXG4gICAgICAyMjYsXG4gICAgICAyMzAsXG4gICAgICAxODgsXG4gICAgICAxODcsXG4gICAgICAxLFxuICAgICAgMjAxLFxuICAgICAgNDksXG4gICAgICA5MSxcbiAgICAgIDE5NixcbiAgICAgIDI0NCxcbiAgICAgIDIyNSxcbiAgICAgIDE5MyxcbiAgICAgIDE1OSxcbiAgICAgIDIyNixcbiAgICAgIDk0LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlRaOTdENUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODUxMzk2MDg3NDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImlcIixcbiAgICBcImxpZFwiOiBcIjg0MzE0MjM0NTkzODc6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExPK0tRSEVQbXJ5cm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0Y1dHUkJNWUVZZHBDN3c1M0hwMEJFbGdpSmZBekEyZm5MNkFMSEZocGl3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZlcm92SmtGYWhoVFdYb3IvemtIZEZ0cXpEdU9XbnBESGx2UnNwazBpczd2ZzlCK2tnU1VMQ2VQUGlTa1QzVmtYTmpaeXlORDlrWkhyczBxaUJXTEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJLcnk0SS8yVWM5a0JKSDZQMHY3a1BxRzhjVE9zcUo1cGN4K3JGS0ZCamR2M290VngvTy9xNVRGTy9oOHg4SThwME9QSEhIeVQrOVFVemdUQm54eGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODUxMzk2MDg3NDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0NjU1OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKUTJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpRMi5qc29uIjogIntcImtleURhdGFcIjpcIk5sUkxNbUxENHM3Zko1ZHIzdXJodHliR2lZNjJyNm80V0p5b0JZbVFIZ0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1NjUyMTc3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNDY1NTk3OTA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
