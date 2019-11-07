var car = {
    brand : 'BMW',//品牌
    model : 'X3',//型号
    endurance : '600km',//续航里程
    oil : 30,//邮箱油量
    getBrand : function() {
        alert(this.brand);
    },
    getOil: function(){
        alert(this.oil);
    },
    addOil: function(n) {
        this.oil  += n;
    }
};
function getBrand() {
    car.getBrand();
};
function getOil(){
    car.getOil();
};
function addOil() {
    car.addOil(1);
};
