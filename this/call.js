function Product(name,price,manufacturer){

    let tax
    this.name = name;
    this.price = price;
    this.manufacturer = manufacturer

    this.getProductDetails = function(){
        return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`
    }
    this.setTax = function(amount){
        tax = amount
    }
    this.getTax = function(){
        return tax
    }
    function calculateTotalPrice(){
        return this.price+ (this.price * (tax / 100));
    }
    this.getTotalPrice= function(){
        return calculateTotalPrice.call(this)
    }
    this.deleteMethod = function(mName){
        delete this[mName]
    }
}
