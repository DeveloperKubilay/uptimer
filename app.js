const fetch = require("axios")
const kubitdb = require("kubitdb")
const db = new kubitdb("data")
const express = require("express")
const app = express();
app.listen(process.env.PORT || 3001);
app.get('/', function (req, res) {res.send('Uptimer')})
console.log("Uptime ready")
var time = 0
if(!db.get("time")) db.set("time",[])
if(!db.get("uptime")) db.set("uptime",[])
setInterval(() => {
    time = Date.now();
    db.get("uptime").map(x =>{fetch.get("https://"+x).catch((e)=>{})})
    db.get("time").map(x=>{if(x.time < time){
    db.set("time",db.get("time").filter((z)=> z.url != x.url))
    }else {fetch.get("https://"+x.url).catch((e)=>{})}})
},120000)
app.use(`/add/:user`, function(req, res) {
db.set("uptime",db.get("uptime").filter((z)=> z != req.params.user))
db.push("uptime",req.params.user)
res.end()
});
app.use(`/remove/:user`, function(req, res) {
db.set("uptime",db.get("uptime").filter((z)=> z != req.params.user))
res.end()
});
app.use(`/time/:user/:time`, function(req, res) {
db.set("time",db.get("time").filter((z)=> z.url != req.params.user))
db.push("time",{url:req.params.user, time:Date.now()+Number(req.params.time)})
res.end()
});
//example: http://localhost:3000/time/example.com/50000
