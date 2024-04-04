
function checkSpeed() {
    var speed = document.getElementById('speed').value;
    var limit = 70;
    var demerits = 0;

    if (speed < limit) {
        document.getElementById('result').innerHTML = "Ok";
    } else {
        demerits = Math.floor((speed - limit) / 5);
        document.getElementById('result').innerHTML = "Speeding by " + (speed - limit) + " km/s. " + demerits + "demerit point" + (demerits !== 1 ? "s" : "");
    }
}
