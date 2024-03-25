// speed checker
var speedLimit=70;
var kmperDemeritpoint =5;
let speed;
speed = prompt ("Enter your speed in km/hr");
function tester(speed) {
    const oky =Math.floor(speedLimit-speed)
    if(speed <=speedLimit)
    {
    
            return'speed is okay';
 }else{
    const points = Math.floor((speed-speedLimit)/
    kmperDemeritpoint);
    if(points > 12) {
        console.log("Lisence suspended");
    }else {
        console.log("points:" +points);
    }
 }
}
tester(speed)