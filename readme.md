# Uptimer 🚀

## What's this? 💯

Yo, this is a lit web service that keeps ya websites up and running 24/7! No cap, it sends requests to your sites so they don't fall asleep. Perfect for those free hosting services that go idle after inactivity. 🚀🔥

## How to Fly This Attack Helicopter 🚁🔥

### Installation

```bash
npm install
npm start
```

Server runs on port 3000 by default. You can change it with the PORT environment variable.

### Endpoints

#### Keep a site online forever ♾️
```
GET /add/example.com
```
Adds example.com to the permanent uptime list. The service will ping it every 2 minutes. 

#### Stop monitoring a site 🛑
```
GET /remove/example.com
```
Removes example.com from the monitoring list.

#### Temporary monitoring ⏱️
```
GET /time/example.com/50000
```
Keeps example.com up for 50000 milliseconds (that's 50 seconds, bestie).

#### See what's being monitored 👀
```
GET /db
```
Shows all the websites currently being monitored. 

## Features ✨

- 🔄 Pings sites every 2 minutes
- ⏰ Both permanent and temporary monitoring options
- 💾 Persistent storage with KubitDB
- 🌐 Simple web interface to check monitored sites

This service is built using Express.js and [KubitDB](https://github.com/DeveloperKubilay/kubitdb) for persistence.

---

Made with ❤️ by DeveloperKubilay