// function parentFunction(name,callback){
//     callback();
//     console.log("hey "+name);
//   }
//   function randomFunction(){
//   console.log("hey I am callbackFunction");
//   }
//   parentFunction("Random String",randomFunction)

//   code written in anonymous funtion-----------------------------------------------------------------------------

function parentFunction(name,callback){
    setTimeout(callback,1000);
  console.log("hey "+name);
  }
  parentFunction("Random String",function(){
    console.log("Hey I am a callback Function");
  });