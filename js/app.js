let win = '';
let countPlayer = 0
const buttons = document.getElementsByClassName('item');


// Add X or O
function toggleValue(e){
    
    
    if(countPlayer % 2 === 0 && e.innerHTML === '' && win === ''){
        e.innerHTML = 'X';
    }else if(countPlayer % 2 !== 0 && e.innerHTML === '' && win === ''){
        e.innerHTML = 'O';
    }else{
        return;
    }
    
    countPlayer++;
    playerWin();
    
}


// Testar sequências
function playerWin(){

    if(countPlayer >= 4){

        if(buttons[0].innerHTML === 'X' && buttons[1].innerHTML === 'X' && buttons[2].innerHTML === 'X'){
            // Player One Win
            win = 'Player One';
            callCheckerVictory();
        }else if(buttons[0].innerHTML === 'X' && buttons[3].innerHTML === 'X' && buttons[6].innerHTML === 'X'){
            win = 'Player One';
            callCheckerVictory();
        }else if(buttons[0].innerHTML === 'X' && buttons[4].innerHTML === 'X' && buttons[8].innerHTML === 'X'){
            win = 'Player One';
            callCheckerVictory();
        }else if(buttons[3].innerHTML === 'X' && buttons[4].innerHTML === 'X' && buttons[5].innerHTML === 'X'){
            win = 'Player One';
            callCheckerVictory();
        }else if(buttons[1].innerHTML === 'X' && buttons[4].innerHTML === 'X' && buttons[7].innerHTML === 'X'){
            win = 'Player One';
            callCheckerVictory();
        }else if(buttons[2].innerHTML === 'X' && buttons[5].innerHTML === 'X' && buttons[8].innerHTML === 'X'){
            win = 'Player One';
            callCheckerVictory();
        }else if(buttons[2].innerHTML === 'X' && buttons[4].innerHTML === 'X' && buttons[6].innerHTML === 'X'){
            win = 'Player One';
            callCheckerVictory();
        }else if(buttons[6].innerHTML === 'X' && buttons[7].innerHTML === 'X' && buttons[8].innerHTML === 'X'){
            win = 'Player One';
            callCheckerVictory();
        }else if(buttons[0].innerHTML === 'O' && buttons[1].innerHTML === 'O' && buttons[2].innerHTML === 'O'){
            // Player Two Win
            win = 'Player Two';
            callCheckerVictory();
        }else if(buttons[0].innerHTML === 'O' && buttons[3].innerHTML === 'O' && buttons[6].innerHTML === 'O'){
            win = 'Player Two';
            callCheckerVictory();
        }else if(buttons[0].innerHTML === 'O' && buttons[4].innerHTML === 'O' && buttons[8].innerHTML === 'O'){
            win = 'Player Two';
            callCheckerVictory();
        }else if(buttons[3].innerHTML === 'O' && buttons[4].innerHTML === 'O' && buttons[5].innerHTML === 'O'){
            win = 'Player Two';
            callCheckerVictory();
        }else if(buttons[1].innerHTML === 'O' && buttons[4].innerHTML === 'O' && buttons[7].innerHTML === 'O'){
            win = 'Player Two';
            callCheckerVictory();
        }else if(buttons[2].innerHTML === 'O' && buttons[5].innerHTML === 'O' && buttons[8].innerHTML === 'O'){
            win = 'Player Two';
            callCheckerVictory();
        }else if(buttons[2].innerHTML === 'O' && buttons[4].innerHTML === 'O' && buttons[6].innerHTML === 'O'){
            win = 'Player Two';
            callCheckerVictory();
        }else if(buttons[6].innerHTML === 'O' && buttons[7].innerHTML === 'O' && buttons[8].innerHTML === 'O'){
            win = 'Player Two';
            callCheckerVictory();
        }else if(buttons[0].innerHTML !== '' && buttons[1].innerHTML !== '' && buttons[2].innerHTML !== '' && buttons[3].innerHTML !== '' && buttons[4].innerHTML !== '' && buttons[5].innerHTML !== '' && buttons[6].innerHTML !== '' && buttons[7].innerHTML !== '' && buttons[8].innerHTML !== ''){
            win = 'Draw';
            callCheckerVictory();
        }else{
            return;
        }
    }else{
        return;
    }

}

// Verificar vitória
function callCheckerVictory(){
    alert(`O vencedor é: ${win}`);
    win = '';
    setTimeout(() => {
        for(let count = 0; count < buttons.length; count++){
            buttons[count].innerHTML = ''
        }   
    }, 500);
}