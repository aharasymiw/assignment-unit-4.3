console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// The upper limit for the size of the cart
const maxItems = 5;

// Start with an empty basket
let basket = [];

// Add an item to the basket
function addItem(item) {

    if (!isFull()) {
        basket.push(item);
    }

    if (item in basket) {
        return true;
    }

    return false;
}

console.log(`Basket is ${basket}`);
console.log(`Adding apples (expect true)`, addItem('apples'));
console.log(`Basket is now ${basket}`);


// List all items in the basket
function listItems() {
    for (item of basket) {
        console.log(item + "\n");
    }
}

addItem('bananas');
addItem('cheese');
console.log(`Basket is ${basket}`);
console.log("Listing Items (expect ['apples', 'bananas', 'cheese'])", listItems());
console.log(`Basket is now ${basket}`);


// Empty out the basket
function empty() {
    basket = [];
}

empty()
console.log("Basket should be empty", basket)

// Check to see if the basket has less items than the maximum size.
function isFull() {
    return (basket.length >= maxItems);
}

basket = [];
console.log("expect false", isFull());
basket = [1, 2, 3, 4];
console.log("expect false", isFull());
basket = [1, 2, 3, 4, 5];
console.log("expect true", isFull());
basket = [1, 2, 3, 4, 5, 6];
console.log("expect true", isFull());

// Remove the given item from the basket.
function removeItem(item) {
    let index = basket.indexOf(item);
    if (index !== -1) {
        return basket.splice(index, 1);
    }
    return null;
}
basket = ['mice', 'men', 'sky', 'earth'];
console.log("expect 'men'", removeItem('men'));
console.log("expect null", removeItem('pizza'));
