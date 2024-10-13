var str = "agjfddkfncjdkkhggjhiou";
var set = new Set();
let i = 0;
let j = 0;
let max = 0;

while(i < str.length){
    while(set.has(str[i])){
        set.delete(str[j]);
        j++;
    }
    let len = i- j +1;
    max = len >max ? len : max; 
    set.add(str[i]);
    i++
}

console.log(max);
