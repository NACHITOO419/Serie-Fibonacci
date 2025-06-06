//Declaracion de objetos Html (DOM)...
const BtNiniS = document.getElementById("IniS");
//Declaramos las variables que vamos a utilizar....
/*let Resul = 0;//R
let Num1 = 0;//J
let Num2 = 1;//K*/
//Declaro evento click para el boton...
//-Cuando se haga click en el boton se ejucutara el for-
BtNiniS.addEventListener("click",function(){
//Declaro ciclo for que va a : Sumar -Actualizar - mostrar ...
        let Resul = 0;//R
        let Num1 = 0;//J
        let Num2 = 1;//K
    
    for(let i=0;i<5;i++){
        Resul=Num1 + Num2;
        Num1=Num2;
        Num2=Resul;
            document.writeln("Resultado: ",Resul +"<br>"); 
            /*alert(Resul);// aca lo comentetmos porque pusemos un boton a esperar el click para que realice la funcion.
            console.log(Num1, Num2);*/
    
          }})
//el for Por completo va dentro de los parametros de la funcion...