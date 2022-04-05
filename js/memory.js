var arrayAnimali = [
    '🐱', '🦉', '🐾',
    '🦄', '🦋', '🐛',
    '🐝', '🐬', '🐱',
    '🦉', '🐾', '🦄',
    '🦋', '🐛', '🐝', '🐬'
];


console.log()
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}

var interval;

function startTimer() {
    var s = 0,
        m = 0,
        h = 0;
    interval = setInterval(function () {
        timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }
    }, 1000);
}

function startGame() {

    var arrayShuffle = shuffle(arrayAnimali);

    clearInterval(interval);
    arrayComparison = [];

    var lista = document.getElementById('griglia');
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }

    for (var i = 0; i < 16; i++) {
        var box = document.createElement('div');
        var element = document.createElement('div');
        element.className = 'icon';
        document.getElementById('griglia')
            .appendChild(box).appendChild(element);
        element.innerHTML = arrayShuffle[i];
    }

    startTimer();

    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];

    for (var i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", displayIcon);
        icons[i].addEventListener("click", openModal);
    }

}

function displayIcon() {

    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];

    this.classList.toggle("show");
    arrayComparison.push(this);

    var len = arrayComparison.length;
    if (len === 2) {
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison.forEach(function (elemento) {
                elemento.classList.add("find", "disabled");
            });
            arrayComparison = [];
        } else {
            icons.forEach(function (item) {
                item.classList.add('disabled');
            });
            setTimeout(function () {
                arrayComparison.forEach(function (elemento) {
                    elemento.classList.remove("show");
                });
                icons.forEach(function (item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}

var iconsFind = document.getElementsByClassName("find");

var modal = document.getElementById("modal");
var timer = document.querySelector(".timer");


function openModal(){  
  if (iconsFind.length == 16){
      clearInterval(interval);
      modal.classList.add("active");
      document.getElementById("totalTime").innerHTML = timer.innerHTML;
    
  }
}



/*function playAgain(){
    modal.classList.remove("active");
    startGame();
  }*/

  