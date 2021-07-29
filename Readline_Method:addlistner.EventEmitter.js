const readline = require('readline');
const events = require ('events');

const myEmitter = new events.EventEmitter();

var names  = ['John','Liber','Harry']
myEmitter.addListener('my',()=>{
    for(let i = 0; i < names.length;  i++){
        console.log(i+":"+names[i]);
    }
    console.log("All Name List!")
}) 
setTimeout(()=>{
    myEmitter.emit('my');
},3000)
