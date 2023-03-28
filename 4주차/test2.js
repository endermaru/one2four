const gameBoard = document.getElementById('game-board');
const gamerecord=document.getElementById("game-record");

let currentN=0;
let turn=0; //0이 플레이어, 1이 CPU
let count_turn=1;
let game_start=0;

const me=document.getElementById('me');
me.addEventListener("click",function(){
    if (game_start==0){
        game_start=1;
        start(0);
    }
    
});
const cpu=document.getElementById("cpu");
cpu.addEventListener("click",function(){
    if (game_start==0){
        game_start=1;
        start(1);
    }
});

function start(k){
    gameBoard.innerHTML = '';
    turn=k;
    if (k==1){
        setTimeout(computerTurn, 1000);
    }
    const p = document.createElement('p');
    p.setAttribute("id","panel");
    p.innerHTML = '현재 숫자: 0';
    gameBoard.appendChild(p);

    const b1 = document.createElement('button');
    b1.innerHTML= '1';
    b1.onclick = () => {
        if (turn==0){
            addNumber(1);
            turn=1;
            setTimeout(computerTurn, 1000);
        }
    };
    gameBoard.appendChild(b1);

    const b2 = document.createElement('button');
    b2.innerHTML = '2';
    b2.onclick = () => {
        if (turn==0){
            addNumber(2);
            turn=1;
            setTimeout(computerTurn, 1000);
        }
    }
    gameBoard.appendChild(b2);

    const b3 = document.createElement('button');
    b3.innerHTML = '3';
    b3.onclick = () => {
        if (turn==0){
            addNumber(3);
            turn=1;
            setTimeout(computerTurn, 1000);
            
        }
    };
    gameBoard.appendChild(b3);

    const reset = document.createElement('button');
    reset.innerHTML = 'new game';
    reset.onclick = () => {
        call_reset();
        alert("reset completed");
    };
    gameBoard.appendChild(reset);

};

function call_reset(){
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
    while (gamerecord.firstChild) {
        gamerecord.removeChild(gamerecord.firstChild);
    }
    currentN=0;
    count_turn=1;
    game_start=0;
}

function addNumber(number) {
    const p = document.getElementById("panel");
    currentN += number;
    add_record(number);
    p.innerHTML="현재 숫자 : "+String(currentN);
    if (currentN>=31){
        if (turn==0){
            alert("You lose...");
        } else {
            alert("You Win!");
        };
    }
}

function computerTurn(){
    let rand_n=Math.floor(Math.random()*3)+1;
    addNumber(rand_n);
    turn=0;
}

function add_record(n){
    console.log(turn);
    let new_record;
    if (turn==0){
        new_record=document.createElement('li');
        new_record.innerHTML=String(count_turn)+"턴 : 플레이어가 "+String(n)+"을 더했습니다.";
    } else {
        new_record=document.createElement('li');
        new_record.innerHTML=String(count_turn)+"턴 : 컴퓨터가 "+String(n)+"을 더했습니다.";
    }
    if (gamerecord.firstChild) {
        gamerecord.insertBefore(new_record, gamerecord.firstChild);
    } else {
        gamerecord.appendChild(new_record);
    }
    count_turn++;

};