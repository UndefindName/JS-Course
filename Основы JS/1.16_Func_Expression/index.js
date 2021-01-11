function sAyHi() {
    alert ("Привет!");
}

let sayHi = function() {
   return alert("Привет");
};

let func = sAyHi;

sAyHi();
sayHi();
func();

// Callback
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
function showOk() {
    alert( "Вы согласны." );
}
  
function showCancel() {
    alert( "Вы отменили выполнение." );
}
  
ask("Вы согласны?", showOk, showCancel);

function aask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

aask (
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
)

let age = prompt("Сколько вам лет?", "18");

let welcome = (age < 18) ?
  function() { alert("Привет!"); }:
  function() { alert("Здравствуйте!"); };

welcome()