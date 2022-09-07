import EventEmitter from 'events'; 

const myEmitter = new EventEmitter(); 

myEmitter.once('uebung', (nachricht) => console.log(nachricht))

myEmitter.emit('uebung', 'm133')