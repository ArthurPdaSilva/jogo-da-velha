const buttons = document.getElementsByClassName('item');
const modalContainer = document.querySelector('div#modal');
const modalItem = document.querySelector('div#modal-container');
const button = document.createElement('button');
button.setAttribute('onclick', 'location.reload()');
button.textContent = 'Recomeçar';

let countPlayer = 0;

function toggleValue(e){
    if (e.innerHTML === '') {
        e.innerHTML = countPlayer % 2 === 0 ? 'X' : 'O';
        if (countPlayer >= 4) whoPlayerWin();
        countPlayer++;
    }
}


function whoPlayerWin(){
    if (countPlayer === 8) callCheckerVictory();
    else {
        const text = verify();
        if(text.length !== 0) callCheckerVictory(text);
    }
}

function verify() {
    if (buttons[0].innerHTML === buttons[1].innerHTML && buttons[1].innerHTML == buttons[2].innerHTML) 
        return buttons[0].innerHTML;
    else if(buttons[3].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML == buttons[5].innerHTML) 
        return buttons[3].innerHTML;
    else if(buttons[6].innerHTML === buttons[7].innerHTML && buttons[7].innerHTML == buttons[8].innerHTML) 
        return buttons[6].innerHTML;
    else if(buttons[0].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML == buttons[8].innerHTML) 
        return buttons[0].innerHTML;
    else if(buttons[0].innerHTML === buttons[3].innerHTML && buttons[3].innerHTML == buttons[6].innerHTML) 
        return buttons[0].innerHTML;
    else if(buttons[1].innerHTML === buttons[4].innerHTML && buttons[4].innerHTML == buttons[7].innerHTML) 
        return buttons[1].innerHTML;
    else if(buttons[2].innerHTML === buttons[5].innerHTML && buttons[5].innerHTML == buttons[8].innerHTML) 
        return buttons[2].innerHTML;
    else return '';
}

function callCheckerVictory(win = 'Empate'){
    modalContainer.style.display = 'flex';
    modalItem.innerHTML = win === 'Empate' ? '<p>Empate</p>' : `<p>O vencedor é: ${win == 'X' ? 'Jogador 1' : 'Jogador 2'}</p>`;
    modalItem.appendChild(button);
}
