function bottomBox_draw() {
	// 	back
	bottomBox.background(bgColor)
	bottomBox.stroke(cutLine)
	bottomBox.strokeWeight(1)
	bottomBox.fill(bgColor)
	bottomBox.rect(0, 0, bottomBox.width, bottomBox.height)
	// 	text
	bottomBox.push()
	bottomBox.translate(bottomBox.width / 2, bottomBox.height / 2)
	bottomBox.rotate(PI)
	bottomBox.scale(1, 1)

	bottomBox.translate(-bottomBox.width / 2, -bottomBox.height / 2)

	bottomBox.textAlign(CENTER, CENTER);
	bottomBox.textSize(50)
	bottomBox.scale(1, 1)
	// bottomBox.text('back', bottomBox.width / 2, bottomBox.height / 2)

	bottomBox.push()
	bottomBox.translate(-rightBox.width, 0)
	bottomBox.curveTightness(0);
	for (let i = 0; i < ingred.length; i++) {
		bdrawLayers(name, i);
	}
	brocky()
	bcutMountain()

	bottomBox.pop()

	// 	size and other stuffs
	let label = '1.800.831.3088 (U.S. and Canada)\n30 ml / 1 fl. oz.'
	let Manufacture = 'Manufactured in the USA for Layers, LLC, New York, WA 98104, Distributed in EU by Layers TC New York B.V., Amersfoort, NL.'
	let Directions = 'Directions: Once or twice daily, apply over face and neck. Do not rinse. For daytime, always, follow with a sunscreen.'
	let Precautions = 'Precautions: For external use only. Avoid contact with eyes. If contact occurs, rinse eyes thoroughly with water. If you experience irritation, rinse from skin and discountinue use. Keep out of reach of children. If swallowed, seek medical attention.'

	bottomBox.fill(255)
	bottomBox.noStroke()
	bottomBox.textAlign(LEFT, CENTER);
	bottomBox.textFont(reader);
	bottomBox.textSize(5)
	bottomBox.textWrap(WORD);
	bottomBox.text(Manufacture + '\n\n' + label, bottomBox.width - 80, bottomBox.height - 100, 70)

	bottomBox.textAlign(LEFT, CENTER);
	bottomBox.noStroke()
	bottomBox.textFont(reader);
	bottomBox.textWrap(WORD);
	bottomBox.textSize(7)
	bottomBox.text(Directions + '\n\n' + Precautions, 10, 10, 100)
	barCode()

	// bottomBox.text('bottom', bottomBox.width / 2, bottomBox.height / 2)

	// bottomBox.stroke(50)
	// bottomBox.line(0, 0, bottomBox.width, bottomBox.height)
	// bottomBox.line(bottomBox.width, 0, 0, bottomBox.height)
	bottomBox.pop()
}

function barCode() {
	bottomBox.image(bar, bottomBox.width - 80, bottomBox.height - 10 - 25, 70, 22);
}


function bdrawLayers(name, j) {
	let n = name.length
	let lefter = rightBox.width * 1.5
	let xBreaks = (lefter) / n
	let yBreaks = rightBox.height / 2
	let amp = 1
	let vr = 20
	let drop = 20
	let down = bottomBox.height / 12

	bottomBox.push()
	bottomBox.translate(0, yBreaks * dataProp[j] + down)
	bottomBox.noFill()
	bottomBox.strokeWeight(50)
	bottomBox.stroke(layerColor[j])
	bottomBox.beginShape()
	bottomBox.vertex(0, 0);
	for (let i = 0; i < name.length; i++) {
		let number = name[i].charCodeAt() - 96
		bottomBox.curveVertex(xBreaks * i, number * (amp) + i * vr);
	}
	bottomBox.vertex(bottomBox.width, bottomBox.height);
	bottomBox.vertex(bottomBox.width, bottomBox.height);
	bottomBox.endShape()
	bottomBox.pop()
}

function brocky() {
	bottomBox.push()
	bottomBox.blendMode(OVERLAY)
	bottomBox.scale(0.8, 0.8)
	bottomBox.image(img, 0, 0);
	bottomBox.pop()
}

function cutter() {
	bottomBox.fill(30)
	bottomBox.noStroke()
	let sum = 0
	for (let i = 0; i < name.length; i++) {
		bottomBox.fill(layerColor[i])
		bottomBox.rect(sum, bottomBox.height / 2, data[i] * bottomBox.width * 2.1, 2);
		sum += data[i] * bottomBox.width * 2.1
	}
}

function bcutMountain() {
	let n = name.length
	let xBreaks = rightBox.width / n * 1.5

	bottomBox.fill(bgColor)
	bottomBox.stroke(bgColor)
	bottomBox.beginShape()

	bottomBox.vertex(0, 0)
	for (let i = 0; i < name.length; i++) {
		let number = name[i].charCodeAt() - 96
		bottomBox.curveVertex(xBreaks * i, number + i * rightBox.height / (n + 2));
	}
	bottomBox.vertex(rightBox.width * 2, rightBox.height);
	bottomBox.vertex(rightBox.width * 2, 0);
	bottomBox.endShape(CLOSE)
}