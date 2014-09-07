jQuery(document).ready(function(){
	var dropdownOptions = "";
	for(var i=0;i<allPokemon.length;i++){
		dropdownOptions = dropdownOptions + "<option>" + allPokemon[i].name + "</option>";
	}
	jQuery("#pokemon1").html(dropdownOptions);
	jQuery("#pokemon2").html(dropdownOptions);
	var battler1;
	var battler2;
	load1();
	load2();
	
	jQuery("#pokemon1").change(function(){
		load1();
	});
	jQuery("#level1").change(function(){
		if(jQuery(this).val() > 100 || jQuery(this).val() < 1){
			jQuery(this).val(5);
		}
		load1();
	});
	jQuery("#pokemon2").change(function(){
		load2();
	});
	jQuery("#level2").change(function(){
		if(jQuery(this).val() > 100 || jQuery(this).val() < 1){
			jQuery(this).val(5);
		}
		load2();
	});
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
	
	function load1(){
		battler1 = new pokemon(jQuery("#level1").val(),findPokemon(jQuery("#pokemon1").val()));
		jQuery("#hpCurrent1").html(battler1.hpCurrent);
		jQuery("#hpMax1").html(battler1.hpMax);
	}
	
	function load2(){
		battler2 = new pokemon(jQuery("#level2").val(),findPokemon(jQuery("#pokemon2").val()));
		jQuery("#hpCurrent2").html(battler2.hpCurrent);
		jQuery("#hpMax2").html(battler2.hpMax);
	}
	
	function reload(){
		jQuery("#hpCurrent1").html(battler1.hpCurrent);
		jQuery("#hpMax1").html(battler1.hpMax);
		jQuery("#hpCurrent2").html(battler2.hpCurrent);
		jQuery("#hpMax2").html(battler2.hpMax);
	}
	
	function findPokemon(name){
		var result;
		for(var i=0;i<allPokemon.length;i++){
			if(allPokemon[i].name == name) {result = allPokemon[i]; break;}
		}
		return result;
	}
});