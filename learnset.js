/*
	When adding a new learnset do the following:
	1. Replace the default blank array with [new levelMove("",1),new levelMove("",1),new levelMove("",1),new levelMove("",1),new levelMove("",1),new levelMove("",1),new levelMove("",1)]
	2. Go to http://www.serebii.net/pokedex-xy/000.shtml where 000 is the national dex number
	3. Scroll to the 'X / Y Level Up' section of the page and start replacing the blank string with the Attack Name and the 1 with the Level (treat � as 1)
	4. Repeat for all moves listed in the section adding new levelMoves as needed (make sure they are kept comma delimited)

	NOTE: Many evolved Pokemon learn the same move at multiple levels (Venusaur learns Leech Seed at level 1 and level 7). In this case only use the earlier occurance of learning the move (1)
*/

var bulbasaurLS = [new levelMove("Tackle",1),new levelMove("Growl",3),new levelMove("Leech Seed",7),new levelMove("Vine Whip",9),new levelMove("Poison Powder",13),new levelMove("Sleep Powder",13),new levelMove("Take Down",15),new levelMove("Razor Leaf",19),new levelMove("Sweet Scent",21),new levelMove("Growth",25),new levelMove("Worry Seed",33),new levelMove("Seed Bomb",37)];
var ivysaurLS = [new levelMove("Tackle",1),new levelMove("Growl",1),new levelMove("Leech Seed",1),new levelMove("Vine Whip",9),new levelMove("Poison Powder",13),new levelMove("Sleep Powder",13),new levelMove("Take Down",15),new levelMove("Razor Leaf",20),new levelMove("Sweet Scent",23),new levelMove("Growth",28),new levelMove("Double-Edge",31),new levelMove("Worry Seed",36),new levelMove("Synthesis",39),new levelMove("Solar Beam",44)];
var venusaurLS = [new levelMove("Tackle",1),new levelMove("Growl",1),new levelMove("Leech Seed",1),new levelMove("Vine Whip",1),new levelMove("Poison Powder",13),new levelMove("Sleep Powder",13),new levelMove("Take Down",15),new levelMove("Razor Leaf",20),new levelMove("Sweet Scent",23),new levelMove("Growth",28),new levelMove("Double-Edge",31),new levelMove("Petal Dance",32),new levelMove("Worry Seed",39),new levelMove("Synthesis",45),new levelMove("Petal Blizzard",50),new levelMove("Solar Beam",53)];
var charmanderLS = [new levelMove("Scratch",1),new levelMove("Growl",1),new levelMove("Ember",7),new levelMove("Smokescreen",10),new levelMove("Dragon Rage",16),new levelMove("Scary Face",19),new levelMove("Fire Fang",25),new levelMove("Flame Burst",28),new levelMove("Slash",34),new levelMove("Flamethrower",37),new levelMove("Fire Spin",43),new levelMove("Inferno",46)];
var charmeleonLS = [new levelMove("Scratch",1),new levelMove("Growl",1),new levelMove("Ember",1),new levelMove("Smokescreen",10),new levelMove("Dragon Rage",17),new levelMove("Scary Face",21),new levelMove("Fire Fang",28),new levelMove("Flame Burst",32),new levelMove("Slash",39),new levelMove("Flamethrower",43),new levelMove("Fire Spin",50),new levelMove("Inferno",54)];
var charizardLS = [new levelMove("Flare Blitz",1),new levelMove("Heat Wave",1),new levelMove("Dragon Claw",1),new levelMove("Shadow Claw",1),new levelMove("Air Slash",1),new levelMove("Scratch",1),new levelMove("Growl",1),new levelMove("Ember",1),new levelMove("Smokescreen",1),new levelMove("Dragon Rage",17),new levelMove("Scary Face",21),new levelMove("Fire Fang",28),new levelMove("Flame Burst",32),new levelMove("Wing Attack",36),new levelMove("Slash",41),new levelMove("Flamethrower",47),new levelMove("Fire Spin",56),new levelMove("Inferno",62)];
var squirtleLS = [new levelMove("Tackle",1),new levelMove("Tail Whip",4),new levelMove("Water Gun",7),new levelMove("Withdraw",10),new levelMove("Bubble",13),new levelMove("Bite",16),new levelMove("Rapid Spin",19),new levelMove("Protect",22),new levelMove("Water Pulse",25),new levelMove("Aqua Tail",28),new levelMove("Skull Bash",31),new levelMove("Iron Defense",34),new levelMove("Rain Dance",37),new levelMove("Hydro Pump",40)];
var wartortleLS = [new levelMove("Tackle",1),new levelMove("Tail Whip",1),new levelMove("Water Gun",1),new levelMove("Withdraw",10),new levelMove("Bubble",13),new levelMove("Bite",16),new levelMove("Rapid Spin",20),new levelMove("Protect",24),new levelMove("Water Pulse",28),new levelMove("Aqua Tail",32),new levelMove("Skull Bash",36),new levelMove("Iron Defense",40),new levelMove("Rain Dance",44),new levelMove("Hydro Pump",48)];
var blastoiseLS = [new levelMove("Flash Cannon",1),new levelMove("Tail Whip",1),new levelMove("Water Gun",1),new levelMove("Withdraw",1),new levelMove("Bubble",13),new levelMove("Bite",16),new levelMove("Rapid Spin",20),new levelMove("Protect",24),new levelMove("Water Pulse",28),new levelMove("Aqua Tail",32),new levelMove("Skull Bash",39),new levelMove("Iron Defense",46),new levelMove("Rain Dance",53),new levelMove("Hydro Pump",60)];
var caterpieLS = [];
var metapodLS = [];
var butterfreeLS = [];
var weedleLS = [];
var kakunaLS = [];
var beedrillLS = [];
var pidgeyLS = [];
var pidgeottoLS = [];
var pidgeotLS = [];
var rattataLS = [];
var raticateLS = [];
var spearowLS = [];
var fearowLS = [];
var ekansLS = [];
var arbokLS = [];
var pikachuLS = [];
var raichuLS = [];
var sandshrewLS = [];
var sandslashLS = [];
var nidoranFLS = [];
var nidorinaLS = [];
var nidoqueenLS = [];
var nidoranMLS = [];
var nidorinoLS = [];
var nidokingLS = [];
var clefairyLS = [];
var clefableLS = [];
var vulpixLS = [];
var ninetalesLS = [];
var jigglypuffLS = [];
var wigglytuffLS = [];