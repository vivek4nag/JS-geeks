var star = 1;
var space = 4;
var n = 5;
var pattern = "";

for(let i = 1; i<=n*2 ; i++){
    for(let sp = 1; sp<=space; sp++){
        pattern += "  "
    }

    for(let st = 1; st <= star; st++){
        var temp = st;
        pattern += temp + " ";
        temp++;
    }
    if(i <n){
        star++;
        space--;
    }else{
        star--;
        space++;
    }
    if(i < n*2 -1){
        pattern += "\n";
    }
}

console.log(pattern);
