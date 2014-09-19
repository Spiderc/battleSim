/*
	When adding a new Pokemon do the following:
	1. Copy a previously existing Pokemon definition
	2. Change the name of the variable
	3. Change the national dex #, the Pokemon name, and type fields (if it only has one type, set the second type to be null)
	4. Go to http://www.serebii.net/pokedex-xy/000.shtml where 000 is the national dex number
	5. Scroll to the bottom of the page, copy the base stats, and then paste it into those fields replacing the tabs with commas
	6. Change the name of the learnset variable and create the variable in learnset.js using var nameLS = []; (you don't need to populate it, just create it)
	7. At the bottom of this page, push it into the allPokemon array using allPokemon.push(pokemonName);
	
	NOTE: Please add additional Pokemon in national dex order, just for simplicity
*/
var allPokemon = [];

var bulbasaur = new pokemonSpecies(1,"Bulbasaur","grass","poison",45,49,49,65,65,45,bulbasaurLS);
var ivysaur = new pokemonSpecies(2,"Ivysaur","grass","poison",60,62,63,80,80,60,ivysaurLS);
var venusaur = new pokemonSpecies(3,"Venusar","grass","poison",80,100,123,122,120,80,venusaurLS);
var charmander = new pokemonSpecies(4,"Charmander","fire",null,39,52,43,60,50,65,charmanderLS);
var charmeleon = new pokemonSpecies(5,"Charmeleon","fire",null,58,64,58,80,65,80,charmeleonLS);
var charizard = new pokemonSpecies(6,"Charizard","fire","flying",78,104,78,159,115,100,charizardLS);
var squirtle = new pokemonSpecies(7,"Squirtle","water",null,44,48,65,50,64,43,squirtleLS);
var wartortle = new pokemonSpecies(8,"Wartortle","water",null,59,63,80,65,80,58,wartortleLS);
var blastoise = new pokemonSpecies(9,"Blastoise","water",null,79,103,120,135,115,78,blastoiseLS);
var caterpie = new pokemonSpecies(10,"Caterpie","bug",null,45,30,35,20,20,45,caterpieLS);
var metapod = new pokemonSpecies(11,"Metapod","bug",null,50,20,55,25,25,30,metapod);
var butterfree = new pokemonSpecies(12,"Butterfree","bug","flying",60,45,50,90,80,70,butterfree);
var weedle = new pokemonSpecies(13,"Weedle","bug","poison",40,35,30,20,20,50,weedleLS);
var kakuna = new pokemonSpecies(14,"Kakuna","bug","poison",45,25,50,25,25,35,kakunaLS);
var beedrill = new pokemonSpecies(15,"Beedrill","bug","poison",65,90,40,45,80,75,beedrillLS);
var pidgey = new pokemonSpecies(16,"Pidgey","normal","flying",40,45,40,35,35,56,pidgeyLS);
var pidgeotto = new pokemonSpecies(17,"Pidgeotto","normal","flying",63,60,55,50,50,71,pidgeottoLS);
var pidgeot = new pokemonSpecies(18,"Pidgeot","normal","flying",83,80,75,70,70,101,pidgeotLS);
var rattata = new pokemonSpecies(19,"Rattata","normal",null,30,56,35,25,35,72,rattataLS);
var raticate = new pokemonSpecies(20,"Raticate","normal",null,55,81,60,50,70,97,raticateLS);
var spearow = new pokemonSpecies(21,"Spearow","normal","flying",40,60,30,31,31,70,spearowLS);
var fearow = new pokemonSpecies(22,"Fearow","normal","flying",65,90,65,61,61,100,fearowLS);
var ekans = new pokemonSpecies(23,"Ekans","poison",null,35,60,44,40,54,55,ekansLS);
var arbok = new pokemonSpecies(24,"Arbok","poison",null,60,85,69,65,79,80,arbokLS);
var pikachu = new pokemonSpecies(25,"Pikachu","electric",null,35,55,40,50,50,90,pikachuLS);
var raichu = new pokemonSpecies(26,"Raichu","electric",null,60,90,55,90,80,110,raichuLS);
var sandshrew = new pokemonSpecies(27,"Sandshrew","ground",null,50,75,85,20,30,40,sandshrewLS);
var sandslash = new pokemonSpecies(28,"Sandslash","ground",null,75,100,110,45,55,65,sandslashLS);
var nidoranF = new pokemonSpecies(29,"Nidoran F","poison",null,55,47,52,40,40,41,nidoranFLS);
var nidorina = new pokemonSpecies(30,"Nidorina","poison",null,70,62,67,55,55,56,nidorinaLS);
var nidoqueen = new pokemonSpecies(31,"Nidoqueen","poison","ground",90,92,87,75,85,76,nidoqueenLS);
var nidoranM = new pokemonSpecies(32,"Nidoran M","poison",null,46,57,40,40,40,50,nidoranM);
var nidorino = new pokemonSpecies(33,"Nidorino","poison",null,61,72,57,55,55,65,nidorinoLS);
var nidoking = new pokemonSpecies(34,"Nidoking","poison","ground",81,102,77,85,75,85,nidokingLS);
var clefairy = new pokemonSpecies(35,"Clefairy","fairy",null,70,45,48,60,65,35,clefairyLS);
var clefable = new pokemonSpecies(36,"Clefable","fairy",null,95,70,73,95,90,60,clefableLS);
var vulpix = new pokemonSpecies(37,"Vulpix","fire",null,38,41,40,50,65,65,vulpixLS);
var ninetales = new pokemonSpecies(38,"Ninetales","fire",null,73,76,75,81,100,100,ninetalesLS);
var jigglypuff = new pokemonSpecies(39,"Jigglypuff","normal","fairy",115,45,20,45,25,20,jigglypuffLS);
var wigglytuff = new pokemonSpecies(40,"Wigglytuff","normal","fairy",140,70,45,85,50,45,wigglytuffLS);

