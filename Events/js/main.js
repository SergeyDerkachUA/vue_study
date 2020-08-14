new Vue ({
    el:'#app',
    data: {
        counter: 0
    },
    methods: {
        addCounter: function() {
            this.counter++
        },
        onHover: function(event) {
            event.target.style.color = 'red'
        }
    }
});