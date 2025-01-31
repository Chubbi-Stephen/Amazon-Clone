export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
	cart = [
		{
			productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
			quantity: 1,
		},
		{
			productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
			quantity: 2,
		},
	];
}

function saveToLocalstorage() {
	localStorage.setItem("cart", JSON.stringify(cart));
}

//////////////////////////////////////////////////////////////
// Add To Cart Function
let quantitySelector;

export function addToCart(productId) {
	let matchingItem;

	quantitySelector = document.querySelector(
		`.js-quantity-selector-${productId}`
	).value;

	cart.forEach((cartItem) => {
		if (productId === cartItem.productId) {
			matchingItem = item;
		}
	});

	//////////////////////////////////////////////////////////
	// if their is a matching Item on the cart
	if (matchingItem) {
		matchingItem.quantity += Number(quantitySelector);
	} else {
		cart.push({
			productId: productId,
			quantity: Number(quantitySelector),
		});
	}

	saveToLocalstorage();
}

//////////////////////////////////////////////////////////////
// Update Cart Quantity on Client Function
export function updateCartQuantity() {
	let cartQuantity = 0;

	cart.forEach((icartItem) => {
		cartQuantity = Number(quantitySelector);
	});

	document.querySelector(".js-cart-quantity").innerHTML =
		+document.querySelector(".js-cart-quantity").innerHTML +
		Number(quantitySelector);

	saveToLocalstorage();
}

export function removeFromCart(productId) {
	const newCart = [];
	cart.forEach((cartItem) => {
		if (cartItem.productId !== productId) {
			newCart.push(cartItem);
		}
		cart = newCart;
	});

	saveToLocalstorage();
}
