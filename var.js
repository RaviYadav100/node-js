// function exampleFunction(){
//     if(true){
//         let functionScopedVar ="Iam function-Scoped";
//     }
//     console.log(functionScopedVar);
// }
// exampleFunction();
// console.log(functionScopedvar);
function exampleFunction(){
    if(true){
        var functionScopedVar ="Iam function-Scoped";//It can be declare again but let and const can not be declare again inside the block.
        let blockScopedLet ="Iam block-Scoped";
        const blockScopedConst="Iam constant and block-Scoped";
    }
    console.log(functionScopedVar);
    console.log(blockScopedLet);//Error: because let and const function function alway declare inside the function.
    console.log(blockScopedConst);
}
exampleFunction();
console.log(functionScopedVar);
console.log(blockScopedLet);
console.log(blockScopedConst);