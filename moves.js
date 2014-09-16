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
		var crit = critCalc(0);
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
		if(10 >= rng(1,100) && defender.status != "fainted" && defender.type1 != "fire" && defender.type2 != "fire" && defender.affliction == null){
			defender.affliction = new affliction("burn",-1);
			addToLog(defender.name + " was burned by the attack.");
		}
	} else {
		addToLog("But it missed.");
	}
}

function leechSeed(attacker,defender,battleState){
	addToLog(attacker.name + " used Leech Seed on " + defender.name + ".");
	if(attackHit(90,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var type = "grass";
		if(defender.type1 == "grass" || defender.type2 == "grass" || hasCondition(defender,"seeded")) {
			addToLog("But it had no effect.");
		} else {
			defender.conditions.push("seeded");
			addToLog(defender.name + " was seeded!");
		}
	} else {
		addToLog("But it missed.");
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

function scratch(attacker,defender,battleState){
	addToLog(attacker.name + " used Scratch on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "normal";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 40;
		var crit = critCalc(0);
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

function tackle(attacker,defender,battleState){
	addToLog(attacker.name + " used Tackle on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "normal";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 50;
		var crit = critCalc(0);
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

function vineWhip(attacker,defender,battleState){
	addToLog(attacker.name + " used Vine Whip on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var type = "grass";
		var stab = stabCalc(type,attacker);
		var typeDamage = typeCalc(type,defender);
		var bp = 45;
		var crit = critCalc(0);
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

var allMoves = [];
allMoves.push(new move(ember,"Ember",[])); allMoves.push(new move(leechSeed,"Leech Seed",[])); allMoves.push(new move(growl,"Growl",[]));
allMoves.push(new move(scratch,"Scratch",[])); allMoves.push(new move(tackle,"Tackle",[]));
allMoves.push(new move(tailWhip,"Tail Whip",[])); allMoves.push(new move(vineWhip,"Vine Whip",[]));