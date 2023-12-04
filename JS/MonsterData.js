const monsters = [
	{
		name: "Frog",
		challenge: "0",
		xp: "0",
		source: "mm 322"
	},
	{
		name: "Sea Horse",
		challenge: "0",
		xp: "0",
		source: "mm 337"
	},
	{
		name: "Awakened Shrub",
		challenge: "0",
		xp: "10",
		source: "mm 317"
	},
	{
		name: "Baboon",
		challenge: "0",
		xp: "10",
		source: "mm 318"
	},
	{
		name: "Badger",
		challenge: "0",
		xp: "10",
		source: "mm 318"
	},
	{
		name: "Bat",
		challenge: "0",
		xp: "10",
		source: "mm 318"
	},
	{
		name: "Cat",
		challenge: "0",
		xp: "10",
		source: "mm 320"
	},
	{
		name: "Commoner",
		challenge: "0",
		xp: "10",
		source: "mm 344"
	},
	{
		name: "Crab",
		challenge: "0",
		xp: "10",
		source: "mm 320"
	},
	{
		name: "Cranium Rat",
		challenge: "0",
		xp: "10",
		source: "vgm 133"
	},
	{
		name: "Crawling Claw",
		challenge: "0",
		xp: "10",
		source: "mm 44"
	},
	{
		name: "Deer",
		challenge: "0",
		xp: "10",
		source: "mm 321"
	},
	{
		name: "Eagle",
		challenge: "0",
		xp: "10",
		source: "mm 322"
	},
	{
		name: "Giant Fire Beetle",
		challenge: "0",
		xp: "10",
		source: "mm 325"
	},
	{
		name: "Goat",
		challenge: "0",
		xp: "10",
		source: "mm 330"
	},
	{
		name: "Hawk",
		challenge: "0",
		xp: "10",
		source: "mm 330"
	},
	{
		name: "Homunculus",
		challenge: "0",
		xp: "10",
		source: "mm 188"
	},
	{
		name: "Hyena",
		challenge: "0",
		xp: "10",
		source: "mm 331"
	},
	{
		name: "Jackal",
		challenge: "0",
		xp: "10",
		source: "mm 331"
	},
	{
		name: "Lemure",
		challenge: "0",
		xp: "10",
		source: "mm 76"
	},
	{
		name: "Lizard",
		challenge: "0",
		xp: "10",
		source: "mm 332"
	},
	{
		name: "Myconid Sprout",
		challenge: "0",
		xp: "10",
		source: "mm 230"
	},
	{
		name: "Octopus",
		challenge: "0",
		xp: "10",
		source: "mm 333"
	},
	{
		name: "Owl",
		challenge: "0",
		xp: "10",
		source: "mm 333"
	},
	{
		name: "Quipper",
		challenge: "0",
		xp: "10",
		source: "mm 335"
	},
	{
		name: "Rat",
		challenge: "0",
		xp: "10",
		source: "mm 335"
	},
	{
		name: "Raven",
		challenge: "0",
		xp: "10",
		source: "mm 335"
	},
	{
		name: "Scorpion",
		challenge: "0",
		xp: "10",
		source: "mm 337"
	},
	{
		name: "Shrieker",
		challenge: "0",
		xp: "10",
		source: "mm 138"
	},
	{
		name: "Spider",
		challenge: "0",
		xp: "10",
		source: "mm 337"
	},
	{
		name: "Vulture",
		challenge: "0",
		xp: "10",
		source: "mm 339"
	},
	{
		name: "Weasel",
		challenge: "0",
		xp: "10",
		source: "mm 340"
	},
	{
		name: "Bandit",
		challenge: "1/8",
		xp: "25",
		source: "mm 343"
	},
	{
		name: "Blood Hawk",
		challenge: "1/8",
		xp: "25",
		source: "mm 319"
	},
	{
		name: "Boggle",
		challenge: "1/8",
		xp: "25",
		source: "vgm 128"
	},
	{
		name: "Camel",
		challenge: "1/8",
		xp: "25",
		source: "mm 320"
	},
	{
		name: "Cultist",
		challenge: "1/8",
		xp: "25",
		source: "mm 345"
	},
	{
		name: "Dolphin",
		challenge: "1/8",
		xp: "25",
		source: "vgm 208"
	},
	{
		name: "Flumph",
		challenge: "1/8",
		xp: "25",
		source: "mm 135"
	},
	{
		name: "Flying Snake",
		challenge: "1/8",
		xp: "25",
		source: "mm 322"
	},
	{
		name: "Giant Crab",
		challenge: "1/8",
		xp: "25",
		source: "mm 324"
	},
	{
		name: "Giant Rat",
		challenge: "1/8",
		xp: "25",
		source: "mm 327"
	},
	{
		name: "Giant Weasel",
		challenge: "1/8",
		xp: "25",
		source: "mm 329"
	},
	{
		name: "Guard",
		challenge: "1/8",
		xp: "25",
		source: "mm 347"
	},
	{
		name: "Kobold",
		challenge: "1/8",
		xp: "25",
		source: "mm 195"
	},
	{
		name: "Manes",
		challenge: "1/8",
		xp: "25",
		source: "mm 60"
	},
	{
		name: "Mastiff",
		challenge: "1/8",
		xp: "25",
		source: "mm 332"
	},
	{
		name: "Merfolk",
		challenge: "1/8",
		xp: "25",
		source: "mm 218"
	},
	{
		name: "Monodrone",
		challenge: "1/8",
		xp: "25",
		source: "mm 224"
	},
	{
		name: "Mule",
		challenge: "1/8",
		xp: "25",
		source: "mm 333"
	},
	{
		name: "Neogi Hatchling",
		challenge: "1/8",
		xp: "25",
		source: "vgm 179"
	},
	{
		name: "Noble",
		challenge: "1/8",
		xp: "25",
		source: "mm 348"
	},
	{
		name: "Poisonous Snake",
		challenge: "1/8",
		xp: "25",
		source: "mm 334"
	},
	{
		name: "Pony",
		challenge: "1/8",
		xp: "25",
		source: "mm 335"
	},
	{
		name: "Slaad Tadpole",
		challenge: "1/8",
		xp: "25",
		source: "mm 276"
	},
	{
		name: "Stirge",
		challenge: "1/8",
		xp: "25",
		source: "mm 284"
	},
	{
		name: "Tribal Warrior",
		challenge: "1/8",
		xp: "25",
		source: "mm 350"
	},
	{
		name: "Twig Blight",
		challenge: "1/8",
		xp: "25",
		source: "mm 32"
	},
	{
		name: "Xvart",
		challenge: "1/8",
		xp: "25",
		source: "vgm 200"
	},
	{
		name: "Young Kruthik",
		challenge: "1/8",
		xp: "25",
		source: "mtf 211"
	},
	{
		name: "Aarakocra",
		challenge: "1/4",
		xp: "50",
		source: "mm 12"
	},
	{
		name: "Abyssal Wretch",
		challenge: "1/4",
		xp: "50",
		source: "mtf 136"
	},
	{
		name: "Acolyte",
		challenge: "1/4",
		xp: "50",
		source: "mm 342"
	},
	{
		name: "Apprentice Wizard",
		challenge: "1/4",
		xp: "50",
		source: "vgm 209"
	},
	{
		name: "Axe Beak",
		challenge: "1/4",
		xp: "50",
		source: "mm 317"
	},
	{
		name: "Blink Dog",
		challenge: "1/4",
		xp: "50",
		source: "mm 318"
	},
	{
		name: "Boar",
		challenge: "1/4",
		xp: "50",
		source: "mm 319"
	},
	{
		name: "Bullywug",
		challenge: "1/4",
		xp: "50",
		source: "mm 35"
	},
	{
		name: "Constrictor Snake",
		challenge: "1/4",
		xp: "50",
		source: "mm 320"
	},
	{
		name: "Cow",
		challenge: "1/4",
		xp: "50",
		source: "vgm 207"
	},
	{
		name: "Deep Rothe",
		challenge: "1/4",
		xp: "50",
		source: "vgm 207"
	},
	{
		name: "Derro",
		challenge: "1/4",
		xp: "50",
		source: "mtf 158"
	},
	{
		name: "Dimetrodon",
		challenge: "1/4",
		xp: "50",
		source: "vgm 139"
	},
	{
		name: "Draft Horse",
		challenge: "1/4",
		xp: "50",
		source: "mm 321"
	},
	{
		name: "Dretch",
		challenge: "1/4",
		xp: "50",
		source: "mm 57"
	},
	{
		name: "Drow",
		challenge: "1/4",
		xp: "50",
		source: "mm 128"
	},
	{
		name: "Duodrone",
		challenge: "1/4",
		xp: "50",
		source: "mm 225"
	},
	{
		name: "Elk",
		challenge: "1/4",
		xp: "50",
		source: "mm 322"
	},
	{
		name: "Flying Sword",
		challenge: "1/4",
		xp: "50",
		source: "mm 20"
	},
	{
		name: "Giant Badger",
		challenge: "1/4",
		xp: "50",
		source: "mm 323"
	},
	{
		name: "Giant Bat",
		challenge: "1/4",
		xp: "50",
		source: "mm 323"
	},
	{
		name: "Giant Centipede",
		challenge: "1/4",
		xp: "50",
		source: "mm 323"
	},
	{
		name: "Giant Frog",
		challenge: "1/4",
		xp: "50",
		source: "mm 325"
	},
	{
		name: "Giant Lizard",
		challenge: "1/4",
		xp: "50",
		source: "mm 326"
	},
	{
		name: "Giant Owl",
		challenge: "1/4",
		xp: "50",
		source: "mm 327"
	},
	{
		name: "Giant Poisonous Snake",
		challenge: "1/4",
		xp: "50",
		source: "mm 327"
	},
	{
		name: "Giant Wolf Spider",
		challenge: "1/4",
		xp: "50",
		source: "mm 330"
	},
	{
		name: "Gnoll Witherling",
		challenge: "1/4",
		xp: "50",
		source: "vgm 155"
	},
	{
		name: "Goblin",
		challenge: "1/4",
		xp: "50",
		source: "mm 166"
	},
	{
		name: "Grimlock",
		challenge: "1/4",
		xp: "50",
		source: "mm 175"
	},
	{
		name: "Grung",
		challenge: "1/4",
		xp: "50",
		source: "vgm 156"
	},
	{
		name: "Hadrosaurus",
		challenge: "1/4",
		xp: "50",
		source: "vgm 140"
	},
	{
		name: "Kenku",
		challenge: "1/4",
		xp: "50",
		source: "mm 194"
	},
	{
		name: "Kobold Inventor",
		challenge: "1/4",
		xp: "50",
		source: "vgm 166"
	},
	{
		name: "Kuo-toa",
		challenge: "1/4",
		xp: "50",
		source: "mm 199"
	},
	{
		name: "Male Steeder",
		challenge: "1/4",
		xp: "50",
		source: "mtf 238"
	},
	{
		name: "Mud Mephit",
		challenge: "1/4",
		xp: "50",
		source: "mm 216"
	},
	{
		name: "Needle Blight",
		challenge: "1/4",
		xp: "50",
		source: "mm 32"
	},
	{
		name: "Oblex Spawn",
		challenge: "1/4",
		xp: "50",
		source: "mtf 217"
	},
	{
		name: "Ox",
		challenge: "1/4",
		xp: "50",
		source: "vgm 207"
	},
	{
		name: "Panther",
		challenge: "1/4",
		xp: "50",
		source: "mm 333"
	},
	{
		name: "Pixie",
		challenge: "1/4",
		xp: "50",
		source: "mm 253"
	},
	{
		name: "Pseudodragon",
		challenge: "1/4",
		xp: "50",
		source: "mm 254"
	},
	{
		name: "Pteranodon",
		challenge: "1/4",
		xp: "50",
		source: "mm 80"
	},
	{
		name: "Riding Horse",
		challenge: "1/4",
		xp: "50",
		source: "mm 336"
	},
	{
		name: "Rothe",
		challenge: "1/4",
		xp: "50",
		source: "vgm 207"
	},
	{
		name: "Skeleton",
		challenge: "1/4",
		xp: "50",
		source: "mm 272"
	},
	{
		name: "Smoke Mephit",
		challenge: "1/4",
		xp: "50",
		source: "mm 217"
	},
	{
		name: "Sprite",
		challenge: "1/4",
		xp: "50",
		source: "mm 283"
	},
	{
		name: "Star Spawn Grue",
		challenge: "1/4",
		xp: "50",
		source: "mtf 234"
	},
	{
		name: "Steam Mephit",
		challenge: "1/4",
		xp: "50",
		source: "mm 217"
	},
	{
		name: "Stench Kow",
		challenge: "1/4",
		xp: "50",
		source: "vgm 207"
	},
	{
		name: "Swarm of Bats",
		challenge: "1/4",
		xp: "50",
		source: "mm 337"
	},
	{
		name: "Swarm of Rats",
		challenge: "1/4",
		xp: "50",
		source: "mm 339"
	},
	{
		name: "Swarm of Ravens",
		challenge: "1/4",
		xp: "50",
		source: "mm 339"
	},
	{
		name: "Tortle",
		challenge: "1/4",
		xp: "50",
		source: "mtf 242"
	},
	{
		name: "Troglodyte",
		challenge: "1/4",
		xp: "50",
		source: "mm 290"
	},
	{
		name: "Vegepygmy",
		challenge: "1/4",
		xp: "50",
		source: "vgm 196"
	},
	{
		name: "Velociraptor",
		challenge: "1/4",
		xp: "50",
		source: "vgm 140"
	},
	{
		name: "Violet Fungus",
		challenge: "1/4",
		xp: "50",
		source: "mm 138"
	},
	{
		name: "Winged Kobold",
		challenge: "1/4",
		xp: "50",
		source: "mm 195"
	},
	{
		name: "Wolf",
		challenge: "1/4",
		xp: "50",
		source: "mm 341"
	},
	{
		name: "Wretched Sorrowsworn",
		challenge: "1/4",
		xp: "50",
		source: "mtf 233"
	},
	{
		name: "Zombie",
		challenge: "1/4",
		xp: "50",
		source: "mm 316"
	},
	{
		name: "Ape",
		challenge: "1/2",
		xp: "100",
		source: "mm 317"
	},
	{
		name: "Black Bear",
		challenge: "1/2",
		xp: "100",
		source: "mm 318"
	},
	{
		name: "Chitine",
		challenge: "1/2",
		xp: "100",
		source: "vgm 131"
	},
	{
		name: "Cockatrice",
		challenge: "1/2",
		xp: "100",
		source: "mm 42"
	},
	{
		name: "Crocodile",
		challenge: "1/2",
		xp: "100",
		source: "mm 320"
	},
	{
		name: "Darkling",
		challenge: "1/2",
		xp: "100",
		source: "vgm 134"
	},
	{
		name: "Darkmantle",
		challenge: "1/2",
		xp: "100",
		source: "mm 46"
	},
	{
		name: "Dust Mephit",
		challenge: "1/2",
		xp: "100",
		source: "mm 215"
	},
	{
		name: "Firenewt Warrior",
		challenge: "1/2",
		xp: "100",
		source: "vgm 142"
	},
	{
		name: "Gas Spore",
		challenge: "1/2",
		xp: "100",
		source: "mm 138"
	},
	{
		name: "Gazer",
		challenge: "1/2",
		xp: "100",
		source: "vgm 126"
	},
	{
		name: "Giant Goat",
		challenge: "1/2",
		xp: "100",
		source: "mm 326"
	},
	{
		name: "Giant Sea Horse",
		challenge: "1/2",
		xp: "100",
		source: "mm 328"
	},
	{
		name: "Giant Wasp",
		challenge: "1/2",
		xp: "100",
		source: "mm 329"
	},
	{
		name: "Gnoll",
		challenge: "1/2",
		xp: "100",
		source: "mm 163"
	},
	{
		name: "Gnoll Hunter",
		challenge: "1/2",
		xp: "100",
		source: "vgm 154"
	},
	{
		name: "Gray Ooze",
		challenge: "1/2",
		xp: "100",
		source: "mm 243"
	},
	{
		name: "Hobgoblin",
		challenge: "1/2",
		xp: "100",
		source: "mm 186"
	},
	{
		name: "Ice Mephit",
		challenge: "1/2",
		xp: "100",
		source: "mm 215"
	},
	{
		name: "Jackalwere",
		challenge: "1/2",
		xp: "100",
		source: "mm 193"
	},
	{
		name: "Lizardfolk",
		challenge: "1/2",
		xp: "100",
		source: "mm 204"
	},
	{
		name: "Magma Mephit",
		challenge: "1/2",
		xp: "100",
		source: "mm 216"
	},
	{
		name: "Magmin",
		challenge: "1/2",
		xp: "100",
		source: "mm 212"
	},
	{
		name: "Myconid Adult",
		challenge: "1/2",
		xp: "100",
		source: "mm 232"
	},
	{
		name: "Nupperibo",
		challenge: "1/2",
		xp: "100",
		source: "mtf 168"
	},
	{
		name: "Orc",
		challenge: "1/2",
		xp: "100",
		source: "mm 246"
	},
	{
		name: "Orc Nurtured One of Yurtrus",
		challenge: "1/2",
		xp: "100",
		source: "vgm 184"
	},
	{
		name: "Piercer",
		challenge: "1/2",
		xp: "100",
		source: "mm 252"
	},
	{
		name: "Reef Shark",
		challenge: "1/2",
		xp: "100",
		source: "mm 336"
	},
	{
		name: "Rust Monster",
		challenge: "1/2",
		xp: "100",
		source: "mm 262"
	},
	{
		name: "Sahuagin",
		challenge: "1/2",
		xp: "100",
		source: "mm 263"
	},
	{
		name: "Satyr",
		challenge: "1/2",
		xp: "100",
		source: "mm 267"
	},
	{
		name: "Scout",
		challenge: "1/2",
		xp: "100",
		source: "mm 349"
	},
	{
		name: "Shadow",
		challenge: "1/2",
		xp: "100",
		source: "mm 269"
	},
	{
		name: "Skulk",
		challenge: "1/2",
		xp: "100",
		source: "mtf 227"
	},
	{
		name: "Svirfneblin",
		challenge: "1/2",
		xp: "100",
		source: "mm 164"
	},
	{
		name: "Swarm of Insects",
		challenge: "1/2",
		xp: "100",
		source: "mm 338"
	},
	{
		name: "Swarm of Rot Grubs",
		challenge: "1/2",
		xp: "100",
		source: "vgm 208"
	},
	{
		name: "Thug",
		challenge: "1/2",
		xp: "100",
		source: "mm 350"
	},
	{
		name: "Tridrone",
		challenge: "1/2",
		xp: "100",
		source: "mm 225"
	},
	{
		name: "Vine Blight",
		challenge: "1/2",
		xp: "100",
		source: "mm 32"
	},
	{
		name: "Warhorse",
		challenge: "1/2",
		xp: "100",
		source: "mm 340"
	},
	{
		name: "Warhorse Skeleton",
		challenge: "1/2",
		xp: "100",
		source: "mm 273"
	},
	{
		name: "Worg",
		challenge: "1/2",
		xp: "100",
		source: "mm 341"
	},
	{
		name: "Animated Armor",
		challenge: "1",
		xp: "200",
		source: "mm 19"
	},
	{
		name: "Brass Dragon Wyrmling",
		challenge: "1",
		xp: "200",
		source: "mm 106"
	},
	{
		name: "Bronze Scout",
		challenge: "1",
		xp: "200",
		source: "mtf 125"
	},
	{
		name: "Brown Bear",
		challenge: "1",
		xp: "200",
		source: "mm 319"
	},
	{
		name: "Bugbear",
		challenge: "1",
		xp: "200",
		source: "mm 33"
	},
	{
		name: "Choker",
		challenge: "1",
		xp: "200",
		source: "mtf 123"
	},
	{
		name: "Copper Dragon Wyrmling",
		challenge: "1",
		xp: "200",
		source: "mm 112"
	},
	{
		name: "Death Dog",
		challenge: "1",
		xp: "200",
		source: "mm 321"
	},
	{
		name: "Deinonychus",
		challenge: "1",
		xp: "200",
		source: "vgm 139"
	},
	{
		name: "Dire Wolf",
		challenge: "1",
		xp: "200",
		source: "mm 321"
	},
	{
		name: "Dryad",
		challenge: "1",
		xp: "200",
		source: "mm 121"
	},
	{
		name: "Duergar",
		challenge: "1",
		xp: "200",
		source: "mm 122"
	},
	{
		name: "Duergar Soulblade",
		challenge: "1",
		xp: "200",
		source: "mtf 190"
	},
	{
		name: "Female Steeder",
		challenge: "1",
		xp: "200",
		source: "mtf 238"
	},
	{
		name: "Fire Snake",
		challenge: "1",
		xp: "200",
		source: "mm 265"
	},
	{
		name: "Firenewt Warlock of Imix",
		challenge: "1",
		xp: "200",
		source: "vgm 143"
	},
	{
		name: "Ghoul",
		challenge: "1",
		xp: "200",
		source: "mm 148"
	},
	{
		name: "Giant Eagle",
		challenge: "1",
		xp: "200",
		source: "mm 324"
	},
	{
		name: "Giant Hyena",
		challenge: "1",
		xp: "200",
		source: "mm 326"
	},
	{
		name: "Giant Octopus",
		challenge: "1",
		xp: "200",
		source: "mm 326"
	},
	{
		name: "Giant Spider",
		challenge: "1",
		xp: "200",
		source: "mm 328"
	},
	{
		name: "Giant Strider",
		challenge: "1",
		xp: "200",
		source: "vgm 143"
	},
	{
		name: "Giant Toad",
		challenge: "1",
		xp: "200",
		source: "mm 329"
	},
	{
		name: "Giant Vulture",
		challenge: "1",
		xp: "200",
		source: "mm 329"
	},
	{
		name: "Gnoll Flesh Gnawer",
		challenge: "1",
		xp: "200",
		source: "vgm 154"
	},
	{
		name: "Goblin Boss",
		challenge: "1",
		xp: "200",
		source: "mm 166"
	},
	{
		name: "Grung Wildling",
		challenge: "1",
		xp: "200",
		source: "vgm 157"
	},
	{
		name: "Half-ogre",
		challenge: "1",
		xp: "200",
		source: "mm 238"
	},
	{
		name: "Harpy",
		challenge: "1",
		xp: "200",
		source: "mm 181"
	},
	{
		name: "Hippogriff",
		challenge: "1",
		xp: "200",
		source: "mm 184"
	},
	{
		name: "Imp",
		challenge: "1",
		xp: "200",
		source: "mm 76"
	},
	{
		name: "Kobold Dragonshield",
		challenge: "1",
		xp: "200",
		source: "vgm 165"
	},
	{
		name: "Kobold Scale Sorcerer",
		challenge: "1",
		xp: "200",
		source: "vgm 167"
	},
	{
		name: "Kuo-toa Whip",
		challenge: "1",
		xp: "200",
		source: "mm 200"
	},
	{
		name: "Lion",
		challenge: "1",
		xp: "200",
		source: "mm 331"
	},
	{
		name: "Maw Demon",
		challenge: "1",
		xp: "200",
		source: "vgm 137"
	},
	{
		name: "Meazel",
		challenge: "1",
		xp: "200",
		source: "mtf 214"
	},
	{
		name: "Nilbog",
		challenge: "1",
		xp: "200",
		source: "vgm 182"
	},
	{
		name: "Quadrone",
		challenge: "1",
		xp: "200",
		source: "mm 226"
	},
	{
		name: "Quaggoth Spore Servant",
		challenge: "1",
		xp: "200",
		source: "mm 230"
	},
	{
		name: "Quasit",
		challenge: "1",
		xp: "200",
		source: "mm 63"
	},
	{
		name: "Quickling",
		challenge: "1",
		xp: "200",
		source: "vgm 187"
	},
	{
		name: "Scarecrow",
		challenge: "1",
		xp: "200",
		source: "mm 268"
	},
	{
		name: "Sea Spawn",
		challenge: "1",
		xp: "200",
		source: "vgm 189"
	},
	{
		name: "Specter",
		challenge: "1",
		xp: "200",
		source: "mm 279"
	},
	{
		name: "Spy",
		challenge: "1",
		xp: "200",
		source: "mm 349"
	},
	{
		name: "Stone Cursed",
		challenge: "1",
		xp: "200",
		source: "mtf 240"
	},
	{
		name: "Swarm of Quippers",
		challenge: "1",
		xp: "200",
		source: "mm 338"
	},
	{
		name: "Thorny",
		challenge: "1",
		xp: "200",
		source: "vgm 197"
	},
	{
		name: "Thri-kreen",
		challenge: "1",
		xp: "200",
		source: "mm 288"
	},
	{
		name: "Tiger",
		challenge: "1",
		xp: "200",
		source: "mm 339"
	},
	{
		name: "Vargouille",
		challenge: "1",
		xp: "200",
		source: "vgm 195"
	},
	{
		name: "Xvart Warlock of Raxivort",
		challenge: "1",
		xp: "200",
		source: "vgm 200"
	},
	{
		name: "Young Faerie Dragon",
		challenge: "1",
		xp: "200",
		source: "mm 133"
	},
	{
		name: "Yuan-ti Pureblood",
		challenge: "1",
		xp: "200",
		source: "mm 310"
	},
	{
		name: "Adult Faerie Dragon",
		challenge: "2",
		xp: "450",
		source: "mm 133"
	},
	{
		name: "Adult Kruthik",
		challenge: "2",
		xp: "450",
		source: "mtf 212"
	},
	{
		name: "Allosaurus",
		challenge: "2",
		xp: "450",
		source: "mm 79"
	},
	{
		name: "Ankheg",
		challenge: "2",
		xp: "450",
		source: "mm 21"
	},
	{
		name: "Aurochs",
		challenge: "2",
		xp: "450",
		source: "vgm 207"
	},
	{
		name: "Awakened Tree",
		challenge: "2",
		xp: "450",
		source: "mm 317"
	},
	{
		name: "Azer",
		challenge: "2",
		xp: "450",
		source: "mm 22"
	},
	{
		name: "Bandit Captain",
		challenge: "2",
		xp: "450",
		source: "mm 344"
	},
	{
		name: "Bard",
		challenge: "2",
		xp: "450",
		source: "vgm 211"
	},
	{
		name: "Berbalang",
		challenge: "2",
		xp: "450",
		source: "mtf 120"
	},
	{
		name: "Berserker",
		challenge: "2",
		xp: "450",
		source: "mm 344"
	},
	{
		name: "Black Dragon Wyrmling",
		challenge: "2",
		xp: "450",
		source: "mm 88"
	},
	{
		name: "Bronze Dragon Wyrmling",
		challenge: "2",
		xp: "450",
		source: "mm 109"
	},
	{
		name: "Carrion Crawler",
		challenge: "2",
		xp: "450",
		source: "mm 37"
	},
	{
		name: "Cave Bear",
		challenge: "2",
		xp: "450",
		source: "mm 334"
	},
	{
		name: "Centaur",
		challenge: "2",
		xp: "450",
		source: "mm 38"
	},
	{
		name: "Cult Fanatic",
		challenge: "2",
		xp: "450",
		source: "mm 345"
	},
	{
		name: "Darkling Elder",
		challenge: "2",
		xp: "450",
		source: "vgm 134"
	},
	{
		name: "Druid",
		challenge: "2",
		xp: "450",
		source: "mm 346"
	},
	{
		name: "Duergar Hammerer",
		challenge: "2",
		xp: "450",
		source: "mtf 188"
	},
	{
		name: "Duergar Kavalrachni",
		challenge: "2",
		xp: "450",
		source: "mtf 189"
	},
	{
		name: "Duergar Mind Master",
		challenge: "2",
		xp: "450",
		source: "mtf 189"
	},
	{
		name: "Duergar Stone Guard",
		challenge: "2",
		xp: "450",
		source: "mtf 191"
	},
	{
		name: "Duergar Xarrorn",
		challenge: "2",
		xp: "450",
		source: "mtf 193"
	},
	{
		name: "Ettercap",
		challenge: "2",
		xp: "450",
		source: "mm 131"
	},
	{
		name: "Gargoyle",
		challenge: "2",
		xp: "450",
		source: "mm 140"
	},
	{
		name: "Gelatinous Cube",
		challenge: "2",
		xp: "450",
		source: "mm 242"
	},
	{
		name: "Ghast",
		challenge: "2",
		xp: "450",
		source: "mm 148"
	},
	{
		name: "Giant Boar",
		challenge: "2",
		xp: "450",
		source: "mm 323"
	},
	{
		name: "Giant Constrictor Snake",
		challenge: "2",
		xp: "450",
		source: "mm 324"
	},
	{
		name: "Giant Elk",
		challenge: "2",
		xp: "450",
		source: "mm 325"
	},
	{
		name: "Gibbering Mouther",
		challenge: "2",
		xp: "450",
		source: "mm 157"
	},
	{
		name: "Githzerai Monk",
		challenge: "2",
		xp: "450",
		source: "mm 161"
	},
	{
		name: "Gnoll Pack Lord",
		challenge: "2",
		xp: "450",
		source: "mm 163"
	},
	{
		name: "Green Dragon Wyrmling",
		challenge: "2",
		xp: "450",
		source: "mm 95"
	},
	{
		name: "Grick",
		challenge: "2",
		xp: "450",
		source: "mm 173"
	},
	{
		name: "Griffon",
		challenge: "2",
		xp: "450",
		source: "mm 174"
	},
	{
		name: "Grung Elite Warrior",
		challenge: "2",
		xp: "450",
		source: "vgm 157"
	},
	{
		name: "Guard Drake",
		challenge: "2",
		xp: "450",
		source: "vgm 158"
	},
	{
		name: "Hobgoblin Iron Shadow",
		challenge: "2",
		xp: "450",
		source: "vgm 162"
	},
	{
		name: "Hunter Shark",
		challenge: "2",
		xp: "450",
		source: "mm 330"
	},
	{
		name: "Intellect Devourer",
		challenge: "2",
		xp: "450",
		source: "mm 191"
	},
	{
		name: "Lizardfolk Shaman",
		challenge: "2",
		xp: "450",
		source: "mm 205"
	},
	{
		name: "Meenlock",
		challenge: "2",
		xp: "450",
		source: "vgm 170"
	},
	{
		name: "Merrow",
		challenge: "2",
		xp: "450",
		source: "mm 219"
	},
	{
		name: "Mimic",
		challenge: "2",
		xp: "450",
		source: "mm 220"
	},
	{
		name: "Minotaur Skeleton",
		challenge: "2",
		xp: "450",
		source: "mm 273"
	},
	{
		name: "Myconid Sovereign",
		challenge: "2",
		xp: "450",
		source: "mm 232"
	},
	{
		name: "Nothic",
		challenge: "2",
		xp: "450",
		source: "mm 236"
	},
	{
		name: "Ochre Jelly",
		challenge: "2",
		xp: "450",
		source: "mm 243"
	},
	{
		name: "Ogre",
		challenge: "2",
		xp: "450",
		source: "mm 237"
	},
	{
		name: "Ogre Bolt Launcher",
		challenge: "2",
		xp: "450",
		source: "mtf 220"
	},
	{
		name: "Ogre Howdah",
		challenge: "2",
		xp: "450",
		source: "mtf 221"
	},
	{
		name: "Ogre Zombie",
		challenge: "2",
		xp: "450",
		source: "mm 316"
	},
	{
		name: "Orc Claw of Luthic",
		challenge: "2",
		xp: "450",
		source: "vgm 183"
	},
	{
		name: "Orc Eye of Gruumsh",
		challenge: "2",
		xp: "450",
		source: "mm 247"
	},
	{
		name: "Orc Hand of Yurtrus",
		challenge: "2",
		xp: "450",
		source: "vgm 184"
	},
	{
		name: "Orog",
		challenge: "2",
		xp: "450",
		source: "mm 247"
	},
	{
		name: "Pegasus",
		challenge: "2",
		xp: "450",
		source: "mm 250"
	},
	{
		name: "Pentadrone",
		challenge: "2",
		xp: "450",
		source: "mm 226"
	},
	{
		name: "Peryton",
		challenge: "2",
		xp: "450",
		source: "mm 251"
	},
	{
		name: "Plesiosaurus",
		challenge: "2",
		xp: "450",
		source: "mm 80"
	},
	{
		name: "Polar Bear",
		challenge: "2",
		xp: "450",
		source: "mm 334"
	},
	{
		name: "Priest",
		challenge: "2",
		xp: "450",
		source: "mm 348"
	},
	{
		name: "Quaggoth",
		challenge: "2",
		xp: "450",
		source: "mm 256"
	},
	{
		name: "Quetzalcoatlus",
		challenge: "2",
		xp: "450",
		source: "vgm 140"
	},
	{
		name: "Rhinoceros",
		challenge: "2",
		xp: "450",
		source: "mm 336"
	},
	{
		name: "Rug of Smothering",
		challenge: "2",
		xp: "450",
		source: "mm 20"
	},
	{
		name: "Rutterkin",
		challenge: "2",
		xp: "450",
		source: "mtf 136"
	},
	{
		name: "Saber-toothed Tiger",
		challenge: "2",
		xp: "450",
		source: "mm 336"
	},
	{
		name: "Sahuagin Priestess",
		challenge: "2",
		xp: "450",
		source: "mm 264"
	},
	{
		name: "Sea Hag",
		challenge: "2",
		xp: "450",
		source: "mm 179"
	},
	{
		name: "Shadow Mastiff",
		challenge: "2",
		xp: "450",
		source: "vgm 190"
	},
	{
		name: "Silver Dragon Wyrmling",
		challenge: "2",
		xp: "450",
		source: "mm 118"
	},
	{
		name: "Specter (poltergeist)",
		challenge: "2",
		xp: "450",
		source: "mm 279"
	},
	{
		name: "Spined Devil",
		challenge: "2",
		xp: "450",
		source: "mm 78"
	},
	{
		name: "Swarm of Poisonous Snakes",
		challenge: "2",
		xp: "450",
		source: "mm 338"
	},
	{
		name: "Tortle Druid",
		challenge: "2",
		xp: "450",
		source: "mtf 242"
	},
	{
		name: "Vegepygmy Chief",
		challenge: "2",
		xp: "450",
		source: "vgm 197"
	},
	{
		name: "Wererat",
		challenge: "2",
		xp: "450",
		source: "mm 209"
	},
	{
		name: "White Dragon Wyrmling",
		challenge: "2",
		xp: "450",
		source: "mm 102"
	},
	{
		name: "Will-o-wisp",
		challenge: "2",
		xp: "450",
		source: "mm 301"
	},
	{
		name: "Yuan-ti Broodguard",
		challenge: "2",
		xp: "450",
		source: "vgm 203"
	},
	{
		name: "Ankylosaurus",
		challenge: "3",
		xp: "700",
		source: "mm 79"
	},
	{
		name: "Archer",
		challenge: "3",
		xp: "700",
		source: "vgm 210"
	},
	{
		name: "Basilisk",
		challenge: "3",
		xp: "700",
		source: "mm 24"
	},
	{
		name: "Bearded Devil",
		challenge: "3",
		xp: "700",
		source: "mm 70"
	},
	{
		name: "Blue Dragon Wyrmling",
		challenge: "3",
		xp: "700",
		source: "mm 91"
	},
	{
		name: "Bugbear Chief",
		challenge: "3",
		xp: "700",
		source: "mm 33"
	},
	{
		name: "Bulezau",
		challenge: "3",
		xp: "700",
		source: "mtf 131"
	},
	{
		name: "Cave Fisher",
		challenge: "3",
		xp: "700",
		source: "vgm 130"
	},
	{
		name: "Choldrith",
		challenge: "3",
		xp: "700",
		source: "vgm 132"
	},
	{
		name: "Deathlock Wight",
		challenge: "3",
		xp: "700",
		source: "mtf 129"
	},
	{
		name: "Deep Scion",
		challenge: "3",
		xp: "700",
		source: "vgm 135"
	},
	{
		name: "Derro Savant",
		challenge: "3",
		xp: "700",
		source: "mtf 159"
	},
	{
		name: "Displacer Beast",
		challenge: "3",
		xp: "700",
		source: "mm 81"
	},
	{
		name: "Doppelganger",
		challenge: "3",
		xp: "700",
		source: "mm 82"
	},
	{
		name: "Duergar Screamer",
		challenge: "3",
		xp: "700",
		source: "mtf 190"
	},
	{
		name: "Flail Snail",
		challenge: "3",
		xp: "700",
		source: "vgm 144"
	},
	{
		name: "Giant Scorpion",
		challenge: "3",
		xp: "700",
		source: "mm 327"
	},
	{
		name: "Giff",
		challenge: "3",
		xp: "700",
		source: "mtf 204"
	},
	{
		name: "Githyanki Warrior",
		challenge: "3",
		xp: "700",
		source: "mm 160"
	},
	{
		name: "Gold Dragon Wyrmling",
		challenge: "3",
		xp: "700",
		source: "mm 115"
	},
	{
		name: "Green Hag",
		challenge: "3",
		xp: "700",
		source: "mm 177"
	},
	{
		name: "Grell",
		challenge: "3",
		xp: "700",
		source: "mm 172"
	},
	{
		name: "Hell Hound",
		challenge: "3",
		xp: "700",
		source: "mm 182"
	},
	{
		name: "Hobgoblin Captain",
		challenge: "3",
		xp: "700",
		source: "mm 186"
	},
	{
		name: "Hook Horror",
		challenge: "3",
		xp: "700",
		source: "mm 189"
	},
	{
		name: "Illusionist",
		challenge: "3",
		xp: "700",
		source: "vgm 214"
	},
	{
		name: "Killer Whale",
		challenge: "3",
		xp: "700",
		source: "mm 331"
	},
	{
		name: "Knight",
		challenge: "3",
		xp: "700",
		source: "mm 347"
	},
	{
		name: "Leucrotta",
		challenge: "3",
		xp: "700",
		source: "vgm 169"
	},
	{
		name: "Manticore",
		challenge: "3",
		xp: "700",
		source: "mm 213"
	},
	{
		name: "Martial Arts Adept",
		challenge: "3",
		xp: "700",
		source: "vgm 216"
	},
	{
		name: "Merrenoloth",
		challenge: "3",
		xp: "700",
		source: "mtf 250"
	},
	{
		name: "Minotaur",
		challenge: "3",
		xp: "700",
		source: "mm 223"
	},
	{
		name: "Mummy",
		challenge: "3",
		xp: "700",
		source: "mm 228"
	},
	{
		name: "Neogi",
		challenge: "3",
		xp: "700",
		source: "vgm 180"
	},
	{
		name: "Nightmare",
		challenge: "3",
		xp: "700",
		source: "mm 235"
	},
	{
		name: "Ogre Chain Brute",
		challenge: "3",
		xp: "700",
		source: "mtf 221"
	},
	{
		name: "Orc Red Fang of Shargaas",
		challenge: "3",
		xp: "700",
		source: "vgm 185"
	},
	{
		name: "Owlbear",
		challenge: "3",
		xp: "700",
		source: "mm 249"
	},
	{
		name: "Phase Spider",
		challenge: "3",
		xp: "700",
		source: "mm 334"
	},
	{
		name: "Quaggoth Thonot",
		challenge: "3",
		xp: "700",
		source: "mm 256"
	},
	{
		name: "Redcap",
		challenge: "3",
		xp: "700",
		source: "vgm 188"
	},
	{
		name: "Slithering Tracker",
		challenge: "3",
		xp: "700",
		source: "vgm 191"
	},
	{
		name: "Spectator",
		challenge: "3",
		xp: "700",
		source: "mm 30"
	},
	{
		name: "Swashbuckler",
		challenge: "3",
		xp: "700",
		source: "vgm 217"
	},
	{
		name: "Sword Wraith Warrior",
		challenge: "3",
		xp: "700",
		source: "mtf 241"
	},
	{
		name: "Trapper",
		challenge: "3",
		xp: "700",
		source: "vgm 194"
	},
	{
		name: "Vampiric Mist",
		challenge: "3",
		xp: "700",
		source: "mtf 246"
	},
	{
		name: "Veteran",
		challenge: "3",
		xp: "700",
		source: "mm 350"
	},
	{
		name: "Water Weird",
		challenge: "3",
		xp: "700",
		source: "mm 299"
	},
	{
		name: "Werewolf",
		challenge: "3",
		xp: "700",
		source: "mm 211"
	},
	{
		name: "Wight",
		challenge: "3",
		xp: "700",
		source: "mm 300"
	},
	{
		name: "Winter Wolf",
		challenge: "3",
		xp: "700",
		source: "mm 340"
	},
	{
		name: "Yeti",
		challenge: "3",
		xp: "700",
		source: "mm 305"
	},
	{
		name: "Yuan-ti Malison",
		challenge: "3",
		xp: "700",
		source: "mm 309"
	},
	{
		name: "Babau",
		challenge: "4",
		xp: "1100",
		source: "vgm 136"
	},
	{
		name: "Banshee",
		challenge: "4",
		xp: "1100",
		source: "mm 23"
	},
	{
		name: "Barghest",
		challenge: "4",
		xp: "1100",
		source: "vgm 123"
	},
	{
		name: "Black Pudding",
		challenge: "4",
		xp: "1100",
		source: "mm 241"
	},
	{
		name: "Bone Naga",
		challenge: "4",
		xp: "1100",
		source: "mm 233"
	},
	{
		name: "Chuul",
		challenge: "4",
		xp: "1100",
		source: "mm 40"
	},
	{
		name: "Couatl",
		challenge: "4",
		xp: "1100",
		source: "mm 43"
	},
	{
		name: "Deathlock",
		challenge: "4",
		xp: "1100",
		source: "mtf 128"
	},
	{
		name: "Dybbuk",
		challenge: "4",
		xp: "1100",
		source: "mtf 132"
	},
	{
		name: "Elephant",
		challenge: "4",
		xp: "1100",
		source: "mm 322"
	},
	{
		name: "Ettin",
		challenge: "4",
		xp: "1100",
		source: "mm 132"
	},
	{
		name: "Flameskull",
		challenge: "4",
		xp: "1100",
		source: "mm 134"
	},
	{
		name: "Ghost",
		challenge: "4",
		xp: "1100",
		source: "mm 147"
	},
	{
		name: "Girallon",
		challenge: "4",
		xp: "1100",
		source: "vgm 152"
	},
	{
		name: "Gnoll Fang of Yeenoghu",
		challenge: "4",
		xp: "1100",
		source: "mm 163"
	},
	{
		name: "Helmed Horror",
		challenge: "4",
		xp: "1100",
		source: "mm 183"
	},
	{
		name: "Hobgoblin Devastator",
		challenge: "4",
		xp: "1100",
		source: "vgm 161"
	},
	{
		name: "Incubus",
		challenge: "4",
		xp: "1100",
		source: "mm 285"
	},
	{
		name: "Iron Cobra",
		challenge: "4",
		xp: "1100",
		source: "mtf 125"
	},
	{
		name: "Lamia",
		challenge: "4",
		xp: "1100",
		source: "mm 201"
	},
	{
		name: "Lizard King/Queen",
		challenge: "4",
		xp: "1100",
		source: "mm 205"
	},
	{
		name: "Merregon",
		challenge: "4",
		xp: "1100",
		source: "mtf 166"
	},
	{
		name: "Neogi Master",
		challenge: "4",
		xp: "1100",
		source: "vgm 180"
	},
	{
		name: "Ogre Battering Ram",
		challenge: "4",
		xp: "1100",
		source: "mtf 220"
	},
	{
		name: "Orc Blade of Ilneval",
		challenge: "4",
		xp: "1100",
		source: "vgm 183"
	},
	{
		name: "Orc War Chief",
		challenge: "4",
		xp: "1100",
		source: "mm 246"
	},
	{
		name: "Red Dragon Wyrmling",
		challenge: "4",
		xp: "1100",
		source: "mm 98"
	},
	{
		name: "Shadow Demon",
		challenge: "4",
		xp: "1100",
		source: "mm 64"
	},
	{
		name: "Stegosaurus",
		challenge: "4",
		xp: "1100",
		source: "vgm 140"
	},
	{
		name: "Stone Defender",
		challenge: "4",
		xp: "1100",
		source: "mtf 126"
	},
	{
		name: "Succubus",
		challenge: "4",
		xp: "1100",
		source: "mm 285"
	},
	{
		name: "Warlock of the Archfey",
		challenge: "4",
		xp: "1100",
		source: "vgm 219"
	},
	{
		name: "Wereboar",
		challenge: "4",
		xp: "1100",
		source: "mm 209"
	},
	{
		name: "Weretiger",
		challenge: "4",
		xp: "1100",
		source: "mm 210"
	},
	{
		name: "Yeth Hound",
		challenge: "4",
		xp: "1100",
		source: "vgm 201"
	},
	{
		name: "Yuan-ti Mind Whisperer",
		challenge: "4",
		xp: "1100",
		source: "vgm 204"
	},
	{
		name: "Yuan-ti Nightmare Speaker",
		challenge: "4",
		xp: "1100",
		source: "vgm 205"
	},
	{
		name: "Adult Oblex",
		challenge: "5",
		xp: "1800",
		source: "mtf 218"
	},
	{
		name: "Air Elemental",
		challenge: "5",
		xp: "1800",
		source: "mm 124"
	},
	{
		name: "Allip",
		challenge: "5",
		xp: "1800",
		source: "mtf 116"
	},
	{
		name: "Banderhobb",
		challenge: "5",
		xp: "1800",
		source: "vgm 122"
	},
	{
		name: "Barbed Devil",
		challenge: "5",
		xp: "1800",
		source: "mm 70"
	},
	{
		name: "Barlgura",
		challenge: "5",
		xp: "1800",
		source: "mm 56"
	},
	{
		name: "Beholder Zombie",
		challenge: "5",
		xp: "1800",
		source: "mm 316"
	},
	{
		name: "Brontosaurus",
		challenge: "5",
		xp: "1800",
		source: "vgm 139"
	},
	{
		name: "Bulette",
		challenge: "5",
		xp: "1800",
		source: "mm 34"
	},
	{
		name: "Cambion",
		challenge: "5",
		xp: "1800",
		source: "mm 36"
	},
	{
		name: "Catoblepas",
		challenge: "5",
		xp: "1800",
		source: "vgm 129"
	},
	{
		name: "Drow Elite Warrior",
		challenge: "5",
		xp: "1800",
		source: "mm 128"
	},
	{
		name: "Earth Elemental",
		challenge: "5",
		xp: "1800",
		source: "mm 124"
	},
	{
		name: "Enchanter",
		challenge: "5",
		xp: "1800",
		source: "vgm 213"
	},
	{
		name: "Fire Elemental",
		challenge: "5",
		xp: "1800",
		source: "mm 125"
	},
	{
		name: "Flesh Golem",
		challenge: "5",
		xp: "1800",
		source: "mm 169"
	},
	{
		name: "Giant Crocodile",
		challenge: "5",
		xp: "1800",
		source: "mm 324"
	},
	{
		name: "Giant Shark",
		challenge: "5",
		xp: "1800",
		source: "mm 328"
	},
	{
		name: "Gladiator",
		challenge: "5",
		xp: "1800",
		source: "mm 346"
	},
	{
		name: "Gorgon",
		challenge: "5",
		xp: "1800",
		source: "mm 171"
	},
	{
		name: "Half-Red Dragon Veteran",
		challenge: "5",
		xp: "1800",
		source: "mm 180"
	},
	{
		name: "Hill Giant",
		challenge: "5",
		xp: "1800",
		source: "mm 155"
	},
	{
		name: "Kraken Priest",
		challenge: "5",
		xp: "1800",
		source: "vgm 215"
	},
	{
		name: "Kruthik Hive Lord",
		challenge: "5",
		xp: "1800",
		source: "mtf 212"
	},
	{
		name: "Master Thief",
		challenge: "5",
		xp: "1800",
		source: "vgm 216"
	},
	{
		name: "Mezzoloth",
		challenge: "5",
		xp: "1800",
		source: "mm 313"
	},
	{
		name: "Mindwitness",
		challenge: "5",
		xp: "1800",
		source: "vgm 176"
	},
	{
		name: "Night Hag",
		challenge: "5",
		xp: "1800",
		source: "mm 178"
	},
	{
		name: "Oaken Bolter",
		challenge: "5",
		xp: "1800",
		source: "mtf 126"
	},
	{
		name: "Otyugh",
		challenge: "5",
		xp: "1800",
		source: "mm 248"
	},
	{
		name: "Red Slaad",
		challenge: "5",
		xp: "1800",
		source: "mm 276"
	},
	{
		name: "Revenant",
		challenge: "5",
		xp: "1800",
		source: "mm 259"
	},
	{
		name: "Roper",
		challenge: "5",
		xp: "1800",
		source: "mm 261"
	},
	{
		name: "Sahuagin Baron",
		challenge: "5",
		xp: "1800",
		source: "mm 264"
	},
	{
		name: "Salamander",
		challenge: "5",
		xp: "1800",
		source: "mm 266"
	},
	{
		name: "Shambling Mound",
		challenge: "5",
		xp: "1800",
		source: "mm 270"
	},
	{
		name: "Spawn of Kyuss",
		challenge: "5",
		xp: "1800",
		source: "vgm 192"
	},
	{
		name: "Star Spawn Mangler",
		challenge: "5",
		xp: "1800",
		source: "mtf 236"
	},
	{
		name: "Swarm of Cranium Rats",
		challenge: "5",
		xp: "1800",
		source: "vgm 133"
	},
	{
		name: "Tanarukk",
		challenge: "5",
		xp: "1800",
		source: "vgm 186"
	},
	{
		name: "Tlincalli",
		challenge: "5",
		xp: "1800",
		source: "vgm 193"
	},
	{
		name: "Transmuter",
		challenge: "5",
		xp: "1800",
		source: "vgm 218"
	},
	{
		name: "Triceratops",
		challenge: "5",
		xp: "1800",
		source: "mm 80"
	},
	{
		name: "Troll",
		challenge: "5",
		xp: "1800",
		source: "mm 291"
	},
	{
		name: "Umber Hulk",
		challenge: "5",
		xp: "1800",
		source: "mm 292"
	},
	{
		name: "Unicorn",
		challenge: "5",
		xp: "1800",
		source: "mm 294"
	},
	{
		name: "Vampire Spawn",
		challenge: "5",
		xp: "1800",
		source: "mm 298"
	},
	{
		name: "Water Elemental",
		challenge: "5",
		xp: "1800",
		source: "mm 125"
	},
	{
		name: "Werebear",
		challenge: "5",
		xp: "1800",
		source: "mm 208"
	},
	{
		name: "Wood Woad",
		challenge: "5",
		xp: "1800",
		source: "vgm 198"
	},
	{
		name: "Wraith",
		challenge: "5",
		xp: "1800",
		source: "mm 302"
	},
	{
		name: "Xorn",
		challenge: "5",
		xp: "1800",
		source: "mm 304"
	},
	{
		name: "Young Remorhaz",
		challenge: "5",
		xp: "1800",
		source: "mm 258"
	},
	{
		name: "Yuan-ti Pit Master",
		challenge: "5",
		xp: "1800",
		source: "vgm 206"
	},
	{
		name: "Annis Hag",
		challenge: "6",
		xp: "2300",
		source: "vgm 159"
	},
	{
		name: "Bodak",
		challenge: "6",
		xp: "2300",
		source: "vgm 127"
	},
	{
		name: "Chasme",
		challenge: "6",
		xp: "2300",
		source: "mm 57"
	},
	{
		name: "Chimera",
		challenge: "6",
		xp: "2300",
		source: "mm 39"
	},
	{
		name: "Conjurer",
		challenge: "6",
		xp: "2300",
		source: "vgm 212"
	},
	{
		name: "Cyclops",
		challenge: "6",
		xp: "2300",
		source: "mm 45"
	},
	{
		name: "Drider",
		challenge: "6",
		xp: "2300",
		source: "mm 120"
	},
	{
		name: "Duergar Warlord",
		challenge: "6",
		xp: "2300",
		source: "mtf 192"
	},
	{
		name: "Galeb Duhr",
		challenge: "6",
		xp: "2300",
		source: "mm 139"
	},
	{
		name: "Gauth",
		challenge: "6",
		xp: "2300",
		source: "vgm 125"
	},
	{
		name: "Githzerai Zerth",
		challenge: "6",
		xp: "2300",
		source: "mm 161"
	},
	{
		name: "Hobgoblin Warlord",
		challenge: "6",
		xp: "2300",
		source: "mm 187"
	},
	{
		name: "Invisible Stalker",
		challenge: "6",
		xp: "2300",
		source: "mm 192"
	},
	{
		name: "Kuo-toa Archpriest",
		challenge: "6",
		xp: "2300",
		source: "mm 200"
	},
	{
		name: "Mage",
		challenge: "6",
		xp: "2300",
		source: "mm 347"
	},
	{
		name: "Mammoth",
		challenge: "6",
		xp: "2300",
		source: "mm 332"
	},
	{
		name: "Medusa",
		challenge: "6",
		xp: "2300",
		source: "mm 214"
	},
	{
		name: "Mouth of Grolantor",
		challenge: "6",
		xp: "2300",
		source: "vgm 149"
	},
	{
		name: "Vrock",
		challenge: "6",
		xp: "2300",
		source: "mm 64"
	},
	{
		name: "Warlock of the Great Old One",
		challenge: "6",
		xp: "2300",
		source: "vgm 220"
	},
	{
		name: "White Abishai",
		challenge: "6",
		xp: "2300",
		source: "mtf 163"
	},
	{
		name: "Wyvern",
		challenge: "6",
		xp: "2300",
		source: "mm 303"
	},
	{
		name: "Young Brass Dragon",
		challenge: "6",
		xp: "2300",
		source: "mm 105"
	},
	{
		name: "Young White Dragon",
		challenge: "6",
		xp: "2300",
		source: "mm 101"
	},
	{
		name: "Air Elemental Myrmidon",
		challenge: "7",
		xp: "2900",
		source: "mtf 202"
	},
	{
		name: "Armanite",
		challenge: "7",
		xp: "2900",
		source: "mtf 131"
	},
	{
		name: "Bheur Hag",
		challenge: "7",
		xp: "2900",
		source: "vgm 160"
	},
	{
		name: "Black Abishai",
		challenge: "7",
		xp: "2900",
		source: "mtf 160"
	},
	{
		name: "Blue Slaad",
		challenge: "7",
		xp: "2900",
		source: "mm 276"
	},
	{
		name: "Dhergoloth",
		challenge: "7",
		xp: "2900",
		source: "mtf 248"
	},
	{
		name: "Draegloth",
		challenge: "7",
		xp: "2900",
		source: "vgm 141"
	},
	{
		name: "Drow Mage",
		challenge: "7",
		xp: "2900",
		source: "mm 129"
	},
	{
		name: "Earth Elemental Myrmidon",
		challenge: "7",
		xp: "2900",
		source: "mtf 202"
	},
	{
		name: "Fire Elemental Myrmidon",
		challenge: "7",
		xp: "2900",
		source: "mtf 203"
	},
	{
		name: "Giant Ape",
		challenge: "7",
		xp: "2900",
		source: "mm 323"
	},
	{
		name: "Grick Alpha",
		challenge: "7",
		xp: "2900",
		source: "mm 173"
	},
	{
		name: "Korred",
		challenge: "7",
		xp: "2900",
		source: "vgm 168"
	},
	{
		name: "Lost Sorrowsworn",
		challenge: "7",
		xp: "2900",
		source: "mtf 233"
	},
	{
		name: "Maurezhi",
		challenge: "7",
		xp: "2900",
		source: "mtf 133"
	},
	{
		name: "Mind Flayer",
		challenge: "7",
		xp: "2900",
		source: "mm 222"
	},
	{
		name: "Oni",
		challenge: "7",
		xp: "2900",
		source: "mm 239"
	},
	{
		name: "Shadow Dancer",
		challenge: "7",
		xp: "2900",
		source: "mtf 225"
	},
	{
		name: "Shield Guardian",
		challenge: "7",
		xp: "2900",
		source: "mm 271"
	},
	{
		name: "Stone Giant",
		challenge: "7",
		xp: "2900",
		source: "mm 156"
	},
	{
		name: "Venom Troll",
		challenge: "7",
		xp: "2900",
		source: "mtf 245"
	},
	{
		name: "Warlock of the Fiend",
		challenge: "7",
		xp: "2900",
		source: "vgm 219"
	},
	{
		name: "Water Elemental Myrmidon",
		challenge: "7",
		xp: "2900",
		source: "mtf 203"
	},
	{
		name: "Young Black Dragon",
		challenge: "7",
		xp: "2900",
		source: "mm 88"
	},
	{
		name: "Young Copper Dragon",
		challenge: "7",
		xp: "2900",
		source: "mm 111"
	},
	{
		name: "Yuan-ti Abomination",
		challenge: "7",
		xp: "2900",
		source: "mm 308"
	},
	{
		name: "Assassin",
		challenge: "8",
		xp: "3900",
		source: "mm 343"
	},
	{
		name: "Blackguard",
		challenge: "8",
		xp: "3900",
		source: "vgm 211"
	},
	{
		name: "Canoloth",
		challenge: "8",
		xp: "3900",
		source: "mtf 247"
	},
	{
		name: "Chain Devil",
		challenge: "8",
		xp: "3900",
		source: "mm 72"
	},
	{
		name: "Cloaker",
		challenge: "8",
		xp: "3900",
		source: "mm 41"
	},
	{
		name: "Corpse Flower",
		challenge: "8",
		xp: "3900",
		source: "mtf 127"
	},
	{
		name: "Deathlock Mastermind",
		challenge: "8",
		xp: "3900",
		source: "mtf 129"
	},
	{
		name: "Diviner",
		challenge: "8",
		xp: "3900",
		source: "vgm 213"
	},
	{
		name: "Drow Priestess of Lolth",
		challenge: "8",
		xp: "3900",
		source: "mm 129"
	},
	{
		name: "Fomorian",
		challenge: "8",
		xp: "3900",
		source: "mm 136"
	},
	{
		name: "Frost Giant",
		challenge: "8",
		xp: "3900",
		source: "mm 155"
	},
	{
		name: "Githyanki Knight",
		challenge: "8",
		xp: "3900",
		source: "mm 160"
	},
	{
		name: "Green Slaad",
		challenge: "8",
		xp: "3900",
		source: "mm 277"
	},
	{
		name: "Hezrou",
		challenge: "8",
		xp: "3900",
		source: "mm 60"
	},
	{
		name: "Howler",
		challenge: "8",
		xp: "3900",
		source: "mtf 210"
	},
	{
		name: "Hydra",
		challenge: "8",
		xp: "3900",
		source: "mm 190"
	},
	{
		name: "Mind Flayer Arcanist",
		challenge: "8",
		xp: "3900",
		source: "mm 222"
	},
	{
		name: "Shoosuva",
		challenge: "8",
		xp: "3900",
		source: "vgm 137"
	},
	{
		name: "Spirit Naga",
		challenge: "8",
		xp: "3900",
		source: "mm 234"
	},
	{
		name: "Sword Wraith Commander",
		challenge: "8",
		xp: "3900",
		source: "mtf 241"
	},
	{
		name: "Tyrannosaurus Rex",
		challenge: "8",
		xp: "3900",
		source: "mm 80"
	},
	{
		name: "Young Bronze Dragon",
		challenge: "8",
		xp: "3900",
		source: "mm 108"
	},
	{
		name: "Young Green Dragon",
		challenge: "8",
		xp: "3900",
		source: "mm 94"
	},
	{
		name: "Abjurer",
		challenge: "9",
		xp: "5000",
		source: "vgm 209"
	},
	{
		name: "Abominable Yeti",
		challenge: "9",
		xp: "5000",
		source: "mm 306"
	},
	{
		name: "Bone Devil",
		challenge: "9",
		xp: "5000",
		source: "mm 71"
	},
	{
		name: "Champion",
		challenge: "9",
		xp: "5000",
		source: "vgm 212"
	},
	{
		name: "Clay Golem",
		challenge: "9",
		xp: "5000",
		source: "mm 168"
	},
	{
		name: "Cloud Giant",
		challenge: "9",
		xp: "5000",
		source: "mm 154"
	},
	{
		name: "Drow House Captain",
		challenge: "9",
		xp: "5000",
		source: "mtf 184"
	},
	{
		name: "Evoker",
		challenge: "9",
		xp: "5000",
		source: "vgm 214"
	},
	{
		name: "Fire Giant",
		challenge: "9",
		xp: "5000",
		source: "mm 154"
	},
	{
		name: "Flind",
		challenge: "9",
		xp: "5000",
		source: "vgm 153"
	},
	{
		name: "Frost Salamander",
		challenge: "9",
		xp: "5000",
		source: "mtf 223"
	},
	{
		name: "Glabrezu",
		challenge: "9",
		xp: "5000",
		source: "mm 58"
	},
	{
		name: "Gloom Weaver",
		challenge: "9",
		xp: "5000",
		source: "mtf 224"
	},
	{
		name: "Gray Slaad",
		challenge: "9",
		xp: "5000",
		source: "mm 277"
	},
	{
		name: "Hydroloth",
		challenge: "9",
		xp: "5000",
		source: "mtf 249"
	},
	{
		name: "Lonely Sorrowsworn",
		challenge: "9",
		xp: "5000",
		source: "mtf 232"
	},
	{
		name: "Necromancer",
		challenge: "9",
		xp: "5000",
		source: "vgm 217"
	},
	{
		name: "Nycaloth",
		challenge: "9",
		xp: "5000",
		source: "mm 314"
	},
	{
		name: "Rot Troll",
		challenge: "9",
		xp: "5000",
		source: "mtf 244"
	},
	{
		name: "Treant",
		challenge: "9",
		xp: "5000",
		source: "mm 289"
	},
	{
		name: "Ulitharid",
		challenge: "9",
		xp: "5000",
		source: "vgm 175"
	},
	{
		name: "War Priest",
		challenge: "9",
		xp: "5000",
		source: "vgm 218"
	},
	{
		name: "Young Blue Dragon",
		challenge: "9",
		xp: "5000",
		source: "mm 91"
	},
	{
		name: "Young Silver Dragon",
		challenge: "9",
		xp: "5000",
		source: "mm 118"
	},
	{
		name: "Aboleth",
		challenge: "10",
		xp: "5900",
		source: "mm 13"
	},
	{
		name: "Alhoon",
		challenge: "10",
		xp: "5900",
		source: "vgm 172"
	},
	{
		name: "Autumn Eladrin",
		challenge: "10",
		xp: "5900",
		source: "mtf 195"
	},
	{
		name: "Death Kiss",
		challenge: "10",
		xp: "5900",
		source: "vgm 124"
	},
	{
		name: "Death Slaad",
		challenge: "10",
		xp: "5900",
		source: "mm 278"
	},
	{
		name: "Deva",
		challenge: "10",
		xp: "5900",
		source: "mm 16"
	},
	{
		name: "Elder Oblex",
		challenge: "10",
		xp: "5900",
		source: "mtf 219"
	},
	{
		name: "Froghemoth",
		challenge: "10",
		xp: "5900",
		source: "vgm 145"
	},
	{
		name: "Githyanki Gish",
		challenge: "10",
		xp: "5900",
		source: "mtf 205"
	},
	{
		name: "Githzerai Enlightened",
		challenge: "10",
		xp: "5900",
		source: "mtf 208"
	},
	{
		name: "Guardian Naga",
		challenge: "10",
		xp: "5900",
		source: "mm 234"
	},
	{
		name: "Orthon",
		challenge: "10",
		xp: "5900",
		source: "mtf 169"
	},
	{
		name: "Spring Eladrin",
		challenge: "10",
		xp: "5900",
		source: "mtf 196"
	},
	{
		name: "Star Spawn Hulk",
		challenge: "10",
		xp: "5900",
		source: "mtf 234"
	},
	{
		name: "Stone Giant Dreamwalker",
		challenge: "10",
		xp: "5900",
		source: "vgm 150"
	},
	{
		name: "Stone Golem",
		challenge: "10",
		xp: "5900",
		source: "mm 170"
	},
	{
		name: "Summer Eladrin",
		challenge: "10",
		xp: "5900",
		source: "mtf 196"
	},
	{
		name: "Winter Eladrin",
		challenge: "10",
		xp: "5900",
		source: "mtf 197"
	},
	{
		name: "Yochlol",
		challenge: "10",
		xp: "5900",
		source: "mm 65"
	},
	{
		name: "Young Gold Dragon",
		challenge: "10",
		xp: "5900",
		source: "mm 115"
	},
	{
		name: "Young Red Dragon",
		challenge: "10",
		xp: "5900",
		source: "mm 98"
	},
	{
		name: "Alkilith",
		challenge: "11",
		xp: "7200",
		source: "mtf 130"
	},
	{
		name: "Balhannoth",
		challenge: "11",
		xp: "7200",
		source: "mtf 118"
	},
	{
		name: "Behir",
		challenge: "11",
		xp: "7200",
		source: "mm 25"
	},
	{
		name: "Cloud Giant Smiling One",
		challenge: "11",
		xp: "7200",
		source: "vgm 146"
	},
	{
		name: "Dao",
		challenge: "11",
		xp: "7200",
		source: "mm 143"
	},
	{
		name: "Djinni",
		challenge: "11",
		xp: "7200",
		source: "mm 144"
	},
	{
		name: "Drow Shadowblade",
		challenge: "11",
		xp: "7200",
		source: "mtf 187"
	},
	{
		name: "Efreeti",
		challenge: "11",
		xp: "7200",
		source: "mm 145"
	},
	{
		name: "Gynosphinx",
		challenge: "11",
		xp: "7200",
		source: "mm 282"
	},
	{
		name: "Horned Devil",
		challenge: "11",
		xp: "7200",
		source: "mm 74"
	},
	{
		name: "Hungry Sorrowsworn",
		challenge: "11",
		xp: "7200",
		source: "mtf 232"
	},
	{
		name: "Marid",
		challenge: "11",
		xp: "7200",
		source: "mm 146"
	},
	{
		name: "Morkoth",
		challenge: "11",
		xp: "7200",
		source: "vgm 178"
	},
	{
		name: "Remorhaz",
		challenge: "11",
		xp: "7200",
		source: "mm 258"
	},
	{
		name: "Roc",
		challenge: "11",
		xp: "7200",
		source: "mm 260"
	},
	{
		name: "Soul Monger",
		challenge: "11",
		xp: "7200",
		source: "mtf 226"
	},
	{
		name: "Spirit Troll",
		challenge: "11",
		xp: "7200",
		source: "mtf 244"
	},
	{
		name: "Yagnoloth",
		challenge: "11",
		xp: "7200",
		source: "mtf 252"
	},
	{
		name: "Arcanaloth",
		challenge: "12",
		xp: "8400",
		source: "mm 313"
	},
	{
		name: "Archdruid",
		challenge: "12",
		xp: "8400",
		source: "vgm 210"
	},
	{
		name: "Archmage",
		challenge: "12",
		xp: "8400",
		source: "mm 342"
	},
	{
		name: "Boneclaw",
		challenge: "12",
		xp: "8400",
		source: "mtf 121"
	},
	{
		name: "Duergar Despot",
		challenge: "12",
		xp: "8400",
		source: "mtf 188"
	},
	{
		name: "Eidolon",
		challenge: "12",
		xp: "8400",
		source: "mtf 194"
	},
	{
		name: "Erinyes",
		challenge: "12",
		xp: "8400",
		source: "mm 73"
	},
	{
		name: "Frost Giant Everlasting One",
		challenge: "12",
		xp: "8400",
		source: "vgm 148"
	},
	{
		name: "Githyanki Kith'rak",
		challenge: "12",
		xp: "8400",
		source: "mtf 205"
	},
	{
		name: "Gray Render",
		challenge: "12",
		xp: "8400",
		source: "mtf 209"
	},
	{
		name: "Ki-rin",
		challenge: "12",
		xp: "8400",
		source: "vgm 163"
	},
	{
		name: "Morkoth (in lair)",
		challenge: "12",
		xp: "8400",
		source: "vgm 178"
	},
	{
		name: "Oinoloth",
		challenge: "12",
		xp: "8400",
		source: "mtf 251"
	},
	{
		name: "Warlord",
		challenge: "12",
		xp: "8400",
		source: "vgm 220"
	},
	{
		name: "Yuan-ti Anathema",
		challenge: "12",
		xp: "8400",
		source: "vgm 202"
	},
	{
		name: "Adult Brass Dragon",
		challenge: "13",
		xp: "10000",
		source: "mm 105"
	},
	{
		name: "Adult White Dragon",
		challenge: "13",
		xp: "10000",
		source: "mm 101"
	},
	{
		name: "Angry Sorrowsworn",
		challenge: "13",
		xp: "10000",
		source: "mtf 231"
	},
	{
		name: "Beholder",
		challenge: "13",
		xp: "10000",
		source: "mm 28"
	},
	{
		name: "Devourer",
		challenge: "13",
		xp: "10000",
		source: "vgm 138"
	},
	{
		name: "Dire Troll",
		challenge: "13",
		xp: "10000",
		source: "mtf 243"
	},
	{
		name: "Drow Arachnomancer",
		challenge: "13",
		xp: "10000",
		source: "mtf 182"
	},
	{
		name: "Nalfeshnee",
		challenge: "13",
		xp: "10000",
		source: "mm 62"
	},
	{
		name: "Narzugon",
		challenge: "13",
		xp: "10000",
		source: "mtf 167"
	},
	{
		name: "Neothelid",
		challenge: "13",
		xp: "10000",
		source: "vgm 181"
	},
	{
		name: "Rakshasa",
		challenge: "13",
		xp: "10000",
		source: "mm 257"
	},
	{
		name: "Star Spawn Seer",
		challenge: "13",
		xp: "10000",
		source: "mtf 236"
	},
	{
		name: "Storm Giant",
		challenge: "13",
		xp: "10000",
		source: "mm 156"
	},
	{
		name: "Ultroloth",
		challenge: "13",
		xp: "10000",
		source: "mm 314"
	},
	{
		name: "Vampire",
		challenge: "13",
		xp: "10000",
		source: "mm 297"
	},
	{
		name: "Wastrilith",
		challenge: "13",
		xp: "10000",
		source: "mtf 139"
	},
	{
		name: "Young Red Shadow Dragon",
		challenge: "13",
		xp: "10000",
		source: "mm 85"
	},
	{
		name: "Adult Black Dragon",
		challenge: "14",
		xp: "11500",
		source: "mm 88"
	},
	{
		name: "Adult Copper Dragon",
		challenge: "14",
		xp: "11500",
		source: "mm 111"
	},
	{
		name: "Beholder (in lair)",
		challenge: "14",
		xp: "11500",
		source: "mm 28"
	},
	{
		name: "Cadaver Collector",
		challenge: "14",
		xp: "11500",
		source: "mtf 122"
	},
	{
		name: "Death Tyrant",
		challenge: "14",
		xp: "11500",
		source: "mm 29"
	},
	{
		name: "Drow Inquisitor",
		challenge: "14",
		xp: "11500",
		source: "mtf 184"
	},
	{
		name: "Elder Brain",
		challenge: "14",
		xp: "11500",
		source: "vgm 174"
	},
	{
		name: "Fire Giant Dreadnought",
		challenge: "14",
		xp: "11500",
		source: "vgm 147"
	},
	{
		name: "Githyanki Supreme Commander",
		challenge: "14",
		xp: "11500",
		source: "mtf 206"
	},
	{
		name: "Ice Devil",
		challenge: "14",
		xp: "11500",
		source: "mm 75"
	},
	{
		name: "Retriever",
		challenge: "14",
		xp: "11500",
		source: "mtf 222"
	},
	{
		name: "Adult Bronze Dragon",
		challenge: "15",
		xp: "13000",
		source: "mm 108"
	},
	{
		name: "Adult Green Dragon",
		challenge: "15",
		xp: "13000",
		source: "mm 94"
	},
	{
		name: "Death Tyrant (in lair)",
		challenge: "15",
		xp: "13000",
		source: "mm 29"
	},
	{
		name: "Green Abishai",
		challenge: "15",
		xp: "13000",
		source: "mtf 162"
	},
	{
		name: "Mummy Lord",
		challenge: "15",
		xp: "13000",
		source: "mm 229"
	},
	{
		name: "Nabassu",
		challenge: "15",
		xp: "13000",
		source: "mtf 135"
	},
	{
		name: "Purple Worm",
		challenge: "15",
		xp: "13000",
		source: "mm 255"
	},
	{
		name: "Skull Lord",
		challenge: "15",
		xp: "13000",
		source: "mtf 230"
	},
	{
		name: "Vampire (spellcaster)",
		challenge: "15",
		xp: "13000",
		source: "mm 297"
	},
	{
		name: "Vampire (warrior)",
		challenge: "15",
		xp: "13000",
		source: "mm 297"
	},
	{
		name: "Adult Blue Dragon",
		challenge: "16",
		xp: "15000",
		source: "mm 91"
	},
	{
		name: "Adult Silver Dragon",
		challenge: "16",
		xp: "15000",
		source: "mm 117"
	},
	{
		name: "Githzerai Anarch",
		challenge: "16",
		xp: "15000",
		source: "mtf 207"
	},
	{
		name: "Hellfire Engine",
		challenge: "16",
		xp: "15000",
		source: "mtf 165"
	},
	{
		name: "Iron Golem",
		challenge: "16",
		xp: "15000",
		source: "mm 170"
	},
	{
		name: "Marilith",
		challenge: "16",
		xp: "15000",
		source: "mm 61"
	},
	{
		name: "Mummy Lord (in lair)",
		challenge: "16",
		xp: "15000",
		source: "mm 229"
	},
	{
		name: "Phoenix",
		challenge: "16",
		xp: "15000",
		source: "mtf 199"
	},
	{
		name: "Planetar",
		challenge: "16",
		xp: "15000",
		source: "mm 17"
	},
	{
		name: "Star Spawn Larva Mage",
		challenge: "16",
		xp: "15000",
		source: "mtf 235"
	},
	{
		name: "Steel Predator",
		challenge: "16",
		xp: "15000",
		source: "mtf 239"
	},
	{
		name: "Storm Giant Quintessent",
		challenge: "16",
		xp: "15000",
		source: "vgm 151"
	},
	{
		name: "Adult Blue Dracolich",
		challenge: "17",
		xp: "18000",
		source: "mm 84"
	},
	{
		name: "Adult Gold Dragon",
		challenge: "17",
		xp: "18000",
		source: "mm 114"
	},
	{
		name: "Adult Red Dragon",
		challenge: "17",
		xp: "18000",
		source: "mm 98"
	},
	{
		name: "Androsphinx",
		challenge: "17",
		xp: "18000",
		source: "mm 281"
	},
	{
		name: "Blue Abishai",
		challenge: "17",
		xp: "18000",
		source: "mtf 161"
	},
	{
		name: "Death Knight",
		challenge: "17",
		xp: "18000",
		source: "mm 47"
	},
	{
		name: "Dragon Turtle",
		challenge: "17",
		xp: "18000",
		source: "mm 119"
	},
	{
		name: "Goristro",
		challenge: "17",
		xp: "18000",
		source: "mm 59"
	},
	{
		name: "Nagpa",
		challenge: "17",
		xp: "18000",
		source: "mtf 215"
	},
	{
		name: "Amnizu",
		challenge: "18",
		xp: "20000",
		source: "mtf 164"
	},
	{
		name: "Demilich",
		challenge: "18",
		xp: "20000",
		source: "mm 48"
	},
	{
		name: "Drow Favored Consort",
		challenge: "18",
		xp: "20000",
		source: "mtf 183"
	},
	{
		name: "Sibriex",
		challenge: "18",
		xp: "20000",
		source: "mtf 137"
	},
	{
		name: "Balor",
		challenge: "19",
		xp: "22000",
		source: "mm 55"
	},
	{
		name: "Red Abishai",
		challenge: "19",
		xp: "22000",
		source: "mtf 162"
	},
	{
		name: "Demilich (in lair)",
		challenge: "20",
		xp: "24500",
		source: "mm 48"
	},
	{
		name: "Ancient Brass Dragon",
		challenge: "20",
		xp: "25000",
		source: "mm 104"
	},
	{
		name: "Ancient White Dragon",
		challenge: "20",
		xp: "25000",
		source: "mm 100"
	},
	{
		name: "Drow Matron Mother",
		challenge: "20",
		xp: "25000",
		source: "mtf 186"
	},
	{
		name: "Leviathan",
		challenge: "20",
		xp: "25000",
		source: "mtf 198"
	},
	{
		name: "Nightwalker",
		challenge: "20",
		xp: "25000",
		source: "mtf 216"
	},
	{
		name: "Pit Fiend",
		challenge: "20",
		xp: "25000",
		source: "mm 77"
	},
	{
		name: "Ancient Black Dragon",
		challenge: "21",
		xp: "33000",
		source: "mm 87"
	},
	{
		name: "Ancient Copper Dragon",
		challenge: "21",
		xp: "33000",
		source: "mm 110"
	},
	{
		name: "Astral Dreadnought",
		challenge: "21",
		xp: "33000",
		source: "mtf 117"
	},
	{
		name: "Lich",
		challenge: "21",
		xp: "33000",
		source: "mm 202"
	},
	{
		name: "Molydeus",
		challenge: "21",
		xp: "33000",
		source: "mtf 134"
	},
	{
		name: "Solar",
		challenge: "21",
		xp: "33000",
		source: "mm 18"
	},
	{
		name: "Ancient Bronze Dragon",
		challenge: "22",
		xp: "41000",
		source: "mm 107"
	},
	{
		name: "Ancient Green Dragon",
		challenge: "22",
		xp: "41000",
		source: "mm 93"
	},
	{
		name: "Lich (in lair)",
		challenge: "22",
		xp: "41000",
		source: "mm 202"
	},
	{
		name: "Mind Flayer Lich",
		challenge: "22",
		xp: "41000",
		source: "vgm 172"
	},
	{
		name: "Zaratan",
		challenge: "22",
		xp: "41000",
		source: "mtf 201"
	},
	{
		name: "Ancient Blue Dragon",
		challenge: "23",
		xp: "50000",
		source: "mm 90"
	},
	{
		name: "Ancient Silver Dragon",
		challenge: "23",
		xp: "50000",
		source: "mm 116"
	},
	{
		name: "Elder Tempest",
		challenge: "23",
		xp: "50000",
		source: "mtf 200"
	},
	{
		name: "Empyrean",
		challenge: "23",
		xp: "50000",
		source: "mm 130"
	},
	{
		name: "Kraken",
		challenge: "23",
		xp: "50000",
		source: "mm 197"
	},
	{
		name: "Ancient Gold Dragon",
		challenge: "24",
		xp: "62000",
		source: "mm 113"
	},
	{
		name: "Ancient Red Dragon",
		challenge: "24",
		xp: "62000",
		source: "mm 97"
	},
	{
		name: "Marut",
		challenge: "25",
		xp: "75000",
		source: "mtf 213"
	},
	{
		name: "Tarrasque",
		challenge: "30",
		xp: "155000",
		source: "mm 286"
	}
];