allPokemon.push(bulbasaur);allPokemon.push(ivysaur);allPokemon.push(venusaur);allPokemon.push(charmander);allPokemon.push(charmeleon);allPokemon.push(charizard);
allPokemon.push(squirtle);allPokemon.push(wartortle);allPokemon.push(blastoise);allPokemon.push(caterpie);allPokemon.push(metapod);allPokemon.push(butterfree);
allPokemon.push(weedle);allPokemon.push(kakuna);allPokemon.push(beedrill);allPokemon.push(pidgey);allPokemon.push(pidgeotto);allPokemon.push(pidgeot);
allPokemon.push(rattata);allPokemon.push(raticate);allPokemon.push(spearow);allPokemon.push(fearow);allPokemon.push(ekans);allPokemon.push(arbok);
allPokemon.push(pikachu);allPokemon.push(raichu);allPokemon.push(sandshrew);allPokemon.push(sandslash);allPokemon.push(nidoranF);allPokemon.push(nidorina);
allPokemon.push(nidoqueen);allPokemon.push(nidoranM);allPokemon.push(nidorino);allPokemon.push(nidoking);allPokemon.push(clefairy);allPokemon.push(clefable);
allPokemon.push(vulpix);allPokemon.push(ninetales);allPokemon.push(jigglypuff);allPokemon.push(wigglytuff);

