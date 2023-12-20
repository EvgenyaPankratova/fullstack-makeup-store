import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor(){
        this._types = [
            {id: 1, name: "румяна" },
            {id: 2, name: "пудра" }
        ]
        this._brands = [
            {id: 1, name: "vivienne sabo" },
            {id: 2, name: "essence" }
        ]
        this._products = [
            {id: 1, name: "blush ultra", price: 500, rating: 5, img: 'https://static.beautytocare.com/media/catalog/product/s/e/sensilis-velvet-blush-01-romantic-prune-10g.jpg'},
            {id: 2, name: "extra blush", price: 400, rating: 4, img: 'https://static.beautytocare.com/media/catalog/product/s/e/sensilis-velvet-blush-01-romantic-prune-10g.jpg'},
            {id: 3, name: "superduper", price: 400, rating: 5, img: 'https://static.beautytocare.com/media/catalog/product/s/e/sensilis-velvet-blush-01-romantic-prune-10g.jpg'},
            {id: 4, name: "extra blush", price: 500, rating: 5, img: 'https://static.beautytocare.com/media/catalog/product/s/e/sensilis-velvet-blush-01-romantic-prune-10g.jpg'},
            {id: 5, name: "blush ultra", price: 400, rating: 4, img: 'https://static.beautytocare.com/media/catalog/product/s/e/sensilis-velvet-blush-01-romantic-prune-10g.jpg'},
            {id: 6, name: "superduper", price: 500, rating: 5, img: 'https://static.beautytocare.com/media/catalog/product/s/e/sensilis-velvet-blush-01-romantic-prune-10g.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }

    setProducts(products){
        this._products = products
    }

   

    //вызываются, только если используемые переменные были изменены
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }

    get products(){
        return this._products
    }
    

}