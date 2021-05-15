function addUser(){
    player_1name = document.getElementById("player1_name_input").value;
    player_2name = document.getElementById("player2_name_input").value;

    localStorage.setItem("name1" , player_1name);
    localStorage.setItem("name2" , player_2name);

    window.location.replace("game_page.html");
}