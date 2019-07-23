var fs = require('fs');
var path = require('path');

const { exec } = require('child_process');
var destPath = path.join(__dirname, "phoenix-core/src/app/SA-feature");
if(fs.existsSync(destPath) == false){
    exec("git clone https://github.com/LucasMa11/SA-feature.git", {cwd: './phoenix-core/src/app/'} , function(err,stderr){
	if(err) {
		console.log('git clone error:' + stderr);
	} 
    });
} else {
    exec("git pull", {cwd: './phoenix-core/src/app/SA-feature/'} , function(err,stderr){
	if(err) {
		console.log('git pull error:' + stderr);
	} 
    });
}
exec("ng s --o",{cwd: '../phoenix-core/phoenix-core/'} , function(err,stdout,stderr){
	if(err) {
		console.log('error:'+stderr);
	} else {
		console.log('success'+stdout);
	}
});



