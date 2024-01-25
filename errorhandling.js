// try{
//     throw new Error("An error");
// } catch (error){
//     console.error(error.message);
// }finally{
//     console.log("Cleanup code");
// }

//settimeout
// const delayedFunction = () =>{
//     console.log('Delayed function executed!');
// };
// setTimeout(delayedFunction,2);

//set interval funtion
// const repeatedFunction=()=>










//if you want to stop after some time
function repeatedFunction(){
    console.log('Executing repeated function...');
}
const intervalid =setInterval(repeatedFunction,1000);
setTimeout(() =>{
    clearInterval(intervalid);
    console.log('Interval stopped');
},5000);
