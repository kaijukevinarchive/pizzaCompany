$(function() {
	$("form#order").submit(function(event) {
		event.preventDefault();

		var order = new Order($("input#name").val());

		$(".create-pizza").each(function(){
			var pizzaSize = $("select#size").val();
			var newPizza = new Pizza(pizzaSize);
			var checkedToppings = $(this).find("input[type='checkbox'][name='topping']:checked");
			var myToppings = [];

			checkedToppings.each(function() {
				myToppings.push( new Topping( $(this).data("name"), parseFloat($(this).data("price"))) )
			});
			
			newPizza.setToppings(myToppings);
			order.addPizza(newPizza);
		});

		$("p#total").text(order.total().toString());
	});

	$("button#addPizza").on("click", function(event) {
		event.preventDefault();

		var $createPizzaClone = $(".create-pizza").last().clone();
		$createPizzaClone.find("input[type='checkbox']").prop("checked", false);
		$createPizzaClone.find(".removePizza").show();

		$createPizzaClone.find(".removePizza").on("click", function() {
			$(this).parent(".create-pizza").remove();
		});
		
		$createPizzaClone.appendTo(".create-pizza-container");
	});
})