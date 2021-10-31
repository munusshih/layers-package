let dataSum
let data = []
let dataProp = []
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