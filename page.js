jQuery(document).ready(function(){
	var dropdownOptions = "";
	var dropdownMoves = "<option value=''>Move Filter</option>";
	var teamsLocked = false;
	var battleState = [];
	var turnCounter = 0;
	for(var i=0;i<allPokemon.length;i++){
		dropdownOptions = dropdownOptions + "<option value=" + allPokemon[i].name + ">" + allPokemon[i].name + "</option>";
	}
	for(var i=0;i<allMoves.length;i++){
		dropdownMoves = dropdownMoves + "<option value='" + allMoves[i].name + "'>" + allMoves[i].name + "</option>";
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
	jQuery("#moveFilter1").html(dropdownMoves);
	jQuery("#moveFilter2").html(dropdownMoves);
	jQuery("#moveFilter3").html(dropdownMoves);
	jQuery("#moveFilter4").html(dropdownMoves);
	var team1 = [];
	var team2 = [];
	var readyMove1 = null;
	var readyMove2 = null;

	load("1a");	load("1b");	load("1c");	load("1d");	load("1e");	load("1f");
	load("2a");	load("2b");	load("2c");	load("2d");	load("2e");	load("2f");

	jQuery("#pokemon1a").change(function(){load("1a");}); jQuery("#level1a").change(function(){load("1a");}); jQuery("#switch1a").click(function(){makeActive("1a");});
	jQuery("#pokemon1b").change(function(){load("1b");}); jQuery("#level1b").change(function(){load("1b");}); jQuery("#switch1b").click(function(){makeActive("1b");});
	jQuery("#pokemon1c").change(function(){load("1c");}); jQuery("#level1c").change(function(){load("1c");}); jQuery("#switch1c").click(function(){makeActive("1c");});
	jQuery("#pokemon1d").change(function(){load("1d");}); jQuery("#level1d").change(function(){load("1d");}); jQuery("#switch1d").click(function(){makeActive("1d");});
	jQuery("#pokemon1e").change(function(){load("1e");}); jQuery("#level1e").change(function(){load("1e");}); jQuery("#switch1e").click(function(){makeActive("1e");});
	jQuery("#pokemon1f").change(function(){load("1f");}); jQuery("#level1f").change(function(){load("1f");}); jQuery("#switch1f").click(function(){makeActive("1f");});
	jQuery("#pokemon2a").change(function(){load("2a");}); jQuery("#level2a").change(function(){load("2a");}); jQuery("#switch2a").click(function(){makeActive("2a");});
	jQuery("#pokemon2b").change(function(){load("2b");}); jQuery("#level2b").change(function(){load("2b");}); jQuery("#switch2b").click(function(){makeActive("2b");});
	jQuery("#pokemon2c").change(function(){load("2c");}); jQuery("#level2c").change(function(){load("2c");}); jQuery("#switch2c").click(function(){makeActive("2c");});
	jQuery("#pokemon2d").change(function(){load("2d");}); jQuery("#level2d").change(function(){load("2d");}); jQuery("#switch2d").click(function(){makeActive("2d");});
	jQuery("#pokemon2e").change(function(){load("2e");}); jQuery("#level2e").change(function(){load("2e");}); jQuery("#switch2e").click(function(){makeActive("2e");});
	jQuery("#pokemon2f").change(function(){load("2f");}); jQuery("#level2f").change(function(){load("2f");}); jQuery("#switch2f").click(function(){makeActive("2f");});

	jQuery(".move").click(function(){
		var move = jQuery(this).html();
		var attacker = jQuery(this).attr("id").substring(4,5);
		if(teamsLocked == false) {lockTeams();}
		for(var i=0;i<allMoves.length;i++){
			if(allMoves[i].name == move) {
				if(attacker == "1") {
					readyMove1 = allMoves[i];
					if(readyMove2 != null && readyMove2.toString().indexOf("switching") >= 0) {
						doSwitch();
					} else if(readyMove2 != null) {doBattle();}
				} else if(attacker == "2") {
					readyMove2 = allMoves[i];
					if(readyMove1 != null && readyMove1.toString().indexOf("switching") >= 0) {
						doSwitch();
					} else if(readyMove1 != null) {doBattle();}
				}
				break;
			}
		}
		reload();
	});
	
	jQuery("#toggleSearch").click(function(){
		if(jQuery("#searchResults").css("display") == "none"){
			jQuery("#searchResults").show("slow");
			jQuery("#searchArea").show("slow");
			jQuery("#toggleSearch").html("Hide Search");
		} else {
			jQuery("#searchResults").hide("slow");
			jQuery("#searchArea").hide("slow");
			jQuery("#toggleSearch").html("Show Search");
		}
	});
	
	jQuery("#doSearch").click(function(){
		var searchResults = [];
		for(var i=0;i<allPokemon.length;i++){
			if(speciesHasType(allPokemon[i],jQuery("#typeFilter1").val()) && speciesHasType(allPokemon[i],jQuery("#typeFilter2").val()) && speciesHasMove(allPokemon[i],jQuery("#moveFilter1").val()) && speciesHasMove(allPokemon[i],jQuery("#moveFilter2").val()) && speciesHasMove(allPokemon[i],jQuery("#moveFilter3").val()) && speciesHasMove(allPokemon[i],jQuery("#moveFilter4").val())){
				searchResults.push(allPokemon[i]);
			}
		}
		var searchTable = "<table><tr><td>";
		for(var i=0;i<searchResults.length;i++){
			if(i % 7 == 0){
				searchTable = searchTable + "<tr><td><center><img src='http://www.serebii.net/xy/pokemon/" + addZeros(findPokemon(searchResults[i].name).dex) + ".png'><br/><button id='button" + searchResults[i].name + "' class='addToSlot'>" + searchResults[i].name + "</button><center></td>";
			} else if(i % 7 == 6){
				searchTable = searchTable + "<td><center><img src='http://www.serebii.net/xy/pokemon/" + addZeros(findPokemon(searchResults[i].name).dex) + ".png'><br/><button id='button" + searchResults[i].name + "' class='addToSlot'>" + searchResults[i].name + "</button></center></td></tr>";
			} else {
				searchTable = searchTable + "<td><center><img src='http://www.serebii.net/xy/pokemon/" + addZeros(findPokemon(searchResults[i].name).dex) + ".png'><br/><button id='button" + searchResults[i].name + "' class='addToSlot'>" + searchResults[i].name + "</button></center></td>";
			}
		}
		searchTable = searchTable + "</td></tr></table>";
		jQuery("#searchResults").html(searchTable);
		
		jQuery(".addToSlot").click(function(){
			var pokemon = jQuery(this).attr('id').substring(6,jQuery(this).attr('id').length);
			jQuery("#pokemon" + jQuery("#searchSlot").val() + " option[value=" + pokemon + "]").attr("selected","selected");
			load(jQuery("#searchSlot").val());
		});
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
		jQuery("#sprite" + target).attr("src","http://www.serebii.net/xy/pokemon/" + addZeros(findPokemon(jQuery("#pokemon" + target).val()).dex) + ".png");
		updateContainer(target);
		if(jQuery("#move" + target + "2").html() == "") {jQuery("#move" + target + "2").hide();} else {jQuery("#move" + target + "2").show();}
		if(jQuery("#move" + target + "3").html() == "") {jQuery("#move" + target + "3").hide();} else {jQuery("#move" + target + "3").show();}
		if(jQuery("#move" + target + "4").html() == "") {jQuery("#move" + target + "4").hide();} else {jQuery("#move" + target + "4").show();}
	}

	function reload(){
		jQuery("#hpCurrent1a").html(team1[0].hpCurrent); updateContainer("1a");
		jQuery("#hpCurrent1b").html(team1[1].hpCurrent); updateContainer("1b");
		jQuery("#hpCurrent1c").html(team1[2].hpCurrent); updateContainer("1c");
		jQuery("#hpCurrent1d").html(team1[3].hpCurrent); updateContainer("1d");
		jQuery("#hpCurrent1e").html(team1[4].hpCurrent); updateContainer("1e");
		jQuery("#hpCurrent1f").html(team1[5].hpCurrent); updateContainer("1f");
		jQuery("#hpCurrent2a").html(team2[0].hpCurrent); updateContainer("2a");
		jQuery("#hpCurrent2b").html(team2[1].hpCurrent); updateContainer("2b");
		jQuery("#hpCurrent2c").html(team2[2].hpCurrent); updateContainer("2c");
		jQuery("#hpCurrent2d").html(team2[3].hpCurrent); updateContainer("2d");
		jQuery("#hpCurrent2e").html(team2[4].hpCurrent); updateContainer("2e");
		jQuery("#hpCurrent2f").html(team2[5].hpCurrent); updateContainer("2f");
		
		jQuery("#hpBar1a").css("width", (team1[0].hpCurrent * 100 / team1[0].hpMax) + "%");
		jQuery("#hpBar1a").css("background-color", getHpBarColor(team1[0].hpCurrent, team1[0].hpMax));
		jQuery("#hpBar1b").css("width", (team1[1].hpCurrent * 100 / team1[1].hpMax) + "%");
		jQuery("#hpBar1b").css("background-color", getHpBarColor(team1[1].hpCurrent, team1[1].hpMax));
		jQuery("#hpBar1c").css("width", (team1[2].hpCurrent * 100 / team1[2].hpMax) + "%");
		jQuery("#hpBar1c").css("background-color", getHpBarColor(team1[2].hpCurrent, team1[2].hpMax));
		jQuery("#hpBar1d").css("width", (team1[3].hpCurrent * 100 / team1[3].hpMax) + "%");
		jQuery("#hpBar1d").css("background-color", getHpBarColor(team1[3].hpCurrent, team1[3].hpMax));
		jQuery("#hpBar1e").css("width", (team1[4].hpCurrent * 100 / team1[4].hpMax) + "%");
		jQuery("#hpBar1e").css("background-color", getHpBarColor(team1[4].hpCurrent, team1[4].hpMax));
		jQuery("#hpBar1f").css("width", (team1[5].hpCurrent * 100 / team1[5].hpMax) + "%");
		jQuery("#hpBar1f").css("background-color", getHpBarColor(team1[5].hpCurrent, team1[5].hpMax));
		
		jQuery("#hpBar2a").css("width", (team2[0].hpCurrent * 100 / team2[0].hpMax) + "%");
		jQuery("#hpBar2a").css("background-color", getHpBarColor(team2[0].hpCurrent, team2[0].hpMax));
		jQuery("#hpBar2b").css("width", (team2[1].hpCurrent * 100 / team2[1].hpMax) + "%");
		jQuery("#hpBar2b").css("background-color", getHpBarColor(team2[1].hpCurrent, team2[1].hpMax));
		jQuery("#hpBar2c").css("width", (team2[2].hpCurrent * 100 / team2[2].hpMax) + "%");
		jQuery("#hpBar2c").css("background-color", getHpBarColor(team2[2].hpCurrent, team2[2].hpMax));
		jQuery("#hpBar2d").css("width", (team2[3].hpCurrent * 100 / team2[3].hpMax) + "%");
		jQuery("#hpBar2d").css("background-color", getHpBarColor(team2[3].hpCurrent, team2[3].hpMax));
		jQuery("#hpBar2e").css("width", (team2[4].hpCurrent * 100 / team2[4].hpMax) + "%");
		jQuery("#hpBar2e").css("background-color", getHpBarColor(team2[4].hpCurrent, team2[4].hpMax));
		jQuery("#hpBar2f").css("width", (team2[5].hpCurrent * 100 / team2[5].hpMax) + "%");
		jQuery("#hpBar2f").css("background-color", getHpBarColor(team2[5].hpCurrent, team2[5].hpMax));
	}
	
	function getHpBarColor(current, max){
		var percent = current * 100 / max;
		if(percent > 50){return "darkgreen";}
		else if(percent > 25){return "gold";}
		else{return "red";}
	}
	
	function updateContainer(target){
		if(target.charAt(0) == "1"){
			if(team1[target.charCodeAt(1) - 97].affliction != null) {
				jQuery("#affliction" + target).html(team1[target.charCodeAt(1) - 97].affliction.display);
			} else {
				jQuery("#affliction" + target).html("");
			}
			if(team1[target.charCodeAt(1) - 97].status == "active") {
				jQuery("#container" + target).addClass("active");
				jQuery("#container" + target).removeClass("inactive");
				jQuery("#container" + target).removeClass("fainted");
			} else if(team1[target.charCodeAt(1) - 97].status == "inactive") {
				jQuery("#container" + target).removeClass("active");
				jQuery("#container" + target).addClass("inactive");
				jQuery("#container" + target).removeClass("fainted");
			} else if(team1[target.charCodeAt(1) - 97].status == "fainted") {
				jQuery("#container" + target).removeClass("active");
				jQuery("#container" + target).removeClass("inactive");
				jQuery("#container" + target).addClass("fainted");
				jQuery("#move" + target + "1").attr("disabled",true);
				jQuery("#move" + target + "2").attr("disabled",true);
				jQuery("#move" + target + "3").attr("disabled",true);
				jQuery("#move" + target + "4").attr("disabled",true);
			}
		} else {
			if(team2[target.charCodeAt(1) - 97].affliction != null) {
				jQuery("#affliction" + target).html(team2[target.charCodeAt(1) - 97].affliction.display);
			} else {
				jQuery("#affliction" + target).html("");
			}
			if(team2[target.charCodeAt(1) - 97].status == "active") {
				jQuery("#container" + target).addClass("active");
				jQuery("#container" + target).removeClass("inactive");
				jQuery("#container" + target).removeClass("fainted");
			} else if(team2[target.charCodeAt(1) - 97].status == "inactive") {
				jQuery("#container" + target).removeClass("active");
				jQuery("#container" + target).addClass("inactive");
				jQuery("#container" + target).removeClass("fainted");
			} else if(team2[target.charCodeAt(1) - 97].status == "fainted") {
				jQuery("#container" + target).removeClass("active");
				jQuery("#container" + target).removeClass("inactive");
				jQuery("#container" + target).addClass("fainted");
				jQuery("#move" + target + "1").attr("disabled",true);
				jQuery("#move" + target + "2").attr("disabled",true);
				jQuery("#move" + target + "3").attr("disabled",true);
				jQuery("#move" + target + "4").attr("disabled",true);
			}
		}
	}

	function makeActive(target){
		if(target.charAt(0) == "1"){
			if(team1[getActive(1)] != null && team1[getActive(1)].status == "active"){
				readyMove1 = "switching" + target;
				if(readyMove2 != null) {doSwitch();}
			} else {
				for(var i=0;i<team1.length;i++){
					if(team1[i].status == "active") {team1[i].status = "inactive"; break;}
				}
				jQuery("#switch1" + String.fromCharCode(i + 97)).attr("disabled",false);
				jQuery("#move1" + String.fromCharCode(i + 97) + "1").attr("disabled",true);
				jQuery("#move1" + String.fromCharCode(i + 97) + "2").attr("disabled",true);
				jQuery("#move1" + String.fromCharCode(i + 97) + "3").attr("disabled",true);
				jQuery("#move1" + String.fromCharCode(i + 97) + "4").attr("disabled",true);
				team1[target.charCodeAt(1) - 97].status = "active";
				addToLog(team1[target.charCodeAt(1) - 97].name + " was sent out!");
				jQuery("#move" + target + "1").attr("disabled",false);
				jQuery("#move" + target + "2").attr("disabled",false);
				jQuery("#move" + target + "3").attr("disabled",false);
				jQuery("#move" + target + "4").attr("disabled",false);
				jQuery("#switch" + target).attr("disabled",true);
			}
		} else {
			if(team2[getActive(2)] != null && team2[getActive(2)].status == "active"){
				readyMove2 = "switching" + target;
				if(readyMove1 != null) {doSwitch();}
			} else {
				for(var i=0;i<team2.length;i++){
					if(team2[i].status == "active") {team2[i].status = "inactive"; break;}
				}
				jQuery("#switch2" + String.fromCharCode(i + 97)).attr("disabled",false);
				jQuery("#move2" + String.fromCharCode(i + 97) + "1").attr("disabled",true);
				jQuery("#move2" + String.fromCharCode(i + 97) + "2").attr("disabled",true);
				jQuery("#move2" + String.fromCharCode(i + 97) + "3").attr("disabled",true);
				jQuery("#move2" + String.fromCharCode(i + 97) + "4").attr("disabled",true);
				team2[target.charCodeAt(1) - 97].status = "active";
				addToLog(team2[target.charCodeAt(1) - 97].name + " was sent out!");
				jQuery("#move" + target + "1").attr("disabled",false);
				jQuery("#move" + target + "2").attr("disabled",false);
				jQuery("#move" + target + "3").attr("disabled",false);
				jQuery("#move" + target + "4").attr("disabled",false);
				jQuery("#switch" + target).attr("disabled",true);
			}
		}
		reload();
	}

	function getActive(team){
		var result;
		if(team == 1){
			for(var i=0;i<team1.length;i++) {
				if(team1[i].status == "active") {break;}
			}
			result = i;
		} else {
			for(var i=0;i<team1.length;i++) {
				if(team2[i].status == "active") {break;}
			}
			result = i;
		}
		return result;
	}

	function doBattle(){
		beforeTurnEffects();
		var attackFirst = attackOrder(team1[getActive(1)],team2[getActive(2)],readyMove1,readyMove2);
		if(attackFirst == 1){
			if(canAttack(team1[getActive(1)],team2[getActive(2)])) {readyMove1.call(team1[getActive(1)],team2[getActive(2)],battleState);}
			if(team2[getActive(2)] != null && canAttack(team2[getActive(2)],team1[getActive(1)])) {readyMove2.call(team2[getActive(2)],team1[getActive(1)],battleState);}
		} else if(attackFirst == 2){
			if(canAttack(team2[getActive(2)],team1[getActive(1)])) {readyMove2.call(team2[getActive(2)],team1[getActive(1)],battleState);}
			if(team1[getActive(1)] != null && canAttack(team1[getActive(1)],team2[getActive(2)])) {readyMove1.call(team1[getActive(1)],team2[getActive(2)],battleState);}
		} else {
			if(rng(0,1) == 0) {
				if(canAttack(team1[getActive(1)],team2[getActive(2)])) {readyMove1.call(team1[getActive(1)],team2[getActive(2)],battleState);}
				if(team2[getActive(2)] != null && canAttack(team1[getActive(2)],team2[getActive(1)])) {readyMove2.call(team2[getActive(2)],team1[getActive(1)],battleState);}
				} else {
				if(canAttack(team2[getActive(2)],team1[getActive(1)])) {readyMove2.call(team2[getActive(2)],team1[getActive(1)],battleState);}
				if(team1[getActive(1)] != null && canAttack(team2[getActive(2)],team1[getActive(1)])) {readyMove1.call(team1[getActive(1)],team2[getActive(2)],battleState);}
			}
		}
		endTurnEffects();
		readyMove1 = null;
		readyMove2 = null;
	}

	function doSwitch(){
		beforeTurnEffects();
		if(readyMove1.toString().indexOf("switching") >= 0){
			var target = readyMove1.substring(9);
			for(var i=0;i<team1.length;i++){
				if(team1[i].status == "active") {resetStats(team1[i]); team1[i].status = "inactive"; break;}
			}
			jQuery("#switch1" + String.fromCharCode(i + 97)).attr("disabled",false);
			jQuery("#move1" + String.fromCharCode(i + 97) + "1").attr("disabled",true);
			jQuery("#move1" + String.fromCharCode(i + 97) + "2").attr("disabled",true);
			jQuery("#move1" + String.fromCharCode(i + 97) + "3").attr("disabled",true);
			jQuery("#move1" + String.fromCharCode(i + 97) + "4").attr("disabled",true);
			team1[target.charCodeAt(1) - 97].status = "active";
			addToLog(team1[target.charCodeAt(1) - 97].name + " was sent out!");
			jQuery("#move" + target + "1").attr("disabled",false);
			jQuery("#move" + target + "2").attr("disabled",false);
			jQuery("#move" + target + "3").attr("disabled",false);
			jQuery("#move" + target + "4").attr("disabled",false);
			jQuery("#switch" + target).attr("disabled",true);
		}
		if(readyMove2.toString().indexOf("switching") >= 0){
			var target = readyMove2.substring(9);
			for(var i=0;i<team2.length;i++){
				if(team2[i].status == "active") {resetStats(team2[i]); team2[i].status = "inactive"; break;}
			}
			jQuery("#switch2" + String.fromCharCode(i + 97)).attr("disabled",false);
			jQuery("#move2" + String.fromCharCode(i + 97) + "1").attr("disabled",true);
			jQuery("#move2" + String.fromCharCode(i + 97) + "2").attr("disabled",true);
			jQuery("#move2" + String.fromCharCode(i + 97) + "3").attr("disabled",true);
			jQuery("#move2" + String.fromCharCode(i + 97) + "4").attr("disabled",true);
			team2[target.charCodeAt(1) - 97].status = "active";
			addToLog(team2[target.charCodeAt(1) - 97].name + " was sent out!");
			jQuery("#move" + target + "1").attr("disabled",false);
			jQuery("#move" + target + "2").attr("disabled",false);
			jQuery("#move" + target + "3").attr("disabled",false);
			jQuery("#move" + target + "4").attr("disabled",false);
			jQuery("#switch" + target).attr("disabled",true);
		}
		if(readyMove1.toString().indexOf("switching") < 0){
			if(canAttack(team1[getActive(1)],team2[getActive(2)])) {readyMove1.call(team1[getActive(1)],team2[getActive(2)],battleState);}
		}
		if(readyMove2.toString().indexOf("switching") < 0){
			if(canAttack(team2[getActive(2)],team1[getActive(1)])) {readyMove2.call(team2[getActive(2)],team1[getActive(1)],battleState);}
		}
		endTurnEffects();
		readyMove1 = null;
		readyMove2 = null;
	}

	function lockTeams(){
		teamsLocked = true;
		jQuery("#pokemon1a").prop("disabled",true); jQuery("#level1a").prop("disabled",true);
		jQuery("#pokemon1b").prop("disabled",true); jQuery("#level1b").prop("disabled",true);
		jQuery("#pokemon1c").prop("disabled",true); jQuery("#level1c").prop("disabled",true);
		jQuery("#pokemon1d").prop("disabled",true); jQuery("#level1d").prop("disabled",true);
		jQuery("#pokemon1e").prop("disabled",true); jQuery("#level1e").prop("disabled",true);
		jQuery("#pokemon1f").prop("disabled",true); jQuery("#level1f").prop("disabled",true);
		jQuery("#pokemon2a").prop("disabled",true); jQuery("#level2a").prop("disabled",true);
		jQuery("#pokemon2b").prop("disabled",true); jQuery("#level2b").prop("disabled",true);
		jQuery("#pokemon2c").prop("disabled",true); jQuery("#level2c").prop("disabled",true);
		jQuery("#pokemon2d").prop("disabled",true); jQuery("#level2d").prop("disabled",true);
		jQuery("#pokemon2e").prop("disabled",true); jQuery("#level2e").prop("disabled",true);
		jQuery("#pokemon2f").prop("disabled",true); jQuery("#level2f").prop("disabled",true);
		jQuery("#searchResults").hide();
		jQuery("#searchArea").hide();
		jQuery("#toggleSearch").hide();
	}

	function beforeTurnEffects(){
		jQuery("#lastTurnLog").html("");
		turnCounter = turnCounter + 1;
		jQuery("#battleLog").html(jQuery("#battleLog").html() + "<hr class='turn" + (turnCounter - 1) % 2 + "'>");
	}

	function endTurnEffects(){
		if(team1[getActive(1)] != null && team2[getActive(2)] != null){
			if((team1[getActive(1)].spd * getStatMultiplier(team1[getActive(1)].spdMod,false)) > (team2[getActive(2)].spd * getStatMultiplier(team2[getActive(2)].spdMod,false))){
				checkConditions(team1[getActive(1)],team2[getActive(2)]);
				if(team2[getActive(2)] != null) {checkConditions(team2[getActive(2)],team1[getActive(1)]);}
			} else {
				checkConditions(team2[getActive(2)],team1[getActive(1)]);
				if(team1[getActive(1)] != null) {checkConditions(team1[getActive(1)],team2[getActive(2)]);}
			}
		} else if(team1[getActive(1)] != null && team2[getActive(2)] == null){
			checkConditions(team1[getActive(1)],null);
		} else if(team1[getActive(1)] == null && team2[getActive(2)] != null){
			checkConditions(team2[getActive(2)],null);
		}
	}
});