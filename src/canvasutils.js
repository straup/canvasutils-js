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