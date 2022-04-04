var myButton = document.getElementById("btn");
myButton.addEventListener("click", solve);


function solve(){
    // Kilometer to Meter 
    var main = document.getElementById("primary").value;
    var mainVal = document.querySelectorAll(".val");
    let mainValArr = Array.from(mainVal);
    for (let i=0; i < mainValArr.length; i++){
        mainValArr[i].innerHTML = main;
    }
    // mainValArr.forEach()
    
    // let mainValArr = Array.from(mainVal);
    // mainValArr.forEach(mainValArr => {mainValArr.innerHTML = main})
    
    

}
//     // LENGHT:
//     // cm to m

//     function solveCM(){
//         var cm = document.getElementById("val2");
//         cm.innerHTML = main;
//         var m = document.getElementById("res2");
//         result = math.floor(math.main/100;
//         m.innerHTML = result;
//     }