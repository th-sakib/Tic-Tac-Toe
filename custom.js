// variables
const boxes = Array.from(document.getElementsByClassName('box'));
let turn = 'X';
let isVictory = false;


// functionalities
const turnChange = () => {
    if (turn == 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
}
const isWin = () => {
    const winCons = [
        [0, 1, 2, 2.5, 5.3, 0],// last 3 translate X, translate Y, rotatevw, 28.7vw
        [3, 4, 5, 2.5, 17, 0],
        [6, 7, 8, 2.5, 28.7, 0],
        [0, 3, 6, ],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    winCons.forEach(con => {
        if ((boxes[con[0]].innerText == boxes[con[1]].innerText) && (boxes[con[2]].innerText == boxes[con[1]].innerText) && (boxes[con[0]].innerText != '')) {
            document.getElementById('turn').innerText = `${boxes[con[0]].innerText} Won`
            isVictory = true;
            document.querySelector('.vanish').style.opacity = 1;
        }
    })

}
// handle events 
boxes.forEach((box) => {
    box.addEventListener('click', function boxClicked(e) {
        if (box.innerText == '') {
            box.innerText = turn;
            turnChange();
            isWin();
            if (isVictory == false) {
                document.getElementById('turn').innerText = `Turn for: ${turn}`;
            }
        }
        // if ((document.getElementById('turn').innerText == 'X Won') || (document.getElementById('turn').innerText == 'O Won')) {
        //     boxes.forEach(box => {
        //         box.removeEventListener('click');
        //     })
        // }
    })
})
// reset button handle 
const reset = document.getElementById('reset-btn');
reset.addEventListener('click', function () {
    boxes.forEach(box => {
        box.innerText = '';
        document.querySelector('.vanish').style.opacity = 0;
        document.getElementById('turn').innerText = `Turn for: X`;

    })
})
// switch between theme button handle
const switchIt = document.getElementById('mode-switch-btn');
switchIt.addEventListener('click', function () {
    const body = document.getElementsByTagName('body');
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.value == 'dark-mode') {
        this.innerText = 'Light Mode';
    } else {
        this.innerText = "Dark Mode";
    }
})