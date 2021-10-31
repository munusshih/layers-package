function rightBox_draw() {
	
	rightBox.curveTightness(0);
	rightBox.background(bgColor)
	for (let i = 0; i < ingred.length; i++) {
		drawLayers(name, i);
	}
	rocky()
	cutMountain()
	// cutter()
	
}

function drawLayers(name, j) {
	let n = name.length
	let lefter = rightBox.width *1.5
	let xBreaks = (lefter) / n
	let yBreaks = rightBox.height / 2
	let amp = 1
	let vr = 20
	let drop = 20
	let down = rightBox.height/12
	
	rightBox.push()
	rightBox.translate(0, yBreaks * dataProp[j] + down)
	rightBox.noFill()
	rightBox.strokeWeight(50)
	rightBox.stroke(layerColor[j])
	rightBox.beginShape()
	rightBox.vertex(0, 0);
	for (let i = 0; i < name.length; i++) {
		let number = name[i].charCodeAt() - 96
		rightBox.curveVertex(xBreaks * i, number * (amp) + i * vr);
	}
	rightBox.vertex(rightBox.width, rightBox.height);
	rightBox.vertex(rightBox.width, rightBox.height);
	rightBox.endShape()
	rightBox.pop()
}

function rocky() {
	rightBox.push()
	rightBox.blendMode(OVERLAY)
	rightBox.scale(0.8, 0.8)
	rightBox.image(img, 0, 0);
	rightBox.pop()
}

function cutter(){
	rightBox.fill(30)
	rightBox.noStroke()
	let sum = 0
	for (let i = 0; i < name.length; i++) {
		rightBox.fill(layerColor[i])
		rightBox.rect(sum, rightBox.height/2, data[i]*rightBox.width*2.1, 2);
		sum+=data[i]*rightBox.width*2.1
	}
}

function cutMountain() {
	let n = name.length
	let xBreaks = rightBox.width / n *1.5
	
	rightBox.fill(bgColor)
	rightBox.stroke(bgColor)
	rightBox.beginShape()
	rightBox.vertex(0, 0)
	for (let i = 0; i < name.length; i++) {
		let number = name[i].charCodeAt() - 96
		rightBox.curveVertex(xBreaks * i, number + i* rightBox.height/(n+2));
	}
	rightBox.vertex(rightBox.width*2, rightBox.height); 
	rightBox.vertex(rightBox.width*2, 0);
	rightBox.endShape(CLOSE)
}