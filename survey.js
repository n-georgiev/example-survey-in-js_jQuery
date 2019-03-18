$(document).ready(function(){

var questionCount = 0;

document.getElementById("questionNumber").innerHTML = "[Intro]";
document.getElementsByTagName("button")[0].innerHTML = "Continue";
$("#Terminate").hide();
$("#Complete").hide();

var err = "<i>Please answer the question above before proceeding.</i>";

	$("#exclusive").click(function(){
		if ($('#exclusive').is(':checked')) {
			$(".Q3row").prop("checked", false);
			$("#exclusive").prop("checked", true);
		}
	});
	
	$(".Q3row").click(function(){
		for(var i=0; i<5; i++){
			if(document.getElementsByClassName("Q3row")[i].checked == true){
				$("#exclusive").prop("checked", false);
			}
		}
	});

	for(var i=1; i<=7; i++){
		$("#Q"+i).hide();
	}
	$("#Error").hide();
		
	$("#Q1row1").click(function(){
		$("#Q1row2").prop("checked", false);
	});
	$("#Q1row2").click(function(){
		$("#Q1row1").prop("checked", false);
	});
	
	
	$("#clear").click(function(){
		$(".Q7row").prop("checked", false);
	});
	
	$(".Q7row").click(function(){
		$("#clear").prop("checked", false);
	});
	

	var imgCounter = 0;
	$("#sun").click(function(){
		if(imgCounter%2==0){
			$("#sun").animate({width: '500px'});
		}
		else{
			$("#sun").animate({width: '300px'});
		}
		imgCounter++;
	});
	
	
	var all_checkboxes = $('#Q3 input[type="checkbox"]');
	
	$("button").click(function(){
	
	if($("input[type=number]").val() < 18 && questionCount == 2 && document.getElementById("age").value.length != 0){
		$("#Q3").hide();
		$("button").hide();
		$("p").hide();
		$("input").hide();
		$("#Terminate").show("fade");
		questionCount = 99;
	}
	
	var checkArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	
	if(document.getElementsByClassName("Q7row")[0].checked == true) checkArray[0] = 1;
	if(document.getElementsByClassName("Q7row")[1].checked == true) checkArray[1] = 1;
	if(document.getElementsByClassName("Q7row")[2].checked == true) checkArray[2] = 1;
	if(document.getElementsByClassName("Q7row")[3].checked == true) checkArray[3] = 1;
	if(document.getElementsByClassName("Q7row")[4].checked == true) checkArray[4] = 1;
	if(document.getElementsByClassName("Q7row")[5].checked == true) checkArray[5] = 1;
	if(document.getElementsByClassName("Q7row")[6].checked == true) checkArray[6] = 1;
	if(document.getElementsByClassName("Q7row")[7].checked == true) checkArray[7] = 1;
	if(document.getElementsByClassName("Q7row")[8].checked == true) checkArray[8] = 1;
	if(document.getElementsByClassName("Q7row")[9].checked == true) checkArray[9] = 1;
	if(document.getElementsByClassName("Q7row")[10].checked == true)checkArray[10] = 1;
	if(document.getElementsByClassName("Q7row")[11].checked == true)checkArray[11] = 1;
	if(document.getElementsByClassName("Q7row")[12].checked == true)checkArray[12] = 1;
	if(document.getElementsByClassName("Q7row")[13].checked == true)checkArray[13] = 1;
	if(document.getElementsByClassName("Q7row")[14].checked == true)checkArray[14] = 1;
	
	if(questionCount == 1 && document.getElementById("Q1row1").checked == false && document.getElementById("Q1row2").checked == false){
		document.getElementById("Error").innerHTML = err;
		$("#Error").show('fade');
	}
	
	else if(questionCount == 2 && ($("input[type=number]").val() < 0 || $("input[type=number]").val() > 100) || (questionCount == 2 && document.getElementById("age").value.length == 0)){
		document.getElementById("Error").innerHTML = "<i>Your age must be between 0 and 100. Please revise your response.</i>";
		$("#Error").show('fade');
	}
	
	
	else if(questionCount == 3 && all_checkboxes.filter(":checked").length == 0){
		document.getElementById("Error").innerHTML = err;
		$("#Error").show('fade');
	}
	else if(questionCount == 5 && document.getElementById("Q5txt").value.length == 0){
		document.getElementById("Error").innerHTML = err;
		$("#Error").show('fade');
	}
	else if(questionCount == 6 && document.getElementById("Q6txt").value.length == 0){
		document.getElementById("Error").innerHTML = err;
		$("#Error").show('fade');
	}
	else if(
	questionCount == 7 && (checkArray[0] + checkArray[1] + checkArray[2] + checkArray[3] + checkArray[4] != 1) || (questionCount == 7 && checkArray[5] + checkArray[6] + checkArray[7] + checkArray[8] + checkArray[9] != 1) || (questionCount == 7 && checkArray[10] + checkArray[11] + checkArray[12] + checkArray[13] + checkArray[14] != 1)
	
	){
		document.getElementById("Error").innerHTML = "<i>Please answer once per row.</i>";
		$("#Error").show('fade');
	}
	else{
		$("#Error").hide();
		$("#Q" + questionCount).hide('fade');
		questionCount++;
		$("#Q" + questionCount).show('fade');
		
		document.getElementById("Q6Piped").innerHTML = "Why is <b><span style='color:yellow;'>" + document.getElementById("Q5txt").value + "</span></b> your best friend?";
		
		document.getElementById("questionNumber").innerHTML = "[Q" + questionCount + "]";
		
		if(questionCount == 7){
			document.getElementsByTagName("button")[0].innerHTML = "Finish";
		}
		if(questionCount == 8){
			$("button").hide();
			$("#Complete").show('fade');
		}
	}
	
	});
});