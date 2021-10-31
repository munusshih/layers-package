let gluea, glueb, gluec, glued, gluee, gluef, glueg
let glueSize = 30

function glueDraw() {
	drawGlue(1, gluea, fheight, glueSize, fheight, glueSize)
	drawGlue(2, glueb, fheight, glueSize, -fwidth, glueSize)
	drawGlue(3, gluec, fheight, glueSize, -fwidth, -fthick)
	drawGlue(4, glued, fheight, glueSize, fheight, -fthick)
	drawGlue(5, gluee, glueSize, fthick, fheight + glueSize, 0)
	drawGlue(6, gluef, glueSize, fthick, -fwidth - fheight, 0)
	drawGlue(7, glueg, fwidth, glueSize, 0, -fthick - fheight - fthick)
}

function drawGlue(n, gluer, sizex, sizey, offx, offy) {
	gluer.background(bgColor)
	gluer.stroke(cutLine)
	gluer.strokeWeight(2)
	gluer.fill(bgColor)
	gluer.rect(0, 0, sizex, sizey)
	gluer.fill(paperColor)

	if (n == 1 || n == 2) {
		gluer.triangle(0, 0, 0, sizey, sizey, 0)
		gluer.triangle(sizex, 0, sizex, sizey, sizex - sizey, 0)
	}

	if (n == 3 || n == 4 || n == 7) {
		gluer.triangle(0, 0, sizey, sizey, 0, sizey)
		gluer.triangle(sizex, 0, sizex, sizey, sizex - sizey, sizey)
	}

	if (n == 5) {
		gluer.triangle(0, 0, sizex, 0, 0, sizex)
		gluer.triangle(0, sizey, 0, sizey - sizex, sizex, sizey)
	}

	if (n == 6) {
		gluer.triangle(0, 0, sizex, 0, sizex, sizex)
		gluer.triangle(0, sizey, sizex, sizey - sizex, sizex, sizey)
	}

	image(gluer, (width - fwidth) / 2 - offx, (height - fheight) / 2 - offy)
}

function gluerAdap() {
	if (gluea) {
		gluea.remove();
		gluea = null;
	}
	gluea = createGraphics(fheight, glueSize)

	if (glueb) {
		glueb.remove();
		glueb = null;
	}
	glueb = createGraphics(fheight, glueSize)

	if (gluec) {
		gluec.remove();
		gluec = null;
	}
	gluec = createGraphics(fheight, glueSize)

	if (glued) {
		glued.remove();
		glued = null;
	}
	glued = createGraphics(fheight, glueSize)

	if (gluee) {
		gluee.remove();
		gluee = null;
	}
	gluee = createGraphics(glueSize, fthick)

	if (gluef) {
		gluef.remove();
		gluef = null;
	}
	gluef = createGraphics(glueSize, fthick)

	if (glueg) {
		glueg.remove();
		glueg = null;
	}
	glueg = createGraphics(fwidth, glueSize)

}