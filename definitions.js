function rng(min,max){
	return Math.floor(Math.random() * (max - min + 1))+min;
}

function pokemonSpecies(dex,name,type1,type2,hp,atk,def,spcatk,spcdef,spd,learnset){
	this.dex = dex;
	this.name = name;
	this.type1 = type1;
	this.type2 = type2;
	this.hp = hp;
	this.atk = atk;
	this.def = def;
	this.spcatk = spcatk;
	this.spcdef = spcdef;
	this.spd = spd;
	this.learnset = learnset;
	}

function pokemon(level,species){
	this.level = level;
	this.name = species.name;
	this.type1 = species.type1;
	this.type2 = species.type2;
	this.hpMax = Math.floor((((species.hp * 2 + 100) * level) / 100) + 10);
	this.hpCurrent = this.hpMax;
	this.atk = Math.floor((((species.atk * 2) * level) / 100) + 5);
	this.def = Math.floor((((species.def * 2) * level) / 100) + 5);
	this.spcatk = Math.floor((((species.spcatk * 2) * level) / 100) + 5);
	this.spcdef = Math.floor((((species.spcdef * 2) * level) / 100) + 5);
	this.spd = Math.floor((((species.spd * 2) * level) / 100) + 5);
	this.status = null;
	this.moves = getMoves(level,species);
	this.atkMod = 0;
	this.defMod = 0;
	this.spcAtkMod = 0;
	this.spcDefMod = 0;
	this.spdMod = 0;
	this.accMod = 0;
	this.evaMod = 0;
	this.conditions = [];
}

function move(call,name,properties){
	this.call = call;
	this.name = name;
	this.properties = properties;
}

function levelMove(move,level){
	this.move = move;
	this.level = level;
}

function addToLog(message){
	jQuery("#battleLog").html(jQuery("#battleLog").html() + "<br/>" + message);
	jQuery("#lastTurnLog").html(jQuery("#lastTurnLog").html() + "<br/>" + message);
}

function stabCalc(attack,attacker){
	var stab = 1;
	if(attack == attacker.type1 || attack == attacker.type2){
		stab = 1.5;
	}
	return stab;
}

function typeCalc(attack,defender){
	var type = 1;
	var typeChart = [[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5,1], //normal
					[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2,1], //fire
					[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1,1], //water
					[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1,1], //electric
					[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5,1], //grass
					[1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5,1], //ice
					[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2,.5], //fighting
					[1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0,2], //poison
					[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2,1], //ground
					[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5,1], //flying
					[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5,1], //psychic
					[1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5,.5], //bug
					[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5,1], //rock
					[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,1,1], //ghost
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5,0], //dragon
					[1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,1,.5], //dark
					[1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5,2], //steel
					[1,.5,1,1,1,1,2,.5,1,1,1,1,1,1,2,2,.5,1]]; //fairy
	type = type * typeChart[typeNo(attack)][typeNo(defender.type1)];
	if(defender.type2 != null) {type = type * typeChart[typeNo(attack)][typeNo(defender.type2)];}
	if(type > 1) {addToLog("It's super effective!");}
	if(type < 1 && type > 0) {addToLog("It's not very effective.");}
	if(type == 0) {addToLog("It doesn't effect " + defender.name);}
	return 1;
}

function typeNo(type){
	var number = 0;
	if(type == "fire") {number = 1;}
	if(type == "water") {number = 2;}
	if(type == "electric") {number = 3;}
	if(type == "grass") {number = 4;}
	if(type == "ice") {number = 5;}
	if(type == "fighting") {number = 6;}
	if(type == "poison") {number = 7;}
	if(type == "ground") {number = 8;}
	if(type == "flying") {number = 9;}
	if(type == "psychic") {number = 10;}
	if(type == "bug") {number = 11;}
	if(type == "rock") {number = 12;}
	if(type == "ghost") {number = 13;}
	if(type == "dragon") {number = 14;}
	if(type == "dark") {number = 15;}
	if(type == "steel") {number = 16;}
	if(type == "fairy") {number = 17;}
	return number;
}

