//  Implement all your JavaScript in this file!

 

var num_buttons = document.querySelectorAll('button[value]');

let v = '';

let prev_v = '';

let calculated = false;

for(let i=0; i<num_buttons.length; i++) {

    num_buttons[i].addEventListener ("click", function() {

        let display=document.getElementById ('display')

        if (calculated){

        v = this.value;

        prev_v = this.value;

        calculated = false;

        }else{

            v += this.value;

            prev_v += this.value;

        }

        display.value = v;

    } )

}

 

var addbutton = document.getElementById("addButton");

addbutton.addEventListener("click",function(){

    if(calculated){

        prev_v = final + "+";

        calculated = false;

    }else{

        prev_v += "+";

    }

    v = "";

})

 

var sub_button = document.getElementById("subtractButton");

sub_button.addEventListener("click",function(){

    if(calculated){

        prev_v = final + "-";

        calculated = false;

    }else{

        prev_v += "-";

    }

    v = "";

})

 

var multiply = document.getElementById("multiplyButton");

multiply.addEventListener("click",function(){

    if(calculated){

        prev_v = final + "*";

        calculated = false;

    }else{

        prev_v += "*";

    }

    v = "";

})

 

var divide = document.getElementById("divideButton");

divide.addEventListener("click",function(){

    if(calculated){

        prev_v = final + "/";

        calculated = false;

    }else{

        prev_v += "/";

    }

    v = "";

})

 

var clear = document.getElementById("clearButton");

clear.addEventListener("click",function clear(){

    prev_v = "";

    display.value = v;

    v='';

    calculated = false;

})

 

var equal = document.getElementById("equalsButton");

equal.addEventListener("click",function(){

    if (prev_v.includes("/0")){

        display.value = "infinity";

        prev_v = "";

        v = '';

    }else{

        final = eval(prev_v);

        display.value = final;

        prev_v = final;

        v = "";

        calculated = true;

    }

})