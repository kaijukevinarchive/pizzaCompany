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
