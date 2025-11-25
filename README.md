# Myntra Automation – WebdriverIO

This project automates the end-to-end shopping flow on **Myntra** using **WebdriverIO**, structured with the Page Object Model (POM).
The script covers navigation through product categories, selecting a men’s T-shirt, adding it to the cart, applying a coupon, and placing an order.

---

## Tech Stack

* **WebdriverIO**
* **Node.js**
* **Mocha**
* **Page Object Model (POM)** structure
* **JavaScript**

---

## Project Structure

```
project
│
├── pageobjects/
│   ├── myntra/
│   │   ├── checkout.product.js
│   │   └── select.catagory.js
│
├── tests/
│   └── myntra.shop.test.js
│
└── README.md
```

---

## Page Objects

### `SelectCatagory`

Handles selecting a category, navigating to the Men → Clothing → T-shirts section, and opening a specific product.

Key functions:

* `getTshirt(pNum)`
* `addTshirt(pNum)`

### `CheckoutProduct`

Handles cart operations including:

* Selecting size
* Adding to cart
* Applying coupon
* Placing order

Key functions:

* `addToCart(size)`
* `applyCoupon()`
* `placeOrder()`

---

## Test Flow

The test script performs the following:

1. Opens Myntra
2. Navigates to Men’s T-shirt category
3. Selects a T-shirt by index
4. Adds it to cart
5. Applies an available coupon
6. Places the order
7. Captures screenshots at every step

---

## Running the Tests

1. Install dependencies:

```
npm i
```

2. Run the test suite:

```
npm test
```

Make sure your WebdriverIO configuration is set up correctly (e.g., wdio.conf.js).

---

## Screenshots

Screenshots of:

* Selected T-shirt
* Item added to cart
* Coupon screen
* Order confirmation

will be saved at:

```
images/myntra/
```
