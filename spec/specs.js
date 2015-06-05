describe("Order", function() {
	it("will create an order with a name", function() {
		var orderUp = new Order("Kevin");
		expect(orderUp.orderName).to.equal("Kevin");
	});
});

describe("Pizza", function() {
	it("will create a pizza with a size", function() {
		var myPizza = new Pizza("large");
		expect(myPizza.pizzaSize).to.equal("large");
	});

	it("will add toppings to a pizza", function() {
		var myPizza = new Pizza("large");
		var toppings = ["mozzerella", "ham", "onions"];
		myPizza.addToppings(toppings);
		expect(myPizza.toppings).to.eql(toppings)
	});
});