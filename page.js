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
	battler1[0] = new pokemon(jQuery("#level1a").val(),findPokemon(jQuery("#pokemon1a").val()));
	battler1[1] = new pokemon(jQuery("#level1b").val(),findPokemon(jQuery("#pokemon1b").val()));
	battler1[2] = new pokemon(jQuery("#level1c").val(),findPokemon(jQuery("#pokemon1c").val()));
	battler1[3] = new pokemon(jQuery("#level1d").val(),findPokemon(jQuery("#pokemon1d").val()));
	battler1[4] = new pokemon(jQuery("#level1e").val(),findPokemon(jQuery("#pokemon1e").val()));
	battler1[5] = new pokemon(jQuery("#level1f").val(),findPokemon(jQuery("#pokemon1f").val()));
	battler2[0] = new pokemon(jQuery("#level2a").val(),findPokemon(jQuery("#pokemon2a").val()));
	battler2[1] = new pokemon(jQuery("#level2b").val(),findPokemon(jQuery("#pokemon2b").val()));
	battler2[2] = new pokemon(jQuery("#level2c").val(),findPokemon(jQuery("#pokemon2c").val()));
	battler2[3] = new pokemon(jQuery("#level2d").val(),findPokemon(jQuery("#pokemon2d").val()));
	battler2[4] = new pokemon(jQuery("#level2e").val(),findPokemon(jQuery("#pokemon2e").val()));
	battler2[5] = new pokemon(jQuery("#level2f").val(),findPokemon(jQuery("#pokemon2f").val()));
	reload();
	
	jQuery("#pokemon1a").change(function(){battler1[0] = new pokemon(jQuery("#level1a").val(),findPokemon(jQuery("#pokemon1a").val())); reload();});
	jQuery("#pokemon1b").change(function(){battler1[1] = new pokemon(jQuery("#level1b").val(),findPokemon(jQuery("#pokemon1b").val())); reload();});
	jQuery("#pokemon1c").change(function(){battler1[2] = new pokemon(jQuery("#level1c").val(),findPokemon(jQuery("#pokemon1c").val())); reload();});
	jQuery("#pokemon1d").change(function(){battler1[3] = new pokemon(jQuery("#level1d").val(),findPokemon(jQuery("#pokemon1d").val())); reload();});
	jQuery("#pokemon1e").change(function(){battler1[4] = new pokemon(jQuery("#level1e").val(),findPokemon(jQuery("#pokemon1e").val())); reload();});
	jQuery("#pokemon1f").change(function(){battler1[5] = new pokemon(jQuery("#level1f").val(),findPokemon(jQuery("#pokemon1f").val())); reload();});
	jQuery("#pokemon2a").change(function(){battler2[0] = new pokemon(jQuery("#level2a").val(),findPokemon(jQuery("#pokemon2a").val())); reload();});
	jQuery("#pokemon2b").change(function(){battler2[1] = new pokemon(jQuery("#level2b").val(),findPokemon(jQuery("#pokemon2b").val())); reload();});
	jQuery("#pokemon2c").change(function(){battler2[2] = new pokemon(jQuery("#level2c").val(),findPokemon(jQuery("#pokemon2c").val())); reload();});
	jQuery("#pokemon2d").change(function(){battler2[3] = new pokemon(jQuery("#level2d").val(),findPokemon(jQuery("#pokemon2d").val())); reload();});
	jQuery("#pokemon2e").change(function(){battler2[4] = new pokemon(jQuery("#level2e").val(),findPokemon(jQuery("#pokemon2e").val())); reload();});
	jQuery("#pokemon2f").change(function(){battler2[5] = new pokemon(jQuery("#level2f").val(),findPokemon(jQuery("#pokemon2f").val())); reload();});
	
	jQuery("#level1a").change(function(){validateLevel(jQuery(this)); battler1[0] = new pokemon(jQuery("#level1a").val(),findPokemon(jQuery("#pokemon1a").val())); reload();});
	jQuery("#level1b").change(function(){validateLevel(jQuery(this)); battler1[1] = new pokemon(jQuery("#level1b").val(),findPokemon(jQuery("#pokemon1b").val())); reload();});
	jQuery("#level1c").change(function(){validateLevel(jQuery(this)); battler1[2] = new pokemon(jQuery("#level1c").val(),findPokemon(jQuery("#pokemon1c").val())); reload();});
	jQuery("#level1d").change(function(){validateLevel(jQuery(this)); battler1[3] = new pokemon(jQuery("#level1d").val(),findPokemon(jQuery("#pokemon1d").val())); reload();});
	jQuery("#level1e").change(function(){validateLevel(jQuery(this)); battler1[4] = new pokemon(jQuery("#level1e").val(),findPokemon(jQuery("#pokemon1e").val())); reload();});
	jQuery("#level1f").change(function(){validateLevel(jQuery(this)); battler1[5] = new pokemon(jQuery("#level1f").val(),findPokemon(jQuery("#pokemon1f").val())); reload();});
	jQuery("#level2a").change(function(){validateLevel(jQuery(this)); battler2[0] = new pokemon(jQuery("#level2a").val(),findPokemon(jQuery("#pokemon2a").val())); reload();});
	jQuery("#level2b").change(function(){validateLevel(jQuery(this)); battler2[1] = new pokemon(jQuery("#level2b").val(),findPokemon(jQuery("#pokemon2b").val())); reload();});
	jQuery("#level2c").change(function(){validateLevel(jQuery(this)); battler2[2] = new pokemon(jQuery("#level2c").val(),findPokemon(jQuery("#pokemon2c").val())); reload();});
	jQuery("#level2d").change(function(){validateLevel(jQuery(this)); battler2[3] = new pokemon(jQuery("#level2d").val(),findPokemon(jQuery("#pokemon2d").val())); reload();});
	jQuery("#level2e").change(function(){validateLevel(jQuery(this)); battler2[4] = new pokemon(jQuery("#level2e").val(),findPokemon(jQuery("#pokemon2e").val())); reload();});
	jQuery("#level2f").change(function(){validateLevel(jQuery(this)); battler2[5] = new pokemon(jQuery("#level2f").val(),findPokemon(jQuery("#pokemon2f").val())); reload();});
	
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