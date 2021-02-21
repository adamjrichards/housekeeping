// JavaScript LinkObject

function LinkObject( href, rel, type, charset, media, rev, name, id, className ) {
	this.href = href;
	this.rel = rel;
	this.type = type;
	this.charset = charset;
	this.media = media;
	this.rev = rev;
	this.name = name;
	this.id = id;
	this.className = className;
	this.link = document.createElement( "link" );
	if ( this.href != null ) this.link.setAttribute( "href", this.href );
	if ( this.rel != null ) this.link.setAttribute( "rel", this.rel );
	if ( this.type != null ) this.link.setAttribute( "type", this.type );
	if ( this.charset != null ) this.link.setAttribute( "charset", this.charset );
	if ( this.media != null ) this.link.setAttribute( "media", this.media );
	if ( this.rev != null ) this.link.setAttribute( "rev", this.rev );
	if ( this.name != null ) this.link.setAttribute( "name", this.name );
	if ( this.id != null ) this.link.setAttribute( "id", this.id );
	if ( this.className != null ) this.link.setAttribute( "className", this.className );
	this.link.setAttribute( "download", "download" );
	if ( this.type == null ) {
		this.type = this.determineMimeType();
		this.link.setAttribute( "type", this.type );
	} // if
	if ( this.charset == null ) {
		determineCharset();
	} // if
	if ( this.media == null ) {
		determineMedia();
	} // if
	document.getElementsByTagName( "head" ).item(0).appendChild( this.link );
} // LinkObject constructor

LinkObject.prototype.determineRel = function() {
	var rel;
	switch ( this.type ) {
		case "text/css":
			rel = "stylesheet";
			break;
		case "text/html":
		case "text/xml":
		case "text/javascript":
		case "text/plain":
			rel = "alternate";
			break;
		case "image/x-icon":
			rel = "icon";
			break;
		default:
			rel = "prefetch";
	} // switch
	return rel;
} // LinkObject.prototype.determineCharset()

LinkObject.prototype.determineMimeType = function() {
	var mimeType;
	var fileExtension = href.substring( href.lastIndexOf( "." ), href.length );
	switch( fileExtension ) {
		case "html":
			mimeType = "text/html";
			break;
		case "xml":
			mimeType = "text/xml";
			break;
		case "txt":
			mimeType = "text/plain";
			break;
		case "php":
			mimeType = "text/html";
			break;
		case "css":
			mimeType = "text/css";
			break;
		case "js":
			mimeType = "text/javascript";
			break;
		case "svg":
			mimeType = "text/svg+xml";
			break;
		case "jpg":
			mimeType = "image/jpeg";
			break;
		case "png":
			mimeType = "image/png";
			break;
		case "gif":
			mimeType = "image/gif";
			break;
		case "ico":
			mimeType = "image/x-icon";
			break;
		case "pdf":
			mimeType = "application/pdf";
			break;
		case "swf":
			mimeType = "application/x-shockwave-flash";
			break;
		case "flv":
			mimeType = "video/x-flv";
			break;
		case "wmv":
			mimeType = "video/x-ms-wmv";
			break;
		case "mp3":
			mimeType = "audio/mpeg3";
			break;
		case "mpg":
			mimeType = "video/mpeg";
			break;
		case "mp4":
			mimeType = "video/mp4";
			break;
		case "jar":
			mimeType = "application/java-archive";
			break;
		default:
			mimeType = "text/plain";
	} // switch
	return mimeType;
} // LinkObject.prototype.determineMediaType()

LinkObject.prototype.determineCharset = function() {
	var charset = "UTF-8";
	return charset;
} // LinkObject.prototype.determineCharset()
LinkObject.prototype.determineMedia = function() {
	var media = "screen";
	return media;
} // LinkObject.prototype.determineMedia()
LinkObject.prototype.determineRev = function() {
	var rev = "prev";
	return rev;
} // LinkObject.prototype.determineRev()