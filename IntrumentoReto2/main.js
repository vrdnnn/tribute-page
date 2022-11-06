//PRIMER PARTE: TEXTO

//h3
let nombre = 'Móni';
let edad = 19;              //variable establecido como dato real certero, para condicional del h4
let likesMusic = true;


let nombreElement = document.querySelector('span#name');
let edadElement = document.querySelector('span#age');
let likesMusicElement = document.querySelector('span#likesMusic');

nombreElement.textContent = nombre;
edadElement.textContent = edad;
likesMusicElement.textContent = likesMusic;

if(likesMusic === true){
    likesMusicElement.textContent = 'disfruto la música'
} else {
    likesMusicElement.textContent = 'no me gusta la música'
}

//h4
let edadGuess = 20;  //variable a modificar para comprobar que el condicional esté bien
let edadIsGuess;

const edadGuessElement = document.querySelector('span#guessedAge');
const edadIsGuessElement = document.querySelector('span#isGuessRight');


edadGuessElement.textContent = edadGuess;
if (edadGuess === edad){
    edadIsGuess === true
    edadIsGuessElement.textContent = 'correcto';
 } else {
    edadIsGuess === false
    edadIsGuessElement.textContent = 'incorrecto';
 }



//SEGUNDA PARTE: FUNCIONALIDAD

function playNote(key) {
    // Obtener la nota
    const noteAudio = document.getElementById(key.dataset.note);
    // Resetear la ejecución de la nota
    noteAudio.currentTime = 0;
    // Utilizar método play() de la nota
    noteAudio.play();
  
    // Añadimos clase active
    key.classList.add('active');
    // Agregamos un event listener al estado ended del evento keydown
    noteAudio.addEventListener('ended', () => {
      // Cuando termine de reproducirse el sonido, removemos clase active
      key.classList.remove('active');
    });
  }
  
  let WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  let BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
  
  let keys = document.querySelectorAll('.key');
  let whiteKeys = document.querySelectorAll('.key.white');
  let blackKeys = document.querySelectorAll('.key.black');
  
  keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    let key = e.key;
    let whiteKeyIndex = WHITE_KEYS.indexOf(key);
    let blackKeyIndex = BLACK_KEYS.indexOf(key);
    console.log(whiteKeys[whiteKeyIndex]);
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
  });