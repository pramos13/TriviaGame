$(document).ready(function() {

	function startTrivia() {
		$('#startNav').hide();
		$('#startOverNav').show();
		$('.welcomePage').hide();
		$('.questionPage').show();
		showQuestion();
	}

	function showQuestion(){

		$('.result').html('');
		startTimer();
		var count = universal.question;
		var obj = questions[count];
		
		var qText = obj.q_text;
		var qDisplay = '<h3>'+qText+'</h3>'
		$('.text').html(qDisplay);
		
		var qAnswers = [obj.q_options_1, obj.q_options_2, obj.q_options_3, obj.q_options_4]
		$('.options').html('');
		for (var i = 0; i < qAnswers.length; i++) {
			var ans = qAnswers[i];
			var id = i + 1;
			var first = '<li id="'+id+'">'
			var last = '</li>'
			$('.options').append(first+ans+last);
		}

		for (var j = 1; j <= 4; j++) {
			$('#'+j).click(function(){
				showAnswer($(this).attr('id'));
			});
		}

	}

	