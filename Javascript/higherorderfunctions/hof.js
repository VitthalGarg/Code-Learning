function breakfast(item, time, dobrush){
    dobrush()
    console.log("I will take " + item + " as my breakfast at " + time);
}

breakfast("idly", 9, dobrush); //argument
//in this, dobrush function calls callback function

function dobrush(){
    console.log("Do brush first!")
}

// line of execution- 6-> 1 -> 2->8-> 9-print()->3->print()

//---------------------------------------------//////


function web20(count, web19){ //here web 19 is perameter and it'name can different to actual function name
    console.log("web 20 students -"+" "+ count);
    web19(); //it must same as perameter
}

web20(609, web19);

function web19(){
    console.log("there was 109 students in web 19");
}

//execution==== 23--18--19--print()--20--25---26-ptint()

//-----------------------------------------------////

