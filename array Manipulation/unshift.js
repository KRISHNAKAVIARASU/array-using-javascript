
function unshift(num){
    let arr=[1,2,3,4,5]
    console.log("default value before unshift "+arr)
    arr.unshift(num)
    console.log("After unshift the value "+num+" is "+arr)
}
unshift(8)