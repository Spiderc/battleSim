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
	var team1 = [];
	var team2 = [];
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
					allMoves[i].call(active1,active2);
				} else if(attacker == "2") {
					allMoves[i].call(active2,active1);
				}
				reload();
				break;
			}
		}
	});

	function load(target){
		validateLevel(jQuery("#level" + target));
		if(target.charAt(0) == "1"){
			team1[target.charCodeAt(1) - 97] = new pokemon(jQuery("#level" + target).val(),findPokemon(jQuery("#pokemon" + target).val()));
			if(target.charCodeAt(1) - 97 == 0) {team1[target.charCodeAt(1) - 97].status = "active";} else {team1[target.charCodeAt(1) - 97].status = "inactive";}
			jQuery("#move" + target + "1").html(team1[target.charCodeAt(1) - 97].moves[0]);
			jQuery("#move" + target + "2").html(team1[target.charCodeAt(1) - 97].moves[1]);
			jQuery("#move" + target + "3").html(team1[target.charCodeAt(1) - 97].moves[2]);
			jQuery("#move" + target + "4").html(team1[target.charCodeAt(1) - 97].moves[3]);
			jQuery("#hpCurrent" + target).html(team1[target.charCodeAt(1) - 97].hpCurrent);
			jQuery("#hpMax" + target).html(team1[target.charCodeAt(1) - 97].hpMax);
		} else {
			team2[target.charCodeAt(1) - 97] = new pokemon(jQuery("#level" + target).val(),findPokemon(jQuery("#pokemon" + target).val()));
			if(target.charCodeAt(1) - 97 == 0) {team2[target.charCodeAt(1) - 97].status = "active";} else {team2[target.charCodeAt(1) - 97].status = "inactive";}
			jQuery("#move" + target + "1").html(team2[target.charCodeAt(1) - 97].moves[0]);
			jQuery("#move" + target + "2").html(team2[target.charCodeAt(1) - 97].moves[1]);
			jQuery("#move" + target + "3").html(team2[target.charCodeAt(1) - 97].moves[2]);
			jQuery("#move" + target + "4").html(team2[target.charCodeAt(1) - 97].moves[3]);
			jQuery("#hpCurrent" + target).html(team2[target.charCodeAt(1) - 97].hpCurrent);
			jQuery("#hpMax" + target).html(team2[target.charCodeAt(1) - 97].hpMax);
		}
		colorContainer(target);
		if(jQuery("#move" + target + "2").html() == "") {jQuery("#move" + target + "2").hide();} else {jQuery("#move" + target + "2").show();}
		if(jQuery("#move" + target + "3").html() == "") {jQuery("#move" + target + "3").hide();} else {jQuery("#move" + target + "3").show();}
		if(jQuery("#move" + target + "4").html() == "") {jQuery("#move" + target + "4").hide();} else {jQuery("#move" + target + "4").show();}
	}

	function reload(){
		jQuery("#hpCurrent1a").html(team1[0].hpCurrent); jQuery("#hpMax1a").html(team1[0].hpMax); colorContainer("1a");
		jQuery("#hpCurrent1b").html(team1[1].hpCurrent); jQuery("#hpMax1b").html(team1[1].hpMax); colorContainer("1b");
		jQuery("#hpCurrent1c").html(team1[2].hpCurrent); jQuery("#hpMax1c").html(team1[2].hpMax); colorContainer("1c");
		jQuery("#hpCurrent1d").html(team1[3].hpCurrent); jQuery("#hpMax1d").html(team1[3].hpMax); colorContainer("1d");
		jQuery("#hpCurrent1e").html(team1[4].hpCurrent); jQuery("#hpMax1e").html(team1[4].hpMax); colorContainer("1e");
		jQuery("#hpCurrent1f").html(team1[5].hpCurrent); jQuery("#hpMax1f").html(team1[5].hpMax); colorContainer("1f");
		jQuery("#hpCurrent2a").html(team2[0].hpCurrent); jQuery("#hpMax2a").html(team2[0].hpMax); colorContainer("2a");
		jQuery("#hpCurrent2b").html(team2[1].hpCurrent); jQuery("#hpMax2b").html(team2[1].hpMax); colorContainer("2b");
		jQuery("#hpCurrent2c").html(team2[2].hpCurrent); jQuery("#hpMax2c").html(team2[2].hpMax); colorContainer("2c");
		jQuery("#hpCurrent2d").html(team2[3].hpCurrent); jQuery("#hpMax2d").html(team2[3].hpMax); colorContainer("2d");
		jQuery("#hpCurrent2e").html(team2[4].hpCurrent); jQuery("#hpMax2e").html(team2[4].hpMax); colorContainer("2e");
		jQuery("#hpCurrent2f").html(team2[5].hpCurrent); jQuery("#hpMax2f").html(team2[5].hpMax); colorContainer("2f");
	}

	function colorContainer(target){
		if(target.charAt(0) == "1"){
			if(team1[target.charCodeAt(1) - 97].status == "active") {jQuery("#container"+target).addClass("active"); jQuery("#container"+target).removeClass("inactive"); jQuery("#container"+target).removeClass("fainted");}
			if(team1[target.charCodeAt(1) - 97].status == "inactive") {jQuery("#container"+target).removeClass("active"); jQuery("#container"+target).addClass("inactive"); jQuery("#container"+target).removeClass("fainted");}
			if(team1[target.charCodeAt(1) - 97].status == "fainted") {jQuery("#container"+target).removeClass("active"); jQuery("#container"+target).removeClass("inactive"); jQuery("#container"+target).addClass("fainted");}
		} else {
			if(team2[target.charCodeAt(1) - 97].status == "active") {jQuery("#container"+target).addClass("active"); jQuery("#container"+target).removeClass("inactive"); jQuery("#container"+target).removeClass("fainted");}
			if(team2[target.charCodeAt(1) - 97].status == "inactive") {jQuery("#container"+target).removeClass("active"); jQuery("#container"+target).addClass("inactive"); jQuery("#container"+target).removeClass("fainted");}
			if(team2[target.charCodeAt(1) - 97].status == "fainted") {jQuery("#container"+target).removeClass("active"); jQuery("#container"+target).removeClass("inactive"); jQuery("#container"+target).addClass("fainted");}
		}
	}
});