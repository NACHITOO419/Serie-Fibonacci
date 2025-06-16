//Declaracion de objetos Html (DOM)...
const BtNiniS = document.getElementById("IniS");
 const BtNCleaN = document.getElementById("CleaN");
//Declaramos las variables que vamos a utilizar....
let Resul = 0;//R
let Num1 = 0;//J
let Num2 = 1;//K*
//Declaro evento click para el boton...
//-Cuando se haga click en el boton se ejucutara el for-
BtNiniS.addEventListener("click",function(){
//Declaro ciclo for que va a : Sumar -Actualizar - mostrar ...
       /*let Resul = 0;//R
        let Num1 = 0;//J
        let Num2 = 1;//K  */

       const contenedor = document.getElementById("Bkmuestra");
       // inciamos el contendor en balnco para que cuando el usuario realice el click se sobre escriba
        contenedor.innerHTML = "";
      

    for(let i=0;i<10;i++){
       
         Resul=Num1 + Num2;
         Num1=Num2;
         Num2=Resul;

             contenedor.style.display = "block";//activar el borde con un disbplay

            contenedor.innerHTML += `Resultado: ${Resul} <br>`;
        /*alert(Resul);// aca lo comentetmos porque pusemos un boton a esperar el click para que realice la funcion.
        console.log(Num1, Num2);*/
        
          }
         document.body.style.backgroundColor="cadetblue";
        // document.body.p.style="color: red"; //"border: 3px solid #2f5050"; 
       

        }
       )
        BtNCleaN.addEventListener("click",function(){
                 //Funcion de el boton par limpiar pantalla..
                const contenedor = document.getElementById("Bkmuestra");
                contenedor.innerHTML = " ";

                 contenedor.style.display = "none";
                    Resul= 0;
                    Num1 = 0;
                    Num2 = 1;
                document.body.style.backgroundColor="cadetblue";
                }

)
//el for Por completo va dentro de los parametros de la funcion...