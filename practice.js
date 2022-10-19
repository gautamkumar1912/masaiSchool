// check if num is prime or not

var num = 10;
var count = 0;
for(var i = 1; i<= num; i++){
if(i%num==0){
count++
}
}
if(count == 2){
  console.log("It is a prime number");
}else{
  console.log("Not a prime number");
}



