
// ele-tool @ npm, enclose document.getElementById().

module.exports = function (idOrEl) { return (typeof idOrEl === "string") ? document.getElementById(idOrEl) : idOrEl; }
