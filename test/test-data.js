// global, for html page
ele = require("../ele-tool.js");

module.exports = {

	"ele()": function (done) {
		return ele('divResult') === document.getElementById('divResult') &&
			ele(document.getElementById('divResult')) === document.getElementById('divResult');
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
