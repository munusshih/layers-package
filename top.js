let vw, vh
let displayName
let product = 'NOURISH + HYDRATE SKIN OIL'
let skinType = 'dry'
let version = 1;
let proclivity = 'Sensitivity'
let cond = 'Dehydration'
let acne = 'Closed comedones'+' ,'+'Open comedones'

function topBox_draw() {
	let padding = 10

	// 	background
	topBox.background(bgColor)
	topBox.stroke(cutLine)
	topBox.strokeWeight(1)
	topBox.fill(bgColor)
	topBox.rect(0, 0, topBox.width, topBox.height)

	// 	display
	topBox.fill(255)
	topBox.noStroke()
	topBox.textAlign(CENTER, CENTER);

	displayName = name.toUpperCase()

	let brandName = 'L   A   Y   E   R   S'
	topBox.textFont(display)
	if (fthick >= 200 && fwidth < 350) {
		displayName = displayName.replace(' ', '\n')
		topBox.textSize(8)
		topBox.text(brandName, topBox.width / 2, topBox.height / 2 + vt * 16)
	} else if (fthick <= 350 && fthick >= 200 && fwidth >= 350) {
		displayName = displayName.replace('\n', ' ')
		topBox.textSize(10)
		topBox.text(brandName, topBox.width / 2, topBox.height / 2 + vt * 13)
	} else if (fthick >= 350 && fwidth > 350) {
		displayName = displayName.replace(' ', '\n')
		topBox.textSize(10)
		topBox.textLeading(8);
		topBox.text(brandName, topBox.width / 2, topBox.height / 2 + vt * 16)
	}

	topBox.noStroke()
	topBox.textLeading(70 / name.length * (vw + vt));
	topBox.textSize(80 / name.length * (vw + vt))
	if (fthick > 340) {
		topBox.textSize(55 / name.length * (vw + vt))
	}

	// 	name
	topBox.textFont("ivypresto-display")
	topBox.scale(1, 1)
	topBox.text(displayName, topBox.width / 2, topBox.height / 2 - vt * 6)

	// 	grid
	topBox.textFont(display)
	topBox.stroke(255)
	topBox.strokeWeight(1)
	topBox.line(padding, padding, topBox.width - padding, padding)
	topBox.line(padding, vt * 20, topBox.width - padding, vt * 20)
	topBox.line(padding, padding, padding, topBox.height - padding)
	topBox.line(topBox.width - padding, padding, topBox.width - padding, topBox.height - padding)
	topBox.line(padding, topBox.height - padding, topBox.width - padding, topBox.height - padding)

	// 	higher vertical
	topBox.line(0.75 * topBox.width, padding,
		0.75 * topBox.width, vt * 20)
	// 	higher left
	topBox.noStroke()
	topBox.textAlign(LEFT, CENTER)
	topBox.textWrap(WORD);
	topBox.textSize(2.5 * vw)
	topBox.textLeading(4 * vw);

	if (document.getElementById("thick").value <= 2.75) {
		topBox.textLeading(3 * vw);
		topBox.text(product, padding + 7 + 2, padding + 9 +0 , 0.5 * topBox.width)
	} else {
		topBox.text(product, padding + 7 + 2, padding + 9 + 5, 0.5 * topBox.width)
	}

	topBox.textSize(min(2.5 * vw, 10))
	topBox.textLeading(min(3.5 * vw, 13));
	topBox.text(year() + '.\n' + month() + '.' + day(), padding + 7, topBox.height - padding - 35, 0.25 * topBox.width)
	topBox.text('YOUR SKIN TYPE', 0.25 * topBox.width + 7, topBox.height - padding - 35, 0.25 * topBox.width * 0.7)

	topBox.textSize(min(2 * vw, 7))
	topBox.textLeading(min(3 * vw, 10));
	// 	Type
	topBox.text('Type: ' + skinType + ', Proclivity: '+ proclivity +', Condition: '+ cond + ', Acne: ' + acne,
		0.5 * topBox.width + 7, topBox.height - padding - 35, 0.5 * topBox.width * 0.8)
	topBox.textAlign(LEFT, CENTER)

	topBox.textFont("ivypresto-display")
	if (document.getElementById("thick").value <= 2.75) {
		topBox.textSize(3 * vw)
		topBox.text('1  /  6', 0.78 * topBox.width, padding + 12)
	} else {
		topBox.textSize(5 * vw)
		topBox.text(version+  '  /  6', 0.79 * topBox.width, padding + 18)
	}

	topBox.stroke(255)

	let lowerRatio
	// 	lower vertical
	if (document.getElementById("thick").value <= 2) {
		lowerRatio = 35
	} else if (document.getElementById("thick").value <= 2.5) {
		lowerRatio = 30
	} else if (document.getElementById("thick").value < 3.5) {
		lowerRatio = 25
	} else {
		lowerRatio = 20
	}

	topBox.line(0.25 * topBox.width, topBox.height - vt * lowerRatio,
		0.25 * topBox.width, topBox.height - padding)
	topBox.line(0.5 * topBox.width, topBox.height - vt * lowerRatio,
		0.5 * topBox.width, topBox.height - padding)
	topBox.line(padding, topBox.height - vt * lowerRatio, topBox.width - padding, topBox.height - vt * lowerRatio)

}