const challenges = [
	{
		level: 1,
		easy: 25,
		medium: 50,
		hard: 75,
		deadly: 100,
		fatal: 200
	},
	{
		level: 2,
		easy: 50,
		medium: 100,
		hard: 150,
		deadly: 200,
		fatal: 400
	},
	{
		level: 3,
		easy: 75,
		medium: 150,
		hard: 225,
		deadly: 400,
		fatal: 500
	},
	{
		level: 4,
		easy: 125,
		medium: 250,
		hard: 375,
		deadly: 500,
		fatal: 1100
	},
	{
		level: 5,
		easy: 250,
		medium: 500,
		hard: 750,
		deadly: 1100,
		fatal: 1400
	},
	{
		level: 6,
		easy: 300,
		medium: 600,
		hard: 900,
		deadly: 1400,
		fatal: 1700
	},
	{
		level: 7,
		easy: 350,
		medium: 750,
		hard: 1100,
		deadly: 1700,
		fatal: 2100
	},
	{
		level: 8,
		easy: 450,
		medium: 900,
		hard: 1400,
		deadly: 2100,
		fatal: 2400
	},
	{
		level: 9,
		easy: 550,
		medium: 1100,
		hard: 1600,
		deadly: 2400,
		fatal: 2800
	},
	{
		level: 10,
		easy: 600,
		medium: 1200,
		hard: 1900,
		deadly: 2800,
		fatal: 3600
	},
	{
		level: 11,
		easy: 800,
		medium: 1600,
		hard: 2400,
		deadly: 3600,
		fatal: 4500
	},
	{
		level: 12,
		easy: 1000,
		medium: 2000,
		hard: 3000,
		deadly: 4500,
		fatal: 5100
	},
	{
		level: 13,
		easy: 1100,
		medium: 2200,
		hard: 3400,
		deadly: 5100,
		fatal: 5700
	},
	{
		level: 14,
		easy: 1250,
		medium: 2500,
		hard: 3800,
		deadly: 5700,
		fatal: 6400
	},
	{
		level: 15,
		easy: 1400,
		medium: 2800,
		hard: 4300,
		deadly: 6400,
		fatal: 7200
	},
	{
		level: 16,
		easy: 1600,
		medium: 3200,
		hard: 4800,
		deadly: 7200,
		fatal: 8800
	},
	{
		level: 17,
		easy: 2000,
		medium: 3900,
		hard: 5900,
		deadly: 8800,
		fatal: 9500
	},
	{
		level: 18,
		easy: 2100,
		medium: 4200,
		hard: 6300,
		deadly: 9500,
		fatal: 10900
	},
	{
		level: 19,
		easy: 2400,
		medium: 4900,
		hard: 7300,
		deadly: 10900,
		fatal: 12700
	},
	{
		level: 20,
		easy: 2800,
		medium: 5700,
		hard: 8500,
		deadly: 12700,
		fatal: 15000
	}
];

