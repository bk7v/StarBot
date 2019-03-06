
//اساسي
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';
//اخرى
const ms = require("ms");
const request = require('request');
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl'); 
const translate = require('google-translate-api');   
const fs = require("fs"); 
var data = JSON.parse(fs.readFileSync('data.json','utf8'))
const moment = require("moment");
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const zalgo = require('zalgolize');   
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const ytdl = require("ytdl-core");

//YouTube
const Util = require('discord.js');
const GOOGLE_API_KEY = "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8"
const getYoutubeID = require('get-youtube-id');
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const dateFormat = require('dateformat');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4"; 
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const gif = require("gif-search");
const client = new Discord.Client({disableEveryone: true});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("*help | By: bk7-v", "https://www.twitch.tv/Alpha");
});
 
client.on('message', function(message) {
	const myID = "446243110025166858";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});








client.on("message", msg => { 
    var pa = '*';
    if(msg.content.startsWith( pa + "invite")){ 
        let e = new Discord.RichEmbed() 
        .setTitle("**اضافه البوت لسيرفرك**") 
       .setDescription(`**📬 | اذا تريد البوت يرسلك الرابط بخاصك
       📇 | اذا تريد البوت يرسلك الرابط هنا بالشات**`)
        msg.channel.send(e).then(b => {
            b.react('📇')
            .then(() => b.react('📬'))
            .then(() =>b.react('📇'))
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === msg.author.id;

let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
msg.reply(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
b.delete(2000)
})
reaction2.on("collect", r => {
    msg.author.send(`${msg.author} https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
    b.delete(2000)
    msg.reply("**تم ارسال الرابط في خاصك 📬**").then(d => {
        d.delete(2000)
    })
    })
        })
    }
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})


client.on("message", message => {
	var prefix = "*";
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#8325c0") 
      .setDescription(`
	  
	       **__Help Commands:__** 

**			 
${prefix}help-p ⥨ الاوامر العامة

${prefix}help-a ⥨ اوامر الادارة
			 
${prefix}help-g ⥨ اوامر الالعاب

${prefix}help-bc ⥨ اوامر البرودكاست

${prefix}help-m ⥨ اوامر الموسيقى

**__Other Commands:__**


${prefix}invite ⥨ لدعوة البوت الى سيرفرك

${prefix}support ⥨ لدخول سيرفر الدعم
**
	
`)
 
   message.channel.sendEmbed(embed)
    
   }
   }); 


   client.on("message", message => {
 if (message.content === "*help-p") {
        message.react("📫")
	           message.react("✅")
  const embed = new Discord.RichEmbed() 
      .setColor("#8325c0")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
الاوامــر الــعـــامـــة

⤠ *server ⥨ معلومات عن السيرفر                      
⤠ *say ⥨ البوت يردد كلامك         
⤠ *setcolor ⥨ عشان تغير لونك ملاحظة لازم تحط رقم اللون                                          
⤠ *bot ⥨ معلومات عن البوت
⤠ *ping ⥨ لمعرفه سرعه البوت
⤠ *members ⥨ معلومات عن الاعضاء
⤠ *emojilist ⥨ لعرض الايموجي حقت السيرفر
⤠ *id ⥨ لمعرفة معلومات حسابك
⤠ *avatar ⥨ لاعطائك صورة الشخص اللي منشنته مع الرابط
⤠ *link ⥨ يعطيك رابط انفايت للسيرفر اللي انت فيه
⤠ *trans <language> <any thing> ⥨ يترجم لك الي تبيه من اي لغة
⤠ *short ⥨ لاختصار الروابط
⤠ *embed ⥨ كتابة كلامك داخل امبد
⤠ *tag ⥨ يكتب لك الكلمة بشكل جميل وكبير
⤠ *contact ⥨ لارسال رسالة لصاحب البوت
⤠ *support ⥨ لدخول سيرفر دعم البوت
⤠ *allbots ⥨ يعرض لك كل البوتات
⤠ *credit ⥨ لمعرفة رصيدك
⤠ *daily ⥨ لاخذ جائزة كل يوم مرة

`)


message.author.sendEmbed(embed)

}
});


const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 5000000
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 500,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 100000000000000;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);//هنا مدة تحديث الكريديت
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});





