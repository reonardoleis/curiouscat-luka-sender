const curiousnode = require('curiousnode');
const api = new curiousnode();
const messages = [' Eae cupinxa ', ' bora makaha? ', ' bora makahinha? ', ' daqui fala renato... ', ' bora um futmesa? ', ' topa um kit? ', ' vai de bus pro planeta?', ' vai no baile da gaiola? ', ' findi ats? ', ' bora um agito esse fds ', ' pprt ', ' eh us guri ', ' ê rere qvs '];

function sortMessage(messages){
	var messageToSend = "";
	messageToSend += messages[Math.floor(Math.random()*messages.length)];
	messageToSend += messages[Math.floor(Math.random()*messages.length)];
	return messageToSend;
}
api.send('3977350', sortMessage(messages));
console.log("ENVIADA 1");
setInterval(function(){
	api.send('3977350', sortMessage(messages));
	console.log("Enviada");
}, 1000 * 60 * 10);
