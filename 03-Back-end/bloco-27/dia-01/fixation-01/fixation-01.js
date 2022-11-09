var tv = /** @class */ (function () {
    function tv(brand, size, resolution, connections) {
        var _this = this;
        this.turnOn = function () {
            console.log("TV: ".concat(_this.brand, ", ").concat(_this.size, ", resolution: ").concat(_this.resolution, ", \n    available connections: ").concat(_this.connections));
        };
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    return tv;
}());
var tv1 = new tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
