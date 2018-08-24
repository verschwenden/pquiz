var score = 0;
var questions = [
			['Do you consider yourself artistic?', 1],
			['Are you against animal cruelty?', 1],
			['Do you like dogs more than cats?', 1],
			['Do you think your country would be better run if you were in charge?', 1],
			['Do you have a grand plan for the future?', 1],
			['Do you enjoy the look of distinct moustaches?', 1],
			['Do you have above average oratory skills?', 1],
			['Do you have a close-knit group of people who enjoy your company?', 1],
			['Have you ever thought you and your people could use more space in which to live?', 1]
];


function add_questions() {
		var html = '';
		for(var x = 0; x < questions.length; x++) {
		var str = `<div class="row">
    <div class="col-sm-6">
		<div class="question unanswered">
		    ` + questions[x][0] + `
		</div>
    </div>
    <div class="col-sm-3">
		<input type="radio" id="rn_`+(x+1)+`" name="a_`+(x+1)+`" value="1"/><label for="rn_`+(x+1)+`">Yes</label>
		<input type="radio" id="ry_`+(x+1)+`" name="a_`+(x+1)+`" value="1"/><label for="ry_`+(x+1)+`">No</label>
    </div>
  </div>`;
  		html = html + str;

		}

		document.getElementById('quiz_questions').innerHTML = html;


		document.querySelectorAll('input[type=radio]').forEach(function(button, index) {
		  button.addEventListener('click', function() {
		    var q_i = parseInt(index/2);
		    document.querySelectorAll('.question')[q_i].classList.remove('unanswered');
		    update_score();
		  });
		});

}

function update_score(x) {
		var radios = document.querySelectorAll('input[type=radio]');
		var t_check = 0;
		score = 0;
		for(var x = 0; x < radios.length; x += 2 ){
			if(radios[x].checked == true) {
				score = score + 1;
			}
		}

		for(var x = 0; x < radios.length; x ++ ){
			if(radios[x].checked == true) {
				t_check = t_check + 1;
			}
		}

		if(t_check == questions.length) {
			score = (score/questions.length)*100;
			score = parseInt(score);
			show_result(score);
		}
}

function show_result(score) {
	var sentiment = '';
	if(score<50) {
		sentiment = 'Congratulations';
	} else {
		sentiment = 'Uh oh';
	}

	document.getElementById('sentiment').innerHTML = sentiment;
	document.getElementById('score').innerHTML = score;
	document.getElementById('score_container').style.visibility = 'visible';
}