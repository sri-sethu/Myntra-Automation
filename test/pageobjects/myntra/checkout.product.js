class CheckoutProduct{
    get clothSize(){
        return $$("//div[@class='size-buttons-tipAndBtnContainer']")
    }

    get addToBag(){
        return $("//span[@class='myntraweb-sprite pdp-whiteBag sprites-whiteBag pdp-flex pdp-center']")
    }

    get checkoutCount(){
        return $("//span[@data-reactid='1036']")
    }

    get applyButton(){
        return $("//div[@class='coupons-base-content']/button")
    }

    get finalApplyCoupon(){
        return $("//button[@id='applyCoupon']")
    }

    get order(){
        return $$("//div[@class='desktop-base-right']/div")
    }

    async addToCart(size){
        await browser.switchToWindow((await browser.getWindowHandles())[1])
        await this.clothSize[size].click()
        await this.addToBag.click()
        await browser.pause(1000)
        if(await this.checkoutCount.getText()>0){
            await this.checkoutCount.click()
        }
        browser.pause(4000)
    }

    async applyCoupon(){
        await this.applyButton.click()
        await browser.saveScreenshot('images/myntra/ts1-coupons.jpg')
        await this.finalApplyCoupon.click()
    }

    async placeOrder(){
        await (await this.order[2]).click()
        await browser.pause(4000)
    }
}

module.exports = new CheckoutProduct()