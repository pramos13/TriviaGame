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

	function question(number,cat,text,opt1,opt2,opt3,opt4,ans,date,img) {
		this.id = number;
		this.q_category_id = cat;
		this.q_text = text;
		this.q_options_1 = opt1;
		this.q_options_2 = opt2;
		this.q_options_3 = opt3;
		this.q_options_4 = opt4;
		this.q_correct_option = ans;
		this.q_date_added = date;	
		this.image = img;
	}

	var question1 = new question(
		1,
		136,
		'What year was Super Mario Bros released in the United States?',
		'1980',
		'1988',
		'1982',
		'1985',
		4,
		'date',
		'../images/mario.jpg'
	)
	var question2 = new question(
		2,
		136,
		'What is the best selling video game of all time?',
		'Halo',
		'World Of Warcraft',
		'GTA V',
		'Minecraft',
		3,
		'date',
		'../images/GTAV.jpg'
	)
	var question3 = new question(
		3,
		136,
		'What character do you play as in The Legend of Zelda?',
		'Link',
		'Gandolf',
		'Peter',
		'Frodo',
		1,
		'date',
		'../images/Zelda.jpg'
	)
	var question4 = new question(
		4,
		136,
		'In what game do you play as Master Chief?',
		'God of War',
		'Halo',
		'Gears of War',
		'Fable',
		2,
		'date',
		'../images/Halo.jpg'
	)
	var question5 = new question(
		5,
		136,
		'What is the biggest MMO game of all time?',
		'EverQuest',
		'GuildWars',
		'World of Warcraft',
		'EvE Online',
		3,
		'date',
		'../images/wow.jpg'
	)
	var question6 = new question(
		6,
		136,
		'Pikachu is one of the creatures in which series of games?',
		'Magic the Gathering',
		'Pokemon',
		'Yu-Gi-Oh',
		'Hearthstone',
		2,
		'date',
		'../images/pokemon.jpg'
	)
	var question7 = new question(
		7,
		136,
		'What is the best selling Final Fantasy game of all time?',
		'Final Fantasy X',
		'Final Fantasy VII',
		'Final Fantasy A Releam Reborn',
		'Final Fantasy X-2',
		2,
		'date',
		'../images/ff.png'
	)

	var questions = [question1, question2, question3, question4, question5, question6, question7]
});


	