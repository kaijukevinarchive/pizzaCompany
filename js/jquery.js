$(function() {
	$("form#order").submit(function(event) {
		event.preventDefault();

		var pizzaSize = $("select#size").val();
		var checkedToppings = $("input[type='checkbox'][name='topping']:checked");
		var myToppings = [];
		checkedToppings.each(function() {
			myToppings.push( new Topping($(this).val(), $(this).data("price")) )
		})
		debugger
		var newPizza = new Pizza(pizzaSize);
		newPizza.setToppings(myToppings);
		$("p#total").text(newPizza.price().toString());
	})
})