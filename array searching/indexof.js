function indexof(num){
    arr=[];
    for(let i=1;i<=1000;i++){
        arr.push(i);
    }
    return arr.indexOf(num);
}
console.log(indexof(6));