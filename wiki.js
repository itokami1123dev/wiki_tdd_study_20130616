function wiki(str) {
	var headerPattern1 = /^= *([^= ]*) *=$/;
	if ( headerPattern1 .test(str) ){
		return str.replace(headerPattern1, "<h1>$1</h1>");
	}
	return str;
}
