/*
	When adding a damaging move do the following:
	1. Copy the tackle function (just because there's nothing special about it)
	2. Change the name of the function
	3. Put the name of the move in the two log outputs that have the name
	4. Replace the 100 in the attackHit to the move's accuracy
	5. Change atk and def to be attaker.spcAtk and defender.spcDef if the move is special instead of physical (likewise change atkMod and defMod to spcAtkMod and spcDefMod)
	6. Replace the type in stab and typeDamage to the move's type
	7. Change the 50 in the calc damage function to the move's bp
	8. Implement any other functionality the move has
	9. Put the function where it belongs in the list alphabetically
	10. At the bottom of this page, push it into the allMoves array using allMoves.push(new Move(functionName,"Attack Name"));
*/

function scratch(attacker,defender){
	addToLog(attacker.name + " used Scratch on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var stab = stabCalc("normal",attacker);
		var typeDamage = typeCalc("normal",defender);
		var crit = critCalc(0);
		var other = 1;
		if(crit != 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,40,stab,typeDamage,crit,other);
		addToLog(attacker.name + "'s Scratch hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function tackle(attacker,defender){
	addToLog(attacker.name + " used Tackle on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var stab = stabCalc("normal",attacker);
		var typeDamage = typeCalc("normal",defender);
		var crit = critCalc(0);
		var other = 1;
		if(crit != 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,50,stab,typeDamage,crit,other);
		addToLog(attacker.name + "'s Tackle hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

function vineWhip(attacker,defender){
	addToLog(attacker.name + " used Vine Whip on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = defender.def;
		var stab = stabCalc("grass",attacker);
		var typeDamage = typeCalc("grass",defender);
		var crit = critCalc(0);
		var other = 1;
		if(crit != 1){
			atk = atk * getStatMultiplier(attacker.atkMod,false);
			def = def * getStatMultiplier(defender.defMod,false);
		} else {
			if(getStatMultiplier(attacker.atkMod,false) > 1) {atk = atk * getStatMultiplier(attacker.atkMod,false);}
			if(getStatMultiplier(defender.defMod,false) < 1) {def = def * getStatMultiplier(defender.defMod,false);}
		}
		var damage = calcDamage(attacker.level,atk,def,45,stab,typeDamage,crit,other);
		addToLog(attacker.name + "'s Vine Whip hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

var allMoves = [];
allMoves.push(new move(scratch,"Scratch"));allMoves.push(new move(tackle,"Tackle"));allMoves.push(new move(vineWhip,"Vine Whip"));