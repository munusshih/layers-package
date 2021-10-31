let name = "tee topor"
let inp
let inch = 76.9
let p1, p2, p3

function interface() {
	let offy = 50
}

function download() {
	saver = 1;
}

function interfaceValue() {
	fwidth = int(document.getElementById("width").value * inch);
	fheight = int(document.getElementById("height").value * inch);
	fthick = int(document.getElementById("thick").value * inch);

	let cwidth = select('#cwidth');
	let cheight = select('#cheight');
	let cthick = select('#cthick');
	let colorText = select('#bgColor');


	document.getElementById("download").addEventListener("click", function () {
		saver = 1
	})

	name = document.getElementById("fname").value.toLowerCase();;
	if (!name) {
		name = "Under Layers".toLowerCase();
	}

	version = document.getElementById("version").value;
	if (!version) {
		version = "1";
	}

	product = document.getElementById("fproduct").value.toUpperCase();;
	if (!product) {
		product = "NOURISH + HYDRATE SKIN OIL".toUpperCase();
	}

	bgColor = document.getElementById("head").value
	cutLine = [hexToRgb(bgColor).r+25, hexToRgb(bgColor).g+25, hexToRgb(bgColor).b+25]


	if (interfaceText) {
		fill(0)

		colorText.html(bgColor);
		cwidth.html(document.getElementById("width").value + ' inches');
		cheight.html(document.getElementById("height").value + ' inches');
		cthick.html(document.getElementById("thick").value + ' inches');

	}
}

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

// function nameInputEvent() {
// 	name = this.value().toLowerCase();
// }