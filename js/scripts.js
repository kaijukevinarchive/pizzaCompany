function Order(orderName) {
	this.orderName = orderName;
	this.pizzas = [];
}

function Pizza(pizzaSize) {
	this.pizzaSize = pizzaSize;
	this.toppings = [];
}

function Topping(ingredient, price) {
	this.ingredient = ingredient;
	this.price = price;
}

Order.prototype.addPizza = function(pizza) {
	this.pizzas.push(pizza);
}

Order.prototype.total = function(){
	var total = 0.0;
	this.pizzas.forEach(function(pizza){
		total += pizza.price();
	});
	return total.toFixed(2);
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
	var total = 1.0;
	this.toppings.forEach(function(topping) {
		total += topping.price;
	});
	total = total * sizeChart[this.pizzaSize];
	return total;
}
