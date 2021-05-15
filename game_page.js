var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player_1name").innerHTML = player1_name + " : ";
document.getElementById("player_2name").innerHTML = player2_name + " : ";

document.getElementById("player_1score").innerHTML = player1_score;
document.getElementById("player_2score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1 , "_");
    remove_charAt2 = remove_charAt1.replace(charAt2 , "_");
    remove_charAt3 = remove_charAt2.replace(charAt3 , "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'>Q. " + remove_charAt3 + "</h4>";
    input_box = "<br> Ans : <input type='text' id='input_check_box>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var question_turn = "Player 1";
var answer_turn = "Player 2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if (answer == word) {
        if (answer_turn == "Player 1") {
            player1_score = player1_score + 1;
            document.getElementById("player_1score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player_2score").innerHTML = player2_score;
        }
    }

    if (question_turn == "Player 1"){
        question_turn = "Player 2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "Player 1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "Player 1") {
        answer_turn = "Player 2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "Player 1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
