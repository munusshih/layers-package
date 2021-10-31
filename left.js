function leftBox_draw() {
	leftBox.push()

	let ofX = 0
	let ofY = 0

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
	let lineWidthRatio = 0.5 * (leftBox.width - leftBoxPadding * 2)

	leftBox.push()
	leftBox.translate(-(leftBox.width / 2 - leftBoxPadding), 0)

	leftBox.strokeWeight(1)
	leftBox.stroke(255)
	leftBox.line(ofX + leftBoxPadding + lineWidthRatio, ofY + leftBoxPadding, ofX + leftBox.width - leftBoxPadding, ofY + leftBoxPadding)
	leftBox.line(ofX + leftBoxPadding + lineWidthRatio, ofY + leftBoxPadding+14, ofX + leftBox.width - leftBoxPadding, ofY + leftBoxPadding+14)

	leftBox.fill(255)
	leftBox.textFont(display)
	leftBox.noStroke()
	leftBox.textSize(6)
	leftBox.textAlign(LEFT, CENTER)

	leftBox.textFont("ivypresto-display")
	let firstName = name.split(' ');
	leftBox.text(firstName[0] + "'s ingredients  (%)", ofX + leftBox.width / 2 + 5,
		ofY + 17.5)

	for (let i = 0; i < ingred.length; i++) {
		let lineDist = (leftBox.height - leftBoxPadding * 4) * i / ingred.length + leftBoxPadding * 2
		leftBox.stroke(255)

		leftBox.fill(layerColor[i])
		leftBox.noStroke()
		leftBox.circle(ofX + leftBox.width - leftBoxPadding - 7,
			ofY + lineDist + 14, 5)
		leftBox.fill(255)
		leftBox.noStroke()
		leftBox.textSize(5)

		leftBox.textAlign(RIGHT, CENTER)
		leftBox.text(ingred[i], ofX + leftBox.width - leftBoxPadding - 15,
			ofY + lineDist + 13)
		leftBox.textAlign(LEFT, CENTER)
		leftBox.textSize(5.5)

		leftBox.text((data[i] * 100).toFixed(2) + ' %', ofX + leftBox.width / 2 + 5,
			ofY + lineDist + 13)
	}

	leftBox.stroke(255)
	leftBox.line(ofX + leftBoxPadding + lineWidthRatio, ofY + leftBoxPadding,
		ofX + leftBoxPadding + lineWidthRatio, ofY + (leftBox.height - leftBoxPadding))
	leftBox.line(ofX + leftBox.width - leftBoxPadding, ofY + leftBoxPadding,
		ofX + leftBox.width - leftBoxPadding, ofY + (leftBox.height - leftBoxPadding))

	leftBox.stroke(255)
	leftBox.line(ofX + leftBoxPadding + lineWidthRatio, ofY + leftBox.height - leftBoxPadding, ofX + leftBox.width - leftBoxPadding, ofY + leftBox.height - leftBoxPadding)

	leftBox.textFont(display)
	let explaination = " \n\n\
We extracted the best minerals in different soil layers and put\
them into your formula. The pattern of each box is generated from\
your own personal customized formula, with the width of each layer\
visulizing the proportion of each organic ingredient in the product.\
Every box is unique and precious, just like you."
	
	leftBox.stroke(255)
	leftBox.strokeWeight(0.4)
	leftBox.line(ofX + leftBox.width, leftBox.height - 65.5,  ofX + leftBox.width + 80, leftBox.height - 65.5)
	
	leftBox.fill(255)
	leftBox.textSize(4.5)
	leftBox.noStroke()
	leftBox.textAlign(LEFT, CENTER)
	leftBox.textWrap(WORD)

	leftBox.textFont("ivypresto-display")
	leftBox.text('What is under the layers of your skin?', ofX + leftBox.width,
	leftBox.height - 70, 80)
	
	leftBox.textFont(display)
	leftBox.text(explaination, ofX + leftBox.width,
			leftBox.height - 70, 80)
	
	leftBox.pop()
	leftBox.pop()
}