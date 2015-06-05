describe("Order", function() {
	it("will return a name for the order", function() {
		var orderUp = new Order("Kevin");
		expect(orderUp.name).to.equal("Kevin");
	})
})