    //Question Array
        //Need to add Answer Pictures to each
    currentQuestionNum = 0;

    questions = [{
        question: "Boarding",
        choices: ["assets/images/refgamequestions/boarding.jpg","assets/images/refgamequestions/behind.jpg", "assets/images/refgamequestions/charging.jpg", "assets/images/refgamequestions/cross.jpg"],
        qNum : 0,
        correct : 0,
        correctImage : ["assets/images/refgameanswers/boarding.jpg"],
        correctDescription: 'Boarding is when a player checks, throws, or trips a player violently into the boards. This penalty tends to be up to the ref\'s discretion more than others. Often the incident can be similar to "Checking from Behind" or "Charging."'
        },
        {
        question: "Charging",
        choices: ["assets/images/refgamequestions/hooking.jpg","assets/images/refgamequestions/charging.jpg", "assets/images/refgamequestions/delay.jpg", "assets/images/refgamequestions/tripping.jpg"],
        qNum : 1,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/charging.jpg"],
        correctDescription:'Charging is similar to boarding, but can take place in open ice as well as along the boards. It is a violent hit, usually identified by a player taking 3 or more strides or leaving his feet to make the hit.'
        },
        {
        question: "Goal Scored",
        choices: ["assets/images/refgamequestions/timeout.jpg","assets/images/refgamequestions/roughing.jpg", "assets/images/refgamequestions/offside.jpg", "assets/images/refgamequestions/goal.jpg"],
        qNum : 2,
        correct : 3,
        correctImage : ["assets/images/refgameanswers/goal.jpg"],
        correctDescription:'A goal is scored when the puck completely crosses the goal line. A puck that stops on the goal line or does not completely cross the line is not counted.'
        },
        {
        question: "High Sticking",
        choices: ["assets/images/refgamequestions/high.jpg","assets/images/refgamequestions/kneeing.jpg", "assets/images/refgamequestions/ioffside.jpg", "assets/images/refgamequestions/holding-stick.jpg"],
        qNum : 3,
        correct : 0,
        correctImage : ["assets/images/refgameanswers/high.jpg"],
        correctDescription:'High sticking can either be called as a penalty or an infraction. A penalty is called when the stick contacts another player above the shoulder. If the player plays the puck above the shoulder during game play, the play is stopped. If a goal is scored after being hit by a stick higher than the cross-bar, the goal is not allowed (the height varies depending on the league).'
        },
        {
        question: "Delayed Offsides",
        choices: ["assets/images/refgamequestions/cross.jpg","assets/images/refgamequestions/offside.jpg", "assets/images/refgamequestions/interference.jpg", "assets/images/refgamequestions/misconduct.jpg"],
        qNum : 4,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/offside.jpg"],
        correctDescription:'Offsides occurs when an offensive player enters his or her offensive zone (crosses the blue line), before the puck. If the play is in the offensive zone, but the puck leaves the zone and re-enters, the referee will raise one arm to indicate a delayed offside. If an offensive player touches the puck before all players on his team leave the zone, the play will be stopped with a faceoff outside of the blue line.'
        },
        {
        question: "Roughing",
        choices: ["assets/images/refgamequestions/fighting.jpg","assets/images/refgamequestions/roughing.jpg", "assets/images/refgamequestions/slashing.jpg", "assets/images/refgamequestions/pshot.jpg"],
        qNum : 5,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/roughing.jpg"],
        correctDescription:'Roughing varies depeding on the league. Roughing is typically called for an avoidable check after the play has stopped or after a player is no longer in possession of the puck. It can also be called is a player punches another. In the NHL, a punch is usually considered a minor roughing penalty, however, in youth hockey, a punch is usually considered a major (5 minute) penetly for Fighting.'
        },
        {
        question: "Spearing",
        choices: ["assets/images/refgamequestions/timeout.jpg","assets/images/refgamequestions/tripping.jpg", "assets/images/refgamequestions/hooking.jpg", "assets/images/refgamequestions/spearing.jpg"],
        qNum : 6,
        correct : 3,
        correctImage : ["assets/images/refgameanswers/spearing.jpg"],
        correctDescription:'Spearing occurs when a player attemps to stab a player with the blade of his stick and can be called whether contact is made or not. This is a serious penalty and results in a major penalty (5 minutes) and game misconduct according to USA Hockey rules for youth leagues. In the NHL, a double-minor (two 2 mintes consecutive penelties) is imposed on players who attempt to spear, but do not make contact. A major penalty and misconduct are imposed for contact. Players may also face other disiplinaty actions such as fines and suspentions.'
        },
        {
        question: "Washout",
        choices: ["assets/images/refgamequestions/fighting.jpg","assets/images/refgamequestions/washout.jpg", "assets/images/refgamequestions/high.jpg", "assets/images/refgamequestions/spearing.jpg"],
        qNum : 7,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/washout.jpg"],
        correctDescription:'A signal used to negate a delayed call, such as when players touch up after a delayed offsides is signaled. This allows play to continue without a stoppage. It is also used to signal "No Goal" if the puck fails to completely cross the line. '
        },
        {
        question: "Hand Pass",
        choices: ["assets/images/refgamequestions/holding.jpg","assets/images/refgamequestions/kneeing.jpg", "assets/images/refgamequestions/ioffside.jpg", "assets/images/refgamequestions/hand.jpg"],
        qNum : 8,
        correct : 3,
        correctImage : ["assets/images/refgameanswers/hand.jpg"],
        correctDescription:'Players are allowed to stop or bat the puck out of the air or move the puck along the ice with an open hand. They can pass the puck to a teammate as long as both are in their defensive zone. If a player directs the puck to a teammate outside of the defensive zone, there is a stoppage of play and a faceoff. A minor penalty (either "delay of game" or "handling the puck" can be imposed if a player, other than the goalie, closes his hand on the puck and does not immediatly place it on the ice.'
        },
        {
        question: "Misconduct",
        choices: ["assets/images/refgamequestions/misconduct.jpg","assets/images/refgamequestions/interference.jpg", "assets/images/refgamequestions/roughing.jpg", "assets/images/refgamequestions/slashing.jpg"],
        qNum : 9,
        correct : 0,
        correctImage : ["assets/images/refgameanswers/misconduct.jpg"],
        correctDescription:'A misconduct penalty is the removal of a player from from the ice for 10 minutes or for the remainder of the game. The player is replaced on the ice, so the team is not shorthanded during the durration, unless the misconduct occured with another minor or major penalty. Goalies do not serve misconducts, the penalty is served by another teammate. And any coaches or staff given a misconduct cannot be on the bench or direct the team play. Misconducts are imposed for a long list of infraction, but are generally for unsportsman-like behavior, such as arguing with the referee or intentionally breaking one\'s stick.'
        },

        ]

        //Global Variables
        var numberCorrect = 0;
        var currentQuestionData = questions[currentQuestionNum];
    

    // Intro Screen - Click to Start
    var getCurrentQuestionData = function(questions, currentQuestionNum){
        return questions[currentQuestionNum];
    }

    // Setting functions outside of document ready
       function showCurrentquestion(currentQuestionData){

        //step 1: Clear Template
        $('h4.call').html("");

        // Load first 4 pictures into class "choices"
        $('.answer1 img').attr('src', "");
        $('.answer2 img').attr('src', "");
        $('.answer3 img').attr('src', "");
        $('.answer4 img').attr('src', "");

        //step 2: populate template

        $('h4.call').html(currentQuestionData.question);

        // Load first 4 pictures into class "choices"
        $('.answer1 img').attr('src', currentQuestionData.choices[0]);
        $('.answer2 img').attr('src', currentQuestionData.choices[1]);
        $('.answer3 img').attr('src', currentQuestionData.choices[2]);
        $('.answer4 img').attr('src', currentQuestionData.choices[3]);

    }

