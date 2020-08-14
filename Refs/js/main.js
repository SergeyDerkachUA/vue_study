new Vue ({
    el:'#app',
    data: {
        title: 'Title'
    },
    methods: {
        changeTitle: function() {
            this.title = 'New Title'
            this.$refs.heading.style.color = 'green'
            console.log(document.querySelector('h1'))
        }
    }
});