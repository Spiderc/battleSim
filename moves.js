/*
	When adding a damaging move do the following:
	1. Copy the tackle function (just because there's nothing special about it)
	2. Change the name of the function
	3. Put the name of the move in the two log outputs that have the name
	4. Replace the 100 in the attackHit to the move's accuracy
	5. Change atk and def to be attaker.spcAtk and defender.spcDef if the move is special instead of physical (likewise change atkMod and defMod to spcAtkMod and spcDefMod). Also remove the burn check if it's a special move
	6. Change type to the move's type
	7. Change bp to the move's bp
	8. Implement any other functionality the move has
	9. Put the function where it belongs in the list alphabetically
	10. At the bottom of this page, push it into the allMoves array using allMoves.push(new Move(functionName,"Attack Name",["property1","property2"]));

	NOTE: Properties are things that must be taken into account when the move is called and cannot be accounted for purely within the move itself
		these properties include: "priority"
*/

function absorb(attacker,defender,battleState){
	addToLog(attacker.name + " used Absorb on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.spcAtk;
		var def = defender.spcDef;
		var type = "grass";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 20;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.spcAtkMod,false);
			def = def * getStatMultiplier(defender.spcDefMod,false);
		} else {
			if(getStatMultiplier(attacker.spcAtkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.spcAtkMod,false);}
			if(getStatMultiplier(defender.spcDefMod,false) < 1) {def = def * getStatMultiplier(defender.spcDefMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		addToLog(attacker.name + "'s Absorb hit " + defender.name + " for " + damage + " damage.");
		var healing = Math.ceil(damage/2);
		if(healing > defender.hpCurrent){
			healing = Math.ceil(defender.hpCurrent/2);
		}
		if(healing + attacker.hpCurrent > attacker.hpMax){
			healing = attacker.hpMax - attacker.hpCurrent;
		}
		addToLog(attacker.name + " healed " + healing + " damage.");
		dealDamage(defender,damage);
		dealDamage(attacker,-healing);
	} else {
		addToLog("But it missed.");
	}
}

function bite(attacker,defender,battleState){
	addToLog(attacker.name + " used Bite on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "dark";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 60;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Bite hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
		if(30 >= rng(1,100) && defender.status != "fainted"){
			defender.conditions.push("flinched");
		}
	} else {
		addToLog("But it missed.");
	}
}

function bubble(attacker,defender,battleState){
	addToLog(attacker.name + " used Bubble on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.spcAtk;
		var def = defender.spcDef;
		var type = "water";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 40;
		if(hasState(battleState,"rain")) {bp = bp * 1.5;}
		if(hasState(battleState,"sun")) {bp = bp * 2/3;}
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.spcAtkMod,false);
			def = def * getStatMultiplier(defender.spcDefMod,false);
		} else {
			if(getStatMultiplier(attacker.spcAtkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.spcAtkMod,false);}
			if(getStatMultiplier(defender.spcDefMod,false) < 1) {def = def * getStatMultiplier(defender.spcDefMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		addToLog(attacker.name + "'s Bubble hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
		if(10 >= rng(1,100) && defender.status != "fainted"){
			if(defender.spdMod > -6) {
				defender.spdMod = defender.spdMod - 1;
				addToLog(defender.name + "'s speed fell!");
			} else {
				addToLog(defender.name + "'s speed won't go any lower!");
			}
		}
	} else {
		addToLog("But it missed.");
	}
}

function dragonRage(attacker,defender,battleState){
	addToLog(attacker.name + " used Dragon Rage on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "dragon";
		var damage = 40;
		if(hasType(defender,"fairy")) {
			addToLog("But it had no effect.");
		} else {
			addToLog(attacker.name + "'s Dragon Rage hit " + defender.name + " for " + damage + " damage.");
			dealDamage(defender,damage);
		}
	} else {
		addToLog("But it missed.");
	}
}

function ember(attacker,defender,battleState){
	addToLog(attacker.name + " used Ember on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.spcAtk;
		var def = defender.spcDef;
		var type = "fire";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 40;
		if(hasState(battleState,"sun")) {bp = bp * 1.5;}
		if(hasState(battleState,"rain")) {bp = bp * 2/3;}
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.spcAtkMod,false);
			def = def * getStatMultiplier(defender.spcDefMod,false);
		} else {
			if(getStatMultiplier(attacker.spcAtkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.spcAtkMod,false);}
			if(getStatMultiplier(defender.spcDefMod,false) < 1) {def = def * getStatMultiplier(defender.spcDefMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		addToLog(attacker.name + "'s Ember hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
		if(10 >= rng(1,100) && defender.status != "fainted" && !hasType(defender,"fire") && defender.affliction == null){
			defender.affliction = new affliction("burn", -1, "Burned");
			addToLog(defender.name + " was burned by the attack.");
		}
	} else {
		addToLog("But it missed.");
	}
}

function fireFang(attacker,defender,battleState){
	addToLog(attacker.name + " used Fire Fang on " + defender.name + ".");
	if(attackHit(95,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "fire";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 65;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Fire Fang hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
		if(10 >= rng(1,100) && defender.status != "fainted" && !hasType(defender,"fire") && defender.affliction == null){
			defender.affliction = new affliction("burn", -1, "Burned");
			addToLog(defender.name + " was burned by the attack.");
		}
		if(10 >= rng(1,100) && defender.status != "fainted"){
			defender.conditions.push("flinched");
		}
	} else {
		addToLog("But it missed.");
	}
}

function focusEnergy(attacker,defender,battleState){
	addToLog(attacker.name + " used Focus Energy.");
	var type = "normal";
	if(!hasCondition(attacker,"focused")) {
		attacker.conditions.push("focused");
		addToLog(attacker.name + " is getting pumped!");
	} else {
		addToLog("But it failed.");
	}
}

function growl(attacker,defender,battleState){
	addToLog(attacker.name + " used Growl on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "normal";
		if(defender.atkMod > -6) {
			defender.atkMod = defender.atkMod - 1;
			addToLog(defender.name + "'s attack fell!");
		} else {
			addToLog(defender.name + "'s attack won't go any lower!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function gust(attacker,defender,battleState){
	addToLog(attacker.name + " used Gust on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.spcAtk;
		var def = defender.spcDef;
		var type = "flying";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 40;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.spcAtkMod,false);
			def = def * getStatMultiplier(defender.spcDefMod,false);
		} else {
			if(getStatMultiplier(attacker.spcAtkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.spcAtkMod,false);}
			if(getStatMultiplier(defender.spcDefMod,false) < 1) {def = def * getStatMultiplier(defender.spcDefMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasCondition(defender,"upHigh")){
			damage = damage * 2;
		}
		addToLog(attacker.name + "'s Gust hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function harden(attacker,defender,battleState){
	addToLog(attacker.name + " used Harden.");
	var type = "normal";
	if(defender.defMod < 6) {
		defender.defMod = defender.defMod + 1;
		addToLog(defender.name + "'s defence rose!");
	} else {
		addToLog(defender.name + "'s defence won't go any higher!");
	}
}

function leechSeed(attacker,defender,battleState){
	addToLog(attacker.name + " used Leech Seed on " + defender.name + ".");
	if(attackHit(90,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "grass";
		if(hasType(defender,"grass") || hasCondition(defender,"seeded")) {
			addToLog("But it had no effect.");
		} else {
			defender.conditions.push("seeded");
			addToLog(defender.name + " was seeded!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function leer(attacker,defender,battleState){
	addToLog(attacker.name + " used Leer on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "normal";
		if(defender.defMod > -6) {
			defender.defMod = defender.defMod - 1;
			addToLog(defender.name + "'s defence fell!");
		} else {
			addToLog(defender.name + "'s defence won't go any lower!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function peck(attacker,defender,battleState){
	addToLog(attacker.name + " used Peck on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "flying";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 35;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Peck hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function poisonPowder(attacker,defender,battleState){
	addToLog(attacker.name + " used Poison Powder on " + defender.name + ".");
	if(attackHit(75,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "poison";
		if(hasType(defender,"grass") || hasType(defender,"poison") || hasType(defender,"steel") || defender.affliction != null) {
			addToLog("But it had no effect.");
		} else {
			defender.affliction = new affliction("poison", -1, "Poisoned");
			addToLog(defender.name + " was poisoned!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function poisonSting(attacker,defender,battleState){
	addToLog(attacker.name + " used Poison Sting on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "poison";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 15;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Poison Sting hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
		if(30 >= rng(1,100) && defender.status != "fainted" && !hasType(defender,"steel") && !hasType(defender,"poison") && defender.affliction == null){
			defender.affliction = new affliction("poison", -1, "Poisoned");
			addToLog(defender.name + " was poisoned by the attack.");
		}
	} else {
		addToLog("But it missed.");
	}
}

function pound(attacker,defender,battleState){
	addToLog(attacker.name + " used Pound on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "normal";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 40;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Pound hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function quickAttack(attacker,defender,battleState){
	addToLog(attacker.name + " used Quick Attack on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "normal";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 40;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Quick Attack hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function razorLeaf(attacker,defender,battleState){
	addToLog(attacker.name + " used Razor Leaf on " + defender.name + ".");
	if(attackHit(95,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "grass";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 55;
		var crit = critCalc(1,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Razor Leaf hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function sandAttack(attacker,defender,battleState){
	addToLog(attacker.name + " used Sand Attack on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "ground";
		if(defender.accMod > -6) {
			defender.accMod = defender.accMod - 1;
			addToLog(defender.name + "'s accuracy fell!");
		} else {
			addToLog(defender.name + "'s accuracy won't go any lower!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function scaryFace(attacker,defender,battleState){
	addToLog(attacker.name + " used Scary Face on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "normal";
		if(defender.spdMod > -5) {
			defender.spdMod = defender.spdMod - 2;
			addToLog(defender.name + "'s speed sharply fell!");
		} else if(defender.spdMod > -6){
			defender.spdMod = defender.spdMod - 1;
			addToLog(defender.name + "'s speed fell!");
		} else {
			addToLog(defender.name + "'s speed won't go any lower!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function scratch(attacker,defender,battleState){
	addToLog(attacker.name + " used Scratch on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "normal";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 40;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Scratch hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function screech(attacker,defender,battleState){
	addToLog(attacker.name + " used Screech on " + defender.name + ".");
	if(attackHit(85,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "normal";
		if(defender.defMod > -5) {
			defender.defMod = defender.defMod - 2;
			addToLog(defender.name + "'s defence sharply fell!");
		} else if(defender.defMod > -6){
			defender.defMod = defender.defMod - 1;
			addToLog(defender.name + "'s defence fell!");
		} else {
			addToLog(defender.name + "'s defence won't go any lower!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function sleepPowder(attacker,defender,battleState){
	addToLog(attacker.name + " used Sleep Powder on " + defender.name + ".");
	if(attackHit(75,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "grass";
		if(hasType(defender,"grass") || defender.affliction != null) {
			addToLog("But it had no effect.");
		} else {
			defender.affliction = new affliction("sleep", rng(1,3), "Asleep");
			addToLog(defender.name + " fell asleep!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function smokescreen(attacker,defender,battleState){
	addToLog(attacker.name + " used Smokescreen on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "normal";
		if(defender.accMod > -6) {
			defender.accMod = defender.accMod - 1;
			addToLog(defender.name + "'s accuracy fell!");
		} else {
			addToLog(defender.name + "'s accuracy won't go any lower!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function stringShot(attacker,defender,battleState){
	addToLog(attacker.name + " used String Shot on " + defender.name + ".");
	if(attackHit(95,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "bug";
		if(defender.spdMod > -5) {
			defender.spdMod = defender.spdMod - 2;
			addToLog(defender.name + "'s speed sharply fell!");
		} else if(defender.spdMod > -6){
			defender.spdMod = defender.spdMod - 1;
			addToLog(defender.name + "'s speed fell!");
		} else {
			addToLog(defender.name + "'s speed won't go any lower!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function tackle(attacker,defender,battleState){
	addToLog(attacker.name + " used Tackle on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "normal";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 50;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Tackle hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function tailWhip(attacker,defender,battleState){
	addToLog(attacker.name + " used Tail Whip on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "normal";
		if(defender.defMod > -6) {
			defender.defMod = defender.defMod - 1;
			addToLog(defender.name + "'s defence fell!");
		} else {
			addToLog(defender.name + "'s defence won't go any lower!");
		}
	} else {
		addToLog("But it missed.");
	}
}

function takeDown(attacker,defender,battleState){
	addToLog(attacker.name + " used Take Down on " + defender.name + ".");
	if(attackHit(85,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "normal";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 90;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Take Down hit " + defender.name + " for " + damage + " damage.");
		var recoil = Math.max(Math.floor(damage/4),1);
		if(damage > defender.hpCurrent){
			recoil = Math.max(Math.floor(defender.hpCurrent/4),1);
		}
		addToLog(attacker.name + " took " + recoil + " damage from recoil.");
		dealDamage(defender,damage);
		dealDamage(attacker,recoil);
	} else {
		addToLog("But it missed.");
	}
}

function thundershock(attacker,defender,battleState){
	addToLog(attacker.name + " used Thunder Shock on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.spcAtk;
		var def = defender.spcDef;
		var type = "electric";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		console.log(typeDamage);
		var bp = 40;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.spcAtkMod,false);
			def = def * getStatMultiplier(defender.spcDefMod,false);
		} else {
			if(getStatMultiplier(attacker.spcAtkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.spcAtkMod,false);}
			if(getStatMultiplier(defender.spcDefMod,false) < 1) {def = def * getStatMultiplier(defender.spcDefMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		addToLog(attacker.name + "'s Thunder Shock hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
		if(10 >= rng(1,100) && defender.status != "fainted" && !hasType(defender,"ground") && !hasType(defender,"electric") && defender.affliction == null){
			defender.affliction = new affliction("paralyzed", -1, "Paralyzed");
			addToLog(defender.name + " was paralyzed by the attack.");
		}
	} else {
		addToLog("But it missed.");
	}
}

function vineWhip(attacker,defender,battleState){
	addToLog(attacker.name + " used Vine Whip on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "grass";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 45;
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		if(hasAffliction(attacker,"burn")) {damage = Math.ceil(damage/2);}
		addToLog(attacker.name + "'s Vine Whip hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function waterGun(attacker,defender,battleState){
	addToLog(attacker.name + " used Water Gun on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.spcAtk;
		var def = defender.spcDef;
		var type = "water";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 40;
		if(hasState(battleState,"rain")) {bp = bp * 1.5;}
		if(hasState(battleState,"sun")) {bp = bp * 2/3;}
		var crit = critCalc(0,attacker,defender);
		var other = 1;
		if(crit == 1){
			atk = atk * getStatMultiplier(attacker.spcAtkMod,false);
			def = def * getStatMultiplier(defender.spcDefMod,false);
		} else {
			if(getStatMultiplier(attacker.spcAtkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.spcAtkMod,false);}
			if(getStatMultiplier(defender.spcDefMod,false) < 1) {def = def * getStatMultiplier(defender.spcDefMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,bp,stab,typeDamage,crit,other);
		addToLog(attacker.name + "'s Water Gun hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function withdraw(attacker,defender,battleState){
	addToLog(attacker.name + " used Withdraw.");
	var type = "water";
	if(defender.defMod < 6) {
		defender.defMod = defender.defMod + 1;
		addToLog(defender.name + "'s defence rose!");
	} else {
		addToLog(defender.name + "'s defence won't go any higher!");
	}
}

var allMoves = [];
allMoves.push(new move(absorb,"Absorb",[]));
allMoves.push(new move(bite,"Bite",[])); allMoves.push(new move(bubble,"Bubble",[])); allMoves.push(new move(dragonRage,"Dragon Rage",[]));
allMoves.push(new move(ember,"Ember",[])); allMoves.push(new move(fireFang,"Fire Fang",[]));
allMoves.push(new move(focusEnergy,"Focus Energy",[]));
allMoves.push(new move(growl,"Growl",[])); allMoves.push(new move(gust,"Gust",[]));
allMoves.push(new move(peck,"Peck",[]));
allMoves.push(new move(harden,"Harden",[])); allMoves.push(new move(leechSeed,"Leech Seed",[])); allMoves.push(new move(leer,"Leer",[]));
allMoves.push(new move(poisonPowder,"Poison Powder",[])); allMoves.push(new move(poisonSting,"Poison Sting",[])); allMoves.push(new move(pound,"Pound",[]));
allMoves.push(new move(quickAttack,"Quick Attack",["priority1"])); allMoves.push(new move(razorLeaf,"Razor Leaf",[]));
allMoves.push(new move(sandAttack,"Sand Attack",[]));
allMoves.push(new move(scaryFace,"Scary Face",[])); allMoves.push(new move(scratch,"Scratch",[]));
allMoves.push(new move(screech,"Screech",[])); allMoves.push(new move(sleepPowder,"Sleep Powder",[]));
allMoves.push(new move(smokescreen,"Smokescreen",[])); allMoves.push(new move(stringShot,"String Shot",[])); allMoves.push(new move(tackle,"Tackle",[]));
allMoves.push(new move(tailWhip,"Tail Whip",[])); allMoves.push(new move(takeDown,"Take Down",[])); allMoves.push(new move(thundershock,"Thunder Shock",[]));
allMoves.push(new move(vineWhip,"Vine Whip",[]));
allMoves.push(new move(waterGun,"Water Gun",[])); allMoves.push(new move(withdraw,"Withdraw",[]));