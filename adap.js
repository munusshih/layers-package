function frontAdap() {

	frontBox_draw()
	image(frontBox, (width - fwidth) / 2, (height - fheight) / 2 + fthick)
}

function topAdap() {

	topBox_draw()
	image(topBox, (width - fwidth) / 2, (height - fheight) / 2)
}

function leftAdap() {

	leftBox_draw()
	image(leftBox, (width - fwidth) / 2 - fheight, (height - fheight) / 2)
}

function rightAdap() {

	rightBox_draw()
	image(rightBox, (width - fwidth) / 2 + fwidth, (height - fheight) / 2)
}

function backAdap() {

	backBox_draw()
	image(backBox, (width - fwidth) / 2, (height - fheight) / 2 - fheight)
}

function bottomAdap() {

	bottomBox_draw()
	image(bottomBox, (width - fwidth) / 2, (height - fheight) / 2 + fthick + fheight)
}

function boxAdap() {
	if (frontBox) {
		frontBox.remove();
		frontBox = null;
	}
	frontBox = createGraphics(fwidth, fheight)
	if (topBox) {
		topBox.remove();
		topBox = null;
	}
	topBox = createGraphics(fwidth, fthick)
	if (leftBox) {
		leftBox.remove();
		leftBox = null;
	}
	leftBox = createGraphics(fheight, fthick)
	if (rightBox) {
		rightBox.remove();
		rightBox = null;
	}
	rightBox = createGraphics(fheight, fthick)
	if (backBox) {
		backBox.remove();
		backBox = null;
	}
	backBox = createGraphics(fwidth, fheight)
	if (bottomBox) {
		bottomBox.remove();
		bottomBox = null;
	}
	bottomBox = createGraphics(fwidth, fthick)

}