var zubat = new pokemonSpecies(41,"Zubat","poison","flying",40,45,35,30,40,55,zubatLS); allPokemon.push(zubat);
var golbat = new pokemonSpecies(42,"Golbat","poison","flying",75,80,70,65,75,90,golbatLS); allPokemon.push(golbat);
var oddish = new pokemonSpecies(43,"Oddish","grass","poison",45,50,55,75,65,30,oddishLS); allPokemon.push(oddish);
var gloom = new pokemonSpecies(44,"Gloom","grass","poison",60,65,70,85,75,40,gloomLS); allPokemon.push(gloom);
var vileplume = new pokemonSpecies(45,"Vileplume","grass","poison",75,80,85,110,90,50,vileplumeLS); allPokemon.push(vileplume);
var paras = new pokemonSpecies(46,"Paras","bug","grass",35,70,55,45,55,25,parasLS); allPokemon.push(paras);
var parasect = new pokemonSpecies(47,"Parasect","bug","grass",60,95,80,60,80,30,parasectLS); allPokemon.push(parasect);
var venonat = new pokemonSpecies(48,"Venonat","bug","poison",60,55,50,40,55,45,venonatLS); allPokemon.push(venonat);
var venomoth = new pokemonSpecies(49,"Venomoth","bug","poison",70,65,60,90,75,90,venomothLS); allPokemon.push(venomoth);
var diglett = new pokemonSpecies(50,"Diglett","ground",null,10,55,25,35,45,95,diglettLS); allPokemon.push(diglett);
var dugtrio = new pokemonSpecies(51,"Dugtrio","ground",null,35,80,50,50,70,120,dugtrioLS); allPokemon.push(dugtrio);
var meowth = new pokemonSpecies(52,"Meowth","normal",null,40,45,35,40,40,90,meowthLS); allPokemon.push(meowth);
var persian = new pokemonSpecies(53,"Persian","normal",null,65,70,60,65,65,115,persianLS); allPokemon.push(persian);
var psyduck = new pokemonSpecies(54,"Psyduck","water",null,50,52,48,65,50,55,psyduckLS); allPokemon.push(psyduck);
var golduck = new pokemonSpecies(55,"Golduck","water",null,80,82,78,95,80,85,golduckLS); allPokemon.push(golduck);
var mankey = new pokemonSpecies(56,"Mankey","fighting",null,40,80,35,35,45,70,mankeyLS); allPokemon.push(mankey);
var primeape = new pokemonSpecies(57,"Primeape","fighting",null,65,105,60,60,70,95,primeapeLS); allPokemon.push(primeape);
var growlithe = new pokemonSpecies(58,"Growlithe","fire",null,55,70,45,70,50,60,growlitheLS); allPokemon.push(growlithe);
var arcanine = new pokemonSpecies(59,"Arcanine","fire",null,90,110,80,100,80,95,arcanineLS); allPokemon.push(arcanine);
var poliwag = new pokemonSpecies(60,"Poliwag","water",null,40,50,40,40,40,90,poliwagLS); allPokemon.push(poliwag);
var poliwhirl = new pokemonSpecies(61,"Poliwhirl","water",null,65,65,65,50,50,90,poliwhirlLS); allPokemon.push(poliwhirl);
var poliwrath = new pokemonSpecies(62,"Poliwrath","water","fighting",90,95,95,70,90,70,poliwrathLS); allPokemon.push(poliwrath);
var abra = new pokemonSpecies(63,"Abra","psychic",null,25,20,15,105,55,90,abraLS); allPokemon.push(abra);
var kadabra = new pokemonSpecies(64,"Kadabra","psychic",null,40,35,30,120,70,105,kadabraLS); allPokemon.push(kadabra);
var alakazam = new pokemonSpecies(65,"Alakazam","psychic",null,55,50,45,135,95,120,alakazamLS); allPokemon.push(alakazam);
var machop = new pokemonSpecies(66,"Machop","fighting",null,70,80,50,35,35,35,machopLS); allPokemon.push(machop);
var machoke = new pokemonSpecies(67,"Machoke","fighting",null,80,100,70,50,60,45,machokeLS); allPokemon.push(machoke);
var machamp = new pokemonSpecies(68,"Machamp","fighting",null,90,130,80,65,85,55,machampLS); allPokemon.push(machamp);
var bellsprout = new pokemonSpecies(69,"Bellsprout","grass","poison",50,75,35,70,30,40,bellsproutLS); allPokemon.push(bellsprout);
var weepinbell = new pokemonSpecies(70,"Weepinbell","grass","poison",65,90,50,85,45,55,weepinbellLS); allPokemon.push(weepinbell);
var victreebel = new pokemonSpecies(71,"Victreebel","grass","poison",80,105,65,100,70,70,victreebelLS); allPokemon.push(victreebel);
var tentacool = new pokemonSpecies(72,"Tentacool","water","poison",40,40,35,50,100,70,tentacoolLS); allPokemon.push(tentacool);
var tentacruel = new pokemonSpecies(73,"Tentacruel","water","poison",80,70,65,80,120,100,tentacruelLS); allPokemon.push(tentacruel);
var geodude = new pokemonSpecies(74,"Geodude","rock","ground",40,80,100,30,30,20,geodudeLS); allPokemon.push(geodude);
var graveler = new pokemonSpecies(75,"Graveler","rock","ground",55,95,115,45,45,35,gravelerLS); allPokemon.push(graveler);
var golem = new pokemonSpecies(76,"Golem","rock","ground",80,120,130,55,65,45,golemLS); allPokemon.push(golem);
var ponyta = new pokemonSpecies(77,"Ponyta","fire",null,50,85,55,65,65,90,ponytaLS); allPokemon.push(ponyta);
var rapidash = new pokemonSpecies(78,"Rapidash","fire",null,65,100,70,80,80,105,rapidashLS); allPokemon.push(rapidash);
var slowpoke = new pokemonSpecies(79,"Slowpoke","water","psychic",90,65,65,40,40,15,slowpokeLS); allPokemon.push(slowpoke);
var slowbro = new pokemonSpecies(80,"Slowbro","water","psychic",95,75,110,100,80,30,slowbroLS); allPokemon.push(slowbro);
var magnemite = new pokemonSpecies(81,"Magnemite","electric","steel",25,35,70,95,55,45,magnemiteLS); allPokemon.push(magnemite);
var magneton = new pokemonSpecies(82,"Magneton","electric","steel",50,60,95,120,70,70,magnetonLS); allPokemon.push(magneton);
var farfetch'd = new pokemonSpecies(83,"Farfetch'd","normal","flying",52,65,55,58,62,60,farfetch'dLS); allPokemon.push(farfetch'd);
var doduo = new pokemonSpecies(84,"Doduo","normal","flying",35,85,45,35,35,75,doduoLS); allPokemon.push(doduo);
var dodrio = new pokemonSpecies(85,"Dodrio","normal","flying",60,110,70,60,60,100,dodrioLS); allPokemon.push(dodrio);
var seel = new pokemonSpecies(86,"Seel","water",null,65,45,55,45,70,45,seelLS); allPokemon.push(seel);
var dewgong = new pokemonSpecies(87,"Dewgong","water","ice",90,70,80,70,95,70,dewgongLS); allPokemon.push(dewgong);
var grimer = new pokemonSpecies(88,"Grimer","poison",null,80,80,50,40,50,25,grimerLS); allPokemon.push(grimer);
var muk = new pokemonSpecies(89,"Muk","poison",null,105,105,75,65,100,50,mukLS); allPokemon.push(muk);
var shellder = new pokemonSpecies(90,"Shellder","water",null,30,65,100,45,25,40,shellderLS); allPokemon.push(shellder);
var cloyster = new pokemonSpecies(91,"Cloyster","water","ice",50,95,180,85,45,70,cloysterLS); allPokemon.push(cloyster);
var gastly = new pokemonSpecies(92,"Gastly","ghost","poison",30,35,30,100,35,80,gastlyLS); allPokemon.push(gastly);
var haunter = new pokemonSpecies(93,"Haunter","ghost","poison",45,50,45,115,55,95,haunterLS); allPokemon.push(haunter);
var gengar = new pokemonSpecies(94,"Gengar","ghost","poison",60,65,60,130,75,110,gengarLS); allPokemon.push(gengar);
var onix = new pokemonSpecies(95,"Onix","rock","ground",35,45,160,30,45,70,onixLS); allPokemon.push(onix);
var drowzee = new pokemonSpecies(96,"Drowzee","psychic",null,60,48,45,43,90,42,drowzeeLS); allPokemon.push(drowzee);
var hypno = new pokemonSpecies(97,"Hypno","psychic",null,85,73,70,73,115,67,hypnoLS); allPokemon.push(hypno);
var krabby = new pokemonSpecies(98,"Krabby","water",null,30,105,90,25,25,50,krabbyLS); allPokemon.push(krabby);
var kingler = new pokemonSpecies(99,"Kingler","water",null,55,130,115,50,50,75,kinglerLS); allPokemon.push(kingler);
var voltorb = new pokemonSpecies(100,"Voltorb","electric",null,40,30,50,55,55,100,voltorbLS); allPokemon.push(voltorb);
var electrode = new pokemonSpecies(101,"Electrode","electric",null,60,50,70,80,80,140,electrodeLS); allPokemon.push(electrode);
var exeggcute = new pokemonSpecies(102,"Exeggcute","grass","psychic",60,40,80,60,45,40,exeggcuteLS); allPokemon.push(exeggcute);
var exeggutor = new pokemonSpecies(103,"Exeggutor","grass","psychic",95,95,85,125,65,55,exeggutorLS); allPokemon.push(exeggutor);
var cubone = new pokemonSpecies(104,"Cubone","ground",null,50,50,95,40,50,35,cuboneLS); allPokemon.push(cubone);
var marowak = new pokemonSpecies(105,"Marowak","ground",null,60,80,110,50,80,45,marowakLS); allPokemon.push(marowak);
var hitmonlee = new pokemonSpecies(106,"Hitmonlee","fighting",null,50,120,53,35,110,87,hitmonleeLS); allPokemon.push(hitmonlee);
var hitmonchan = new pokemonSpecies(107,"Hitmonchan","fighting",null,50,105,79,35,110,76,hitmonchanLS); allPokemon.push(hitmonchan);
var lickitung = new pokemonSpecies(108,"Lickitung","normal",null,90,55,75,60,75,30,lickitungLS); allPokemon.push(lickitung);
var koffing = new pokemonSpecies(109,"Koffing","poison",null,40,65,95,60,45,35,koffingLS); allPokemon.push(koffing);
var weezing = new pokemonSpecies(110,"Weezing","poison",null,65,90,120,85,70,60,weezingLS); allPokemon.push(weezing);
var rhyhorn = new pokemonSpecies(111,"Rhyhorn","ground","rock",80,85,95,30,30,25,rhyhornLS); allPokemon.push(rhyhorn);
var rhydon = new pokemonSpecies(112,"Rhydon","ground","rock",105,130,120,45,45,40,rhydonLS); allPokemon.push(rhydon);
var chansey = new pokemonSpecies(113,"Chansey","normal",null,250,5,5,35,105,50,chanseyLS); allPokemon.push(chansey);
var tangela = new pokemonSpecies(114,"Tangela","grass",null,65,55,115,100,40,60,tangelaLS); allPokemon.push(tangela);
var kangaskhan = new pokemonSpecies(115,"Kangaskhan","normal",null,105,95,80,40,80,90,kangaskhanLS); allPokemon.push(kangaskhan);
var horsea = new pokemonSpecies(116,"Horsea","water",null,30,40,70,70,25,60,horseaLS); allPokemon.push(horsea);
var seadra = new pokemonSpecies(117,"Seadra","water",null,55,65,95,95,45,85,seadraLS); allPokemon.push(seadra);
var goldeen = new pokemonSpecies(118,"Goldeen","water",null,45,67,60,35,50,63,goldeenLS); allPokemon.push(goldeen);
var seaking = new pokemonSpecies(119,"Seaking","water",null,80,92,65,65,80,68,seakingLS); allPokemon.push(seaking);
var staryu = new pokemonSpecies(120,"Staryu","water",null,30,45,55,70,55,85,staryuLS); allPokemon.push(staryu);
var starmie = new pokemonSpecies(121,"Starmie","water","psychic",60,75,85,100,85,115,starmieLS); allPokemon.push(starmie);
