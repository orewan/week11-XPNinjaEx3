let name1 = "John Doe";
let name2 = "kelly cohen";
let name3 = "12345600";
let name4 = "41opjLOPpjrt12546rtrtr4564";
let name5 = "op  jr  op  jrt12546 rtrtr4564";
let name6 = "OPL 12354658"


function checkTheName(theName){
    let regexPattern = /^[A-Za-z\s]*$/; 


    let result = regexPattern.test(theName);
    console.log(result);

}

checkTheName(name1);
checkTheName(name2);
checkTheName(name3);
checkTheName(name4);
checkTheName(name5);
checkTheName(name6);