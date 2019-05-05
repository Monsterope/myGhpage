var app = new Vue({
    el: "#app",
    data: {
        name: "monsterlove",
        items: [
            {
                product: "cococola",
                price: 100
            },
            {
                product: "pespi",
                price: 200
            }
        ]
    },
    methods: {
        getName: function () {
            this.name = "Dachawat Fangnok"
        },
        addPrice: function (){
            this.items.push({
                product: "Zero",
                price: 100
            })
        }
    },
    computed: {
        total: function() {
            return this.items.reduce((curr,acc) => curr + (+acc.price), 0)
        }
    }
})