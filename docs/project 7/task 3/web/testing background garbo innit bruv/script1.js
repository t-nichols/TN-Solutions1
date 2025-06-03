Define toggleDropdown

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

