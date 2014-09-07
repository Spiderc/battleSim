jQuery(document).ready(function(){
	var dropdownOptions = "";
	for(var i=0;i<allPokemon.length;i++){
		dropdownOptions = dropdownOptions + "<option>" + allPokemon[i].name + "</option>";
	}
	jQuery("#pokemon1a").html(dropdownOptions);
	jQuery("#pokemon1b").html(dropdownOptions);
	jQuery("#pokemon1c").html(dropdownOptions);
	jQuery("#pokemon1d").html(dropdownOptions);
	jQuery("#pokemon1e").html(dropdownOptions);
	jQuery("#pokemon1f").html(dropdownOptions);
	jQuery("#pokemon2a").html(dropdownOptions);
	jQuery("#pokemon2b").html(dropdownOptions);
	jQuery("#pokemon2c").html(dropdownOptions);
	jQuery("#pokemon2d").html(dropdownOptions);
	jQuery("#pokemon2e").html(dropdownOptions);
	jQuery("#pokemon2f").html(dropdownOptions);
	var battler1 = [];
	var battler2 = [];
	load("1a");	load("1b");	load("1c");	load("1d");	load("1e");	load("1f");
	load("2a");	load("2b");	load("2c");	load("2d");	load("2e");	load("2f");
	
	jQuery("#pokemon1a").change(function(){load("1a");}); jQuery("#level1a").change(function(){load("1a");});
	jQuery("#pokemon1b").change(function(){load("1b");}); jQuery("#level1b").change(function(){load("1b");});
	jQuery("#pokemon1c").change(function(){load("1c");}); jQuery("#level1c").change(function(){load("1c");});
	jQuery("#pokemon1d").change(function(){load("1d");}); jQuery("#level1d").change(function(){load("1d");});
	jQuery("#pokemon1e").change(function(){load("1e");}); jQuery("#level1e").change(function(){load("1e");});
	jQuery("#pokemon1f").change(function(){load("1f");}); jQuery("#level1f").change(function(){load("1f");});
	jQuery("#pokemon2a").change(function(){load("2a");}); jQuery("#level2a").change(function(){load("2a");});
	jQuery("#pokemon2b").change(function(){load("2b");}); jQuery("#level2b").change(function(){load("2b");});
	jQuery("#pokemon2c").change(function(){load("2c");}); jQuery("#level2c").change(function(){load("2c");});
	jQuery("#pokemon2d").change(function(){load("2d");}); jQuery("#level2d").change(function(){load("2d");});
	jQuery("#pokemon2e").change(function(){load("2e");}); jQuery("#level2e").change(function(){load("2e");});
	jQuery("#pokemon2f").change(function(){load("2f");}); jQuery("#level2f").change(function(){load("2f");});
	
	jQuery(".move").click(function(){
		var move = jQuery(this).html();
		var attacker = jQuery(this).attr("id").substring(4,5);
		for(var i=0;i<allMoves.length;i++){
			if(allMoves[i].name == move) {
				if(attacker == "1") {
					allMoves[i].call(battler1,battler2);
				} else if(attacker == "2") {
					allMoves[i].call(battler2,battler1);
				}
				reload();
				break;
			}
		}
	});
	
	function load(target){
		validateLevel(jQuery("#level" + target));
		if(target.charAt(0) == "1"){
			battler1[target.charCodeAt(1) - 97] = new pokemon(jQuery("#level" + target).val(),findPokemon(jQuery("#pokemon" + target).val()));
			jQuery("#move" + target + "1").html(battler1[target.charCodeAt(1) - 97].moves[0]);
			jQuery("#move" + target + "2").html(battler1[target.charCodeAt(1) - 97].moves[1]);
			jQuery("#move" + target + "3").html(battler1[target.charCodeAt(1) - 97].moves[2]);
			jQuery("#move" + target + "4").html(battler1[target.charCodeAt(1) - 97].moves[3]);
			jQuery("#hpCurrent" + target).html(battler1[target.charCodeAt(1) - 97].hpCurrent);
			jQuery("#hpMax" + target).html(battler1[target.charCodeAt(1) - 97].hpMax);
		} else {
			battler2[target.charCodeAt(1) - 97] = new pokemon(jQuery("#level" + target).val(),findPokemon(jQuery("#pokemon" + target).val()));
			jQuery("#move" + target + "1").html(battler2[target.charCodeAt(1) - 97].moves[0]);
			jQuery("#move" + target + "2").html(battler2[target.charCodeAt(1) - 97].moves[1]);
			jQuery("#move" + target + "3").html(battler2[target.charCodeAt(1) - 97].moves[2]);
			jQuery("#move" + target + "4").html(battler2[target.charCodeAt(1) - 97].moves[3]);
			jQuery("#hpCurrent" + target).html(battler2[target.charCodeAt(1) - 97].hpCurrent);
			jQuery("#hpMax" + target).html(battler2[target.charCodeAt(1) - 97].hpMax);
		}
	}
	
	function reload(){
		jQuery("#hpCurrent1a").html(battler1[0].hpCurrent); jQuery("#hpMax1a").html(battler1[0].hpMax);
		jQuery("#hpCurrent1b").html(battler1[1].hpCurrent); jQuery("#hpMax1b").html(battler1[1].hpMax);
		jQuery("#hpCurrent1c").html(battler1[2].hpCurrent); jQuery("#hpMax1c").html(battler1[2].hpMax);
		jQuery("#hpCurrent1d").html(battler1[3].hpCurrent); jQuery("#hpMax1d").html(battler1[3].hpMax);
		jQuery("#hpCurrent1e").html(battler1[4].hpCurrent); jQuery("#hpMax1e").html(battler1[4].hpMax);
		jQuery("#hpCurrent1f").html(battler1[5].hpCurrent); jQuery("#hpMax1f").html(battler1[5].hpMax);
		jQuery("#hpCurrent2a").html(battler2[0].hpCurrent); jQuery("#hpMax2a").html(battler2[0].hpMax);
		jQuery("#hpCurrent2b").html(battler2[1].hpCurrent); jQuery("#hpMax2b").html(battler2[1].hpMax);
		jQuery("#hpCurrent2c").html(battler2[2].hpCurrent); jQuery("#hpMax2c").html(battler2[2].hpMax);
		jQuery("#hpCurrent2d").html(battler2[3].hpCurrent); jQuery("#hpMax2d").html(battler2[3].hpMax);
		jQuery("#hpCurrent2e").html(battler2[4].hpCurrent); jQuery("#hpMax2e").html(battler2[4].hpMax);
		jQuery("#hpCurrent2f").html(battler2[5].hpCurrent); jQuery("#hpMax2f").html(battler2[5].hpMax);
	}
});