let fwidth = 500
let fheight = 300
let fthick = 200
let saver = 0

let pwidth = 0
let pheight = 0
let pthick = 0

let bgColor = 0
let paperColor = 255
let cutLine = 30
let interfaceText = 1
let frontBox, topBox, leftBox, rightBox,
	backBox, bottomBox

function setup() {
	let cnv = createCanvas(1000, 1461);
	cnv.parent('package');
	background(255)

	interface()
	fakeData()
	interfaceValue()
	boxAdap()
	gluerAdap()
	pointer()
}

function draw() {
	pointer()

	if (saver == 1) {
		pixelDensity(5);
		frontBox.pixelDensity(5);
		topBox.pixelDensity(5);
		leftBox.pixelDensity(5);
		rightBox.pixelDensity(5);
		backBox.pixelDensity(5);
		bottomBox.pixelDensity(5);
		background(bgColor)
		paperColor = bgColor
		interfaceText = 0
		translate(0, 0)
		scale(1)
	} else {
		pixelDensity(2);
		frontBox.pixelDensity(2);
		topBox.pixelDensity(2);
		leftBox.pixelDensity(2);
		rightBox.pixelDensity(2);
		backBox.pixelDensity(2);
		bottomBox.pixelDensity(2);
		paperColor = 255
		background(paperColor)
		interfaceText = 1
		translate(200, 0)
		scale(0.8)
	}

	interfaceValue()

	// let scaler = 1
	// translate(0, -100)
	let scaler = 1
	translate(0, -250)

	if (pwidth != fwidth || pheight != fheight || pthick != fthick) {
		boxAdap()
		gluerAdap()

		pwidth = fwidth
		pheight = fheight
		pthick = fthick
	}

	// 	adaption
	frontAdap()
	topAdap()
	leftAdap()
	rightAdap()
	backAdap()
	bottomAdap()
	glueDraw()

	if (saver == 1) {
		save(name.replace(' ', '-')+'_'+document.getElementById("width").value+'x'+document.getElementById("height").value+
		'x'+document.getElementById("thick").value+'-inches.jpg');
	}

	saver = 0
}