$(function() {
	$("form#order").submit(function(event) {
		event.preventDefault();

		var order = new Order($("input#name").val());

		$(".create-pizza").each(function(){
			var pizzaSize = $("select#size").val();
			var newPizza = new Pizza(pizzaSize);

			var checkedToppings = $(this).find("input[type='checkbox'][name='topping']:checked");

			checkedToppings.each(function() {
				newPizza.setToppings( new Topping( $(this).data("name"), parseFloat($(this).data("price"))) );
			});
			
			order.addPizza(newPizza);
		});

		$("#receipt").show();
		$("#receipt .pizza-orders").html("");
		$("#receipt").find("span#order-name").text(order.orderName);

		order.pizzas.forEach(function(pizza, index){
			$("#receipt .pizza-orders").append("<div class='pizza'>pizza " + (index +1).toString() + "<ul class='pizza-toppings'></ul></div>");

			pizza.toppings.forEach(function(topping){
				$("#receipt ul.pizza-toppings").last().append("<li>" + topping.ingredient + "</li>");
			});
		});

		$("span#total").text(order.total().toString());
	});

	$("button#btn-add-pizza").on("click", function(event) {
		event.preventDefault();

		var $createPizzaClone = $(".create-pizza").last().clone();
		$createPizzaClone.find("input[type='checkbox']").prop("checked", false);
		$createPizzaClone.find(".btn-remove-pizza").css("display", "inline-block");

		$createPizzaClone.find(".btn-remove-pizza").on("click", function() {
			$(this).parent(".create-pizza").remove();
		});
		
		$createPizzaClone.appendTo(".create-pizza-container");
	});
})