function critCalc(chance){
	var crit = 1;
	if(chance = 0){
		if(rng(0,15) == 0) {crit = 1.5;}
	} else if(chance = 1){
		if(rng(0,7) == 0) {crit = 1.5;}
	} else if(chance = 2){
		if(rng(0,2) == 0) {crit = 1.5;}
	} else {crit = 1.5;}
	if(crit != 1) {addToLog("Critical hit!");}
	return crit;
}

function calcDamage(level,atk,def,bp,stab,typeDamage,crit,other){
	var battleRng = Math.random() * (.15) + .85;
	var damage = (((2 * level) + 10) / 250) * (atk / def) * bp + 2;
	return Math.floor(damage * stab * typeDamage * crit * other * battleRng);
}

function dealDamage(defender,damage){
	defender.hpCurrent = defender.hpCurrent - damage;
	if(defender.hpCurrent < 1) {
		defender.hpCurrent = 0;
		defender.status = "fainted";
		addToLog(defender.name + " fainted.");
	}
}

function findPokemon(name){
	var result;
	for(var i=0;i<allPokemon.length;i++){
		if(allPokemon[i].name == name) {result = allPokemon[i]; break;}
	}
	return result;
}

function validateLevel(reference){
	if(reference.val() > 100 || reference.val() < 1){
		reference.val(5);
	}
}

function getMoves(level,species){
	var moves = [] ;
	var validMoves = [];
	for(var i=0;i<species.learnset.length;i++){
		if(species.learnset[i].level <= level) {validMoves.push(species.learnset[i].move);}
	}
	moves.push(validMoves[validMoves.length-1]);
	if(validMoves[validMoves.length-2] != null) {moves.push(validMoves[validMoves.length-2]);} else {moves.push("");}
	if(validMoves[validMoves.length-3] != null) {moves.push(validMoves[validMoves.length-3]);} else {moves.push("");}
	if(validMoves[validMoves.length-4] != null) {moves.push(validMoves[validMoves.length-4]);} else {moves.push("");}
	return moves;
}

function getStatMultiplier(mod,acc){
	var result = 1;
	if(acc){
		var accMods = [3/9, 3/8, 3/7, 3/6, 3/5, 3/4, 1, 1 + 1/3, 1 + 2/3, 2, 2 + 1/3, 2 + 2/3, 3];
		result = accMods[mod + 6];
	} else {
		var statMods = [2/8, 2/7, 2/6, 2/5, 2/4, 2/3, 1, 1 + 1/2, 2, 2 + 1/2, 3, 3 + 1/2, 4];
		result = statMods[mod + 6];
	}
	return result;
}

function attackHit(atkAcc,attackerAcc,defenderEva){
	return (atkAcc * (attackerAcc / defenderEva)) >= rng(1,100);
}

function canAttack(attacker,defender){
	return true;
}

function resetStats(pokemon){
	pokemon.atkMod = 0;
	pokemon.defMod = 0;
	pokemon.spcAtkMod = 0;
	pokemon.spcDefMod = 0;
	pokemon.spdMod = 0;
	pokemon.accMod = 0;
	pokemon.evaMod = 0;
	pokemon.conditions = [];
}

function addZeros(integer){
	if(integer < 10) {
		integer = "00" + integer;
	} else if(integer < 100){
		integer = "0" + integer;
	}
	return integer;
}

function checkConditions(activeChecked,otherActive){
	var damage;
	if(hasCondition(activeChecked,"seeded") && otherActive != null){
		damage = Math.ceil(activeChecked.hpMax/8);
		activeChecked.hpCurrent = activeChecked.hpCurrent - damage;
		addToLog(activeChecked.name + " health dropped by " + damage + " from Leech Seed.");
		if(activeChecked.hpCurrent < 1) {activeChecked.hpCurrent = 0; activeChecked.status = "fainted"; addToLog(activeChecked.name + " fainted.");}
		otherActive.hpCurrent = otherActive.hpCurrent + damage;
		addToLog(otherActive.name + " health restored " + damage + " from Leech Seed.");
		if(otherActive.hpCurrent > otherActive.hpMax) {otherActive.hpCurrent = otherActive.hpMax;}
	}
}

function hasCondition(pokemon,condition){
	var result = false;
	for(var i=0;i<pokemon.conditions.length;i++){
		if(pokemon.conditions[i] == condition) {result = true;}
	}
	return result;
}