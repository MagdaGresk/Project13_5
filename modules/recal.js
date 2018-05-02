var os = require('os')
process.stdin.setEncoding('utf8')

function getUptime(){
	var uptime = os.uptime()
	var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor(uptime % 3600 / 60);
    var seconds = Math.floor(uptime % 3600 % 60);
	console.log('Uptime: ' +  hours + " h " + minutes + " min " + seconds + " sec")
}

exports.getUptime = getUptime