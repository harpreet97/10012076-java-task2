//java script problem 02
alert("This program will ask you to enter the number less than 100");
var number = prompt("Please enter number less than 100");
if( number < 100){
    for( i = 1; i <= 12; i++){
        console.log(number + "/" + i + "=" + (number/i));
    }
}
else{
    console.log("Please enter number less than 100");
}