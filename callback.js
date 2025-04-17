function greet(name){
    console.log(`"Hello ${name}"`);

}
function geetBatchD(callback){
    const name = "Batch D";
    callback(name);

}
greetBatchD(greet);