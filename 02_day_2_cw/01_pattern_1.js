let numbers = 1;
let space = 4;
let n = 5;
let pattern = "";

for(let i = 1; i<= n ; i++){
    for(let sp = 1; sp <= space; sp++){
        pattern = pattern + "  ";
    }

    for(let num = 1; num <= numbers; num++){
        pattern = pattern + num + " ";
    }
    pattern+="\n";
    numbers +=2;
    space--;
}
console.log(pattern);