const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
	var prefix = "*";
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ترجمة الكتابة.**\استعمل: `*translate <الكلمة لتبي> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**\استعمل: `*translate <الكلمة لتبي> <االغة>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});







   client.on('message', message => {
     if (message.content === "*support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :scales:سيرفر الدعم:scales:  **" , "  **لا يوجد حاليا**")
     
     
  message.channel.sendEmbed(embed);
    }
});

 

 client.on("message", message => {
      if (message.content === "*ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
  
  


client.on('message', message => { 
let PREFIX = '*'
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});
  


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });




client.on('message', message => {
    if (message.content.startsWith("*bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('``الاسم👑``' , `[ ${client.user.tag} ]` , true)
	    .addField('``الايدي🆔``' , `[ ${client.user.id} ]` , true)
	    .addField('``سرعة البوت📨``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``السيرفرات🌐``', [client.guilds.size], true)
            .addField('``المستخدمين👥``' ,`[ ${client.users.size} ]` , true)
	    .addField('``الرومات💭``' , `[ ${client.channels.size} ]` , true)
			      .addField('``البرفكس✴️``' , `[ * ]` , true)
			      .setFooter(' ￼ ')
    })
}
});


   
   
   client.on('message', message => {

    if (message.content.startsWith("*link")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :white_check_mark: تم ارسال الرابط على الخاص ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
---------------------
 :kissing_closed_eyes:  - هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 :smiley: - هذا الرابط صالح لمده 24 ساعه فقط
---------------------`)
      message.author.sendEmbed(Embed11)
    }
 
});





client.on('message', message => {
            var prefix = "*";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});



	 
  

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`__**ServerInfo**__`)
      .addField('**اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
      .addField('**نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('**عدد الاعضاء**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('**عدد البشريين**',`[** __${msg.guild.memberCount - msg.guild.members.filter(m => m.user.bot).size}__ **]`,true)
      .addField('**عدد البوتات**',`[** __${msg.guild.members.filter(m => m.user.bot).size}__ **]`,true)
      .addField('**عدد الاعضاء الاونلاين**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('**الرومات**',`[**${msg.guild.channels.filter(m => m.type === 'text').size}** **text | Voice** **${msg.guild.channels.filter(m => m.type === 'voice').size}**]`,true)
      .addField('**الأونـر**',`**${msg.guild.owner}**`,true)
      .addField('**ايدي السيرفر**',`[** __${msg.guild.id}__ **]`,true)
      .addField('**الرتب**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('**تاريخ انشاء السيرفر**',`[** __${msg.guild.createdAt.toLocaleString()}__ **]`, true)
      msg.channel.send({embed:embed});
    }
  }); 
	 
	 
	 
    client.on('message', message => {
    var prefix = '*'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "Not Playing....";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('Name :',`**<@` + `${z.id}` + `>**`, true)
.addField('ID :', "**"+ `${z.id}` +"**",true)
.addField('Playing :','**'+y+'**' , true)
.addField('Discrim :',"**#" +  `${z.discriminator}**`,true)
.addField('**Created At**', message.author.createdAt.toLocaleString())
.addField("**Joined At**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

  
  
  
   

client.on('message', message => {
	let prefix = "*";
if(message.content.startsWith(prefix + "sug")) {
      message.delete()

const args = message.content.slice(prefix.length).trim().split(/ +/g);

  var suggestMessage = args.slice(1).join(" ")
  if(!suggestMessage) return message.reply("الرجاء وضع اقتراح")
  let suggestsEMBED = new Discord.RichEmbed()
   .setColor('#0028db')
   .setTitle(" !أقتراح جديد ")
   .setDescription(`**${suggestMessage}**`)
   .setFooter(` المقترح : ${message.author.tag}`)
  
       let suggests = message.guild.channels.find(ch => ch.name === "الاقتراحات");
                   if (!suggests) return message.reply("يرجى صنع روم بأسم : الاقتراحات")
               suggests.send(suggestsEMBED);
}
})



client.on('message', message => { 
	var prefix = "*";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});


client.on('message', message => {
	var prefix = "*";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});




     client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**__معلومات عن اعضاء السيرفر__**
 **متصل** 💚:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
  **ممنوع الازعاج** ❤️:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
 **نايم** 💛:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
 **الاعضاء** 💠:  ${message.guild.memberCount}
 **البشريين** 👥:   ${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}
**البوتات** 💡:   ${message.guild.members.filter(m => m.user.bot).size} `)
         message.channel.send({embed});

    }
      });



   
   client.on("message", message => {
  if (message.content === "*avatar") {
   const embed = new Discord.RichEmbed()
       .setColor('RANDOM') 
       .setFooter('By ! ~ D e v i l')
       .setThumbnail(message.author.avatarURL)
       .addField(message.author.displayAvatarURL)
 message.channel.send(embed);
}
});







   client.on("message", message => {
 if (message.content === "*help-a") {
        message.react("📫")
	           message.react("✅")
const embed = new Discord.RichEmbed() 
      .setColor("#8325c0")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
 اوامـــر الادمـــنـــيــــة
**
⤠ *vb ⥨ لمنع الشخص اللي تمنشنه من دخول الرومات الصوتية
⤠ *unvb ⥨ عشان تفك البان عنه من الرومات الصوتية
⤠ *ban ⥨ لتبنيد شخص ما من السيرفر
⤠ *kick ⥨ لتعطي شخص كيك
⤠ *clear <numb> ⥨ لمسح عدد الرسائل التي تريدها
⤠ *mc ⥨ لتقفيل الشات 
⤠ *umc ⥨ لفتح الشات
⤠ *mute ⥨ لاعطاء شخص ما ميوت مع تحديد وقت الميوت 
⤠ *unmute ⥨ لنزع الميوت من الشخص
⤠ *hidec ⥨ لاخفاء روم معين 
⤠ *showc ⥨ لاظهار روم معين 
⤠ *ct ⥨ لانشاء روم كتابي مع اختيار الاسم
⤠ *cv ⥨ لانشاء روم صوتي مع اختيار الاسم 
⤠ *v2min ⥨ لانشاء روم صوتي مؤقت لدقيقتين
⤠ *roles ⥨ لعرض رولات السيرفر 
⤠ *rooms ⥨ لعرض رومات السيرفر 
⤠ *role @user <rank> ⥨ لاعطاء شخص ما رتبة
⤠ *roleremove @user <rank> ⥨ لنزع رتبة من شخص ما
⤠ *role all <rank> ⥨ لاعطاء الجميع رتبة
⤠ *role humans <rank> ⥨ لاعطاء البشريين رتبة 
⤠ *role bots <rank> ⥨ لاعطاء البوتات رتبة 
⤠ *vote  ⥨ تجهيز التصويت
⤠ *clearvote ⥨ مسح التصويت
⤠ *startvote ⥨ بدأ التصويت
⤠ *stopvote ⥨ توقيف التصويت
⤠ *votes  ⥨ تشوف التصويتات 
⤠ *setwelcomer  ⥨ الترحيب 
**

**__ويشتغل معكwelcomeوفي الترحيب بدون صورة بس سم الروم__**
**صانع البوت**
***__♕bk7-v#5107__***
`)


message.author.sendEmbed(embed)

}
}); 

const sWlc = {}
client.on('message', message => {
var prefix = "*";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcomee"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
 
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
     const w = ['swlc.png'];
     
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
 
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
     
      })
     
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
     
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                             
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To Server`, 245, 80);
   
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();
 
                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();
 
                           
    welcomer.sendFile(canvas.toBuffer())
     
     
     
      })
      })
     
      }
      });




