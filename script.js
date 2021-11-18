function findWinner(){
    var answer1 = "(0)";
    var answer2 = "(0)";
    var team1 = document.getElementById("score1").value;
    var team2 = document.getElementById("score2").value;
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var comma1 = 0;
    var comma2 = 0;

    if (team1 == 1) {
        answer1 = '(1)';
    }
    if (team1 == 2) {
        answer1 = '(1, 1), (2)'
    }
    if (team1 == 3) {
        answer1 = '(1, 1, 1), (1, 2), (3)'
    }
    if (team1 == 4) {
        answer1 = '(1, 1, 1, 1), (1, 1, 2), (2, 2), (1, 3), (4)'
    }
    if (team1 == 5) {
        answer1 = '(1, 1, 1, 1, 1), (1, 1, 1, 2), (1, 2, 2), (1, 1, 3), (2, 3), (1, 4), (5)'
    }
    if (team1 == 6) {
        answer1 = '(1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 2), (1, 1, 2, 2), (2, 2, 2), (1, 1, 1, 3), (1, 2, 3), (3, 3), (1, 1, 4), (2, 4), (1, 5), (6)'
    }
    if (team1 == 7) {
        answer1 = '(1, 1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 1, 2), (1, 1, 1, 2, 2), (1, 2, 2, 2), (1, 1, 1, 1, 3), (1, 1, 2, 3), (2, 2, 3), (1, 3, 3), (1, 1, 1, 4), (1, 2, 4), (3, 4), (1, 1, 5), (2, 5), (1, 6), (7)'
    }

    if (team2 == 1) {
        answer2 = '(1)'
    }
    if (team2 == 2) {
        answer2 = '(1, 1), (2)'
    }
    if (team2 == 3) {
        answer2 = '(1, 1, 1), (1, 2), (3)'
    }
    if (team2 == 4) {
        answer2 = '(1, 1, 1, 1), (1, 1, 2), (2, 2), (1, 3), (4)'
    }
    if (team2 == 5) {
        answer2 = '(1, 1, 1, 1, 1), (1, 1, 1, 2), (1, 2, 2), (1, 1, 3), (2, 3), (1, 4), (5)'
    }
    if (team2 == 6) {
        answer2 = '(1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 2), (1, 1, 2, 2), (2, 2, 2), (1, 1, 1, 3), (1, 2, 3), (3, 3), (1, 1, 4), (2, 4), (1, 5), (6)'
    }
    if (team2 == 7) {
        answer2 = '(1, 1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 1, 2), (1, 1, 1, 2, 2), (1, 2, 2, 2), (1, 1, 1, 1, 3), (1, 1, 2, 3), (2, 2, 3), (1, 3, 3), (1, 1, 1, 4), (1, 2, 4), (3, 4), (1, 1, 5), (2, 5), (1, 6), (7)'
    }

    if (team1 > team2 && parseInt(team1) + parseInt(team2) < 8 && text2 != "" && text1 != "") {

        for (var i = 0; i < text1.length; i++){
            if (text1[i] == ","){
                comma1 = comma1 + 1;
            }
        }

        if(comma1 < 11){
            document.getElementById("tprice").innerHTML = `The Winner is Team 1, their score is ${team1} goals and score-list of team 1 is ${answer1} || score-list of team 2 is ${answer2}`;
            console.log("Players of team 1:")
            var players = text1.split(',');
            players.forEach((element) => { 
                console.log(element); 
            });
            console.log("=========================================")
            console.log("Players of team 2:")
            var players = text2.split(',');
            players.forEach((element) => { 
                console.log(element); 
            });
        }

        else {
            alert("The maximum number of players is 11.");
        }
    }
    else if (team2 > team1 && parseInt(team1) + parseInt(team2) < 8 && text2 != "" && text1 != "") {

        for (var i = 0; i < text2.length; i++){
            if (text2[i] == ","){
                comma2 = comma2 + 1;
            }
        }

        if(comma2 < 11){
            document.getElementById("tprice").innerHTML = `The Winner is Team 2, their score is ${team2} goals and score-list of team 1 is ${answer1} || score-list of team 2 is ${answer2}`;
            console.log("Players of team 1:")
            var players = text1.split(',');
            players.forEach((element) => { 
                console.log(element); 
            });
            console.log("=========================================")
            console.log("Players of team 2:")
            var players = text2.split(',');
            players.forEach((element) => { 
                console.log(element); 
            });
        }

        else {
            alert("The maximum number of players is 11.");
        }
    }
    else if (team1 == team2 && parseInt(team1) + parseInt(team2) < 8 && text2 != "" && text1 != ""){

        for (var i = 0; i < text1.length; i++){
            if (text1[i] == ","){
                comma1 = comma1 + 1;
            }
        }
        for (var i = 0; i < text2.length; i++){
            if (text2[i] == ","){
                comma2 = comma2 + 1;
            }
        }

        if(comma1 < 11 && comma2 < 11){
            document.getElementById("tprice").innerHTML = `It is draw, score is ${team2}:${team2} goals and score-list both of them is ${answer2}`;
            console.log("Players of team 1:")
            var players = text1.split(',');
            players.forEach((element) => { 
                console.log(element); 
            });
            console.log("=========================================")
            console.log("Players of team 2:")
            var players = text2.split(',');
            players.forEach((element) => { 
                console.log(element); 
            });
        }
        else {
            alert("The maximum number of players is 11.");
        }
    }
    else {
        if (text1 != "" && text2 != ""){
            alert("The maximum combined number of goals is 7");
        }
        else{
            alert("You need to enter the names of the players for team 1 and team 2!");
        }
    }
}