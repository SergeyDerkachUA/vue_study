new Vue ({
    el:'#app',
    data: {
        textValue: ''
    },
    computed: {
        count: function() {
            return this.textValue.length
        }
    },
    watch: {
        textValue: function(value) {
            console.log(value)
        }
    }
});