




/*

let a= prompt("introduzca el primer numero");

let b= prompt("introduzca el segundo numero");

let c= prompt("introduzca el tercer numero");

numbers.textContent= 'Los numeros introducidos son' + " " + a + " " + b + " " + c ;

*/

let btn=document.getElementById("boton");
btn.addEventListener("click", orden);


function orden(){

    const numbers= document.getElementById("numbers");

    const result= document.getElementById("result");
    
    
    const a=document.getElementById("input-1").value;
    
    const b=document.getElementById("input-2").value;
    
    const c=document.getElementById("input-3").value;
    




if(a>=b && a>=b && b>=c){

    numbers.innerHTML= "los numeros introducidos son" + " " + a + " " + b + " " + c;

result.textContent="el orden es" + " " + a + " " + b + " " + c;

}

else if(a>=b && a>=c && c>=b){

    numbers.innerHTML= "los numeros introducidos son" + " " + a + " " + b + " " + c;


    result.textContent="el orden es" + " " + a  + " " + c + " " + b;

}

else if(a<=b && a<=c && b>=c){
 
    numbers.innerHTML= "los numeros introducidos son" + " " + a + " " + b + " " + c;


    result.textContent= "el orden es" + " " + b + " " + c + " " + a;
}

else if(a<=b && a<=c && b<=c){

     numbers.innerHTML= "los numeros introducidos son" + " " + a + " " + b + " " + c;


    result.textContent= "el orden es" + " " + c + " " + b + " " + a;
}
 
else if(b>=a && b>=c && c<=a){

    numbers.innerHTML= "los numeros introducidos son" + " " + a + " " + b + " " + c;


    result.textContent="el orden es" + " " + b  + " " + a + " " + c;

}

else if (b<=a && b<=c && c>=a){

    numbers.innerHTML= "los numeros introducidos son" + " " + a + " " + b + " " + c;


    result.textContent="el orden es" + " " + c  + " " + a + " " + b;

}

}