client.on('message', message => {
			var mintionchannel = message.content.split(' ').slice(1);
      if(message.content.startsWith(prefix + 'channel')) {
       
         if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
          message.channel.send("You Don't Have A Permissions `MANAGE_CHANNELS` ");
        } else {
			     var room1 = message.guild.channels.find('name', `${mintionchannel}`);
          if(!room1) {
           message.channel.send( "**Usage :** ```" + "  " + `${prefix}` + 'channel'+ " " + 'ChannelName```' );
            } else {
             
             if (room1.type = "text"){
              var filtertitle = "Channel Last Message : ";
              var filtermessage =  room1.lastMessage; 
             }if (room1.type = "voice"){
              var filtertitle = "Channel Timestamp";
              var filtermessage = room1.createdTimestamp;
             }
              let embed = new Discord.RichEmbed()
              .addField(' Chanel Name : ', room1.name, true)
              .addField(' Channel ID : ',room1.id, true)
              .addField(' Channel CreateAt  : ', room1.createdAt,true)
              .addField(`${filtertitle}`, filtermessage , true)
              .addField(' Channel Type : ', room1.type, true)
               message.channel.sendEmbed(embed);
		    	}
            
          }
     }
    });

   

client.on('message', message => {
 
    if (message.content === "*mc") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === "*umc") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
 
 
 
});


client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
         
        }
});





















client.on('message', message => {
    var prefix = "*";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'welcome')
        if (!channel) return;
        channel.send({embed : embed});
        })




client.on('guildMemberAdd', member => {
let channel = member.guild.channels.find(c => c.name === 'welcome');
let memberavatar = member.user.avatarURL
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('🎽 | الاسم :  ',`${member}`)
    .addField('📢 | انضم:' , `انضم عندنا عضو جديد , ${member}:grinning:  `)
    .addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
            .addField('➡| اصبحوا',`${member.guild.memberCount}`)
           
              .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
                                   
 .setFooter("StarBot")
    .setTimestamp()

  channel.sendEmbed(embed);
	

	
	  
});

   client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** هذا الامر فقط للسيرفرات**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("معاقب")
            .addField(`** ⚖️ بسبب نشر الروابط **`,`** ￼ **`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  





client.on('message', async message =>{
  var prefix = "*";
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});



client.on("message",async msg => {//Alpha Codes
  var moment = require("moment");//npm i moment
var prefix= '*';//البرفكس
  if(msg.content.startsWith(prefix+ "warn")){
let warnc = msg.guild.channels.find("name","warns");
if(!warnc) return msg.reply("**لا يوجد روم باسم ❌** `warns`")
let mention = msg.mentions.users.first();
let one = mention;
let fltr = m => m.author.id === msg.author.id
await msg.reply("**منشن العضو الان | 👤 **").then(e => {
msg.channel.awaitMessages(fltr, {time:60000, max:1
})
.then(co => {
one = co.first().content;
co.first().delete();
let reason;
  e.edit(`**${msg.author} ماهو السبب
1-عدم احترام
2-سب
3-اهانة
**`).then(e => {
msg.channel.awaitMessages(fltr, {time:60000, max:1
}).then(co => {
          if(co.first().content === '1') {
        reason  = "تم تحذيره بسبب عدم الاحترام"
      }else if(co.first().content === '2') {
        reason  = "تم تحذيره بسبب السب"
      }else if(co.first().content === '3') {
        reason  = "تم تحذيره بسبب الاهانة"
      }
}).then(co => {

co.first().delete();
  e.edit(`**${msg.author} تم تحذيره و وصلوة للادارة | :white_check_mark: **`).then(p => {
    p.delete(1999);
moment.locale("ar-sa")
let e = new Discord.RichEmbed()
.setTitle("**Warn**")
.addField("**User**", one,)
.addField("**By**", msg.author,)
.addField("**channel**", msg.channel,)
.addField("**Time**", `${moment(msg.createdAt).fromNow()}`,)
.addField("**Reason**", reason,)
warnc.send(e);
    })
})
})
})
})
  }
})



client.on('message', msg => {
  if (msg.content === '*help-p') {
    msg.reply(':envelope: | تم ارسال الاوامر العامة في الخاص');
  }
});
   
   

client.on('message', msg => {
  if (msg.content === '*help-a') {
    msg.reply(':envelope: | تم ارسال اوامر الادمنية في الخاص');
  }
});

client.on('message', msg => {
  if (msg.content === '*help-g') {
    msg.reply(':envelope: | تم ارسال اوامر الالعاب في الخاص');
  }
});



client.on('message', msg => {
  if (msg.content === '*help-m') {
    msg.reply(':envelope: | تم ارسال اوامر الموسيقى في الخاص');
  }
});

	  
	  
client.on('message' , message => {
var prefix = "*"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("446243110025166858").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : bk7-v")
                                                

message.channel.send(embed);


}
    
});
	
	
	
	
	
	
	
