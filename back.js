function backBox_draw() {
	backBox.push()
	backBox.background(bgColor)
	backBox.stroke(cutLine)
	backBox.strokeWeight(1)
	backBox.fill(bgColor)
	backBox.rect(0, 0, backBox.width, backBox.height)
	// 	text
	backBox.fill(255)

	backBox.textAlign(CENTER, CENTER);
	backBox.textSize(50)
	backBox.scale(0.3)

	let ofX = (backBox.width - backBox.height) / 2
	let ofY = (backBox.height - backBox.width) / 2

	backBox.noStroke()
	// backBox.push()
	// backBox.translate(ofX - 50, ofY)
	// let sum = 0
	// for (let i = 0; i < name.length; i++) {
	// 	backBox.fill(layerColor[i])
	// 	backBox.rect(sum, backBox.width / 2, data[i] * backBox.height * 2.1, 2);
	// 	sum += data[i] * backBox.height * 2.1
	// }
	// backBox.pop()

	let brandName = 'L      A      Y      E      R      S'
	backBox.textSize(15)
	backBox.textFont(display)
	backBox.text(brandName, backBox.width*1.65, backBox.height*2.1)

	let backBoxPadding = 10
	let lineWidthRatio = 0 * (backBox.height - backBoxPadding * 2)
	backBox.strokeWeight(1)

	// 		let n = name.length
	let lefter = (backBox.height - backBoxPadding * 2)
	let xBreaks = (lefter) / name.length
	let amp = 3
	let vr = 10

	backBox.stroke(100)

	backBox.translate(0, backBox.height * 1.1)

	for (let j = 0; j < 5; j++) {
		backBox.push()
		backBox.fill(0)
		backBox.stroke(255)
		backBox.translate(backBox.width * 1.2, j * j * 4)
		backBox.beginShape()
		backBox.vertex(ofX + backBoxPadding, ofY + backBoxPadding);
		backBox.vertex(ofX + backBoxPadding, ofY + backBoxPadding);

		for (let i = 0; i < name.length; i++) {
			let number = name[i].charCodeAt() - 96
			if (name[i] == ' ') {
				number = 0
			}
			backBox.stroke(255)
			backBox.noFill()
			backBox.curveVertex(ofX + backBoxPadding * 2 + xBreaks * i, ofY + number * (amp) + i * vr);
		}

		backBox.vertex(ofX + backBox.height - backBoxPadding, ofY + backBox.height * 0.5);
		backBox.vertex(ofX + backBox.height - backBoxPadding, ofY + backBox.height * 0.5);
		backBox.endShape()


		if (j == 4) {
			backBox.beginShape()
			backBox.vertex(ofX + backBox.height - backBoxPadding, ofY + backBox.height * 0.5 - 16 * 4);
			backBox.vertex(ofX + backBox.height - backBoxPadding, ofY + backBox.height * 0.5);
			backBox.vertex(ofX + backBoxPadding, ofY + backBox.height * 0.5);
			backBox.vertex(ofX + backBoxPadding, ofY);
			backBox.endShape()

		}
		backBox.pop()

	}

	backBox.translate(backBox.width * 1.2, -50)
	for (let i = 0; i < name.length; i++) {

		let number = name[i].charCodeAt() - 96
		if (name[i] == ' ') {
			number = 0
		}
		backBox.fill(255)
		backBox.textFont("ivypresto-display")
		backBox.noStroke()
		backBox.textSize(15)
		backBox.text(name[i], ofX + backBoxPadding * 2 + xBreaks * i, ofY + number * (amp) + i * vr);
	}

	// 	backBox.fill(255)
	// 	backBox.noStroke()
	// 	backBox.textSize(10)
	// 	backBox.textFont(display)
	// 	backBox.textAlign(RIGHT, CENTER)
	// 	backBox.text("LAYERS", ofX + backBox.height - backBoxPadding - 5,
	// 		ofY + 20)

	// 	// 	text
	// 	backBox.fill(255)
	// 	backBox.textAlign(CENTER, CENTER);
	// 	backBox.textSize(50)
	// 	// backBox.scale(1, 1)
	// 	// backBox.text('right', backBox.width / 2, backBox.height / 2)

	// 	let about = "There are 8 billion of you on the planet, each with your own hair, skin, mood, style, and preferences. So we can assume you all want to treat and care for your hair, skin, and body in the same way, right? Yeah, that seemed off to us, too. Call us crazy, but we think it takes more than just one or two formulas to please all of those unique individuals. That’s where we come into play. We’re throwing out old approaches and old products—products that smell the same, look the same, and are made for the same people, with the same goals in mind. With Function of Beauty, you decide what goes into your formula (and what doesn't) and what you get out of it. Because, who knows what you need more than you?"
	// 	backBox.textAlign(LEFT, CENTER);
	// 	backBox.textFont(reader);
	// 	backBox.textSize(5)
	// 	backBox.textWrap(WORD);
	// 	backBox.text(about, ofX + 10, ofY + backBox.height - 140, 80)

	backBox.pop()
}