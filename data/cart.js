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
	// Save total quantity to local storage
	localStorage.setItem("totalQuantity", getTotalQuantity());
}

// Function to calculate total quantity
function getTotalQuantity() {
	return cart.reduce((total, item) => total + item.quantity, 0);
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
			matchingItem = cartItem;
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
	updateCartQuantity();
}

//////////////////////////////////////////////////////////////
// Update Cart Quantity on Client Function
export function updateCartQuantity() {
	const totalQuantity = getTotalQuantity(); // New: Calculate total quantity
	const cartQuantityElement = document.querySelector(".js-cart-quantity"); // New: Get the cart quantity element

	if (cartQuantityElement) {
		// New: Check if the element exists
		cartQuantityElement.innerHTML = totalQuantity; // New: Update displayed total quantity
	}

	saveToLocalstorage();
}

export function removeFromCart(productId) {
	// Filter out the item to be removed
	cart = cart.filter((cartItem) => cartItem.productId !== productId);

	document.querySelector(
		".js-checkout-link"
	).innerHTML = `${cart.length} items`;

	saveToLocalstorage();
	updateCartQuantity();
}

// Display total quantity on page load
document.addEventListener("DOMContentLoaded", () => {
	const totalQuantity = localStorage.getItem("totalQuantity") || 0;
	const cartQuantityElement = document.querySelector(".js-cart-quantity");

	if (cartQuantityElement) {
		// New: Check if the element exists
		cartQuantityElement.innerHTML = totalQuantity; // New: Update displayed total quantity
	}
});
