// http://decodebase64.com/

base64 = function(){

    var b64 = {};

    var b64array = "ABCDEFGHIJKLMNOP" +
        "QRSTUVWXYZabcdef" +
        "ghijklmnopqrstuv" +
        "wxyz0123456789+/" +
        "=";

    b64.decode = function(input){

	var output = "";
	var hex = "";
	var chr1, chr2, chr3 = "";
	var enc1, enc2, enc3, enc4 = "";
	var i = 0;

	var base64test = /[^A-Za-z0-9\+\/\=]/g;

	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	do {
	    enc1 = b64array.indexOf(input.charAt(i++));
	    enc2 = b64array.indexOf(input.charAt(i++));
	    enc3 = b64array.indexOf(input.charAt(i++));
	    enc4 = b64array.indexOf(input.charAt(i++));
        
	    chr1 = (enc1 << 2) | (enc2 >> 4);
	    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	    chr3 = ((enc3 & 3) << 6) | enc4;
        
	    output = output + String.fromCharCode(chr1);
            
	    if (enc3 != 64) {
		output = output + String.fromCharCode(chr2);
	    }

	    if (enc4 != 64) {
		output = output + String.fromCharCode(chr3);
	    }
    
	    chr1 = chr2 = chr3 = "";
	    enc1 = enc2 = enc3 = enc4 = "";
	    
	} while (i < input.length);

	return output;
    };

    return b64;
};

canvasutils = function(){

    var b64 = base64();
    var cu = {};

    cu.canvas2bytes = function(canvas){

	if (canvas.toDataURL === undefined){
	    canvas = document.getElementById(canvas);
	}

	var strDataURI = canvas.toDataURL();
	var enc = strDataURI.replace("data:image/png;base64,", "");

	return b64.decode(enc);
    };

    return cu;
};