client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "446243110025166858") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
        },3000);
    }
});
	
	
	
	     client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**__معلومات عن اعضاء السيرفر__**
 **متصل** 💚:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
  **ممنوع الازعاج** ❤️:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
 **نايم** 💛:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
 **الاعضاء** 💠:  ${message.guild.memberCount}
 **البشريين** 👥:   ${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}
**البوتات** 💡:   ${message.guild.members.filter(m => m.user.bot).size} `)
         message.channel.send({embed});

    }
      });
	
	
	

	  
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
	  

client.on('message', message => {
var prefix = "*";
      if(message.content === prefix + "hidec") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = "*";
      if(message.content === prefix + "showc") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});


client.on('message', message => {
    if (message.content === "*rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});



	

client.on("message", message => {
	var prefix = "*";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

	  
	  
client.on("message", message => {
     var prefix = "*";
    if(message.content.startsWith(prefix + 'v2min')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`☑ TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> ⏱  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });
	  
	  
	  
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "*roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
	  
	  
	  
client.on('message' , message => {
  var prefix = "*";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو**`);
    }
});
	  
	  
	  
	   client.on("message", message => {
 if (message.content === "*help-g") {
        message.react("📫")
	           message.react("✅")
  const embed = new Discord.RichEmbed() 
      .setColor("#8325c0")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

اوامـــر الالـــعـــاب

**
⤠ *عشان تعطي الشخص اللي تمنشنه لكمة ⥨ لكمة         
⤠ *لعبة هل تعلم ⥨ هل تعلم         
⤠ *rps ⥨ لعبة حجر ورقة مقص  
⤠ *roll <numb> ⥨ قرعة  
⤠ *hug ⥨ يحضن                 
⤠ *emoji ⥨ لكتابة كلامك بايموجي                  
⤠ *لعبة اسئلني ⥨ اسئلني                    
⤠ *لعبة كت تويت ⥨ كت تويت
⤠ *لعبة لو خيروك ⥨ لو خيروك 
⤠ *معلومات عن الاسلام ⥨ دين    
⤠ *يعطيك بعض الاذكار ⥨ اذكار    
** 

`)


message.author.sendEmbed(embed)



}
});
	  
	  
	  
client.on('message',  (message) => {
        if(message.content.startsWith('*لكمة')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let punches = [
    'https://memeguy.com/photos/images/man-getting-punched-in-the-face--145991.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://media.giphy.com/media/Fs8pXeLXuKUGA/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} عطاك بوكس ${user.username}! :punch:`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


bot.on('message', msg => {
let prefix = "$"
if(msg.content.startWith(prefix + hug)) {   

    let user = msg.mentions.users.first();
if(!user) {

    return msg.reply(`useage : ${prefix}hug <@user>`)

}

let hugs = [
'https://media.giphy.com/media/42YlR8u9gV5Cw/giphy.gif',
'https://media.giphy.com/media/6uEE79cXjssla/giphy.gif',
'https://media.giphy.com/media/NhjPhBQIIxdxm/giphy.gif',
'https://media.giphy.com/media/3oEhmDMA4r9GxhwEqA/giphy.gif',
'https://media.giphy.com/media/QbkL9WuorOlgI/giphy.gif',
'https://media.giphy.com/media/gnXG2hODaCOru/giphy.gif',
'https://media.giphy.com/media/VGACXbkf0AeGs/giphy.gif',
'https://media.giphy.com/media/7eQ8Ky3dAsRYA/giphy.gif',
'https://media.giphy.com/media/xT1XGPy39lDKJ5Gc5W/giphy.gif',
'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif'

];
     if(user.id === '518007825746755587') return msg.channel.send(' you can\'t :}');
    if(user.id === msg.author.id) return msg.channel.send('Do not hug yourself :>');
msg.channel.send({
    embed: {
     description: `${msg.author.username} huging ${user.username}`,
  image: {
    url: hugs[Math.floor(Math.random() * hugs.length)]
  }

}


}).catch(e => {

    bot.log.error();
    (e)
}
    
    )
  }});



	  client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "roll")){
            if(!args) return message.channel.send("الرجاء اختيار رقم")
            message.channel.send(Math.floor(Math.random() * args))
        }
    });




	
	
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "rps")) {
              let args = message.content.split(" ").slice(1);
  var choice = args[0];
  if (choice == "ورقة" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "مقص") {
      var response = " لقد اخترت **مقص** و :v: ولقد فزت"
    } else if (choice2 == "ورقة") {
      var response = " لقد اخترت **ورقه** :hand_splayed: انه تعادل "
    } else {
      var response = " لقد اخترت **حجر** :punch:  انت الفائز"    
    }
    message.channel.send(response);
  } else if (choice == "حجر" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "ورقة") {
      var response = " لقد اخترت **ورقه** :hand_splayed: ولقد فزت"
    } else if (choice2 == "حجر") {
      var response = "لقد اخترت **حجر** :punch: انه تعادل "
    } else {
      var response = " لقد اخترت **مقص** :v: انت الفائز"
    }
    message.channel.send(response);
  } else if (choice == "مقص" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "حجر") {
      var response = "لقد اخترت **ورقه** :hand_splayed: لقد فزت"
    } else if (choice2 == "مقص") {
      var response = "لقد اخترت **مقص** :v: انه تعادل"
    } else {
      var response = " لقد اخترت **حجر** :punch: انت الفائز "
    }
    message.channel.send(response);
  } else {
    message.channel.send(`يجب عليك استعمال \`${prefix}rps\` <حجر|ورقة|مقص>`);
  }
}

});
	
	
	var Himo_04 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
