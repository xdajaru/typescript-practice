var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('Mobil berkendara');
    };
    return Vehicle;
}());
var driver = new Vehicle();
driver.drive();
