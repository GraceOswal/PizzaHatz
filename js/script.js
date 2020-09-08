$(function () {

$('.summary').hide();

$('.cdata-overlay').hide();

//Get inputs

$("#checkout").click(function () {

let flavour = $(".flavour option:selected").val();

let size = $("#size option:selected").val();

let crust = $("#crust option:selected").val();

let topping = $("#toppings option:selected").val();

let number = $("#number").val();

console.log(size);



//Function order

let order = (f, s, c, t, n, total) => {

return {f, s, c, t, n, total};

};



//check price

let price, totalPrice;

switch (flavour) {

case flavour = "vegtikka":

switch (size) {

case size = "regular":

price = 300;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "bread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "medium":

price = 600;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "bread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "large":

price = 1200;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

}

break;

case flavour = "chickentikka":

switch (size) {

case size = "regular":

price = 300;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "medium":

price = 600;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "large":

price = 1200;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "bread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

}

break;

case flavour = "periperi":

switch (size) {

case size = "regular":

price = 300;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "medium":

price = 600;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "large":

price = 1200;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "bread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

}

break;

case flavour = "bbq":

switch (size) {

case size = "regular":

price = 300;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "bread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "medium":

price = 600;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "large":

price = 1200;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

}

break;

case flavour = "boerewors":

switch (size) {

case size = "regular":

price = 300;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "medium":

price = 600;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "large":

price = 1200;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

}

break;

case flavour = "hawaiian":

switch (size) {

case size = "regular":

price = 300;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "medium":

price = 800;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 160;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "large":

price = 1200;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "bread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

}

break;

case flavour = "mushroom":

switch (size) {

case size = "regular":

price = 300;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "medium":

price = 800;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 290;

}

break;

case size = "large":

price = 1200;

if (crust === "thin") {

totalPrice = (price * number) + 120;

} else if (crust === "thick") {

totalPrice = (price * number) + 190;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 150;

} else {

totalPrice = (price * number) + 280;

}

break;

}

break;

case flavour = "regina":

switch (size) {

case size = "regular":

price = 300;

if (crust === "thin") {

totalPrice = (price * number) + 150;

} else if (crust === "thick") {

totalPrice = (price * number) + 180;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 200;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "medium":

price = 600;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 280;

}

break;

case size = "large":

price = 1200;

if (crust === "thin") {

totalPrice = (price * number) + 100;

} else if (crust === "thick") {

totalPrice = (price * number) + 150;

} else if (crust === "flatbread") {

totalPrice = (price * number) + 180;

} else {

totalPrice = (price * number) + 580;

}

break;

}

break;

}

switch (topping) {

case topping = "tomato":

totalPrice = totalPrice + 80;

break;

case topping = "onions":

totalPrice = totalPrice + 50;

break;

case topping = "mushroom":

totalPrice = totalPrice + 70;

break;

case topping = "greenpepper":

totalPrice = totalPrice + 50;

break;

case topping = "olives":

totalPrice = totalPrice + 400;

break;

case topping = "pineapple":

totalPrice = totalPrice + 300;

break;

case topping = "sweetcorn":

totalPrice = totalPrice + 320;

break;

case topping = "macon":

totalPrice = totalPrice + 170;

break;

case topping = "mince":

totalPrice = totalPrice + 170;

break;

case topping = "beef":

totalPrice = totalPrice + 200;

break;

case topping = "chicken":

totalPrice = totalPrice + 200;

break;



}



//Execute order function

let newOrder = order(flavour, size, crust, topping, number, totalPrice);

console.log(newOrder); // test func



//create a new object

// let myOrder = JSON.stringify(JSON.parse(newOrder));



//Write to the order

$('.summary').slideDown(2000);

$('.cdata-overlay').slideUp();

$('#list').slideDown();

$('.deliveries').show(1000);

$('.delivernot').show(1000);



$('#list').text(" ");

$("#list").append("<br>" + "Flavour : " + newOrder.f + "<br>" + "Size : "

+ newOrder.s + "<br>" + "Crust : "

+ newOrder.c + "<br>" + "Toppings : "

+ newOrder.t + "<br>" + " Number of pizzas : "

+ newOrder.n + "<br>" + "Total Price /= : "

+ newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '26px');

});



//Deliver

$(".deliver").click(function () {

$('.summary').slideUp();

$('#list').slideUp();

$('.summary').text("Provide location details").slideDown();

$('.deliver').hide(1000);

$('.delivernot').hide(1000);

$('.cdata-overlay').slideDown();

});





//Pick Up

$(".delivernot").click(function () {



});



//Scrollify

$(function () {

$.scrollify.move('#sum-order');

});

}); 
