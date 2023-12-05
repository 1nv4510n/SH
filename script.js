//--------------------------------------------------------
function ListDel() {
    var text = document.getElementById("text_print");
    text.innerHTML = "Список дел";
}

var listdel = document.getElementById("listdel");
listdel.addEventListener('click', ListDel);

//--------------------------------------------------------
function ListUgolDel() {
    var text = document.getElementById("text_print");
    text.innerHTML = "Уголовные дела";
}

var listugoldel = document.getElementById("listugoldel");
listugoldel.addEventListener('click', ListUgolDel);

//--------------------------------------------------------
function Ecspertise() {
    var text = document.getElementById("text_print");
    text.innerHTML = "Экспертизы";
}

var ecspertise = document.getElementById("ecspertise");
ecspertise.addEventListener('click', Ecspertise);

//--------------------------------------------------------
function Poterpevcshie() {
    var text = document.getElementById("text_print");
    text.innerHTML = "Потерпевшие";
}

var poterpevcshie = document.getElementById("poterpevcshie");
poterpevcshie.addEventListener('click', Poterpevcshie);

//--------------------------------------------------------
function Svideteli() {
    var text = document.getElementById("text_print");
    text.innerHTML = "Свидетели";
}

var svideteli = document.getElementById("svideteli");
svideteli.addEventListener('click', Svideteli);

//--------------------------------------------------------
function ListPattern() {
    var text = document.getElementById("text_print");
    text.innerHTML = "Каталог шаблонов";
}

var listpattern = document.getElementById("listpattern");
listpattern.addEventListener('click', ListPattern);

//--------------------------------------------------------
function Back() {
    var text = document.getElementById("text_print");
    text.innerHTML = "Текст при входе на страницу...";
}

var back = document.getElementById("back");
back.addEventListener('click', Back);