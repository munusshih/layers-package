let dataSum
let data = []
let dataProp = []
let layerColor = ["#310a31","#847996","#88b7b5","#a7cab1","#f4ecd6","#a22c29","#ed6a5a","#e3b23c","#fbaf00","#ffd639","#757780","#d2cca1","#387780","#dbd4d3","#e83151","#d65108","#591f0a","#3f0d12","#a71d31","#251f47"]
let ingred = ["PEG-7 Glyceryl Cocoate",
	"propanediol",
	"glycerin",
	"acrylamide",
	"allantoin",
	"ammonium",
	"betaine",
	"c12-c15 alkyl benzoate",
	"glycolipids",
	"isohexadecane",
	"panthenol",
	"polylysine",
	"polysorbate 80",
	"potassium sorbate",
	"sorbitan oleate",
	"caprylyl glycol",
	"hexylene glycol",
	"phenoxyethanol"
]

function fakeData() {
	dataSum = 0
	let prop = 0
	for (let i = 0; i < ingred.length; i++) {
		data[i] = int(random(20, 200))
		dataSum += data[i]
	}
	for (let i = 0; i < ingred.length; i++) {
		dataProp[i] = prop
		data[i] = data[i] / dataSum
		prop += data[i]
	}
}