// not using this atm
function windowOpenOpts(){
	var options = {};
	options.toolbar = 0;
	options.titlebar=1;
	options.location=0;
	options.status=0;
	options.directories=0;
	options.menubar=0;
	options.scrollbars=1;
	options.resizable=0;
	options.fullscreen="yes";
	////////////////////
	//window scale///////////////////////////////////
	options.width=screen.width > 700 ? 700 : screen.width;
	options.height=screen.height > 400 ? 400 : screen.height;

	// these depend on browser detection. let's default to 25
	options.height -= 25;
	/*
	if(wconf.webSettings.browser=="Chrome"){
		options.height-=20;
	}else if(wconf.webSettings.browser=="IE11"){
		options.height-=30;
	}else if(wconf.webSettings.browser=="Firefox"){
		options.height-=35;
	}
	*/
	///////////////////
	options.left=window.screenX;
	options.top=0;
	var opts = new Array();
	for(var option in options) {
		opts.push(option+'='+options[option]);
	}
	opts = opts.join();
	return opts;
}
function donate(){
	//var opts = windowOpenOpts();
	//var w = window.open("https://rotf.io/purchase.html", "Purchase", opts);
	//w.focus();
}
