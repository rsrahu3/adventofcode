let fs = require('fs');
fs.readFile("input.txt",'utf8' , function(err , content){
var numbers  = content.split("\r\n");
let start = 0;
for(let i =0 ;i<numbers.length;i++){
    let result = start*1+numbers[i]*1;
   console.log("Current frequency  "+start+", change of "+numbers[i]+"; resulting frequency "+result);
   start = result; 
}
})