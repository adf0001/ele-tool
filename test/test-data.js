
//global variable, for html page, refer tpsvr @ npm.
ele_tool = require("../ele-tool.js");

module.exports = {

	"ele_tool()": function (done) {
		return ele_tool('divResult') === document.getElementById('divResult') &&
			ele_tool(document.getElementById('divResult')) === document.getElementById('divResult');
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('ele_tool', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
