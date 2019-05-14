var module_current = 'legend';

function loadJSON(path, callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("./application/json");
	xobj.open('GET', path, true);
	xobj.onreadystatechange = function() {
		if (xobj.readyState === 4 && xobj.status === "200") {
			// Required use of an anonymous callback 
			// as .open() will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}

function loadModule() {
	/* loadJSON("content/modules.json", function(response) {
        console.log(response);
    }); */
	$.ajax({
		url: "content/modules.json",
		success: function(response) {
			console.log(response);
		},
		dataType: "jsonp",
		xhrFields: { 
			withCredentials: false
		}
	});
}

loadModule(module_current);
