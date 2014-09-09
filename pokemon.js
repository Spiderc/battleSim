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

var allPokemon = [];
allPokemon.push(bulbasaur);allPokemon.push(ivysaur);allPokemon.push(venusaur);allPokemon.push(charmander);allPokemon.push(charmeleon);allPokemon.push(charizard);
allPokemon.push(squirtle);allPokemon.push(wartortle);allPokemon.push(blastoise);allPokemon.push(caterpie);allPokemon.push(metapod);allPokemon.push(butterfree);
allPokemon.push(weedle);allPokemon.push(kakuna);allPokemon.push(beedrill);allPokemon.push(pidgey);allPokemon.push(pidgeotto);allPokemon.push(pidgeot);
allPokemon.push(rattata);allPokemon.push(raticate);allPokemon.push(spearow);allPokemon.push(fearow);allPokemon.push(ekans);allPokemon.push(arbok);
allPokemon.push(pikachu);allPokemon.push(raichu);allPokemon.push(sandshrew);allPokemon.push(sandslash);allPokemon.push(nidoranF);allPokemon.push(nidorina);
allPokemon.push(nidoqueen);allPokemon.push(nidoranM);allPokemon.push(nidorino);allPokemon.push(nidoking);allPokemon.push(clefairy);allPokemon.push(clefable);
allPokemon.push(vulpix);allPokemon.push(ninetales);allPokemon.push(jigglypuff);allPokemon.push(wigglytuff);