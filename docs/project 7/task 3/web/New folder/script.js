var themen = 0;
var themes = ["purple.css"]
function changetoPurple(){
  themen++;
  if(themen == themes.length) themen = 0
  document.querySelector(`link[rel=stylesheet][type]`).href=themes[themen];
}
var themene = 0;
var themese = ["red.css"]
function changetoRed(){
  themene++;
  if(themene == themese.length) themene = 0
  document.querySelector(`link[rel=stylesheet][type]`).href=themese[themene];
}
var themen = 0;
var themes = ["blue.css", "purple.css", "red.css", "orange.css","green.css"]
function changeStyle(){
  themen++;
  if(themen == themes.length) themen = 0
  document.querySelector(`link[rel=stylesheet][type]`).href=themes[themen];
} 
var themenn = 0;
var themesn = ["orange.css"]
function changetoOrange(){
  themenn++;
  if(themenn == themesn.length) themenn = 0
  document.querySelector(`link[rel=stylesheet][type]`).href=themesn[themenn];
}
var themena = 0;
var themesa = ["blue.css"] // default 
function changetoBlue(){
  themena++;
  if(themena == themesa.length) themena = 0
  document.querySelector(`link[rel=stylesheet][type]`).href=themesa[themena];
}
var themeng = 0;
var themesg = ["green.css"]
function changetoGreen(){
  themeng++;
  if(themeng == themesg.length) themeng = 0
  document.querySelector(`link[rel=stylesheet][type]`).href=themesg[themeng];
}
var themeng = 0;
var themesg = ["brt.css"]
function changetoBrt(){
  themeng++;
  if(themeng == themesg.length) themeng = 0
  document.querySelector(`link[rel=stylesheet][type]`).href=themesg[themeng];
}
var themen = 0;
var themes = ["blue.css", "purple.css", "red.css", "orange.css","green.css", "brt.css"]
function changeStyle(){
  themen++;
  if(themen == themes.length) themen = 0
  document.querySelector(`link[rel=stylesheet][type]`).href=themes[themen];
} 



function changeTheme(themeFile) {
    document.getElementById("theme").href = themeFile;
}


let previousBackground = ""; // Stores previous background color

function toggleTheme() {
    let theme = document.getElementById("theme");
    let banner = document.getElementById("banner");

    if (theme.getAttribute("href") === "brt.css") {
        previousBackground = banner.style.backgroundColor; // Save current color
        theme.setAttribute("href", "darkmode.css");
} else {
        theme.setAttribute("href", "brt.css");
        banner.style.backgroundColor = previousBackground; // Restore previous color
}


let previousBackground = ""; // Stores previous background color

function toggleTheme() {
    let theme = document.getElementById("theme");
    let banner = document.getElementById("banner");

    if (theme.getAttribute("href") ===  "blue.css") {
        previousBackground = banner.style.backgroundColor; // Save current color
        theme.setAttribute("href", "darkmode.css");
} else {
        theme.setAttribute("href", "blue.css");
        banner.style.backgroundColor = previousBackground; // Restore previous color
}


let previousBackground = ""; // Stores previous background color

function toggleTheme() {
    let theme = document.getElementById("theme");
    let banner = document.getElementById("banner");

    if (theme.getAttribute("href") === "red.css") {
        previousBackground = banner.style.backgroundColor; // Save current color
        theme.setAttribute("href", "darkmode.css");
} else {
        theme.setAttribute("href", "red.css");
        banner.style.backgroundColor = previousBackground; // Restore previous color
}


let previousBackground = ""; // Stores previous background color

function toggleTheme() {
    let theme = document.getElementById("theme");
    let banner = document.getElementById("banner");

    if (theme.getAttribute("href") === "green.css") {
        previousBackground = banner.style.backgroundColor; // Save current color
        theme.setAttribute("href", "darkmode.css");
} else {
        theme.setAttribute("href", "green.css");
        banner.style.backgroundColor = previousBackground; // Restore previous color
}


let previousBackground = ""; // Stores previous background color

function toggleTheme() {
    let theme = document.getElementById("theme");
    let banner = document.getElementById("banner");

    if (theme.getAttribute("href") === "orange.css") {
        previousBackground = banner.style.backgroundColor; // Save current color
        theme.setAttribute("href", "darkmode.css");
} else {
        theme.setAttribute("href", "orange.css");
        banner.style.backgroundColor = previousBackground; // Restore previous color
}
let previousBackground = ""; // Stores previous background color

function toggleTheme() {
    let theme = document.getElementById("theme");
    let banner = document.getElementById("banner");

    if (theme.getAttribute("href") === "purple.css") {
        previousBackground = banner.style.backgroundColor; // Save current color
        theme.setAttribute("href", "darkmode.css");
} else {
        theme.setAttribute("href", "purple.css");
        banner.style.backgroundColor = previousBackground; // Restore previous color
}
}
}
}
}
}
}

let audio = document.getElementById("audioPlayer");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Resets playback position
}

function muteAudio() {
    audio.muted =!audio.muted; // Toggle mute
}
