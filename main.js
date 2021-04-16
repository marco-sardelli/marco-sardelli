const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
           
            url: 'https:\\www.epitech.eu',
            inventory:15,
            selVar: 0,
            onSale: true,

            computed: {
                image() {
                  return this.variants[this.selVar].image
                },
                inStock() {
                  return this.variants[this.selVar].quantity
                }
              },
            
            details: ['50% cotton', '30% wool', '20% polyester'],
            
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 20}
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

        },
        updateVariant(index) {
            this.selVar = index
          }
    }
})