message.channel.sendEmbed(cat);
    }
});







client.on('message', message => {
    if (message.content == "*اسئلني") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send(' وِ عَ ـلَيّكمِ آلَسًسًـلَآمِ وِ رحً ـمِة آلَلَهِ تُعَ ـآلَى وِ بّـركآتُهِ:heart: ');
               

            }
}); 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هلا') {
              message.channel.send(' هِلَآ بّـيّك:heart: ');
               

            }
}); 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.send(' تُيّتُ:heart: ');
               

            }
}); 



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.send(' وِلَكمِ بّـآك مِنٌوِر يّآ عَ ـسًسًـلَ:heart: ');
               

            }
}); 




client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });

	


client.on('message', message => {
var prefix = "*";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});









client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*cb')){
 if(!message.author.id === '244888652004458497') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

const cuttweet = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
	var prefix = "*"
if (message.content.startsWith(prefix + "كت تويت")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});






  const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',     
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
	  	var prefix = "*"
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'اذكار')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("Legend Brmoon.")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });










const den = [
      'على من يطلق المصدود ؟',
      'من النبي الذي كان يسمى بشرى',
      'من ادخل الخوارزمي في الإسلام ؟',
      'ما اسم القوم الذين لقوا سيدنا إسماعيل ووالدته عند بئر زمزم ؟ ',
      'من الذي عدلت شهادته شهادة الرجلين ؟',
      'ماذا تسمى الميته التي تقع من مكان مرتفع ؟',
      'ما هما الآيتان اللتان أعطيا النبي صلى الله عليه وسلم وهما من كنوز العرش ؟ ',
      ' من آخر من توفى من الصحابة ؟ ',
      'من الملقب بذي النورين ؟ ',
      'ما الفرق بين سندس وإستبرق ؟',
      'ما المقصود بذي الرحم الكاشح ؟',
      'كم عدة المرأة المتوفى زوجها ؟',
      'كم عدة المرأة المطلقة ؟ ',
      'فيمن قال رسول الله صلى الله عليه وسلم ( لقد رفعوا إلي في الجنة ) ؟',
      'متى تم بناء مسجد الرسول صلى الله عليه وسلم ؟',
      'متى شرع الآذان ؟ ',
      'متى كانت غزوة الأبوء او غزوة ودان ؟ ',
      'ما اسم خازن الجنة ؟ ',
      'متى كانت غزوة بدر الأولى ؟ ',
      'متى تم تحويل القبلة ؟ ',
      'متى شرع رمضان ؟',
      ' ما اسم خازن النار ؟ ',
      'ما السورتان المسماتان بالزهراوين ؟',
      'من هم المؤذنون الذين كانوا يؤذنون في عهد الرسول صلى الله عليه وسلم ؟ ',
      'متى كانت غزوة بني النضير ؟ ',
      'ما المكان الذي اتخذه الرسول صلى الله عليه سلم مركزاً سرياً للدعوة في مكة المكرمة ؟ ',
      'متى كانت غزوة ذات الرقاع ؟ ',
      'من أول من دون الفقه ؟',
      'من الملقب بذي النور ؟ ',
      'متى كانت غزوة الخندق أو الأحزاب ؟ ',
      'فيمن أنزلت الهمزة ؟ ',
      'متى كانت غزوة ذي قرد ؟ ',
      'من سمى الجمعة الجمعة ؟ ',
      ' متى كانت غزوة خيبر ؟ ',
      'من الذي قبل أمير المؤمنين رأسه وقال : حقاً على المؤمنين أن يقبلوا رأسه ؟ ',
      ]
      client.on('message', message => {
		  	var prefix = "*"
          if (message.content.startsWith(prefix + 'دين')) {
              if (!message.channel.guild) return message.reply('** هاذا الأمر فقط للسيرفرات **');
              var client = new Discord.RichEmbed()
                  .setTitle("Legend Brmoon.")
                  .setColor('RANDOM')
                  .setDescription(`${den[Math.floor(Math.random() *den.length)]}`)
                  .setImage("https://cdn.discordapp.com/attachments/439827614044258306/441487283888324609/unknown.png")
                  .setTimestamp()
      
              message.channel.sendEmbed(client);
              message.react("??")
          }
      });


