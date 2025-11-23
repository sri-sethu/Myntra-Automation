const CheckoutProduct = require("../pageobjects/myntra/checkout.product")
const SelectCatagory = require("../pageobjects/myntra/select.catagory")
describe("Myntra", async()=>{

    before(async()=>{
        browser.url("https://www.myntra.com/")
        browser.maximizeWindow()
    })

    it("Mens T-shirt Shop flow", async()=>{
        await SelectCatagory.addTshirt(3)
        await browser.saveScreenshot('images/myntra/ts1-tshirt.jpg')
        await CheckoutProduct.addToCart(1)
        await browser.saveScreenshot('images/myntra/ts1-addedToCart.jpg')
        await CheckoutProduct.applyCoupon()
        await browser.pause(2000)
        await browser.saveScreenshot('images/myntra/ts1-couponApplied.jpg')
        await CheckoutProduct.placeOrder()
        await browser.saveScreenshot('images/myntra/ts1-orderPlaced.jpg')
    })

})