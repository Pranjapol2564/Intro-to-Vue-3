const app = Vue.createApp({
    data() {
        return{
            cart:0,
            product : 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details:['50% cotton', '30% wool', '20% polyester'],
            variant: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
            size:['S','M','L','XL']
        }
    },

    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        removeCart(){
            this.cart -= 1;
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variant[this.selectedVariant].image
        },
        inStock() {
            return this.variant[this.selectedVariant].quantity
        } 
    }
})