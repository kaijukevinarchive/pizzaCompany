describe("Order", function() {
	it("will create an order with a name", function() {
		var orderUp = new Order("Kevin");
		expect(orderUp.orderName).to.equal("Kevin");
	});

	it("will hold multiple pizzas", function() {
		var myOrder = new Order("Kevin");
		myOrder.addPizza( new Pizza("large") );
		myOrder.addPizza( new Pizza("medium") );
		myOrder.addPizza( new Pizza("small") );
		expect(myOrder.pizzas.length).to.equal(3);
	})
});

describe("Pizza", function() {
	it("will create a pizza with a size", function() {
		var myPizza = new Pizza("large");
		expect(myPizza.pizzaSize).to.equal("large");
	});

	it("will add toppings to a pizza", function() {
		var myPizza = new Pizza("large");
		var mozzerella = new Topping("mozzerella", 1.00);
		var pepperoni = new Topping("pepperoni", 2.50);
		var myToppings = [mozzerella, pepperoni]
		myPizza.setToppings(myToppings);
		expect(myPizza.toppings).to.eql(myToppings);
	});

	it("will return the price of the pizza", function() {
		var myPizza = new Pizza("large");
		var mozzerella = new Topping("mozzerella", 2.00);
		var pepperoni = new Topping("pepperoni", 3.00);
		var myToppings = [mozzerella, pepperoni]
		myPizza.setToppings(myToppings);
		expect(myPizza.price()).to.equal(18.00);
	});
});

describe("Topping", function() {
	it("will create a topping with a name and price", function() {
		var mozzerella = new Topping("mozzerella", 1.00);
		expect(mozzerella.ingredient).to.equal("mozzerella");
		expect(mozzerella.price).to.equal(1.00);
	});
});