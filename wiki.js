function wiki(str) {

	var headerPattern1 = /^= *([^= ]*) *=$/;
    var headerPattern1 = new RegExp("^= *([^= ]*) *=$/");

	if ( headerPattern1 .test(str) ){
		return str.replace(headerPattern1, "<h1>$1</h1>");
	}

	str = str.replace(/¥=/g, "=");

	return str;
}
