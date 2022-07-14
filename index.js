class fruits{
    constructor(price){
        this.price=price
        this.totalprice=function(fruitsname,quantity){
            let v=price *quantity;
            return `${quantity} ${fruitsname} for KES.  ${v} .`;  
        }
    }
}
var myprice= new fruits(60.00);
console.log(myprice.totalprice("Oranges",2));


// number2
class kioskcalc{
    constructor(fruit,quantity){
        this.fruit=fruit
        this.quantity=quantity
        this. fruitPricelist={
            "orange": 30, 
            "mango": 15,
            "avocado": 40 
        }
        this.getTotalCost=function(){
            return `${quantity} ${fruit} for KES ${quantity * this.price}`
        }
      
    }
}
kioskcalc.prototype.price = 80;
var kiosk2=new kioskcalc('mango',2)
console.log(kiosk2.getTotalCost());

