
"use strict"

const games = [
	{
		name: "The Legend of Zelda",
		platform: "NES",
		releaseEU: "1987",
		img: "zelda.jpg", 
	},
	{
		name: "Adventure of Link",
		platform: "NES",
		releaseEU: "1988",
		img: "zelda-aol.jpg", 
	},
	{
		name: "A Link to the Past",
		platform: "SNES",
		releaseEU: "1992",
		img: "zelda-alttp.jpg", 
	},
	{
		name: "Link's Awakening",
		platform: "GB",
		releaseEU: "1993",
		img: "zelda-la.jpg", 
	},
	{
		name: "The Faces of Evil",
		platform: "CD-i",
		releaseEU: "1993",
		img: "zelda-foe.jpg", 
	},
	{
		name: "Ancient Stone Tablets",
		platform: "SNES",
		releaseEU: null,
		img: "zelda-ast.jpg", 
	},
	{
		name: "Ocarina of Time",
		platform: "N64",
		releaseEU: "1998",
		img: "zelda-oot.jpg", 
	},
	{
		name: "Majora's Mask",
		platform: "N64",
		releaseEU: "2000",
		img: "zelda-mm.jpg", 
	},
	{
		name: "Oracle of Seasons",
		platform: "GBC",
		releaseEU: "2001",
		img: "zelda-oos.jpg", 
	},
	{
		name: "Oracle of Ages",
		platform: "GBC",
		releaseEU: "2001",
		img: "zelda-ooa.jpg", 
	},
	{
		name: "The Wind Waker",
		platform: "GC",
		releaseEU: "2003",
		img: "zelda-ww.jpg", 
	},
	{
		name: "The Minish Cap",
		platform: "GBA",
		releaseEU: "2004",
		img: "zelda-mc.jpg", 
	},
	{
		name: "Twilight Princess",
		platform: "GC / Wii",
		releaseEU: "2006",
		img: "zelda-tp.jpg", 
	},
	{
		name: "Phantom Hourglass",
		platform: "DS",
		releaseEU: "2007",
		img: "zelda-ph.jpg", 
	},
	{
		name: "Spirit Tracks",
		platform: "DS",
		releaseEU: "2009",
		img: "zelda-st.jpg", 
	},
	{
		name: "Skyward Sword",
		platform: "Wii",
		releaseEU: "2011",
		img: "zelda-ss.jpg", 
	},
	{
		name: "A Link Between Worlds",
		platform: "3DS",
		releaseEU: "2013",
		img: "zelda-albw.jpg", 
	},
	{
		name: "Hyrule Warriors",
		platform: "Wii U",
		releaseEU: "2014",
		img: "zelda-hw.jpg", 
	},
	{
		name: "Breath of the Wild",
		platform: "Wii U / Switch",
		releaseEU: "2017",
		img: "zelda-botw.jpg", 
	},
	{
		name: "Age of Calamity",
		platform: "Switch",
		releaseEU: "2020",
		img: "zelda-aoc.jpg", 
	},
];

var x = 1;
var y = 1;
var i = 0;

for (const element of games) {
    console.log(element)

//		var z = 'test'
//	switch (y) {
//		case 1:
//			z = 'name'
//			break;
//		case 2:
//			z = 'img'
//			break;
//		case 3:
//			z = 'releaseEU'
//			break;
//		case 4:
//			z = 'platform'
//			break;
//	}	

	//	document.getElementById(`art-${x}-${y}`).innerHTML = `${games[x].z}  \n`

	document.getElementById(`art-${x}-1`).innerHTML = `${games[x].name}  \n`
	document.getElementById(`art-${x}-2`).innerHTML = `${games[x].img}  \n`
	document.getElementById(`art-${x}-3`).innerHTML = `${games[x].releaseEU}  \n`
	document.getElementById(`art-${x}-4`).innerHTML = `${games[x].platform}  \n`


	console.log(x)
	console.log(y)
	

	y == 4 ? y -= 4 : x-= 1;
	
	x++
	y++
	i++
}

console.log(x)
console.log(y)
console.log(i)
