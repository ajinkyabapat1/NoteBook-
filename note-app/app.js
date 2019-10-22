const fs=require('fs');
fs.writeFileSync("notes.txt","This file by created by ajinkya using Node.js");
fs.appendFileSync("notes.txt"," I have started exploring node.js from today");