const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https:\\www.epitech.eu',
            inventory:15,
            onSale: true,
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
              ]
        }
    },
    methods: {
        addToCart(n){
            this.cart +=n
            this.inventory -=n
            
            this.inStock = this.inventory > 0
            
        },
        delFromCart(n){
            this.cart -=n
            this.inventory +=n
            this.inStock = this.inventory > 0
            
        },
        changeImage(varImage){
            this.image=varImage

        }
    }
})