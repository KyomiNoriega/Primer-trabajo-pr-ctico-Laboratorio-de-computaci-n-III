let btnCalcular = document.getElementById('btnCalcular');
let btnReinvertir = document.getElementById('btnReinvertir');

btnCalcular.addEventListener('click', () =>{
    calcularMonto()
})
btnReinvertir.addEventListener('click', () =>{
    calcularMonto()
})


 function limpiar(){
     document.getElementById("formulario").reset();
 }

 function calcularMonto(){
    let NombreApellido = document.getElementById('NombreApellido').value;
    let Monto = document.getElementById('MontoInvertido').value ;
    let Dias = document.getElementById('CantidadDias').value ;
    let comprobante=false;
    let comprobantemonto=false;
    
    if (NombreApellido ===""){
        alert("Debe ingresar su nombre y apeliido");
        comprobante=false;
        document.getElementById("NombreApellido").focus();
    }else {comprobante=true;
    }
    
    if (Monto<1000){
        alert("Monto mayor a $1000 ");
        comprobantemonto = false;
    }else {comprobantemonto=true;}
    if (Dias <=29||Dias==="")
    {
        alert("Días mayor a 30");
        comprobante=false;
        document.getElementById("Dias").focus();
    }else {
       
        if (comprobante===true && comprobantemonto===true){
            let montoFinal = parseFloat(Monto) + Monto * (Dias / 360) * intereses(Dias);
  
            let etiquetaP = document.createElement('p');
            etiquetaP.appendChild(document.createTextNode("El monto de su inversión es: " + "$" +  montoFinal));
        
            document.getElementById("CalcularInversion").appendChild(etiquetaP);
        }
    }
    function intereses(Dias){
        let Porcentaje = 0;
    
        if(Dias >= 30 &&  Dias <= 60){
            Porcentaje = (40 / 100);
        }
        else if (Dias >= 61 &&  Dias <= 120){
            Porcentaje = (45 / 100);
        }
        else if(Dias >= 121 &&  Dias < 360){
            Porcentaje = (50 / 100);
        }
        else{
            Porcentaje = (60 / 100);
        }
        return Porcentaje;
    }
    function Reinvertir (){
        
    }
            
    } 
