var cs = [];
for (var id in ___grecaptcha_cfg.clients){
	cs.push(id);
}
cs.forEach(cid => {
	for (var p in ___grecaptcha_cfg.clients[cid]) {
		var path = "___grecaptcha_cfg.clients["+cid+"]."+p;
		var pp = eval(path);
		if (typeof pp === 'object') {
			for (var s in pp) {
				var subpath = "___grecaptcha_cfg.clients["+cid+"]."+p+"."+s;
				var sp = eval(subpath);
				if ( sp && typeof sp === 'object' && sp.hasOwnProperty('sitekey') && sp.hasOwnProperty('size') ){
//					console.log(sp);
					console.log('Path: ' + subpath);
					console.log('Sitekey: ' + eval(subpath+'.sitekey'));
					if ( eval(subpath+'.callback') == null ) {
						console.log('no callback');
						}
					else {
						console.log('Callback: ' + subpath+'.callback' + '\nFunction name: ' + eval(subpath + '.callback') + '\nFunction definition: ' + eval(eval(subpath + '.callback')));
					}
				} 
			}
		}

	}
});
