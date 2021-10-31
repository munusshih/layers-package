let img, display;
let layerColor

function preload() {
	let interface = select('#interface');
	let a = int(random(4))

	switch (a) {
		case 0:
			layerColor = ["#310a31", "#847996", "#88b7b5", "#a7cab1", "#f4ecd6", "#a22c29", "#ed6a5a", "#e3b23c", "#fbaf00", "#ffd639", "#757780", "#d2cca1", "#387780", "#dbd4d3", "#e83151", "#d65108", "#591f0a", "#3f0d12", "#a71d31", "#251f47"]
			interface.style('background-color', '#fbe56a');
			break;
		case 1:
			layerColor = ["#260c1a","#432e36","#5f4842","#af8d86","#edbfc6","#e28413","#f56416","#93a8ac","#ffffff","#e2b4bd","#4e1341","#642f50","#7f4a4d","#bd8c90","#eac2d1","#ca7c48","#d16653","#8cb6ca","#ffffff","#e3b8ca"]
			interface.style('background-color', '#6adefb');
			break;
		case 2:
			interface.style('background-color', '#c09eff');
			layerColor = ["#bad1cd","#f2d1c9","#e086d3","#8332ac","#462749","#816f68","#464655","#605770","#4d4861","#0b2027","#c2c0c7","#ece2d0","#d39293","#99425e","#452c30","#7d786c","#51474e","#6c5b64","#5d4b56","#180f1c"]
			break;
		case 3:
			interface.style('background-color', '#ffc39e');
			layerColor = ["#c7c7c7","#b3b3b3","#afa295","#ca9168","#262425","#050404","#5e2e4a","#e36f56","#c25158","#482f3a","#cdc1c1","#bbaaaa","#b9aa8e","#d0a262","#2b2125","#060404","#612837","#e68a51","#c9604b","#4c292f"]
			break;
		default:
			//  
	}

	img = loadImage('rock.jpeg');
	dark = loadImage('blackness.jpg');
	display = loadFont('SofiaProMedium.otf');
	reader = loadFont('SofiaProLight.otf');
	bar = loadImage('image.php.png');
}