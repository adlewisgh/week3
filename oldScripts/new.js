/*
Design a while loop that counts from 0 to 20 using the variable num. 
If num is between 0 and 5 output "Very Low Number" to the console. 
If it is between 6 and 10 output "Low Number" to the console. 
If it is between 11-15 output "High Number" to the console. 
For everything else output "Very High Number" to the console.
*/
/*
function stringSum(parameterOne, parameterTwo) {
    var result = parameterOne + parameterTwo;
    if (result.length >= 12) {
        return (result);
    }
    else {
        return (result.length("Error, string too long."));
    }
}
var newString = stringSum("Josh & ", "Cindy");
console.log(newString);
*/
function stringSum(parameterOne, parameterTwo) {
    var result = parameterOne + parameterTwo;
    if (result.length > 12) {
        
        return "Error, string too long.";
    }
    else {
        return (result);
    }
}
var newString = stringSum("Josh & ", "Cindy");
console.log(newString);
