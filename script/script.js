/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//zet variable-------------------------------------------------------------

//De variable voor de toets dat ingedrukt is
var keyPress = '';
//de toetsen van de zwarte piano tiles
var blackKey = ['q', 'w', 't', 'y', 'u', 'o', 'p'];

//Function------------------------------------------------------------------

//Functie voor het afspelen van piano geluid
function playPianoSound(e) {

    //Creeer audio object
    var pianoSoundWhite = new Audio('piano_sound/' + e + '.wav');
    var pianoSoundBlack = new Audio('piano_sound/' + e + '.mp3');

    //Speel audio object 'PianoSound'
    pianoSoundWhite.play();
    pianoSoundBlack.play();

}

//functie voor het oproepen om te spelen
function playPianoSoundKeyBoard(e) {

    //Verander de kleur van de ingedrukte toets
    document.getElementById(e.key).style.backgroundColor = 'grey';

    //speel geluid af
    playPianoSound(e.key);

    //De ingedrukte toets wordt in keypress opgeslagen
    keyPress = e.key;
}

function playPianoSoundMouse(e) {

    //pak de id van wat je klikt
    var targetClick = e.target.id;
    //maak een lijst van alle li elementen
    var liElement = document.querySelectorAll('li');

    //check of de id overeenkomt met de piano toetsen
    for (i = 0; i < liElement.length; i++) {
        if (targetClick == liElement[i].id) {
            document.getElementById(targetClick).style.background = 'grey';
            playPianoSound(targetClick);
            keyPress = targetClick;
        }
    }
}

//Verander de kleur van de piano toetsen naar 'oorspronkelijke' kleur
function changeBackGroundPiano(e) {

    var keyPianoID = document.getElementById(e);

    // zoek of de toets een zwarte toets is
    if (blackKey.indexOf(e) >= 0) {
        keyPianoID.style.background = 'black';
    } else {
        keyPianoID.style.background = 'white';
    }
}

//Functie om history te maken met wat je klikt 
//inspiratie van W3schoo.com http://www.w3schools.com/jsref/met_node_insertbefore.asp
function keyHistory() {

    //creeer element
    var historyText = document.createElement('P');
    //voeg tekst toe
    var text = document.createTextNode(keyPress.toUpperCase());

    var historyID = document.getElementById('historyContainer');

    // voeg tekst in element
    historyText.appendChild(text);

    //creeer element in html
    historyID.insertBefore(historyText, historyID.childNodes[0]);
}

//EventListner------------------------------------------------------------

//speelgeluid als toets gedrukt zijn (de background wordt ook verandert)
document.addEventListener('keydown', playPianoSoundKeyBoard);

//Speel music als je op piano toets klikt
document.addEventListener('mousedown', playPianoSoundMouse);

//Verander de achtergrond naar 'oorspronkelijk' kleur
document.addEventListener('keyup', function () {
    changeBackGroundPiano(keyPress);
}, false);

//Verander piano kleur
document.addEventListener('mouseup', function () {
    changeBackGroundPiano(keyPress);
}, false);

//Na het indrukken van een piano toets, wordt er een letter gecreeerd
document.addEventListener('keydown', keyHistory);
document.addEventListener('mousedown', keyHistory);


//Bron voor audio
//https://www.freesound.org/people/Teddy_Frost