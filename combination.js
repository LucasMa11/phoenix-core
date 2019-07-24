var fs = require('fs');
var path = require('path');

const { exec } = require('child_process');
var betaPath = path.join(__dirname, "phoenix-core/src/app/beta/SA-feature");
var prodPath = path.join(__dirname, "phoenix-core/src/app/prod/SA-feature");
if(fs.existsSync(betaPath) == false || fs.existsSync(prodPath) == false){
	exec("git clone https://github.com/LucasMa11/SA-feature.git", {cwd: './phoenix-core/src/app/beta/'});
	exec("git clone https://github.com/LucasMa11/SA-feature.git", {cwd: './phoenix-core/src/app/prod/'});
	console.log("git clone finished")
} else {
	exec("git pull", {cwd: './phoenix-core/src/app/beta/SA-feature/'});
	exec("git pull", {cwd: './phoenix-core/src/app/prod/SA-feature/'});
	console.log("git pull finished")
}
exec("git checkout develop", {cwd:'./phoenix-core/src/app/beta/SA-feature/'});
console.log("checkout to beta version branch");
// console.log("wait for npm");
// exec("npm i", {cwd:'./phoenix-core/'});
// console.log("npm i done")
exec("ng s --o",{cwd: '../phoenix-core/phoenix-core/'} , function(err,stdout,stderr){
	if(err) {
		console.log('ng serve error:'+stderr);
	} else {
		console.log('ng serve success'+stdout);
	}
});



