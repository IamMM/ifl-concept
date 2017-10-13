function setIframeHeight(id) {
    var iframe = document.getElementById(id);
	if (iframe) {
		var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
		if (iframeWin.document.body) {
			iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
		}
	}
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});