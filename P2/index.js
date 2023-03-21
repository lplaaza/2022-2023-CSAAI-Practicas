console.log("Cargando JS..");
var respuesta=[]
//Interfaz
var n1=document.getElementById("n1")
var n2=document.getElementById("n2")
var n3=document.getElementById("n3")
var n4=document.getElementById("n4")

//Aciertos
var win=0;

//Teclado numerico
const teclas=document.getElementsByClassName("numero")

const estado = {
    INIT: 0,
    N1: 1,
}
let state = estado.INIT;

const crono = new Crono(gui.display);

function valor(value)
{
    console.log("Numero: " + value);
}

function numero(n)
{
    if (state == estado.INIT){
        n1.innerHTML="*";
        n2.innerHTML="*";
        n3.innerHTML="*";
        n4.innerHTML="*";
        respuesta = generarSecreto();
        console.log(respuesta);
        win=0;

        state=estado.N1;
        crono.start();
    }
     
    if(state == estado.N1){
        comparar(n)
        console.log("1")
    }

    if(win == 4){
        crono.stop();
    }
}

for (let tecla of teclas){
    tecla.onclick=numero;
}

function comparar(n){
    {
        if(respuesta[0]==n.target.value){
            n1.innerHTML=n.target.value;
            win=win +1;
            n1.classList.add("on")
        }
        if(respuesta[1]==n.target.value){
            n2.innerHTML=n.target.value;
            win=win +1;
            n2.classList.add("on")
        }
        if(respuesta[2]==n.target.value){
            n3.innerHTML=n.target.value;
            win=win +1;
            n3.classList.add("on")
        }
        if(respuesta[3]==n.target.value){
            n4.innerHTML=n.target.value;
            win=win +1;
            n4.classList.add("on")
        }
    }
}

function generarSecreto(){
    let pin = [];
    for(let i=0; i<4; i++){
        pin.push(Math.floor(Math.random()* 10));
    }
    return pin;
}

console.log(respuesta)

function vincular(){
    n1=respuesta[0]
    n2=respuesta[1]
    n3=respuesta[2]
    n4=respuesta[3]
}

const gui = {
    pantalla: document.getElementById("display"),
    start: document.getElementById("start"),
    stop: document.getElementById("stop"),
    reset: document.getElementById("reset")
}

gui.start.onclick=() => {
    console.log("Start.");
    crono.stop();
    state = estado.N1;
}

gui.stop.onclick=()=> {
    console.log("Stop.");
    crono.stop();
    state=estado.N1;
}

gui.reset.onclick=() => {
    console.log("Reset.");
    n1.innerHTML="*";
    n2.innerHTML="*";
    n3.innerHTML="*";
    n4.innerHTML="*";

    state =estado.INIT;
    crono.reset();
}