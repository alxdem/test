function coffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    // Расчет времени для кипячения
    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert('Кофе готов!');
    }

    // Запустить OnReady через getBoilTime секунд
    this.run = function() {
        setTimeout(onReady, getBoilTime());
    }
}

var coffeMachine = new coffeeMachine(50000);
coffeMachine.waterAmount = 200;

coffeMachine.run();