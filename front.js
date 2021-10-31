function frontBox_draw() {

	// frontBox.translate(frontBox.width / 2, frontBox.height / 2)
	// frontBox.rotate(-PI / 2)
	// frontBox.translate(-frontBox.width / 2, -frontBox.height / 2)

	// 	background
	frontBox.background(bgColor)
	frontBox.stroke(cutLine)
	frontBox.strokeWeight(1)
	frontBox.fill(bgColor)
	frontBox.rect(0, 0, frontBox.width, frontBox.height)

}