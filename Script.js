//Declaramos las variables que vamos a utilizar....
let Resul = 0;//R
let Num1 = 0;//J
let Num2 = 1;//K

//Declaro ciclo for que va a : Sumar -Actualizar - mostrar ...
for(let i=0;i<5;i++){
    Resul=Num1 + Num2;
    Num1=Num2;
    Num2=Resul;
        alert(Resul);
        console.log(Num1, Num2);
}
