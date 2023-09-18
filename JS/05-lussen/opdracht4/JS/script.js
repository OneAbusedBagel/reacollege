
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

for (const element of games) {
        console.log(element)
    
}


//  let numbers = [

//  ]

//  console.log(numbers)
//  let i = 0;
//  while (i < 8) {
//      let rng = Math.round(Math.random() * 10000);
//      if (rng === 666) {
//          break
//      };
//      if (rng <= 999) {
//          continue
//      }
//      numbers.push(rng);
//      i++
//      numbers.sort()
//  };

//  console.log(numbers);

//  const order = numbers.join(`\n`);
//  console.log(order);
//  document.getElementById("true").innerHTML = `${order}`;

//  alert(numbers.join(`\n`));

document.getElementById("art-1-1").innerHTML = `${games[0].name} \n`
document.getElementById("art-1-2").innerHTML = `${games[0].img} \n`
document.getElementById("art-1-3").innerHTML = `${games[0].releaseEU} \n`
document.getElementById("art-1-4").innerHTML = `${games[0].platform} \n`

document.getElementById("art-2-1").innerHTML = `${games[1].name} \n`
document.getElementById("art-2-2").innerHTML = `${games[1].img} \n`
document.getElementById("art-2-3").innerHTML = `${games[1].releaseEU} \n`
document.getElementById("art-2-4").innerHTML = `${games[1].platform} \n`

document.getElementById("art-3-1").innerHTML = `${games[2].name} \n`
document.getElementById("art-3-2").innerHTML = `${games[2].img} \n`
document.getElementById("art-3-3").innerHTML = `${games[2].releaseEU} \n`
document.getElementById("art-3-4").innerHTML = `${games[2].platform} \n`

document.getElementById("art-4-1").innerHTML = `${games[3].name} \n`
document.getElementById("art-4-2").innerHTML = `${games[3].img} \n`
document.getElementById("art-4-3").innerHTML = `${games[3].releaseEU} \n`
document.getElementById("art-4-4").innerHTML = `${games[3].platform} \n`

document.getElementById("art-5-1").innerHTML = `${games[4].name} \n`
document.getElementById("art-5-2").innerHTML = `${games[4].img} \n`
document.getElementById("art-5-3").innerHTML = `${games[4].releaseEU} \n`
document.getElementById("art-5-4").innerHTML = `${games[4].platform} \n`

document.getElementById("art-6-1").innerHTML = `${games[5].name} \n`
document.getElementById("art-6-2").innerHTML = `${games[5].img} \n`
document.getElementById("art-6-3").innerHTML = `${games[5].releaseEU}`
document.getElementById("art-6-4").innerHTML = `${games[5].platform} \n`

document.getElementById("art-7-1").innerHTML = `${games[6].name} \n`
document.getElementById("art-7-2").innerHTML = `${games[6].img} \n`
document.getElementById("art-7-3").innerHTML = `${games[6].releaseEU} \n`
document.getElementById("art-7-4").innerHTML = `${games[6].platform} \n`

document.getElementById("art-8-1").innerHTML = `${games[7].name} \n`
document.getElementById("art-8-2").innerHTML = `${games[7].img} \n`
document.getElementById("art-8-3").innerHTML = `${games[7].releaseEU} \n`
document.getElementById("art-8-4").innerHTML = `${games[7].platform} \n`

document.getElementById("art-9-1").innerHTML = `${games[8].name} \n`
document.getElementById("art-9-2").innerHTML = `${games[8].img} \n`
document.getElementById("art-9-3").innerHTML = `${games[8].releaseEU} \n`
document.getElementById("art-9-4").innerHTML = `${games[8].platform} \n`

document.getElementById("art-10-1").innerHTML = `${games[9].name} \n`
document.getElementById("art-10-2").innerHTML = `${games[9].img} \n`
document.getElementById("art-10-3").innerHTML = `${games[9].releaseEU} \n`
document.getElementById("art-10-4").innerHTML = `${games[9].platform} \n`

document.getElementById("art-11-1").innerHTML = `${games[10].name} \n`
document.getElementById("art-11-2").innerHTML = `${games[10].img} \n`
document.getElementById("art-11-3").innerHTML = `${games[10].releaseEU} \n`
document.getElementById("art-11-4").innerHTML = `${games[10].platform} \n`

document.getElementById("art-12-1").innerHTML = `${games[11].name} \n`
document.getElementById("art-12-2").innerHTML = `${games[11].img} \n`
document.getElementById("art-12-3").innerHTML = `${games[11].releaseEU} \n`
document.getElementById("art-12-4").innerHTML = `${games[11].platform} \n`

document.getElementById("art-13-1").innerHTML = `${games[12].name} \n`
document.getElementById("art-13-2").innerHTML = `${games[12].img} \n`
document.getElementById("art-13-3").innerHTML = `${games[12].releaseEU} \n`
document.getElementById("art-13-4").innerHTML = `${games[12].platform} \n`

document.getElementById("art-14-1").innerHTML = `${games[13].name} \n`
document.getElementById("art-14-2").innerHTML = `${games[13].img} \n`
document.getElementById("art-14-3").innerHTML = `${games[13].releaseEU} \n`
document.getElementById("art-14-4").innerHTML = `${games[13].platform} \n`

document.getElementById("art-15-1").innerHTML = `${games[14].name} \n`
document.getElementById("art-15-2").innerHTML = `${games[14].img} \n`
document.getElementById("art-15-3").innerHTML = `${games[14].releaseEU} \n`
document.getElementById("art-15-4").innerHTML = `${games[14].platform} \n`

document.getElementById("art-16-1").innerHTML = `${games[15].name} \n`
document.getElementById("art-16-2").innerHTML = `${games[15].img} \n`
document.getElementById("art-16-3").innerHTML = `${games[15].releaseEU} \n`
document.getElementById("art-16-4").innerHTML = `${games[15].platform} \n`

document.getElementById("art-17-1").innerHTML = `${games[16].name} \n`
document.getElementById("art-17-2").innerHTML = `${games[16].img} \n`
document.getElementById("art-17-3").innerHTML = `${games[16].releaseEU} \n`
document.getElementById("art-17-4").innerHTML = `${games[16].platform} \n`

document.getElementById("art-18-1").innerHTML = `${games[17].name} \n`
document.getElementById("art-18-2").innerHTML = `${games[17].img} \n`
document.getElementById("art-18-3").innerHTML = `${games[17].releaseEU} \n`
document.getElementById("art-18-4").innerHTML = `${games[17].platform} \n`

document.getElementById("art-19-1").innerHTML = `${games[18].name} \n`
document.getElementById("art-19-2").innerHTML = `${games[18].img} \n`
document.getElementById("art-19-3").innerHTML = `${games[18].releaseEU} \n`
document.getElementById("art-19-4").innerHTML = `${games[18].platform} \n`

document.getElementById("art-20-1").innerHTML = `${games[19].name} \n`
document.getElementById("art-20-2").innerHTML = `${games[19].img} \n`
document.getElementById("art-20-3").innerHTML = `${games[19].releaseEU} \n`
document.getElementById("art-20-4").innerHTML = `${games[19].platform} \n`


