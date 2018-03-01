var friendData = require("../data/friends");
var userData = [];
 
module.exports = function(app) {
	// API GET requests:
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
		console.log("friend data: " + friendData);
	});

	// API POST requests:
	app.post("/api/survey", function(req, res) {

		var user = req.body;

		console.log("hi");
		console.log(user);
		console.log("user q1: " + user.q1)
		console.log(friendData[0].questionOne);

		userData.push(user);
		res.json(user);

		var score = [];
		for(var i = 0; i < friendData.length; i++) {
			score[i] = ((Math.abs(user.q1 - friendData[i].questionOne)) + (Math.abs(user.q2 - friendData[i].questionTwo)) + (Math.abs(user.q3 - friendData[i].questionThree)) + (Math.abs(user.q4 - friendData[i].questionFour)) + (Math.abs(user.q5 - friendData[i].questionFive)) + (Math.abs(user.q6 - friendData[i].questionSix)) + (Math.abs(user.q7 - friendData[i].questionSeven)) + (Math.abs(user.q8 - friendData[i].questionEight)) + (Math.abs(user.q9 - friendData[i].questionNine)) + (Math.abs(user.q10 - friendData[i].questionTen)));
			// console.log("score1: " + score1);
			// } else if (i == 1) {
			// 	var score2 = (Math.abs(user.q1 - friendData[i].questionOne));
			// } else if (i == 2) {
			// 	var score3 = (Math.abs(user.q1 - friendData[i].questionOne));
			// }

			console.log(score);
		

			// var score = ((Math.abs(userQ1 - (parseInt(friendData[i].questionOne)))) + (Math.abs(userQ2 - (parseInt(friendData[i].questionTwo))) + (Math.abs(userQ3 - (parseInt(friendData[i].question3))))));
			// console.log(score);
			// var score = Math.abs(userQ1 - friendData[i].questionOne);
			// console.log("score: " + score);



		// }
	};

});

};