const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
	  
	  
	   client.on("message", message => {
 if (message.content === "*help-m") {
        message.react("📫")
	           message.react("✅")
  const embed = new Discord.RichEmbed() 
      .setColor("#8325c0")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

اوامـــر الموسيقى

*** كل الاوامر لها اختصارات ***

⤠ *play ⥨ لتشغيل اغنية
⤠ *skip ⥨ لتجاوز الاغنية الحالية
⤠ *stop ⥨ إيقآف الأغنية 
⤠ *resume ⥨ لامواصلة الاغنية
⤠ *vol ⥨ لتغيير درجة الصوت 100 - 0
⤠ *join ⥨ لادخال البوت الى رومك الصوتي
⤠ *leave ⥨ لإخرآج البوت من الروم
⤠ *loop ⥨ لجعل الاغنية ما توقف
⤠ *queue ⥨ لمعرفة قآئمة التشغيل
`)
 


message.author.sendEmbed(embed)



}
}); 
	  
	





 var color = new Discord.RichEmbed().setColor('#000000').setColor('#36393e')
function e(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter(`By Request of ${message.author.username}`);
	message.channel.sendEmbed(embed);
};
//Errors [ function ]
function err(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/1000px-Feedbin-Icon-error.svg.png")
	message.channel.sendEmbed(embed);
};
//Requested by [ function ]
function ee(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args)
	.setFooter(`Requested by ${message.author.username}`);
	message.channel.sendEmbed(embed);
};
//Left the voice channel [ function ] ,-,
function L(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter(`By Request of ${message.author.username}`);
	message.channel.sendEmbed(embed);
}
//Current volume [ function ]
function V(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://www.iconsdb.com/icons/preview/red/volume-up-4-xxl.png")
	message.channel.sendEmbed(embed);
}
// For the skip command
function S(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	message.channel.sendEmbed(embed);
};
function VS(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter("Requires Another Vote.")
	message.channel.sendEmbed(embed);
};
function Vs(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://www.iconsdb.com/icons/preview/red/volume-up-4-xxl.png")
	message.channel.sendEmbed(embed);
};
const queue = new Map();
var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
client.on('message', async message => { 
	if (message.author.bot) return undefined;
	if (!message.content.startsWith(prefix)) return undefined;
	const args = message.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const voiceChannel = message.member.voiceChannel;
	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)
	if (message.channel.type !== 'text') return;
	const serverQueue = queue.get(message.guild.id);
	message.guild.setRegion("eu-central")//
	if (command === 'play' || command === 'p' || command === 'search' || command === "ply") {
		if (!voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(client.user.id).voiceChannel) {
			if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
        };
		if (!args[1]) return err(message, `You should To insert A song name or YouTube URL.`)
		const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
		const validate = await ytdl.validateURL(args[1]);
		if (regexp.test(args[1]) && !validate && !url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return err(message, `You should insert A valid URL.`);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, message, voiceChannel, true); 
            }
			e(message,`**${playlist.title}**, has been added to the queue`)
		}else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 31);
					if (!videos[0]) return err(message, `Cannot find Any Results.`);
					var index = 0;
					var pages = 1;
					var msgg = "";
					var takoota = new Discord.RichEmbed()
					.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
					.setColor(color.color)
					.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
					.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(0,10).join('\n')}`)
					.setFooter("Page 1 of 3");
					message.channel.send({embed : takoota}).then(async msg1 => {
						msgg=msg1.id
						await msg1.react('◀');
						await msg1.react('▶');
						let e = msg1.createReactionCollector((reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id, { time: 60000 });
						let t = msg1.createReactionCollector((reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id, { time: 60000 });
						t.on("collect",async () => { 
							if (pages == 1) {
								pages+=1
							index = 0;
							var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(10,20).join('\n')}`)
							.setFooter("Page 2 of 3");
							msg1.edit({embed : takoota});
							} else if (pages == 2) {
								pages+=1
								var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${index++ - 30}. **${video2.title}**\n`).slice(20,30.5).join('\n')}`)
							.setFooter("Page 3 of 3");
							msg1.edit({embed : takoota});
							};
						});
						e.on("collect", async () => {
							index = 0;
							if (pages == 2) {
								pages-=1
							var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color)
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(0,10).join('\n')}`)
							.setFooter("Page 1 of 3");
							msg1.edit({embed : takoota})
							} else if (pages == 3) {
								pages-=1
								var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(10,20).join('\n')}`)
							.setFooter("Page 2 of 3");
							msg1.edit({embed : takoota});
							}
						})
						
					});
					try {
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 31 && msg2.author.id == message.author.id, {
							maxMatches: 1,
							time: 60000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return;
					}
					response.first().delete();
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
					var msg1 = message.channel.messages.get(msgg);
					if (!msg1) return;
					msg1.delete();
				} catch (err) {
					console.error(err);
					return;
				}
			}}
				const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
			loop : false,
			vote : []
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0], message);
		} catch (error) {
			console.error(`${error}`);
			queue.delete(message.guild.id);
			return;
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return;
		await e(message, `**${song.title}**, has been added to the queue`)
	};
	
	return undefined;
	async function handleVideo(video, message,voiceChannel){
						const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
			loop : false
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0], message);
		} catch (error) {
			console.error(`${error}`);
			queue.delete(message.guild.id);
			return;
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return;
		await e(message, `**${song.title}**, has been added to the queue`)
	};
	return undefined;
	}
	} else if (command === 'skip' || command === 's' || command === 'ski' || command === 'sk') {
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue.songs.length == 1) return err(message, "Only 1 song is Queued.")
		if (serverQueue.vote.includes(message.author.id)) return err(message, `You Already Voted To skip.`);
		serverQueue.vote.push(message.author.id)
		var allusers = message.guild.members.filter(m => m.voiceChannel).size;
		var required = allusers/2
		if (required<=serverQueue.vote.length) {
			if (serverQueue.loop == true)await serverQueue.songs.shift();
			await serverQueue.connection.dispatcher.end('Skip command has been used!');
			await S(message, `**${serverQueue.songs[0].title}**, has been skipped`);
		} else {
			VS(message, `**${message.author.username}**, has been voted to skip`)
		}
		return undefined;
	} else if (command === 'stop' || command === 'st' || command === 'sto') {
	if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);

	if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To use This Command.`);		
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		e(message, `Okey, Music has been stopped`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === "leave" || command === 'disconnect' || command === 'l') {
		if (!message.guild.members.get(client.user.id).voiceChannel) return;
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
		if (serverQueue) serverQueue.songs = [];
		if (serverQueue) serverQueue.connection.dispatcher.end('leave command has been used!');
		message.member.voiceChannel.join();
		message.member.voiceChannel.leave();
		L(message, `:door: I have disconnected from ${message.guild.members.get(client.user.id).voiceChannel.name}`);

	} else if (command === 'volume' || command === 'vol' || command === 'v') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!args[1]) return V(message,`The current volume is ${serverQueue.volume}%`);
		args[1] = parseInt(args[1]);
		if (args[1] > 200 || args[1]<2) return err(message, `Only allowed from 2 - 200`)
		if (isNaN(args[1])) return err(message, `Only numbers are allowed.`)
		if (args[1] == serverQueue.volume) return err(message, `My Volume is already ${serverQueue.volume}%`)
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 250);
		return Vs(message, `Volume Successfully Changed to ${args[1]}%`);
	} else if (command === 'queue' || command === 'q' || command === "qu" || command === 'que') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		else if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		else if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		else {
		var y = 0;
		var embed = new Discord.RichEmbed()
		embed.setColor(color.color);
		embed.setAuthor(`Now playing 🎶 ${serverQueue.songs[0].title}`)
		embed.setURL(serverQueue.songs[0].url)
        if (serverQueue.songs.length <=1) return message.channel.send({embed :embed});
        var str = `${serverQueue.songs.map(song => `${y++}. [${song.title}](${song.url})\n`).slice(1,11).join("\n")}\n\n`;
        var embed = new Discord.RichEmbed()
        .setColor(color.color)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail("https://media.discordapp.net/attachments/492975144147615744/493028296699936777/1537617500423.png")
        .setDescription(str);
        if ((serverQueue.songs.length-10) > 0) embed.setFooter(`And ${serverQueue.songs.length-10} More..`);
        message.channel.send({embed : embed});
		}
	} else if (command === 'pause' || command === 'pa' || command === 'pau' || command === 'paus') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue && serverQueue.playing) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return ee(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			e(message, `**${serverQueue.songs[0].title}**, has been paused`);
			return;
		}
	} else if (command === 'resume' || command === 'r' || command === 'continue' || command === "res") {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue && !serverQueue.playing) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			e(message, `**${serverQueue.songs[0].title}**, has been resumed`);
			return;
	};
	} else if (command === 'repeat' || command === 'rpt') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return ee(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.songs.splice(1, 0, serverQueue.songs[0])
			e(message, `**${serverQueue.songs[0].title}**, Will be repeated`);
			return undefined;
		}
	} else if (command === 'loop' || command === 'lo') {
			if (!serverQueue) return err(message, `You Should Play Something To Use This Command.`);
			if (serverQueue && serverQueue.playing) {
				if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
				if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
				if (serverQueue.loop == false) {
					serverQueue.loop = true;
					e(message, `**${serverQueue.songs[0].title}**, will be looped`)
				} else if (serverQueue.loop == true) {
					serverQueue.loop = false;
					e(message, `**${serverQueue.songs[0].title}**, will not be looped again`)
				};
			}
		}
});


