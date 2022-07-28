let tipInit = confirm ("Bienvenido a la calculadora de propinas.")
   
   while (tipInit){
       let monto = parseInt(prompt("¿Cuánto gastaste?"));
       let tip = parseInt(prompt("¿Qué porcentaje querés dejar de propina?"));
       let resultado = alert("Debés dejar $ " + tipFinal(monto, tip));
       if(tipFinal(monto,tip)<= 0 ){
         alert("No seas rata, dejá propina");
      }
      else{
         alert("Dejar propina está bueno");
      }
       tipInit = confirm("¿Deseás consultar nuevamente?");
   }
   
   function tipFinal(monto, tip){
      let montoTipFinal =monto * tip /100
       return  montoTipFinal
   }
   

