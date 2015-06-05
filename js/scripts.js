function Order(orderName) {
	this.orderName = orderName;
}

function Pizza(pizzaSize) {
	this.pizzaSize = pizzaSize;
	this.toppings = [];
}

Pizza.prototype.addToppings = function(toppingsArray) {
	this.toppings = toppingsArray;
}