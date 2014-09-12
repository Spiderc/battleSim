/*
	When adding a damaging move do the following:
	1. Copy the tackle function (just because there's nothing special about it)
	2. Change the name of the function
	3. Put the name of the move in the two log outputs that have the name
	4. Replace the 100 in the attackHit to the move's accuracy
	5. Change atk and def to be attaker.spcAtk and defender.spcDef if the move is special instead of physical (likewise change atkMod and defMod to spcAtkMod and spcDefMod)
	6. Change type to the move's type
	7. Change bp to the move's bp
	8. Implement any other functionality the move has
	9. Put the function where it belongs in the list alphabetically
	10. At the bottom of this page, push it into the allMoves array using allMoves.push(new Move(functionName,"Attack Name",["property1","property2"]));
	
	NOTE: Properties are things that must be taken into account when the move is called and cannot be accounted for purely within the move itself
		these properties include: "priority","affectedByWeather"
*/

function growl(attacker,defender){
	addToLog(attacker.name + " used Growl on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
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

function scratch(attacker,defender){
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
		addToLog(attacker.name + "'s Vine Whip hit " + defender.name + " for " + damage + " damage.");
		dealDamage(defender,damage);
	} else {
		addToLog("But it missed.");
	}
}

var allMoves = [];
allMoves.push(new move(scratch,"Scratch",[])); allMoves.push(new move(tackle,"Tackle",[])); allMoves.push(new move(vineWhip,"Vine Whip",[]));
allMoves.push(new move(growl,"Growl",[]));