function play(guild, song, message) {
	setTimeout(function(){
		const serverQueue = queue.get(guild.id);
		if (!song) {
			serverQueue.voiceChannel.leave();
			serverQueue.voiceChannel.join();
			queue.delete(guild.id);
			var embed = new Discord.RichEmbed()
			embed.setColor(color.color)
			embed.setDescription(`:checkered_flag: **${message.guild.name}** Queue has been finished.`)
			serverQueue.textChannel.send(embed)
			return;
		};
		if (!serverQueue.songs[0]){
			serverQueue.voiceChannel.leave();
			serverQueue.voiceChannel.join();
			queue.delete(guild.id);
			return;
		};
		console.log(serverQueue.songs);
		serverQueue.vote = [];
		const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			if (serverQueue.loop == true) {
				play(guild, serverQueue.songs[0], message);
				return undefined;
			};
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0], message);
		})
		.on('error', error => console.error(error));
		dispatcher.setVolumeLogarithmic(serverQueue.volume / 250);
		var embed = new Discord.RichEmbed()
		embed.setColor(color.color);
		embed.setAuthor(`Now playing 🎶 ${serverQueue.songs[0].title}`)
		embed.setURL(serverQueue.songs[0].url)
		serverQueue.textChannel.send(embed)
	},10);
}
 
 

 

	  
	  



 
 


 
  
  



	   client.on("message", message => {
 if (message.content === "*help-bc") {
        message.react("📫")
	           message.react("✅")
  const embed = new Discord.RichEmbed() 
      .setColor("#8325c0")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
    اوامـــر البرودكاست
**
⤠ *bc1 ⥨ رسالة جماعية لجميع الاعضاء
⤠ *bc2 ⥨ رسالة جماعية للاونلاين فقط
⤠ *bc3 ⥨ رسالة جماعية للوفلاين فقط
⤠ *bcrole ⥨ رسالة جماعية لرتبة معينه
**
`)


message.author.sendEmbed(embed)



}
});

				


 client.on("message", message => {//bc1

            if (message.content.startsWith(prefix + "bc1")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on("message", message => {//bc2

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on("message", message => {//bc3

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m} \n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on('message' , message => {//bcrole
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + `By Server : ${message.guild.name}`
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});




client.on("message", message => {
  if (message.channel.type === "dm") { 

      message.channel.startTyping(); 
      setTimeout(() => {
        message.channel.stopTyping(); 
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  } 
}); 




var go9993 = [0] // عدد التصويتات
var wait = new Set() // 
var onn = 'off' // المتغير onn الي قيمته off
client.on("message", message => { // ذا لك عشان تفهمه
  let moment2 = require('moment-duration-format'), // بكج
 let  moment = require("moment"), // بكج
   date = moment.duration(new Date() - message.author.createdAt).format("d");

	if (message.content === '*vote') { // الامر
   
	 if (onn === 'off') return message.reply('التصويت مغلق حاليا') // اذا كان المتغير onn = 'off' مايسوي الامر ويقوله مايمدي
	 if(date < 6) return message.reply('لن يتم احتساب تصويتك `عضو وهمي`') // ماراح يتم احتساب تصويت العضو لانه اقل من 6 ايام
	  if (wait.has(message.author.id)) { // اذا الشخص موجود ب المتغير wait يكنسل العملية ويقول الي تحت
    return message.reply("**لايمكنك استخدام الامر مرة اخرى**").then(message => { // ؟؟؟؟
     message.delete(10000)  // يمسح الرسالة بعد 10 ثواني
    })
    }
    wait.add(message.author.id); // يضيف ايدي الاشخاص الي كتبو الامر الى المتغير wait
	 
		let room = message.guild.channels.find("name",'التصويتات')  // اسم الروم يمديك تغيره
		if (!room) return
		go9993++ // اضافة الرقم 1 للجدول
		message.reply('شكرا على تصويتك')
	room.send(`عدد التصويتات الان = `${go9993}` `) // يرسل عدد التصويتات بالروم المحدد
		


	}});
	client.on("message", message => {
		if (!devs12.includes(message.author.id)) return; 
		if (message.content.startsWith('*clearvotes')) { // الامر
			go9993 = [0] // تصفير ال votes
			message.reply(`**Thats Done, Votes Now =  `${go9993}` **`)
			wait = new Set() // تصفير الاعضاء المصوتين عشان يمديهم يصوتون مرة ثانية اذا ماتبيهم يصوتون مرة ثانية احذف ذا السطر
		}});
	client.on("message", message => {	
	if (message.content.startsWith('*startvotes')) { // الامر
	if (onn == 'on') return message.reply('التصويت مفتوح من قبل') // اذا كان التصويت مفتوح يقوله مفتوح من قبل
	if (!devs12.includes(message.author.id)) return message.reply('لايمكنك فعل ذلك') 
		onn = 'on' // يخلي المتغير onn = 'on'
		message.reply('Thats Done,') // يرد على الشخص بمنشن يقوله تم
		}});
	client.on("message", message => {
	if (message.content.startsWith('*stopvotes')) { // الامر
	if (!devs12.includes(message.author.id)) return message.reply('لايمكنك فعل ذلك')
		if (onn == 'off') return message.reply('التصويت مغلوق من قبل') // اذا كان التصويت مغلق يقوله هو مغلق من قبل
		message.reply('Thats Done,') //يقوله تم
		onn = 'off' // يخلي المتغير onn = 'off'
		}});
	client.on("message", message => {	
	if (message.content.startsWith('*votes')) { // الامر
		console.log(go9993) // يكتب عدد التصويتات بالكونسل
		message.channel.send('عدد التصويتات : ' + go9993) // يكتب عدد التصويتات بالشات 
	}});




client.on('message', async message => {
    if (!message.guild) return;
    if (!account[message.author.id]) {
        account[message.author.id] = {
            reg: false,
            name: 'nothing'
        };
    }
    if (message.content === `${prefix}register`) {
        if (account[message.author.id].reg === true) return message.channel.send('❌ | لديك حساب مٌسجل بالفعل...');
        if (message.author.bot) return;
        const args = message.content.split(' ').slice(prefix.length);
        if (!args[0]) return message.channel.send('❌ | أدخل إسم للتسجيل به.');
        if (args[0]) {
            account[message.author.id].reg = true;
            account[message.author.id].name = args;
            await saveChanges();
            message.channel.send('تم تسجيل الحساب !!');
        }
    } else if (message.content === `${prefix}ping`) {
        if (account[message.author.id].reg === false) return message.channel.send('❌ | يجب أن تكون مٌسجل لإستخدام هذا الأمر');
        message.channel.send('PONG');
    }
});

function saveChanges() {
    return fs.writeFile('./account.json', JSON.stringify(account), error => {
        if (error) console.log(error);
    });
}







client.login(process.env.BOT_TOKEN);
