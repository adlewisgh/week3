var inchesOfSnow = 4;

if (inchesOfSnow >= 12) {
    console.log("It's a snow day");
} 

else if (inchesOfSnow >= 4 && inchesOfSnow <= 12) {
    console.log("Waiting to see if school might be canceled...");
} 

else {
    console.log("gotta go to school!");
}

var dayOfWeek = "Mon";

switch (dayOfWeek) {
        case "Mon":
        console.log("Somebody has a case of the Mondays!");
        break;
    case "Tues":
    case "Wed":
    case "Thurs":
    case "Fri":
        console.log("Gotta go to work!");
        break;
    default:
        console.log("Enjoying the weekend!");
        break;
}