var fs = require('fs'),
	modules = [],
	dir = './src/app/storymaps/';

if ( process.argv.length != 4 ) {
	console.error("Need two arguments: filepath with the list of source file ; output file");
	return;
}
	
var modulesPath = fs.readFileSync(process.argv[2]).toString().split("\n");
for(modulePath in modulesPath) {
	//console.log(modulesPath[modulePath]);
	if ( modulesPath[modulePath].match(/text!/) )
		continue;
	
	var lines = fs.readFileSync(modulesPath[modulePath]).toString().split("\n");
	for(l in lines) {
		if ( lines[l].match(/\"(esri|dojo|dijit|dgrid|put\-selector)\//) ) {
			//console.log(lines[l]);
			var requireStrSplit = lines[l].trim().match(/\"([a-zA-Z0-9\_\/\-]+)\"/);
			if ( requireStrSplit && requireStrSplit.length == 2 ) {
				modules.push(requireStrSplit[1]);
				//console.log( requireStrSplit[1] );
			}
		}
	}
}

//console.log(modules.length);
modules = modules.filter(function (value, index, self) { 
	return self.indexOf(value) === index;
});

//console.log(modules.length);
//console.log(modules.join('\r\n'));

fs.writeFile(process.argv[3], modules.join('\r\n'), function(err) {
	if(err) console.log(err);
});