

var main = document.getElementById("primary");

// function to display value entered
function displayValue(){
     
    var mainVal = document.querySelectorAll(".val");
    let mainValArr = Array.from(mainVal);
    for (let i=0; i < mainValArr.length; i++){
        mainValArr[i].innerHTML = main.value;
    }
}

function convert(){
    // Variables of each result
    let km2m = document.getElementById("res1");
    let cm2m = document.getElementById("res2");
    let f2in = document.getElementById("res3");
    let C2K = document.getElementById("res4");
    let F2C = document.getElementById("res5");
    let L2mL = document.getElementById("res6");
    let lb2kg = document.getElementById("res7");
    let J2ergs = document.getElementById("res8");
    let sqft2sqm = document.getElementById("res9");
    let Mach2Knot = document.getElementById("res10");

    // function that performs the conversion
    function con(){
        // taking values using empty array and using the push method to add values to the array
        // And returns res which marks a stop to the function
        var res =[]
        res.push(Math.floor(main.value*1000));
        res.push(Math.floor((main.value)*1/100));
        res.push(Math.floor(main.value*12));
        res.push(Math.floor(main.value*(1)+273.15));
        res.push(Math.floor((main.value-32)*(5/9)));
        res.push(Math.floor(main.value*1000));
        res.push(Math.floor(main.value*0.454));
        res.push(Math.floor(main.value*10000000));
        res.push(Math.floor(main.value*0.092903));
        res.push(Math.floor(main.value*666.739));
        return res;
    }
    // calling on the array and assigning/displaying it to respective push values declared above using DOM
    var result = con() 
    km2m.innerHTML = result[0] 
    cm2m.innerHTML = result[1] 
    f2in.innerHTML = result[2] 
    C2K.innerHTML = result[3] 
    F2C.innerHTML = result[4] 
    L2mL.innerHTML = result[5] 
    lb2kg.innerHTML = result[6] 
    J2ergs.innerHTML = result[7] 
    sqft2sqm.innerHTML = result[8] 
    Mach2Knot.innerHTML = result[9] 
}