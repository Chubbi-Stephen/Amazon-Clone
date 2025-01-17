export const cart = [];

//////////////////////////////////////////////////////////////
// Add To Cart Function
let quantitySelector;

export function addToCart(productId) {
	let matchingItem;

	quantitySelector = document.querySelector(
		`.js-quantity-selector-${productId}`
	).value;

	cart.forEach((item) => {
		if (productId === item.productId) {
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
}

//////////////////////////////////////////////////////////////
// Update Cart Quantity on Client Function
export function updateCartQuantity() {
	let cartQuantity = 0;

	cart.forEach((item) => {
		cartQuantity = Number(quantitySelector);
	});

	document.querySelector(".js-cart-quantity").innerHTML =
		+document.querySelector(".js-cart-quantity").innerHTML +
		Number(quantitySelector);
}