const xpBycr = [
	{
		"cr": "0",
		"xp": 10
	},
	{
		"cr": "1/8",
		"xp": 25
	},
	{
		"cr": "1/4",
		"xp": 50
	},
	{
		"cr": "1/2",
		"xp": 100
	},
	{
		"cr": "1",
		"xp": 200
	},
	{
		"cr": "2",
		"xp": 450
	},
	{
		"cr": "3",
		"xp": 700
	},
	{
		"cr": "4",
		"xp": 1100
	},
	{
		"cr": "5",
		"xp": 1800
	},
	{
		"cr": "6",
		"xp": 2300
	},
	{
		"cr": "7",
		"xp": 2900
	},
	{
		"cr": "8",
		"xp": 3900
	},
	{
		"cr": "9",
		"xp": 5000
	},
	{
		"cr": "10",
		"xp": 5900
	},
	{
		"cr": "11",
		"xp": 7200
	},
	{
		"cr": "12",
		"xp": 8400
	},
	{
		"cr": "13",
		"xp": 10000
	},
	{
		"cr": "14",
		"xp": 11500
	},
	{
		"cr": "15",
		"xp": 13000
	},
	{
		"cr": "16",
		"xp": 15000
	},
	{
		"cr": "17",
		"xp": 18000
	},
	{
		"cr": "18",
		"xp": 20000
	},
	{
		"cr": "19",
		"xp": 22000
	},
	{
		"cr": "20",
		"xp": 24500
	},
	{
		"cr": "21",
		"xp": 33000
	},
	{
		"cr": "22",
		"xp": 41000
	},
	{
		"cr": "23",
		"xp": 50000
	},
	{
		"cr": "24",
		"xp": 62000
	},
	{
		"cr": "25",
		"xp": 75000
	},
	{
		"cr": "30",
		"xp": 155000
	}
];