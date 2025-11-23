class SelectCatagory{
    get category(){
        return (cat)=>$(`//div[@data-reactid='${cat}']`)
    }
    get table(){
        return $("//div[@data-group='men']")
    }

    get clothing(){
        return (cloth)=> $(`//li[@data-reactid='${cloth}']`)
    }

    get productCatalog(){
        return $("//div[@class='search-searchProductsContainer row-base']")
    }

    get tshirt(){
        return (productID) => $(`//li[@id='${productID}']`)
    }

    get clothlist(){
        return $$("//ul[@class='results-base']/li")
    }

    async getTshirt(pNum){
        return await this.clothlist[pNum].getAttribute('id')
    }

    async addTshirt(pNum){
        await this.category(20).moveTo()
        await this.table.waitForDisplayed({timeout:3000})
        await this.clothing(30).click()

        await this.productCatalog.waitForDisplayed({timeout:3000})
        
        await this.tshirt(await this.getTshirt(pNum)).moveTo()
        await this.tshirt(await this.getTshirt(pNum)).click()

    }
}

module.exports = new SelectCatagory()