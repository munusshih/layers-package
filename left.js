function leftBox_draw() {
	leftBox.push()

	leftBox.translate(leftBox.width / 2, leftBox.height / 2)
	leftBox.rotate(PI / 2)
	leftBox.translate(-leftBox.width / 2, -leftBox.height / 2)

	let ofX = (leftBox.width - leftBox.height) / 2
	let ofY = (leftBox.height - leftBox.width) / 2

	// 	background
	leftBox.background(bgColor)
	leftBox.fill(bgColor)
	leftBox.noStroke()
	// 	text
	leftBox.textAlign(CENTER, CENTER);
	leftBox.textSize(50)

	leftBox.stroke(cutLine)
	leftBox.strokeWeight(1)
	// 	starting point
	// leftBox.circle(ofX, ofY, 20)

// 	pattern
	
	
	let sum = 0
	let leftBoxPadding = 10
	let lineWidthRatio = 0 * (leftBox.height - leftBoxPadding * 2)
	leftBox.strokeWeight(1)
	leftBox.stroke(255)
	leftBox.line(ofX + leftBoxPadding + lineWidthRatio, ofY + leftBoxPadding, ofX + leftBox.height - leftBoxPadding, ofY + leftBoxPadding)

	
	leftBox.fill(255)
	leftBox.noStroke()
	leftBox.textSize(7)
	leftBox.textAlign(RIGHT, CENTER)
	leftBox.text(name+ "'s ingredients  (%)", ofX + leftBox.height - leftBoxPadding - 5,
		ofY + 20)

	for (let i = 0; i < ingred.length; i++) {
		let lineDist = (leftBox.width - leftBoxPadding * 4) * i / ingred.length + leftBoxPadding * 2
		leftBox.stroke(255)
		leftBox.line(ofX + leftBoxPadding + lineWidthRatio, ofY + leftBoxPadding + lineDist,
			ofX + leftBox.height - leftBoxPadding, ofY + leftBoxPadding + lineDist)
		leftBox.fill(layerColor[i])
		leftBox.noStroke()
		leftBox.circle(ofX + leftBox.height - leftBoxPadding - 7,
			ofY + lineDist + 18, 5)
		leftBox.fill(255)
		leftBox.noStroke()
		leftBox.textSize(4)
		leftBox.textAlign(RIGHT, CENTER)
		leftBox.text(ingred[i], ofX + leftBox.height - leftBoxPadding - 15,
			ofY + lineDist + 18)
		leftBox.textAlign(LEFT, CENTER)
		leftBox.textSize(6)
		leftBox.text(int(data[i] * 100) + ' %', ofX + leftBoxPadding + 5,
			ofY + lineDist + 18)
	}

	leftBox.stroke(255)
	leftBox.line(ofX + leftBoxPadding + lineWidthRatio, ofY + leftBoxPadding,
		ofX + leftBoxPadding + lineWidthRatio, ofY + (leftBox.width - leftBoxPadding))
	leftBox.line(ofX + leftBox.height - leftBoxPadding, ofY + leftBoxPadding,
		ofX + leftBox.height - leftBoxPadding, ofY + (leftBox.width - leftBoxPadding))

	leftBox.stroke(255)
	leftBox.line(ofX + leftBoxPadding + lineWidthRatio, ofY + leftBox.width - leftBoxPadding, ofX + leftBox.height - leftBoxPadding, ofY + leftBox.width - leftBoxPadding)

	leftBox.pop()
}