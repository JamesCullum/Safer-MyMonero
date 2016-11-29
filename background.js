chrome.browserAction.onClicked.addListener(function(tab) {
	window.open("application.html#/");
});

chrome.runtime.onInstalled.addListener(function(details){
    window.open("application.html#/security");
});

var ownHost = "chrome-extension://"+chrome.runtime.id, ownHostLength = ownHost.length;
chrome.webRequest.onBeforeRequest.addListener(function(details) {
	if(details.url.substr(0,ownHostLength)==ownHost) return;
	
	if(details.url.match(/^.+?:\/\/mymonero\.com/i)) {
		console.warn("redirect to extension: "+details.url);
		return {redirectUrl:ownHost+"/application.html#/"}; // redirect to extension when browsing to the normal page
	}
	if(details.url.substr(0,5)!="https") {
		console.error("not https: "+details.url);
		return {cancel:true}; // only https
	}
	if(details.url.substr(0,30)=="https://api.mymonero.com:8443/") {
		var whitelist = ["login","get_address_info","get_address_txs","get_unspent_outs","submit_raw_tx","get_random_outs","get_txt_records"];
		var path = details.url.match(/https:\/\/api\.mymonero.com:8443\/(.+)/i);
		if(!path || whitelist.indexOf(path[1])==-1) {
			console.error("not whitelisted: "+path[1]);
			return {cancel:true}; 
		}
	}
},{urls: ["<all_urls>"]},["blocking"]);