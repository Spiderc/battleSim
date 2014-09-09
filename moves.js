function scratch(attacker,defender){
	addToLog(attacker.name + " used Scratch on " + defender.name + ".");
	if(attackHit(100,getStatMultiplier(attacker.accMod,true),getStatMultiplier(defender.evaMod,true))){
		var atk = attacker.atk;
		var def = attacker.def;
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
		var def = attacker.def;
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
		var def = attacker.def;
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