$(document).ready(function() {
    
    $(".start").click(function(event){
        event.preventDefault();
        $("#game").show("slow");
        $("#intro").hide("slow");
        showCurrentquestion(currentQuestionData); 
    });

    $(".return").click(function(event){
        event.preventDefault();

        // Bring in UI for Game
        $("#game").show("slow");
        $("#answer").hide("slow");

        // Clear out original responses
        $(".correct, .incorrect").hide();
        $(".correct-image").attr('src', '');
        $(".correct-description").text(" ");
       
   

        // Get Data to display
        var cqd = getCurrentQuestionData(questions, currentQuestionNum);
 		
        // Display Data
        if (currentQuestionNum == questions.length){ 
            //    show end of game screen
            $("#answer, .correct, .incorrect, #game").hide();
            $("#end").show("slow");
            $('.number').append(numberCorrect);
            $(".tweet").attr( "href", "https://twitter.com/intent/tweet?text=I%20got%20"+numberCorrect+"%20out%20of%2010%20referee%20calls%20correct!%20How%20many%20can%20you%20get%3F%20http%3A%2F%2Fgoo.gl%2FhiIdXJ%20via%20%40BandBhockey%20%23hockey");
        } else {
            showCurrentquestion(cqd);
        }
});
    
    $('.choices a').on('click', function(event){
        //stops us from going to outgoing link
        event.preventDefault();
        var currentItem;
         if(event.target.nodeName == 'A'){
            currentItem = event.target;
            } else if(event.target.nodeName == 'IMG'){
            currentItem = $(event.target).parent();
            } 

        //Get the index number of clicked answer
        var index = $(".choices a").index(currentItem);
        var cqd = getCurrentQuestionData(questions, currentQuestionNum);

        var correct = cqd.correct;
        var correctImage = cqd.correctImage;
        var description = cqd.correctDescription;
            if (index == correct) {
                $("#answer, .correct").show("slow");
                $(".correct-image").attr('src', cqd.correctImage);
                $(".correct-description").append("Description: " + cqd.correctDescription);
                $("#game").hide("slow"); 
                numberCorrect++; 
                ++currentQuestionNum;
                
            } else {
                $("#answer, .incorrect").show("slow");
                $(".correct-image").attr('src', cqd.correctImage);
                $(".correct-description").append("Description: "+cqd.correctDescription);
                $("#game").hide("slow"); 
                ++currentQuestionNum;
            }
    });

});