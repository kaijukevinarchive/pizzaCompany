function Order(orderName) {
	this.orderName = orderName;
}

function Pizza(pizzaSize) {
	this.pizzaSize = pizzaSize;
	this.toppings = [];
}

function Topping(toppingName, price) {
	this.toppingName = toppingName;
	this.price = price;
}

Pizza.prototype.setToppings = function(toppings) {
	this.toppings = toppings
}

Pizza.prototype.price = function(){
	var sizeChart = {
		"large": 3.0,
		"medium": 2.0,
		"small": 1.0
	};
	var total = 0;
	this.toppings.forEach(function(topping) {
		total += topping.price;
	})
	return total * sizeChart[this.pizzaSize];
}
