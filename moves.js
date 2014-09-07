function scratch(attacker,defender){
	addToLog(attacker.name + " used Scratch on " + defender.name + ".");
	var stab = stabCalc("normal",attacker);
	var typeDamage = typeCalc("normal",defender);
	var crit = critCalc(0);
	var other = 1;
	var damage = calcDamage(attacker.level,attacker.atk,defender.def,40,stab,typeDamage,crit,other);
	addToLog(attacker.name + "'s Scratch hit " + defender.name + " for " + damage + " damage.");
	dealDamage(defender,damage);
}

function tackle(attacker,defender){
	addToLog(attacker.name + " used Tackle on " + defender.name + ".");
	var stab = stabCalc("normal",attacker);
	var typeDamage = typeCalc("normal",defender);
	var crit = critCalc(0);
	var other = 1;
	var damage = calcDamage(attacker.level,attacker.atk,defender.def,50,stab,typeDamage,crit,other);
	addToLog(attacker.name + "'s Tackle hit " + defender.name + " for " + damage + " damage.");
	dealDamage(defender,damage);
}

function vineWhip(attacker,defender){
	addToLog(attacker.name + " used Vine Whip on " + defender.name + ".");
	var stab = stabCalc("grass",attacker);
	var typeDamage = typeCalc("grass",defender);
	var crit = critCalc(0);
	var other = 1;
	var damage = calcDamage(attacker.level,attacker.atk,defender.def,45,stab,typeDamage,crit,other);
	addToLog(attacker.name + "'s Vine Whip hit " + defender.name + " for " + damage + " damage.");
	dealDamage(defender,damage);
}

var allMoves = [];
allMoves.push(new move(scratch,"Scratch"));allMoves.push(new move(tackle,"Tackle"));allMoves.push(new move(vineWhip,"Vine Whip"));